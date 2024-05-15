import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        notes: {},
    },
    mutations: {
        add_note(state, payload) {
            let { ts, title, content } = payload;
            state.notes[ts] = {
                'title': title,
                'content': content
            }
        },
        remove_note(state, payload) {
            delete state.notes[payload];
        }
    }
});