import { hotSearchApi } from '@/api'

export default {
    state: {
        hotMusicList: []
    },
    mutations: {
        HOTMUSIC(state, val) {
            state.hotMusicList = val
        }
    },
    actions: {
        async hotSraechList({ commit }) {
            let { data: res } = await hotSearchApi()
            console.log(res.result.hots)
            commit('HOTMUSIC', res.result)
        }
    },
    getters: {}
}