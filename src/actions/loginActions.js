import axios from 'axios'
import setToken from '../utils/setToken'
import { SET_CUR_USER } from '../constants'
// cnpm i -S jwt-decode
import jwtDecode from 'jwt-decode'
export const setCurUser = user => {
  return {
    type: SET_CUR_USER,
    user
  }
}
export const login = (data) => {
  return dispatch => {
    return axios.post('/api/login', data).then(res => {
      if (res.data.code === 0) {
        let token = res.data.data.token
        sessionStorage.setItem('token', token)
        setToken(token)
        dispatch(setCurUser(jwtDecode(token)))
      }
      return res
    })
  }
}
export const logout = () => {
  return dispatch => {
     sessionStorage.removeItem('token')
     setToken(false)
     dispatch(setCurUser({}))
  }
}