import {
  SET_LOGIN,
  SET_LOGOUT
} from './actionTypes';



export const setLogin = () => {
  return {
    type: SET_LOGIN,
    login: true
  }
}

export const setLogout = () => {
  return {
    type: SET_LOGOUT,
    login: false
  }
}