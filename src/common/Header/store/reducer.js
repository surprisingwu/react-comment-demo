import * as types from './reducerTypes';
import { fromJS } from 'immutable';
const defaultState = fromJS({
  focused: false,
  searchInfo: []
})

const reducer = (state = defaultState, action) => {
  switch (action.type) { 
    case types.SET_SEARCH_FOCUS:
      return state.set('focused', true);
    case types.SET_SEARCH_BLUR:
      return state.set('focused', false);
    case types.GET_SERCH_INFO:
      return state.set('searchInfo', action.list);
    default:
      return state
  }
}

export default reducer