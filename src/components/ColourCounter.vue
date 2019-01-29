<template>
    <div class="floating-controls">
        <label for="count">Count </label>
        <input
          name="count"
          type="number"
          min="1"
          v-model="value"
          @change="$emit('update', value)"
        />
    </div>

</template>

<script>
    export default {
        name: "ColourCounter",
        props: ['colourCount'],
        data() {
            return {
                value: this.colourCount
            }
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
