const initialState = {
  color: "black",
  layout: "",
  fontstyle: "",
  fontsize: "",
  template:"",
  sidebar: false
};

export function finalizeReducer(state = initialState, action) {
  if (action.type === "final") {
    return action.payload;
  } else {
    return state;
  }
}
