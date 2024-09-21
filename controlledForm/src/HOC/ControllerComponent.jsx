// src/ControllerComponent.js
import React, { useState } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';

const ControllerComponent = () => {
  const [bgColor1, setBgColor1] = useState('white');
  const [bgColor2, setBgColor2] = useState('white');

  const changeColors = () => {
    // Generate random colors for both components
    setBgColor1(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    setBgColor2(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  };

  return (
    <div>
      <Component1 bgColor={bgColor1} />
      <Component2 bgColor={bgColor2} />
      <button onClick={changeColors}>Change Background Colors</button>
    </div>
  );
};

export default ControllerComponent;
