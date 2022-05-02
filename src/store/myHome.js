import { recommendMusicApi, hotMusicApi } from '@/api'
export default {
    state: {
        remengedan: [],
        zuixinyinyue: []
    },
    mutations: {
        REMENGEDAN(state, val) {
            state.remengedan = val
        },
        ZUIXINYINYUE(state, val) {
            state.zuixinyinyue = val
        }
    },
    actions: {
        async rementuijiangequ({ commit }) {
            let { data: res } = await recommendMusicApi({ limit: 6 })
            commit('REMENGEDAN', res.result)
        },

        async huoquzuixinyinyue({ commit }) {
            let { data: res } = await hotMusicApi({ limit: 20 })
            commit('ZUIXINYINYUE', res.result)
        }
    },
    getters: {}
}