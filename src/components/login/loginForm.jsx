import React from 'react'
import classname from 'classname'
import {login} from '../../actions/login'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import validateInput from '../../utils/validations/login'
class LoginForm extends React.Component{
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      isLoading: false,
      invalid: false,
      errors: {}
    }
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  isValid = (e) => {
    const {errors, isValid} = validateInput(this.state)
    if (!isValid) {
      this.setState({errors})
    }
    return isValid
  }
  onSubmit = (e) => {
    e.preventDefault()
    if (this.isValid()){
      this.setState({errors: {}, isLoading: true})
      console.log(this.props);
      this.props.login(this.state).then(res=>{
        console.log(res);
        this.props.history.push('/')
      }, error => {
        this.setState({errors: error.response.data.errors, isLoading: false})
      })
    }
  }
  render () {
    let {isLoading, invalid, errors} = this.state
    return (
      <div>
        <form onSubmit={ this.onSubmit }>

          <h2>Login</h2>
          {errors.form && <div className="alert alert-danger">{errors.form}</div>}
          <div className="form-group">
            <label className="control-label">Username</label>
            <input
              type="text"
              name="username"
              value={ this.state.username }
              onChange={ this.onChange }
              className={classname('form-control', {'is-invalid': errors.username} )}
            />
            {errors.username && <span className="form-text text-muted">{errors.username}</span>}
          </div>
          <div className="form-group">
            <label className="control-label">password</label>
            <input
              type="password"
              name="password"
              value={ this.state.password }
              onChange={ this.onChange }
              className={classname('form-control', {'is-invalid': errors.password} )}
            />
            {errors.password && <span className="form-text text-muted">{errors.password}</span>}
          </div>
          <div className="form-group">
            <button disabled={ isLoading || invalid } className="btn btn-primary">登录</button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(connect(null, {login})(LoginForm))