// add pokemon value
var newPokemonList = pokemons.slice(0, 40)

// add Body add bg-warning 
var elBody = document.querySelector("body");
elBody.classList.add("bg-warning")

// create div for logo
var newDivIMG = document.createElement("div");
newDivIMG.setAttribute("class", "text-center");
elBody.appendChild(newDivIMG);

// create logo
var newLogo = document.createElement("img")
newLogo.setAttribute("src", "./img/pokemon_logo.png")
newLogo.setAttribute("alt", "pokemon")
newLogo.setAttribute("width", "350px")
newLogo.setAttribute("class", "mt-1  mb-5")
newDivIMG.appendChild(newLogo)

// create ul 
var newList = document.createElement("ul");
newList.setAttribute("class", "container row gap-5 overflow-hidden list-unstyled");
elBody.appendChild(newList);

function renderPokemon(array, place) {
    
    for (var item of newPokemonList) {
        
        //create li
        var newItem = document.createElement("li");
        newItem.setAttribute("class", "col-2 text-center rounded-2 bg-white")
        newItem.style.width
        newList.appendChild(newItem);
        
        // create hero img
        var newHero = document.createElement("img")
        newHero.setAttribute("src", `http://www.serebii.net/pokemongo/pokemon/${item.num}.png`)
        newHero.setAttribute("alt", "hero");
        newHero.setAttribute("class", "mb-2");
        newItem.appendChild(newHero);
        
        // create hero name
        var newHeading = document.createElement("h3");
        newItem.appendChild(newHeading)
        newHeading.textContent = item.name
        newHeading.setAttribute("class", "mb-2")
        
        // create hero type
        var newType = document.createElement("h5")
        newItem.appendChild(newType)
        newType.textContent = item.type
        newType.setAttribute("class", "mb-2")
        
        // create hero weight
        var newWeight = document.createElement("h5")
        newItem.appendChild(newWeight)
        newWeight.textContent = item.weight
        newWeight.setAttribute("class", "mb-2")
        
        // create hero height
        var newHeight = document.createElement("h5")
        newItem.appendChild(newHeight)
        newHeight.textContent = item.height
        newHeight.setAttribute("class", "mb-2")
        
    }
    
}

console.log(renderPokemon(newPokemonList, elBody));