import { ADD_MESSAGE, DELETE_MESSAGE} from '../constants' 
// npm i -S shortid
import shortid from 'shortid'
// cnpm i -S lodash
import { findIndex } from 'lodash'

const message = (state = [], action = {}) => {
  switch(action.type){
    case ADD_MESSAGE:
      return [
        ...state,
        {
          id: shortid.generate(),
          type: action.message.type,
          text: action.message.text
        }
      ];
    case DELETE_MESSAGE:
      let index = findIndex(state, {id: action.id})
      if (index > -1) {
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ]
      }
      return state
    default:
      return state
  }
}

export default message
