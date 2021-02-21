import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isMenuVisible: false,
        user: null,
    },
    plugins: [
        createPersistedState({
            storage: {
                getItem: (key) => Cookies.get(key),
                setItem: (key, value) =>
                    Cookies.set(key, value, { expires: 3, secure: false }),
                removeItem: (key) => Cookies.remove(key),
            },
        }),
    ],
    mutations: {
        setUser(state, user) {
            state.user = user;
            if (user) {
                axios.defaults.headers.common["Authorization"] = `bearer ${user.token}`
                localStorage.getItem(axios.defaults.headers.common["Authorization"])
                state.isMenuVisible = true;

            } else {
                delete axios.defaults.headers.common["Authorization"];
                state.isMenuVisible = false;
            }
        },

    }
})