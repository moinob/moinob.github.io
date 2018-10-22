import React from 'react'
import './Navbar.css'

function Navbar(props){
  return (
    <ul className={'main-navigation ' + props.className}>
      {props.list.map((item) => (
        <li className={(item.active)? 'selected': ''} key={item.name}>
          <a href={item.path}>{item.name}</a>
        </li>
        ))}
    </ul>
    )
}
export default Navbar
