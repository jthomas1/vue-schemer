import Vue from 'vue'
import Vuex from 'vuex'
import  { generateRgb } from './services/colour.service.js';

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
            state.colours.push({
                id: state.colours.length + 1,
                rgb: generateRgb()
            })
        },
        removeColour(state) {
            state.colours.pop();
        },
        randomiseColour(state, id) {
            const colour = state.colours.find(c => c.id === id);
            colour.rgb = generateRgb();
        },
        updateColour(state, params) {
            const colour = state.colours.find(c => c.id === params.id);
            Object.assign(colour.rgb, params.updatedValue);
        }
    },
    actions: {

    }
})
