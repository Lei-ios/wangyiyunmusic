import Vue from 'vue'
import Vuex from 'vuex'
import myHome from './myHome'
import mySearch from './mySearch'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        myHome,
        mySearch
    }
})