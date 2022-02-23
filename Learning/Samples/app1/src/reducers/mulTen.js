const initialState = 100;

const Multiply10 = (state=initialState, action)=>{
  switch (action.type) {
    case "multiply10":
      return state * 10;
    case "division10":
      return state / 10;

    default:
      return state;
  }
}

export default Multiply10;