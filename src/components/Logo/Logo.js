import React from 'react'
import './Logo.css'
import logo from './logo.png'

function Logo(props){
  return(
    <img className={`logo-small ${props.className}`} src={logo} alt={"company logo"} />
  );
}

export default Logo;