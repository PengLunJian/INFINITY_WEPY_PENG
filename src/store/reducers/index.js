import {combineReducers} from 'redux';
import HOUSELIST_REDUCER from './houseList';
import HOUSEDETAIL_REDUCER from './houseDetail';
import HOUSEFOLLOW_REDUCER from './houseFollow';
import HOUSEHISTORY_REDUCER from './houseHistory';
import HOUSEFAVORITE_REDUCER from './houseFavorite';

export default combineReducers({
  HOUSELIST_REDUCER,
  HOUSEDETAIL_REDUCER,
  HOUSEFOLLOW_REDUCER,
  HOUSEHISTORY_REDUCER,
  HOUSEFAVORITE_REDUCER
});
