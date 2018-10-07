import React from 'react';
import './Select.css'
function Select(props){
  return(
          <select
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
            onBlur = {props.handleBlur}
            >
            <option value='' disabled>{props.placeholder}</option>
            {props.options.map(option => {
              return (
                <option
                  key={option}
                  value={option}
                  label={option}>{option}
                </option>
              );
            })}
          </select>
  )}

export default Select;
