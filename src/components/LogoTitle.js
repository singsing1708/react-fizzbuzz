import React from 'react';

const LogoTitle = (props) => {
  console.log(111)
  console.log(props)
  return (
    <span
      {...props}
    >
      FizzBuzz
    </span>
  );
};

export default LogoTitle;
