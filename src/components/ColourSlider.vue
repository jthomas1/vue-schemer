<template lang="html">

  <div class="slider">
    <span class="current-value">{{selectedColour}}</span>
    <input
        type="range"
        min="0"
        max="255"
        :value="selectedColour"
        @input="emitSelectedColour"
    />
  </div>

</template>

<script lang="js">
export default  {
    name: 'slider',
    props:  ["colour"],
    computed: {
        selectedColour() {
            return this.colour;
        }
    },
    methods: {
        emitSelectedColour(event) {
            this.$emit('sliderUpdated', event.target.value)
        }
    }
}

</script>

<style scoped>
  .slider {

  }
</style>
