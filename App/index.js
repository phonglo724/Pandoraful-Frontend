import * as Creatures from '../Creatures/creatures.js'
import * as Language from '../Language/language.js'
import * as Plants from '../Plants/plants.js'
import * as Regions from '../Regions/regions.js'

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

// END OF CREATURES ENDPOINT

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

fetch(plantsURL)
    .then(response => response.json())
    .then(plants => plants.forEach(Plants.renderPlant))

// PLANTS RIGHT AND LEFT SCROLL BUTTONS

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

fetch(regionsAPI)
    .then(response => response.json())
    .then(regions => regions.forEach(Regions.renderRegion))

// REGIONS LEFT AND RIGHT SCROLL BUTTON

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
