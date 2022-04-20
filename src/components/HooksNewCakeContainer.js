import React, { useState } from "react";
import { buyCakeWithNumber } from "../redux";
import { useDispatch, useSelector } from "react-redux";

function HooksNewCakeContainer(props) {
  const [cakeNumber, setCakeNumber] = useState(0);
  const { cake } = useSelector((state) => state);
  const dispatch = useDispatch();
  const buyNewCakeHookHandler = () => {
    dispatch(buyCakeWithNumber(cakeNumber));
  };
  return (
    <div>
      <h2>Number of Cakes with State and Hooks - {cake.numOfCakes + 30}</h2>
      <input
        type="text"
        value={cakeNumber}
        onChange={(e) => setCakeNumber(e.target.value)}
      />
      <button onClick={buyNewCakeHookHandler}>Buy {cakeNumber} Cake</button>
    </div>
  );
}

export default HooksNewCakeContainer;
