<template>
    <div class="control-panel floating-controls">
        <ColourCounter />
    </div>
</template>

<script>
    import ColourCounter from './ColourCounter';

    export default {
        name: "ControlPanel",
        components: {
            ColourCounter
        }
    }
</script>

<style scoped>
    .floating-controls {
        position: absolute;
        top: 10px;
        left: 10px;
    }
</style>
