// Váriáveis para controle de paginação
const offset = 0;
const limit = 10;

// Endpoint da API
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

// Pegando a lista de pokemons (nome e url)
fetch(url)
  .then((response) => response.json())
  .then((responseJson) => console.log(responseJson))
  .catch((error) => console.error(error))
