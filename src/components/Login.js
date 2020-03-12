import React, { Component } from 'react';
import '../css/style.css';
import axios from 'axios';


class login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password: ''
    }
  }

  handleChange = event =>{
    const name = event.target.name
    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit = event =>{
    event.preventDefault()
    axios.post('https://ebda89d8-30fd-4c7e-bdb1-6d980a3bb3aa.mock.pstmn.io/v1/Auth/Login', this.state)
      .then(res => {
        const { token } = res.data
        localStorage.setItem("token", token)
        this.props.history.push("/file-upload")
      })
  }



  render(){
  return (


    <div className="login-section">
      <a href = "#" className="login-logo">AMS</a>
       <div className="login-body">
          <div className="login-heading">
            <h1>
              Welcome Back,
            </h1>
            <p className="login-text">Sign in to continue</p>
          </div>
          

          <div className="login-form">
            <form onSubmit={this.handleSubmit}>
            <div className="login-email" >
            <label> Email address </label>
            <input onChange = {this.handleChange} className="login-item" type="text" name="email" value={this.state.email} /><br/>
            </div>

            <div className="login-password">
            <label> Password </label>
            <input onChange = {this.handleChange}  className="login-item" type="password" name="password" value={this.state.password} /><br/>
            </div>

            <div className="login-forgot">
              <p>Forgot Password?</p>
            </div>

            <div className="submit">
              <input className="submitbtn" type="submit" value="Login" />
            </div>
        
          
            </form>
        </div>
       </div>
      
       
    </div>
  );
}
}

export default  login;