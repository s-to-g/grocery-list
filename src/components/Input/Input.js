import React from 'react';
import './Input.css';

const Input = props => {
  return (
    <input
      className="Input"
      type="text"
      placeholder={props.placeholder}
      value={props.inputValue}
      onChange={(event) => props.updateInput(event.target.value)}
    />
  )
}

export default Input;
