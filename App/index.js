import * as Creatures from '../Creatures/creatures.js'
import * as Language from '../Language/language.js'

const creaturesURL = "http://localhost:3000/creatures/"

fetch(creaturesURL)
    .then(response => response.json())
    .then(creatures => creatures.forEach(Creatures.renderCreature))

// CREATURES RIGHT AND LEFT SCROLL BUTTON

const next = document.querySelector("#next")
const prev = document.querySelector("#prev")

function handleScrollNext(direction){
    const cards = document.querySelector(".creature-container")
    cards.scrollLeft = cards.scrollLeft += window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100
}

function handleScrollPrev(direction){
    const cards = document.querySelector(".creature-container")
    cards.scrollLeft = cards.scrollLeft -= window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100
}

next.addEventListener('click', handleScrollNext)
prev.addEventListener('click', handleScrollPrev)

// CREATURES END RIGHT AND LEFT SCROLL BUTTON

// START OF NA'VI LANGUAGE ENDPOINT

const languageAPI = "http://localhost:3000/languages/"

fetch(languageAPI)
    .then(response => response.json())
    .then(languages => languages.forEach(Language.renderLanguage))

// LANGUAGE RIGHT AND LEFT SCROLL BUTTON

const languageNext = document.querySelector("#languagenext")
const languagePrev = document.querySelector("#languageprev")

function handleScrollLanguageNext(direction){
    const cards = document.querySelector(".language-container")
    cards.scrollLeft = cards.scrollLeft += window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100
}

function handleScrollLanguagePrev(direction){
    const cards = document.querySelector(".language-container")
    cards.scrollLeft = cards.scrollLeft -= window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100
}

languageNext.addEventListener('click', handleScrollLanguageNext)
languagePrev.addEventListener('click', handleScrollLanguagePrev)

// END OF NAVI LANGUAGE ENDPOINT

// START OF PLANTS ENDPOINT

const plantsURL = "http://localhost:3000/plants"
const plantsContainer = document.querySelector(".plants-container")

fetch(plantsURL)
    .then(response => response.json())
    .then(plants => plants.forEach(renderPlant))

function renderPlant(plant){
    const plantDiv = document.createElement("div")
    
    plantDiv.className = "plant-card"
    plantDiv.innerHTML = `
    <h2>${plant.name}</h2>
    <div class="front-plant">
    <img src="${plant.image}" class="plant-image">
    </div>
    <p>GIVE IT:
    <button class="plant-button">Water</button>
    <button class="plant-button">Sun</button>
    <button class="plant-button">Air</button>
    </p>
    `
    plantsContainer.append(plantDiv)
}

const plantNext = document.querySelector("#plantsnext")
const plantPrev = document.querySelector("#plantsprev")

function handleScrollPlantNext(direction){
    const cards = document.querySelector(".plants-container")
    cards.scrollLeft = cards.scrollLeft += window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100
}

function handleScrollPlantPrev(direction){
    const cards = document.querySelector(".plants-container")
    cards.scrollLeft = cards.scrollLeft -= window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100
}

plantNext.addEventListener('click', handleScrollPlantNext)
plantPrev.addEventListener('click', handleScrollPlantPrev)

 // END OF PLANTS ENDPOINT

 // START OF REGIONS ENDPOINT

const regionsAPI = "http://localhost:3000/regions"
const regionsContainer = document.querySelector(".regions-container")

fetch(regionsAPI)
    .then(response => response.json())
    .then(regions => regions.forEach(renderRegion))

function renderRegion(region){
    const regionDiv = document.createElement("div")

    regionDiv.className = "region-card"
    regionDiv.innerHTML = `
    <div class="regions-front">
        <h2>${region.region}</h2>
        <img src="${region.region_image}" class="region-image">
        <h3>Clan(s): ${region.clan}</h3>
    </div>
    <div class="regions-back">
        <h2>${region.region}: Creatures and Plants</h2>
        <p>${region.creature.name}</p>
        <img src="${region.creature.image}" id="region-resource">
        <p>${region.plant.name}</p>
        <img src="${region.plant.image}" id="region-resource">
    </div>
    `
    regionsContainer.append(regionDiv)
}

const regionNext = document.querySelector("#regionsnext")
const regionPrev = document.querySelector("#regionsprev")

function handleScrollRegionNext(direction){
    const cards = document.querySelector(".regions-container")
    cards.scrollLeft = cards.scrollLeft += window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100
}

function handleScrollRegionPrev(direction){
    const cards = document.querySelector(".regions-container")
    cards.scrollLeft = cards.scrollLeft -= window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100
}

regionNext.addEventListener('click', handleScrollRegionNext)
regionPrev.addEventListener('click', handleScrollRegionPrev)

// END OF REGIONS ENDPOINT
