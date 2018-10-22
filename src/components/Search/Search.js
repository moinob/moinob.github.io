import React from "react"
import './Search.css'


function Search(props){
  let overrideClass = (props.overrideClass? props.overrideClass : false);
  let classList = (overrideClass? props.className : "search-box " + props.className )
  return(
    <input className={classList} type="search" placeholder={props.placeholder}/>
  )
}
export default Search