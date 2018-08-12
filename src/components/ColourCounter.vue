<template>
    <input
        type="number"
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
                console.log(event.target.value);
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
