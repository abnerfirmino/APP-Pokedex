
// Função que converte cada item da lista de PoKemons em HTML
function convertPokemonToLi(pokemon) {
    let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
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
