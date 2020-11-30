import axios from 'axios'
const setToken = token => {
  if (token) {
    axios.defaults.headers.common['token'] = token
  } else {
    axios.defaults.headers.common['token'] = ''
  }
}
export default setToken