import React from 'react';
import { Component } from 'react';
import '../App.css';

export class Register extends Component {

  submitRegister(){

  }

  render() {
    return (
      <div className="inner-container">
         <div className="header">
            <header>Register</header>
        </div>
        <div className="box">
            <div className="input-group">
                <label htmlFor="username" >Username</label> 
                <input type="text" name="username" className="login-input" placeholder="Username" />
            </div>
            <div className="input-group">
                <label htmlFor="email">Email</label> 
                <input type="text" name="email" className="login-input" placeholder="Email" /> 
            </div>
            <div className="input-group">
                <label>Password</label>
                <input type="password" name="password" className="login-input" placeholder="Password" /> 
            </div>
            <button type="button" className="login-btn" onClick={this.submitRegister.bind(this)}>
              Register
            </button>
        </div>
      </div>
    )
  }
}

export default Register

