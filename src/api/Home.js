import request from '@/utils/request'

export const recommendMusic = params =>
    request({
        url: '/personalized',
        params,
        method: 'get'
    })

export const hotMusic = params =>
    request({
        url: '/personalized/newsong',
        params,
        method: 'get'
    })