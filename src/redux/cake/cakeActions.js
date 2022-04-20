import { cakeActionTypes } from "./cakeActionTypes";

export const buyCake = () => {
  return {
    type: cakeActionTypes.BUY_CAKE,
  };
};

export const buyCakeWithNumber = (cakeNumber = 1) => {
  return {
    type: cakeActionTypes.BUY_CAKE_WITH_NUMBER,
    payload: cakeNumber,
  };
};
