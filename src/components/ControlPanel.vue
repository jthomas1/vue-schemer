<template>
    <div class="control-panel floating-controls">
        <button @click="$emit('add-colour')">Add</button>
        <button @click="$emit('remove-colour')">Remove</button>
    </div>
</template>

<script>
    export default {
        name: "ControlPanel"
    }
</script>

<style scoped>
    .floating-controls {
        position: absolute;
        top: 10px;
        left: 10px;
    }
</style>
