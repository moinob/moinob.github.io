import React, {Component} from 'react'
import './Cart.css'

class Cart extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: [],
      className: props.className,
      tooltip: props.tooltip
    }
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  handleAddToCart(){
    this.setState((previousState, currentProps) =>{
      //If it was not for IE I rather use find method
      //currentMatch = previousState.items.find(item => item.id === currentProps.item.id)
      var added = (this.state.items.length > 0) ? previousState.items.filter(function (item) {
        return item.id === currentProps.item.id
        })[0]  : null;
      if (added === null || added === -1){
        return{
        items: previousState.items.concat([{item:currentProps.item}]),
        }
    }
      else {
        alert("item already added \nI know it could be a prettier message box :D");
      }
    })
  }
  render(){
    let count = this.state.items.length === 0 ? "" : this.state.items.length;
    return(
      <div tooltip={this.state.tooltip} className={`cart ${this.state.className}`} items={this.state.items} onClick={this.handleAddToCart}>
        <span className={"item-count"}>{count}</span>
      </div>

    )
  }
}
export default Cart