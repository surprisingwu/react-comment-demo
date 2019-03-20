import * as types from './reducerTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const getSearchList = (list) => ({
  type: types.GET_SEARCH_INFO,
  list: fromJS(list),
  totalPage: Math.ceil(list.length/10)
})

export const setSearchFocus = () => ({ 
  type: types.SET_SEARCH_FOCUS
})

export const setSearchBlur = () => ({
  type: types.SET_SEARCH_BLUR
})
export const setMouseEnter = () => ({
  type: types.SET_MOUSE_ENTER
})
export const setMouseLeave = () => ({
  type: types.SET_MOUSE_LEAVE
})
export const setSearchPage = () => ({
  type: types.SET_SEARCH_PAGE,
})
export const getSearchInfo = () => { 
  return (dispatch) => { 
    axios.get('http://localhost:3000/api/list.json').then((res) => { 
      if (res.status === 200 && res.data.code === 200) { 
        const list = res.data.data || []
        dispatch(getSearchList(list))
      }
    }).catch(err => { 
      console.log(err)
    })
  }
}