const creaturesURL = "http://localhost:3000/creatures/"
const creatureCard = document.querySelector("#creature-container")

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

export {renderCreature}