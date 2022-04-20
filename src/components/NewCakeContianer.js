import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCakeWithNumber } from "../redux";

function NewCakeContainer(props) {
  const [cakeNumber, setCakeNumber] = useState(1);
  return (
    <div>
      <h2>Number of Cakes with State - {props.numOfCakes + 20}</h2>
      <input
        type="text"
        value={cakeNumber}
        onChange={(e) => setCakeNumber(e.target.value)}
      />
      <button onClick={() => props.buyCakeWithNumber(cakeNumber)}>
        Buy {cakeNumber} Cake
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCakeWithNumber: (cakeNumber) => dispatch(buyCakeWithNumber(cakeNumber)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
