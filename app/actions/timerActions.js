import * as actionTypes from '../constants/actionTypes'
import mockedTimers from '../api/mockedTimers'

export const loadTimers = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.TIMER_LOAD_SUCCESS,
      response: mockedTimers
    })
  }
}

export const selectTimer = (selected) => {
  return dispatch => {
    dispatch({
      type: actionTypes.TIMER_SELECT,
      selected
    })
  }
}

export const unselectTimer = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.TIMER_UNSELECT
    })
  }
}
