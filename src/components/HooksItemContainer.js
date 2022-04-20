import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function HooksItemContainer({ name }) {
  const { cake } = useSelector((state) => state);
  const { iceCream } = useSelector((state) => state);
  const dispatch = useDispatch();
  const buyCakeHookHandler = () => {
    dispatch(buyCake());
  };
  const buyIceCreamHookHandler = () => {
    dispatch(buyIceCream());
  };
  return (
    <div>
      <h2>
        Item ({name ? "Cake" : "Icecream"}) Hooks -
        {name ? cake.numOfCakes : iceCream.numOfIceCreams}
      </h2>
      <button onClick={name ? buyCakeHookHandler : buyIceCreamHookHandler}>
        Buy {name ? "Cake" : "Icecream"}
      </button>
    </div>
  );
}

export default HooksItemContainer;
