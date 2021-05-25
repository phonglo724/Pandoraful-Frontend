const plantsURL = "http://localhost:3000/plants"
const plantsContainer = document.querySelector(".plants-container")

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

export {renderPlant}