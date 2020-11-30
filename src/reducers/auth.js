
import {SET_CUR_USER} from '../constants'
import { isEmpty } from 'lodash'

const initState = {
  isAuth: false,
  user: {}
}
const auth = (state = initState, actions) =>{
  switch(actions.type){
    case SET_CUR_USER:
      return {
        isAuth: !isEmpty(actions.user),
        user: actions.user
      }
    default:
      return state
  }
}
export default auth