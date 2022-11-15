
const pokeApi = {}


// retorna detalhes dos Pokemons
pokeApi.getPokemonDetails = async (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
}


// consumindo a API
pokeApi.getPokemons = async (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))
        .then((detailsRequests) => Promise.all(detailsRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}