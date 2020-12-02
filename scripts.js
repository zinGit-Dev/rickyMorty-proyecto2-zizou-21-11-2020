


        function drawCard(characters) {

            characters.forEach((character) => {
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
                            <div>  <a href="character.html?id=${character.id}" target="_blank">++</a></div>
                        
            
                            `
                rickyMortyContainer.append(rickyMortyDiv)
            });


        }



        let characterUrl = 'https://rickandmortyapi.com/api/character';

        function getCharacters() {


            return fetch(characterUrl)
                .then((res) => res.json())
                .then((apiData) => {
                    characterUrl = apiData.info.next
                    const formattedCharacters = apiData.results.map((ele) => {
                        return {
                            id: ele.id,
                            name: ele.name,
                            status: ele.status,
                            species: ele.species,
                            gender: ele.gender,
                            location: {
                                name: ele.location.name
                            },

                            image: ele.image,
                        }
                    });
                    return formattedCharacters
                })
        }

        // const characters = getCharacters();
        getCharacters()
            .then(characters => {
                console.log(characters)
                drawCard(characters)
            })


        // const characters = getCharacters();

        // drawCard(characters)

        function handleLoadButton() {
            getCharacters()
                .then(characters => {
                    console.log(characters)
                    drawCard(characters)
                })
        }

        const load= document.querySelector("#load")
        load.addEventListener("click",handleLoadButton)


