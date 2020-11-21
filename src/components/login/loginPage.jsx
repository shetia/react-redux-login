import React from 'react'
import LoginFrom from './loginForm'
class LoginPage extends React.Component{
  constructor () {
    super()
    this.state = {

    }
  }
  render () {
    return (
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <LoginFrom></LoginFrom>
        </div>
        <div className="col-sm-3"></div>
      </div>
    )
  }
}

export default LoginPage