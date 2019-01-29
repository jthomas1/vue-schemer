<template>
    <div id="app">
        <ControlPanel v-on:add-colour="addColour" v-on:remove-colour="removeColour"></ControlPanel>
        <ColourBar
            v-for="(colour, index) in colours"
            :key="index"
            :colour="colour"
        />
    </div>
</template>


<script>
    import ColourBar from './components/ColourBar.vue';
    import ControlPanel from './components/ControlPanel';
    import { generateColour } from './services/colour.service';

    export default {
        name: 'app',
        components: {
            ColourBar,
            ControlPanel
        },
        data() {
            return {
                colours: [
                    generateColour()
                ],
            }
        },
        mounted() {
            window.addEventListener('keyup', function(event) {
                if (event.which === 32) {
                    this.$store.commit('randomiseAll');
                }
            }.bind(this));
        },
        methods: {
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
