import { SET_CURRENT_USER } from '../constants'
import { isEmpty } from 'lodash'
const initState = {
  isAuthenticated: false,
  user:{}
}
const auth = (state = initState, action) => {
  switch(action.type){
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      }
    default:
      return state
  }
}
export default auth