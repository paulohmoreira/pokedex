const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  // Endpoint da API
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  // Fazendo a requisição à API para pegar nome e url e retornando os resultados
  return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => responseJson.results)
    .catch((error) => console.error(error))

}