const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url).then((response) => response.json()) // acessando o pokemon, convertendo lista e retornando os detalhes em JSON
}

pokeApi.getPokemons = (offset = 0, limit = 6) => {
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