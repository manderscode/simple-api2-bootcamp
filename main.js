document.querySelector('button').addEventListener('click', getPokemon)

function getPokemon() {
    let pokemon = document.querySelector('input').value
    let url= `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    fetch(url) 
    .then(res => res.json()) 
    .then(data => { 
    console.log(data)

    document.querySelector('img').src = data.sprites.front_default

    // // nested fetch
    // fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1`) 
    // .then(res => res.json()) 
    // .then(anime => { 
    // console.log(anime.data[0].anime_name)
    // document.querySelector('h2').innerText = data.anime_name
    // })


    })
    .catch(err => { 
        console.log(`error ${err}`)
    })

};
