import React from 'react';
import './Input.css'

function Input(props){
    return (  
    <input
      id={props.name}
      name={props.name}
      type={props.type}
      value={props.value}
      onChange={props.handleChange}
      onBlur = {props.handleBlur}
      placeholder={props.placeholder} 
      required
    />
)
}
export default Input;