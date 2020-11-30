import axios from 'axios'


export const sigup = (data) => {
  return dispatch => {
    return axios.post('/api/sigup', data)
  }
}
export const validexist = (data) => {
  return dispatch => {
    return axios.post('/api/validexist', data)
  }
}