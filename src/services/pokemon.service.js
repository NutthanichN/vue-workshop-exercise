import axios from 'axios';

export const getPokemonImgByName = (name) =>
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(({ data }) => data.sprites.front_default);

export const getPokemonsImg = async (name) => {
  const { data } = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=100'
  );
  const getImgs = data.results.map((value) => axios.get(value.url));
  const fetchResult = await Promise.all(getImgs);
  return fetchResult.map(({ data }) => data.sprites.front_default);
};
