const languageAPI = "http://localhost:3000/languages/"
const languageCard = document.querySelector(".language-container")

function renderLanguage(language){
    const languageFirstDiv = document.createElement("div")
    const deleteButton = document.createElement("button")

    languageFirstDiv.className = "language-card"
    languageFirstDiv.innerHTML = `
    <h3 class="language-english-title">${language.english}</h3>
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
    const newDeleteButton = document.createElement('button')
    newLanguageDiv.className = "language-card"
    newLanguageDiv.innerHTML = `
    <h3>${english}</h3>
    <h4>Navi Translation: <br> ${navi}</h4>
    <p>Pronunciation: <br> ${pronunciation}</p>
    `
    
    newDeleteButton.className = "delete-button"
    newDeleteButton.textContent = `REMOVE FROM LIST`
    newDeleteButton.addEventListener('click', (event) => {
        newLanguageDiv.remove()

        fetch(languageAPI + language.id, {
            method: "DELETE"
        })
    })

    newLanguageDiv.append(newDeleteButton)
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

export {renderLanguage}