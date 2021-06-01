const regionsContainer = document.querySelector(".regions-container")

function renderRegion(region){
    const regionDiv = document.createElement("div")

    regionDiv.className = "region-card"
    regionDiv.innerHTML = `
    <div class="regions-front">
        <h2 class="region-name">${region.region}</h2>
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

export {renderRegion}