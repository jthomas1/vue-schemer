<template lang="html">

  <div class="slider">
    <span class="current-value">{{selectedColour}}</span>
    <input type="range" min="0" max="255" v-model="selectedColour" />
  </div>

</template>

<script lang="js">
export default  {
    name: 'slider',
    props:  ["colour"],
    data() {
        return {
            selectedColour: this.colour
        }
    },
    updated() {
        this.emitSelectedColour();
    },
    methods: {
        emitSelectedColour() {
            this.$emit('sliderUpdated', this.selectedColour)
        }
    }
}

</script>

<style scoped>
  .slider {

  }
</style>
