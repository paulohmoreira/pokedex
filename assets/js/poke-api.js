const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  // Endpoint da API
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  // Fazendo a requisição à API para pegar nome e url e retornando os resultados
  return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => responseJson.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => {
      debugger
      console.log(pokemonsDetails)
    })
    .catch((error) => console.error(error))
}