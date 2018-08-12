<template>
    <div id="app">
        <ControlPanel />
        <ColourBar
            v-for="(colour, index) in this.$store.getters.getColours"
            :key="index"
            :colour="colour"
        />
    </div>
</template>


<script>
    import ColourBar from './components/ColourBar.vue';
    import ControlPanel from './components/ControlPanel';

    export default {
        name: 'app',
        components: {
            ColourBar,
            ControlPanel
        },
        mounted() {
            this.$store.commit('addColour');

            window.addEventListener('keyup', function(event) {
                console.log('hello keypress!', event);
                if (event.which === 32) {
                    this.$store.commit('randomiseAll');
                }
            }.bind(this));
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
