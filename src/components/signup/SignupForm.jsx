import React from 'react'
// cnpm i --save classname
import classname from 'classname'
import { withRouter } from 'react-router-dom'
class SignupForm extends React.Component{
  constructor () {
    super()
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false,
      invalid: false
    }
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
      isLoading: true
    })
    this.props.signupActions.userSignupRequest(this.state).then(res=> {
      this.props.flashMessageActions.addFlashMessage({
        type: 'success',
        text: '注册成功'
      })
      this.props.history.push('/')
    }, ({response}) => {
      this.setState({
        errors: response.data,
        isLoading:false
      })
    })

  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  checkUserExists = (e) => {
    let field = e.target.name
    let val = e.target.value

    let invalid
    if (val !== ''){
      this.props.signupActions.isUserExists(val).then(res=> {
        let errors = this.state.errors
        if(res.data[0]){
          errors[field] = `该 ${field} 已存在`
          invalid = true
        } else {
          errors[field] = ''
          invalid = false
        }
        this.setState({errors, invalid})
      }).catch(e => {
        console.log(e);
      })
    }
  }
  render () {
    const {errors, isLoading, invalid} = this.state
    return (
      <form onSubmit={ this.onSubmit }>
        <h2>Join our community</h2>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            type="text"
            name="username"
            value={ this.state.username }
            onChange={ this.onChange }
            onBlur = { this.checkUserExists }
            className={classname('form-control', {'is-invalid': errors.username} )}
          />
          {errors.username && <span className="form-text text-muted">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label className="control-label">email</label>
          <input
            type="email"
            name="email"
            value={ this.state.email }
            onChange={ this.onChange }
            className={classname('form-control', {'is-invalid': errors.email} )}
          />
          {errors.email && <span className="form-text text-muted">{errors.email}</span>}
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
          <label className="control-label">passwordConfirmation</label>
          <input
            type="password"
            name="passwordConfirmation"
            value={ this.state.passwordConfirmation }
            onChange={ this.onChange }
            className={classname('form-control', {'is-invalid': errors.passwordConfirmation} )}
          />
          {errors.passwordConfirmation && <span className="form-text text-muted">{errors.passwordConfirmation}</span>}
        </div>
        <div className="form-group">
          <button disabled={ isLoading || invalid } className="btn btn-primary">注册</button>
        </div>
      </form>
    )
  }
}

export default withRouter(SignupForm)  // 使用这个可以this.props.history.push('/')直接跳