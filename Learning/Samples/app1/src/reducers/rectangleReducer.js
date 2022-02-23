const initialState = 'red';

const ChangeColor = (state=initialState, action)=>{
  switch(action.type){
    case 'setColor': return (state = action.payload);
    default: return state;
  }
}
export default ChangeColor;