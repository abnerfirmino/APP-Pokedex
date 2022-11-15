
function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

// Função que converte cada item da lista de PoKemons em HTML
function convertPokemonToLi(pokemon) {
    let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${name}</span>

            <div class="detail">
                <ol class="types">
                    ${convertPokemonTypesToLi(pokemon.types).join('')}
                </ol>

                <img src="${pokemon.sprites.other.dream_world.front_default}"
                    alt="${name}">
            </div>
        </li>
    `
}

// lista de pokemons
const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {

    pokemonList.innerHTML += pokemons.map((pokemon) => convertPokemonToLi(pokemon))
        .join('')
})
