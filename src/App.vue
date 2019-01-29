<template>
    <div id="app">
        <ColourCounter :colour-count="colourCount" @update="updateCount($event)"></ColourCounter>
        <ColourBar
            v-for="colour in colours"
            :key="colour.id"
            :colour="colour"
        />
    </div>
</template>


<script>
    import ColourBar from './components/ColourBar.vue';
    import ColourCounter from './components/ColourCounter';
    import { generateColour } from './services/colour.service';

    export default {
        name: 'app',
        components: {
            ColourBar,
            ColourCounter
        },
        data() {
            return {
                colours: [
                    generateColour()
                ],
            }
        },
        computed: {
            colourCount() {
                return this.colours.length;
            }
        },
        mounted() {
            window.addEventListener('keyup', function(event) {
                console.log('hello keypress!', event);
                if (event.which === 32) {
                    this.$store.commit('randomiseAll');
                }
            }.bind(this));
        },
        methods: {
            updateCount(value) {
                if (value > this.colourCount) {
                    this.addColour();
                }

                if (value < this.colourCount) {
                    this.removeColour();
                }

                this.colourCount = value;
            },
            addColour() {
                const colour = generateColour();
                this.colours.push(
                  Object.assign({ id: this.colours.length + 1 }, colour)
                );
            },
            removeColour() {
                this.colours.pop();
            }
        }
    }
</script>

<style>
    html, body {
        margin: 0;
        padding: 0;
        height: 100vh;
        max-height: 100vh;
        overflow-y: hidden;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

        margin: 0;
        padding: 0;

        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: row;

        position: relative;
    }
</style>
