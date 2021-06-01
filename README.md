# Pandoraful

## Table of contents
* [General info](#general-info)
* [Intro Video](#intro-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
Pandoraful is a full stack web application where users can discover the world of Pandora through creatures, plants, language, and regions.

## Intro Video
[Pandoraful on YouTube](https://www.youtube.com/watch?v=FCi1hzqJhkg)

## Technologies
* Ruby - version 2.6.6
* Rails - version 6.1.3
* JavaScript
* HTML & CSS

## Setup
To run this project on the FRONTEND, install it locally by cloning the GitHub repository and type the following in your command line:
```
lite-server
```

To run this project in the BACKEND, install it locally by cloning the GitHub repository and type the following in your command line:
```
bundle install
rails db:migrate
rails db:seed
rails s
```

## Code Examples
```HTML
<div class="bg-1">
    <nav class="topnav" id="myTopnav">
        <h1 class="home-title" id="pandoraful-home">PANDORAFUL</h1>
            <ul class="main-nav">
                <li>
                    <a href="#creature-page">Creatures</a>
                </li>
                <li>
                    <a href="#navi-language-page">Na'vi Language</a>
                </li>
                <li>
                    <a href="#plants-page">Plants</a>
                </li>
                <li>
                    <a href="#regions-page">Regions</a>
                </li>
            </ul>
    </nav>
    <div class="video">
        <iframe class="responsive-iframe" src="https://www.youtube.com/embed/GBGDmin_38E?controls=0&modestbranding=1&showinfo=0&fs=0&start=7&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>
```

```JavaScript
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
```

```CSS
.regions-front {
    position: relative;
    height: 20vh;
    backface-visibility: hidden;
    color: black;
    text-align: center;
    font-family: fantasy;
    transition: transform 0.6s;
}

.regions-back {
    position: absolute;
    left: 150px;
    right: 150px;
    top: 20px;
    height: 20vh;
    backface-visibility: hidden;
    color: black;
    transform: rotateY(180deg);
    text-align: center;
    font-family: fantasy;
}
```

## Features
* Scroll behavior throughout app has a smooth transition
* Feed creatures by a click of a button
* Submit your own English-Na'vi word to your list
* Remove English-Na'vi word from your list
* Scroll through creatures, languages, plants, and regions horizontally by clicking right or left buttons
* Region cards have a flip functionality to show which creatures and plants inhibit that region

## Status
Project is: 100% finished.

## Inspiration
The inspiration came from my love for the creativity and vibrate colors in the movie, Avatar. Plus, the upcoming movie to be released in December 2022: "Avatar 2: Return to Pandora"!

## Contact
Created by [Phong Lo](https://www.linkedin.com/in/phong-lo)

Feel free to contact me!!!
