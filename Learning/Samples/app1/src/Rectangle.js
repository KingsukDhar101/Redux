import React from "react";
import {setColorRect} from './actions/action';
import {useDispatch, useSelector} from 'react-redux';

const Rectangle = () => {
  // create a reducer for color of the rectancle
  // create actiona
  // 1.reset
  // 2.set
  // reducer ColorReducer
  // set----  set the color
  // reset -  reset the color to red
  const dispatch = useDispatch();
  const color = useSelector((state) => state.ChangeColor);

  function handleSetColor(){
    dispatch(setColorRect('green'));
  }
  return (
    <div>
      <input type="text" /> <button onClick={handleSetColor}>Set Color</button>
      <button>reset</button>
      <div style={{ width: "200px", height: "200px", background: {color} }}></div>
    </div>
  );
};

export default Rectangle;
