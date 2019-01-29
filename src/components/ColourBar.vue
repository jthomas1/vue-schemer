<template lang="html">

    <div class="colour" :style="{ 'background-color': hex, 'color': textShade }">
        <div class="controls">
            <p>{{ hex }}</p>
            <ColourSlider
                :colour="colour.rgb.red"
                @sliderUpdated="setColourValue({ red: $event })">
            </ColourSlider>
            <ColourSlider
                :colour="colour.rgb.green"
                @sliderUpdated="setColourValue({ green: $event })">
            </ColourSlider>
            <ColourSlider
                :colour="colour.rgb.blue"
                @sliderUpdated="setColourValue({ blue: $event })">
            </ColourSlider>
            <button @click="randomise">Random</button>
        </div>

    </div>

</template>

<script lang="js">
    import ColourSlider from './ColourSlider.vue';
    import {textColour} from '../services/colour.service';

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
                this.$emit('updated', Object.assign(this.colour, updatedValue));
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
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
</style>
