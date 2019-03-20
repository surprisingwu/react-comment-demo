import * as types from './reducerTypes';
import {
  fromJS
} from 'immutable';
const defaultState = fromJS({
  focused: false,
  searchInfo: [],
  page: 1,
  totalPage: 1,
  mouseIn: false
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_FOCUS:
      return state.set('focused', true);
    case types.SET_SEARCH_BLUR:
      return state.set('focused', false);
    case types.GET_SEARCH_INFO:
      return state.set('searchInfo', action.list).set('totalPage', action.totalPage);
    case types.SET_MOUSE_ENTER:
      return state.set('mouseIn', true);
    case types.SET_MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case types.SET_SEARCH_PAGE:
      const newState = state.toObject()
      let { page, totalPage } = newState
      page ++
      if (page > totalPage) { 
        page = 1
      }
      return state.set('page', page)
    default:
      return state
  }
}

export default reducer