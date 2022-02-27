const initialState = {
  color: "black",
  layout: "",
  fontstyle: "",
  fontsize: "",
  template:2,
  sidebar: false
};

export function finalizeReducer(state = initialState, action) {
  if (action.type === "final") {
    return action.payload;
  } else {
    return state;
  }
}
