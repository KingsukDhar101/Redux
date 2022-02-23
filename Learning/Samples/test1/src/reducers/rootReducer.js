import changeNum from './ChangeNumReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  changeNum
});

export default rootReducer;