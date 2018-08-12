<template lang="html">

<div class="colour"
     v-bind:style="{ 'background-color': rgbHex, 'colour': textColour }">
  <p>{{ rgbHex }}</p>
  <ColourSlider
    :colour="red"
    @sliderUpdated="setColourValue({ red: $event })">
  </ColourSlider>
  <ColourSlider
    :colour="green"
    @sliderUpdated="setColourValue({ green: $event })">
  </ColourSlider>
  <ColourSlider
    :colour="blue"
    @sliderUpdated="setColourValue({ blue: $event })">
  </ColourSlider>
  <button @click="randomise">Random</button>
</div>

</template>

<script lang="js">
import ColourSlider from './ColourSlider.vue';
import { rgbHex, textColour } from '../services/colour.service';

export default  {
    name: 'ColourBar',
    props: ['colour'],
    components: {
        ColourSlider
    },
    computed: {
        rgbHex() {
            return rgbHex(this.red, this.green, this.blue);
        },
        textColour() {
            return textColour(this.red, this.green, this.blue)
        },
        red() {
            return parseInt(this.colour.rgb.red);
        },
        green() {
            return parseInt(this.colour.rgb.green);
        },
        blue() {
            return parseInt(this.colour.rgb.blue);
        }
    },
    methods: {
        setColourValue(updatedValue) {
            this.$store.commit({
                type: 'updateColour',
                id: this.colour.id,
                updatedValue
            });
        },
        randomise() {
            this.$store.commit('randomiseColour', this.colour.id);
        }
    }
}
</script>

<style>
  .colour {
     flex: 1;
  }
</style>
