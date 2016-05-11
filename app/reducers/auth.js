import * as actionTypes from '../constants/actionTypes'

const initialState = {}

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN:
      return {
        ...action.response
      }
    case actionTypes.AUTH_LOGOUT:
      return {
        ...initialState
      }
    default:
      return state
  }
}
