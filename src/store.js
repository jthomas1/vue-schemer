import Vue from 'vue'
import Vuex from 'vuex'
import { generateColour, rgbHex } from "./services/colour.service";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        colours: []
    },
    getters: {
        getColourCount(state) {
            return state.colours.length;
        },
        getColours(state) {
            return state.colours;
        }
    },
    mutations: {
        addColour(state) {
            const colour = generateColour();
            state.colours.push(
                Object.assign({ id: state.colours.length + 1 }, colour)
            );
        },
        removeColour(state) {
            state.colours.pop();
        },
        randomiseColour(state, id) {
            const colour = state.colours.find(c => c.id === id);
            Object.assign(colour, generateColour())
        },
        updateColour(state, params) {
            const colour = state.colours.find(c => c.id === params.id);
            Object.assign(colour.rgb, params.updatedValue);
            colour.hex = rgbHex(colour.rgb);
        }
    },
    actions: {

    }
})
