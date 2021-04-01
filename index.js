
const creaturesURL = "http://localhost:3000/creatures/"
const creatureCard = document.querySelector("#creature-container")

fetch(creaturesURL)
    .then(response => response.json())
    .then(creatures => creatures.forEach(renderCreature))

function renderCreature(creature){
    const div = document.createElement("div")
    const imageDiv = document.createElement("div")
    const contentDiv = document.createElement("div")
    const creatureName = document.createElement("h2")
    const creatureImage = document.createElement("img")
    const creatureHabitat = document.createElement("h3")
    const creatureFeedCount = document.createElement("p")
    const creatureFeedButton = document.createElement("button")
    
    div.className = "creature-card"
    imageDiv.className = "img-div"
    contentDiv.className = "content-div"
    creatureName.textContent = creature.name 
    creatureName.classList.add("creature-name")
    creatureImage.src = creature.image 
    creatureImage.classList.add("creature-image")
    creatureHabitat.textContent = `Habitat: ${creature.habitat}` 
    creatureHabitat.classList.add("creature-habitat")
    creatureFeedCount.textContent = `Fed ${creature.feed} time(s)` 
    creatureFeedCount.classList.add("feed-count")
    creatureFeedButton.innerText = "Feed me: 🍖🍃"
    creatureFeedButton.classList.add("feed-creature-button")
    
    imageDiv.append(creatureName, creatureImage)
    contentDiv.append(creatureHabitat, creatureFeedCount, creatureFeedButton)
    div.append(imageDiv, contentDiv)
    creatureCard.append(div)
    
    creatureFeedButton.addEventListener('click', (event) => {
        creature.feed++
        creatureFeedCount.textContent = `Fed ${creature.feed} time(s)`
        
        fetch(creaturesURL + creature.id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                feed: creature.feed
            })
        })
    })
}

// RIGHT AND LEFT SCROLL BUTTON

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

// END RIGHT AND LEFT SCROLL BUTTON

// START OF NA'VI LANGUAGE ENDPOINT

const languageAPI = "http://localhost:3000/languages/"
const languageCard = document.querySelector(".language-container")

fetch(languageAPI)
    .then(response => response.json())
    .then(languages => languages.forEach(renderLanguage))

function renderLanguage(language){
    const languageFirstDiv = document.createElement("div")
    const deleteButton = document.createElement("button")

    languageFirstDiv.className = "language-card"
    languageFirstDiv.innerHTML = `
    <h3>${language.english}</h3>
    <h4>Navi Translation: <br> ${language.navi}</h4>
    <p>Pronunciation: <br> ${language.pronunciation}</p>
    `
    deleteButton.className = "delete-button"
    deleteButton.textContent = `REMOVE FROM LIST`
    deleteButton.addEventListener('click', (event) => {
        languageFirstDiv.remove()

        fetch(languageAPI + language.id, {
            method: "DELETE"
        })
    })

    languageFirstDiv.append(deleteButton)
    languageCard.append(languageFirstDiv)
}

const languageForm = document.querySelector(".language-form")

languageForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const english = formData.get('english')
    const navi = formData.get('navi')
    const pronunciation = formData.get('pronunciation')

    const newLanguageDiv = document.createElement('div')
    newLanguageDiv.innerHTML = `
    <h3>${english}</h3>
    <h4>Navi Translation: <br> ${navi}</h4>
    <p>Pronunciation: <br> ${pronunciation}</p>
    <button class="delete-button">REMOVE FROM LIST</button>
    `

    languageCard.append(newLanguageDiv)

    fetch(languageAPI, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            english,
            navi,
            pronunciation
        })
    })
})

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

const plantsAPI = "http://localhost:3000/plants"
const plantsContainer = document.querySelector(".plants-container")

fetch(plantsAPI)
    .then(response => response.json())
    .then(plants => plants.forEach(renderPlant))

function renderPlant(plant){
    const plantDiv = document.createElement("div")
    
    plantDiv.className = "plant-card"
    plantDiv.innerHTML = `
    <h2>${plant.name}</h2>
    <img src="${plant.image}" class="plant-image"><br>
    <button class="plants-button">Give it 💦</button>
    <button class="plants-button">Give it ☀️</button>
    <button class="plants-button">Give it 🌱</button>
    <button class="plants-button">Give it 🌬️</button>
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
        <p>${region.creature.name}</p><br>
        <img src="${region.creature.image}" class="creature-image">
        <p>${region.plant.name}</p><br>
        <img src="${region.plant.image}" class="plant-image">
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
