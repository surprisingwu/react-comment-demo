import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/Header/store';
import homeReducer from '../pages/home/store';
const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer
})

export default reducer;