import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux";

function HooksIceCreamContainer() {
  const { iceCream } = useSelector((state) => state);
  const dispatch = useDispatch();
  const buyIceCreamHookHandler = () => {
    dispatch(buyIceCream());
  };
  return (
    <div>
      <h2>Number of IceCreams Hooks - {iceCream.numOfIceCreams}</h2>
      <button onClick={buyIceCreamHookHandler}>Buy Icecream</button>
    </div>
  );
}

export default HooksIceCreamContainer;
