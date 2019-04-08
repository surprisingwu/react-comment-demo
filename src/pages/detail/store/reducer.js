import { fromJS } from 'immutable';
import { GET_DETAIL_INFO} from './actionTypes';

const defaultState = fromJS({
  title: '',
  content: ''
})

export const detailReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_DETAIL_INFO:
      return state.merge(action.data)
    default: 
      return state
  }
}