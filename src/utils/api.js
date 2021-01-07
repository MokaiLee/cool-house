import axios from "axios";

const httpService = axios.create({
  baseURL: '/ctl',
  timeout: 60000
})

httpService.interceptors.request.use(config => {
  return config
}, error => {
  //handle error
  console.log('request')
  console.log(error.message)
  return Promise.reject(error)
})

httpService.interceptors.response.use(response => {
  console.log(response.status)
  return response.data
}, error => {
  //handle error
  console.log('response')
  console.log(error.message)
  return Promise.reject(error)
})

export default httpService