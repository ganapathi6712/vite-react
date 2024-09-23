import React from "react";
import Hocc from "./Hocc";

const Hocc2 = (props) => {
  return (
    <div id="child2">
      {/* {props.data.age} */}
      <h1>Child2</h1>
    </div>
  );
};

export default Hocc(Hocc2);