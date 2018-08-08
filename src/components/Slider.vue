<template lang="html">

  <div class="slider">
    <span class="current-value">{{colour}}</span>
    <input type="range" min="0" max="255" v-model="colour" />
  </div>

</template>

<script lang="js">
export default  {
    name: 'slider',
    props:  ["initial"],
    mounted() {
    },
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
        colour: {
            get() {
                return this.initial;
            },
            set(val) {
                this.$emit('slider-update', val)
        }
    }
    }
}
</script>

<style scoped>
  .slider {

  }
</style>
