const plantsURL = "http://localhost:3000/plants"
const plantsContainer = document.querySelector(".plants-container")

function renderPlant(plant){
    const plantDiv = document.createElement("div")
    
    plantDiv.className = "plant-card"
    plantDiv.innerHTML = `
    <h2 class="plant-name">${plant.name}</h2>
    <div class="front-plant">
    <img src="${plant.image}" class="plant-image">
    </div>
    `
    plantsContainer.append(plantDiv)
}

export {renderPlant}