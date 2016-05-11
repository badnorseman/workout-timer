import * as actionTypes from '../constants/actionTypes'

const initialState = {
  all: {},
  selected: {}
}

export default function timer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.TIMER_LOAD_SUCCESS:
      return {
        all: action.response
      }
    case actionTypes.TIMER_SELECT:
      return {
        ...state,
        selected: action.selected
      }
    case actionTypes.TIMER_UNSELECT:
      return {
        ...state,
        selected: {}
      }
    default:
      return state
  }
}
