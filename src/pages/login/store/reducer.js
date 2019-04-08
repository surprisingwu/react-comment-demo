import {fromJS} from 'immutable';
import {
  SET_LOGIN,
  SET_LOGOUT
} from './actionTypes';

const defaultState = fromJS({
  login: false
})

export default (state=defaultState, action) => {
  switch(action.type) {
    case SET_LOGIN:
      return state.set('login', action.login);
    case SET_LOGOUT:
      return state.set('login', action.login);  
    default: 
      return state
  }
}