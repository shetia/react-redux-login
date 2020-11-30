import { ADD_MESSAGE, DELETE_MESSAGE} from '../constants'

export const addMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    message
  }
}
export const deleteMessage = (id) => {
  return {
    type: DELETE_MESSAGE,
    id
  }
}