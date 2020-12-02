

function drawCard(character) {

    // characters.forEach((character) => {
        const rickyMortyContainer = document.querySelector("#allPageContainer")

        const rickyMortyDiv = document.createElement("div")

        rickyMortyDiv.className = "container"

        rickyMortyDiv.innerHTML = `
    
                   
                            
                    <div class="name">${character.name}</div>
                    <div class="aliveAndgender">${character.status}</div>
    
                    <div>
                    <img src="${character.image}" alt="${character.name}">
                    </div>
    
                    <div>Human</div>
                    <div class="aliveAndgender">${character.gender}</div>
    
                    <div>${character.location.name}</div>
                    <div>  <a href="character.html?id=${character.id}">++</a></div>
                  
    
                    `
        rickyMortyContainer.append(rickyMortyDiv)
    // });
}


// const characterURL = 'https://rickandmortyapi.com/api/character'

function getSingleCharacter() {

    const id = new URLSearchParams(window.location.search).get('id');
    
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    return fetch(url)
        .then((res) => res.json())
        .then((apiData) => {
            console.log(apiData)
               drawCard(apiData)
            });
        
}
getSingleCharacter()