// Váriáveis para controle de paginação
const offset = 0;
const limit = 10;

// Endpoint da API
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

const pokemonList = document.getElementById("pokemonList");

// Pegando a lista de pokemons (nome e url)
fetch(url)
  .then((response) => response.json())
  .then((responseJson) => responseJson.results)
  .then((pokemons) => {
    for (let i = 0; i < pokemons.length; i++) {
      pokemonList.innerHTML += convertPokemonToLi();
    }
  })
  .catch((error) => console.error(error))


// Convertendo a lista de pokemon em json para html
function convertPokemonToLi() {
  return `
  <li class="pokemon">
    <span class="number">#001</span>
    <span class="name">Bulbasaur</span>
    <div class="detail">
      <ol class="types">
        <li class="type">grass</li>
        <li class="type">poison</li>
      </ol>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Bulbasaur">
    </div>
  </li>
  `
}