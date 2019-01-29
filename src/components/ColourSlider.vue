<template lang="html">

  <div class="slider">
    <span class="current-value">{{value}}</span>
    <input
        type="range"
        min="0"
        max="255"
        v-model="value"
        @input="$emit('updated', value)"
    />
  </div>

</template>

<script lang="js">
export default  {
    name: 'slider',
    props:  ["colour"],
    data() {
        return {
            value: this.colour
        }
    }
}

</script>

<style scoped>
  .slider {

  }
</style>
