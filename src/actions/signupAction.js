// cnpm i --save axios
import axios from 'axios'
export const userSignupRequest = (userData) => {
  return dispatch => {
    return axios.post('/api/users', userData)
  }
}
export const isUserExists = (username) => {
  return dispatch => {
    return axios.get(`/api/users/${username}`)
  }
}