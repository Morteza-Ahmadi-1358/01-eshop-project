import server from '@/config/MyConfig.json'
import axios from 'axios'

export const GET = (url) => {
    return axios.get(`${server.SERVER_ADDRESS}${url}`)
}