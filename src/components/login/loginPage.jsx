import React from 'react';
import LoginForm from './loginForm'
class LoginPage extends React.Component{
  render(){
    return (
      <div className="sigup">
        <div className="sigup-box">
          <LoginForm/>
        </div>
      </div>
    )
  }
}
export default LoginPage