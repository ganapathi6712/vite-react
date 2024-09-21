// src/Component1.js
import React from 'react';

const Component1 = ({ bgColor }) => {
  return (
    <div style={{ backgroundColor: bgColor, width: '200px', height: '100px', margin: '10px' }}>
      Component 1
    </div>
  );
};

export default Component1;
