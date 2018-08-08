<template>
<div id="app">
  <input type="number" v-model="colourCount" />
  <div class="colour-container">
    <Colour v-for="n in componentCount" />
  </div>
  </div>
</template>

<script>
import Colour from './components/Colour.vue'

export default {
  name: 'app',
  components: {
    Colour
  },
    data() {
        return {
            colourCount: 1
        }
    },
    computed: {
        componentCount() {
            return this.colourCount;
        }
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
