import { combineReducers } from 'redux'
import auth from './auth'
import flashMessage from './flashMessage'
const rootReducer = combineReducers({
  auth: auth,
  flashMessage
})
export default rootReducer