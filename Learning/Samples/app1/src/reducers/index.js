import ChangeNum from './reducer.js';
import Multiply10 from './mulTen';
import ChangeColor from './rectangleReducer.js';

import {combineReducers} from "redux";

const rootReducer = combineReducers({
  ChangeNum,
  Multiply10,
  ChangeColor,
});

export default rootReducer;