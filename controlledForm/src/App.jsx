import React from "react";
import Hocc1 from "./hoc/Hocc1";
import Hocc2 from "./hoc/Hocc2";
import "./App.css";
import Hoccbt from "./hoc/Hoccbt";

const App = () => {
  return (
    <div id="parent">
      <Hoccbt ></Hoccbt>
      <div id="inner">
        <Hocc1></Hocc1>
        <Hocc2></Hocc2>
      </div>
    </div>
  );
};

export default App;