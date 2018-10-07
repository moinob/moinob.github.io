import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js'
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
const jobSpec = {title:"Purchacing Assistant", location:'Amsterdam, The Netherlands' };
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
        drawer = <SideDrawer  list={NavItems} />;
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
        <Navbar list={NavItems} />
      </header>
      <main>
        <section className={"page-title"}>
        <div className={'title-wrapper'}>
          <h1>{jobSpec.title}</h1>
          <h2>{jobSpec.location}</h2>
        </div>
        </section>
        <section className={'page-content'}>
          <h2>apply for the position of {jobSpec.title}</h2>
          <ApplicationForm />
        </section>
        <section className={"related-information"}>
          <div className={'info-wrapper'}>
          <article>
              <h2>Application Procedure</h2>

              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Fusce iaculis felis in pulvinar dapibus.</li>
                <li>Aenean elementum eros at congue sagittis.</li>
                <li>Nulla gravida neque eu nibh tincidunt luctus.</li>
                </ul>
            </article>
            <article>
              <h2>Got A Question?</h2>
              
            </article>
          </div>
        </section>
      </main>
      <footer></footer>
      </div>
    );
  }
}

export default App;
