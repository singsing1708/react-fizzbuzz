import React from 'react';

const DisplayNumber = ({className, currentNumber}) => {
  return (
    <div
      className={className}
    >
      {currentNumber}
    </div>
  );
};

export default DisplayNumber;
