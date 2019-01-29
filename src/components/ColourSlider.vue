<template lang="html">

  <div class="slider">
    <span class="current-value">{{value}}</span>
    <input
        type="range"
        min="0"
        max="255"
        v-model="value"
    />
  </div>

</template>

<script lang="js">
export default  {
    name: 'slider',
    props:  ["colour"],
    computed: {
        value: {
            get() {
                return this.colour
            },
            set(value) {
                this.$emit('updated', value)
            }
        }
    }
}

</script>

<style scoped>
  .slider {

  }
</style>
