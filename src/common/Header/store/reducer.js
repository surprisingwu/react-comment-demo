import * as types from './reducerTypes';
const defaultState = {
  focused: false
}

const reducer = (prevState = defaultState, action) => {
  const {
    type
  } = action
  if (type === types.SET_SEARCH_FOCUS) {
    return {
      focused: true
    }
  } else if (type === types.SET_SEARCH_BLUR) {
    return {
      focused: false
    }
  }
  return prevState
}

export default reducer