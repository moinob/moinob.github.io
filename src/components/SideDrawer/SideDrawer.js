import React from 'react'
import './SideDrawer.css'

class SideDrawer extends React.Component{

  constructor(props){
    super(props)
    this.state={
      visible:false
    }
  }
  render(){
    return (
      <ul className={'side-navigation'}>
        {this.props.list.map((item) => (
          <li className={(item.active)? 'selected': ''} key={item.name}>
            <a href={item.path}>{item.name}</a>
          </li>
          ))}
      </ul>
      )
  }
}


export default SideDrawer;