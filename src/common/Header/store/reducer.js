import * as types from './reducerTypes';
import { fromJS } from 'immutable';
const defaultState = fromJS({
  focused: false,
  searchInfo: ['区块链', '小程序', 'vue', '媳妇', '你大爷还是你大爷']
})

const reducer = (prevState = defaultState, action) => {
  const {
    type
  } = action
  if (type === types.SET_SEARCH_FOCUS) {
    return prevState.set('focused', true)
  } else if (type === types.SET_SEARCH_BLUR) {
    return prevState.set('focused', false)
  }
  return prevState
}

export default reducer