import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       LoginIsActive : true ,
       RegisterIsActive : false
    }
  }
  
  ShowLogin(){
    this.setState({
      LoginIsActive : true ,
      RegisterIsActive : false
    })
  }

  ShowRegister(){
    this.setState({
      LoginIsActive : false ,
      RegisterIsActive : true
    })
  }

  render() {
    return (
      <div className="container">
        <div className= "box-controller">
          <div className={"controller " + (this.state.LoginIsActive ? "selected-controller" : "") } onClick={this.ShowLogin.bind(this)}>
            Login
          </div>
          <div className={"controller " + (this.state.RegisterIsActive ? "selected-controller" : "") } onClick={this.ShowRegister.bind(this)}>
            Register
          </div>
        </div>
        <div className="box-container">
          {this.state.LoginIsActive && <Login />}
          {this.state.RegisterIsActive && <Register />}
        </div>
      </div>
    );
  }
}

export default App;
