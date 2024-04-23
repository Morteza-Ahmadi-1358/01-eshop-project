import server from '@/config/MyConfig.json'

export const GET = (url) => {
    return fetch(`${server.SERVER_ADDRESS}${url}`)
}