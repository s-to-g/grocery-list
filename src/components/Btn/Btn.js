import React from 'react';
import './Btn.css'

const Btn = props => {

  const {text, componentClass, onClickAction} = props;
  let classes = ['Btn'];
  componentClass ? classes.push(componentClass) : null;

  return (
    <button className={classes.join(' ')} onClick={onClickAction} type="submit">{text}</button>
  )
}

export default Btn;
