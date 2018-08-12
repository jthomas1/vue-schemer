<template lang="html">

    <div class="colour" :style="{ 'background-color': hex, 'color': textColour }">
        <div class="controls">
            <p>{{ hex }}</p>
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
        computed: {
            hex() {
                return this.colour.hex;
            },
            textColour() {
                return textColour(this.colour.rgb)
            },
            red() {
                return this.colour.rgb.red;
            },
            green() {
                return this.colour.rgb.green;
            },
            blue() {
                return this.colour.rgb.blue;
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
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
</style>
