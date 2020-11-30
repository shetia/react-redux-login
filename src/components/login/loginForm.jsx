import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { login } from '../../actions/loginActions'
import { addMessage } from '../../actions/messageActions'
class LoginForm extends React.Component{
  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      error: {},
      invalid: false
    }
  }
  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.props)
    this.setState({invalid: true})
    this.props.login(this.state).then(res => {
      if (res.data.code === 0){
        this.props.history.push('/')
        this.props.addMessage({type: 'success', text: '登录成功'})
      } else{
        let error = res.data.msg.error
        this.setState({
          error,
          invalid: false
        })
      }
    })
  }
  onChange = (e) => {
    let key = e.target.name
    let val = e.target.value
    this.setState({
      [key]: val
    })
  }
  render(){
    let {invalid, error} = this.state
    return (
      <form onSubmit={ this.onSubmit }>
        <div className="form-item">
          <label>用户名</label>
          <input type="text" name="username" value={this.state.username} onChange={ this.onChange } onBlur={this.onBlur}/>
          { error.username && <div className="form-error" style={{'color': 'red'}}>{error.username}</div>}
        </div>
        <div className="form-item">
          <label>密码</label>
          <input type="password" name="password" value={this.state.password} onChange={ this.onChange }/>
          { error.password && <div className="form-error" style={{'color': 'red'}}>{error.password}</div>}
        </div>
        { error.form && <div className="form-error" style={{'color': 'red'}}>{error.form}</div>}
        <div className="form-item">
          <button disabled={invalid}>登录</button>
        </div>
      </form>
    )
  }
}

export default withRouter(connect(null, { login, addMessage })(LoginForm))