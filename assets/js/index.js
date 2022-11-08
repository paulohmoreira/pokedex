const pokemonList = document.getElementById("pokemonList");

// Pegando a lista de pokemons (nome e url)
pokeApi.getPokemons().then((pokemons = []) => {
  // Percorrendo a lista e retornando outra convertida para html
  // E também transformando o array em uma só váriavel com o join para concatenar o html e renderizar de uma vez no DOM
  const newHtml = pokemons.map(convertPokemonToLi).join('');
  pokemonList.innerHTML = newHtml;
})
.catch((error) => console.error(error))


// Convertendo a lista de pokemon em json para html
function convertPokemonToLi(pokemon) {
  return `
  <li class="pokemon">
    <span class="number">#${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
      <ol class="types">
        ${convertPokemonTypesToLi(pokemon.types).join("")}
      </ol>
      <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
    </div>
  </li>
  `
}

// Convertendo a lista de types do pokemon para html
function convertPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}