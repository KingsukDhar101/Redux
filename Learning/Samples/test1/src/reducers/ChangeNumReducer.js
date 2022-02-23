let initialState = 0;
const changeNum = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    default:
      return state;
  }
};
export default changeNum;
