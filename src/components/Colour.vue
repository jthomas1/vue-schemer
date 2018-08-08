<template lang="html">

<div class="colour"
     v-bind:style="{ 'background-color': rgbHex, color: textColour }">
  <p>{{ rgbHex }}</p>
  <Slider
    :initial="red"
    v-on:slider-update="setColour('red', $event)">
  </Slider>
  <Slider
    :initial="green"
    v-on:slider-update="setColour('green', $event)">
  </Slider>
  <Slider
    :initial="blue"
    v-on:slider-update="setColour('blue', $event)">
  </Slider>
  <button v-on:click="generateColour()">Random</button>
</div>

</template>

<script lang="js">
import Slider from './Slider.vue';

export default  {
    name: 'colour',
    props: [],
    components: {
        Slider
    },
    mounted() {
        this.generateColour();
    },
    data() {
        return {
            red: 0,
            green: 0,
            blue: 0
        }
    },
    methods: {
        setColour(which, value) {
            this[which] = parseInt(value);
        },
        random(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        },
        generateColour() {
            this.red = this.random(0,255);
            this.green = this.random(0,255);
            this.blue = this.random(0,255);
        },
        dec2Hex(dec) {
            let hex = dec.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        },
        /*
         * brightness  = sqrt( .299*R2 + .587*G2 + .114*B2 );
         * from here: alienryderflex.com/hsp.html
         */
        brightness(red, green, blue) {
            return Math.round(
                Math.sqrt(
                    Math.pow(red, 2) * 0.299 +
                        Math.pow(green, 2) * 0.587 +
                        Math.pow(blue, 2) * 0.114
                )
            );
        }
    },
    computed: {
        rgbHex() {
            return `#${this.dec2Hex(this.red)}${this.dec2Hex(this.green)}${this.dec2Hex(this.blue)}`
        },
        textColour() {
            return this.brightness(this.red, this.green, this.blue) > 125 ? 'black' : 'white'
        }
    }
}
</script>

<style>
  .colour {
     flex: 1;
  }
</style>
