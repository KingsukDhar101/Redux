// action creator

export const incNumber = (x)=>{
  return {
    type: "increment",
    payload: x
  };
}
export const decNumber = () => {
  return {
    type: "decrement",
  };
};

export const mulTen = () => {
  return {
    type: "multiply10",
  };
};

export const divTen = () => {
  return {
    type: "division10",
  };
};

export const setColorRect = (color)=>{
  return {
    type: 'setColor',
    payload: color
  };
}