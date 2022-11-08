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
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
      <ol class="types">
        <li class="type">grass</li>
        <li class="type">poison</li>
      </ol>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
    </div>
  </li>
  `
}