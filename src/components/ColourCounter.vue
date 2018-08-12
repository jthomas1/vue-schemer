<template>
    <input
        type="number"
        min="1"
        :value="colourCount"
        @change="updateCount"
    />
</template>

<script>
    export default {
        name: "ColourCounter",
        computed: {
            colourCount() {
                return this.$store.getters.getColourCount;
            }
        },
        methods: {
            updateCount(event) {
                if (event.target.value > this.colourCount) {
                    this.$store.commit('addColour');
                } else {
                    this.$store.commit('removeColour')
                }
            }
        }
    }

</script>

<style scoped>

</style>
