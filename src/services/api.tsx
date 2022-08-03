import axios from 'axios'
const baseURL = 'https://api.magicthegathering.io/v1'

const api = axios.create({
  baseURL
})

export default api
