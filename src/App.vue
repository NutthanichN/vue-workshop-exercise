<template>
  <div class="container">
    <div class="title">Pokedex</div>

    <div class="pokemon-list">
      <img :src="pokemonImg" width="100" height="100" />
    </div>

    <div v-for="img in pokemonImgs" class="pokemon-list">
      <img :src="img" width="100" height="100" />
    </div>
  </div>
</template>

<script>
import {
  getPokemonImgByName,
  getPokemonsImg,
} from './services/pokemon.service';

export default {
  name: 'App',
  data() {
    return {
      pokemonImg: '',
      pokemonImgs: [],
    };
  },
  mounted() {
    getPokemonImgByName('ditto').then((data) => {
      console.log(data);
      this.pokemonImg = data;
    });

    // [Hint]: Get Pokemon Images
    getPokemonsImg().then((data) => {
      console.log(data);
      this.pokemonImgs = data;
    });
  },
};
</script>

<style>
* {
  font-family: sans-serif;
}

.container {
  max-width: 1024px;
  margin: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.title {
  font-size: 1.5rem;
  text-align: center;
}

.pokemon-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>
