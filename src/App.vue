<template>
<div id="app">
  <ColourCounter />
  <div class="colour-container">
    <ColourBar
        v-for="(colour, index) in this.$store.getters.getColours"
        :key="index"
        :colour="colour"
    />
  </div>
  </div>
</template>

<script>
import ColourBar from './components/ColourBar.vue';
import ColourCounter from './components/ColourCounter';

export default {
    name: 'app',
    components: {
        ColourBar,
        ColourCounter
    },
    mounted() {
        this.$store.commit('addColour');
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  margin: 0;
  padding: 0;

  height: 100vh;
}

.colour-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
}
</style>
