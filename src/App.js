import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js'
import Logo from './components/Logo/Logo.js'
import Search from './components/Search/Search.js'
import Cart from './components/Card/Cart.js'
import SideDrawer from './components/SideDrawer/SideDrawer.js'
import ApplicationForm from './components/Forms/ApplicationForm.js'

import './App.css';

const NavItems = [
  {name:'Home', path: "#", active: false}, 
  {name:'Job', path: "#", active: true},
  {name: 'About', path: "#", active: false},
  {name: 'Department', path: "#", active: false},
  {name: 'Contact', path: "#", active: false}

];
const jobSpec = {id:"1someid", title:"Purchacing Assistant", location:'Amsterdam, The Netherlands' };
const HambergerButton = props => (
  <button className="hamberger-button" onClick={props.onClick} style={{position: props.position}} />
);

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      SideDrawerShow: false,
    }
    this.sideDrawerToggleHandler = this.sideDrawerToggleHandler.bind(this);
    //this.saveJob = this.saveJob.bind(this);
  }
  sideDrawerToggleHandler = () => {
    
    this.setState((prevState) => {
      return {SideDrawerShow: !prevState.SideDrawerShow};
    });
  };

  render() {
    const isOpen = this.state.SideDrawerShow;
    let drawer;
    let hamberger;
    if(isOpen){
        drawer = <SideDrawer list={NavItems} />;
        hamberger = <HambergerButton onClick={this.sideDrawerToggleHandler} position={'fixed'}/>
    }
    else{
    hamberger = <HambergerButton onClick={this.sideDrawerToggleHandler} position={'unset'}/>
  }
    return (
      <div className={"App"}>
      {drawer}
      <header className='App-header'>
       {hamberger} 
        <Logo className={"Logo"}/>
        <Navbar className={"Navbar"} list={NavItems} />
        <Search className={"SearchBox"} placeholder={"Serach for jobs by keyword"}/>
        <Cart tooltip={"Tip! Click here to save your favoriate jobs"} item={jobSpec} className={"Cart"} />
      </header>
      <section role="main">
        <div className={"page-title"}>
        <div className={'title-wrapper'}>
          <h1>{jobSpec.title}</h1>
          <h2>{jobSpec.location}</h2>
        </div>
        </div>
        <section className={'page-content'}>
          <h2>apply for the position of {jobSpec.title}</h2>
          <ApplicationForm />
        </section>
        <section className={"related-information"}>
          <div className={'info-wrapper'}>
          <article className="grid-column-left">
              <h2>Application Procedure</h2>

              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Fusce iaculis felis in pulvinar dapibus.</li>
                <li>Aenean elementum eros at congue sagittis.</li>
                <li>Nulla gravida neque eu nibh tincidunt luctus.</li>
                </ul>
            </article>
            <article className="grid-column-right">
              <h2>Got A Question?</h2>
    
            </article>
          </div>
        </section>
      </section>
      <footer></footer>
      </div>
    );
  }
}

export default App;
