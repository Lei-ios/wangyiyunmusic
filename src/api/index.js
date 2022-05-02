import { recommendMusic, hotMusic } from '@/api/Home'
import { hotSearch, searchResolt } from '@/api/Search'
import { getSongById, getLyricById } from '@/api/Play'
export const recommendMusicApi = recommendMusic
export const hotMusicApi = hotMusic
export const hotSearchApi = hotSearch
export const searchResoltApi = searchResolt

export const getSongByIdAPI = getSongById
export const getLyricByIdAPI = getLyricById