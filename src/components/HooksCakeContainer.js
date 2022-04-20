import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  const { cake } = useSelector((state) => state);
  const dispatch = useDispatch();
  const buyCakeHookHandler = () => {
    dispatch(buyCake());
  };
  return (
    <div>
      <h2>Number of Cakes Hooks - {cake.numOfCakes + 10}</h2>
      <button onClick={buyCakeHookHandler}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
