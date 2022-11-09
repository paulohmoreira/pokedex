const pokeApi = {}

// Requisição detalhes dos pokemons
pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json()) // acessando o pokemon, convertendo lista e retornando os detalhes em JSON
    .then(convertPokeApiToPokemon)
}

// Requisição lista de pokemons
pokeApi.getPokemons = (offset = 0, limit = 20) => {
  // Endpoint da API
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  // Fazendo a requisição à API para pegar nome e url e retornando os resultados
  return fetch(url) // Buscando a lista de pokemons
    .then((response) => response.json()) // Convertendo o retorno da lista para JSON
    .then((responseJson) => responseJson.results) // Pegando a lista em JSON e retornando apenas os 'results' (name, url)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // mapeando a lista em uma lista de requisições para os detalhes do pokemon
    .then((detailRequests) => Promise.all(detailRequests)) // Esperando que todas as requisições terminem
    .then((pokemonsDetails) => pokemonsDetails) // Retornando a lista completa com detalhes dos pokemons
    .catch((error) => console.error(error))
}

// Convertendo resultado da requisição de detalhes para o pokemon-model
function convertPokeApiToPokemon(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.number = pokeDetail.order;
  pokemon.name = pokeDetail.name;
  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  // Pegando tipo principal, [type] é o nome da váriavel que vai receber o primeiro item do array types
  const [type] = types;
  pokemon.types = types;
  pokemon.type = type;
  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

  return pokemon;
}