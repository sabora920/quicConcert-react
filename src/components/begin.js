import React from 'react';
import './begin.css'

function Button(props) {

  if (props.onClick) {
    return (
      <button className={props.className ? props.className : 'button-main'} id={props.id} onClick={() => props.onClick()}>{props.buttonText}</button>
    )
  } else {
    return (
      <button className={props.className ? props.className : 'button-main'} id={props.id}>{props.buttonText}</button>
    )
  }

}
//it would then be import without curly braces for this way
export default Button;