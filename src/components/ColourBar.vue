<template lang="html">

    <div class="colour" :style="{ 'background-color': hex, 'color': textShade }">
        <div class="controls">
            <p>{{ hex }}</p>
            <ColourSlider
                :colour="red"
                @updated="setColourValue({ red: parseInt($event) })">
            </ColourSlider>
            <ColourSlider
                :colour="green"
                @updated="setColourValue({ green: parseInt($event) })">
            </ColourSlider>
            <ColourSlider
                :colour="blue"
                @updated="setColourValue({ blue: parseInt($event) })">
            </ColourSlider>
            <button @click="randomise">Random</button>
        </div>

    </div>

</template>

<script lang="js">
    import ColourSlider from './ColourSlider.vue';
    import { textColour, rgbHex, generateColour } from '../services/colour.service';

    export default {
        name: 'ColourBar',
        props: ['colour'],
        components: {
            ColourSlider
        },
        data() {
            return {
                hex: this.colour.hex,
                red: this.colour.rgb.red,
                green: this.colour.rgb.green,
                blue: this.colour.rgb.blue,
                textShade: textColour(this.colour.rgb)
            }
        },
        methods: {
            setColourValue(updatedValue) {
                const updatedRgb = Object.assign(this.colour.rgb, updatedValue);
                const updated = {
                    hex: rgbHex(updatedRgb),
                    rgb: updatedRgb
                };
                Object.assign(this, updatedRgb);
                this.hex = updated.hex;
            },
            randomise() {
                const randomRgb = generateColour();
                Object.assign(this, randomRgb.rgb);
                this.hex = randomRgb.hex
            }
        }
    }
</script>

<style>
    .colour {
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
</style>
