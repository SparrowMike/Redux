export const increment = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};

export const logged = () => {
  return {
    type: "SIGN_IN",
  };
};
