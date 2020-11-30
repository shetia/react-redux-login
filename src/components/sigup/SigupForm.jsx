import React from 'react';
export default class SigupForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username:'',
      email: '',
      password: '',
      password_confirm: '',
      error: {},
      invalid: false
    }
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.sigupActions.sigup(this.state).then(res=>{
      if (res.data.code === 0) {
        this.props.messageActions.addMessage({type: 'success', text: '注册成功!'})
        this.props.history.push('/')
      } else {
        let error = res.data.msg
        this.setState({
          error
        })
      }
    }).catch(e=>{
      console.log(e)
    })
  }
  onChange = (e) => {
    let key = e.target.name
    let val = e.target.value
    this.setState({
      [key]: val
    })
  }
  onBlur = (e) => {
    this.props.sigupActions.validexist(this.state).then(res => {
      if(res.data.code !== 0){
        this.setState({
          error: res.data.msg.error,
          invalid: true
        })
      } else {
        this.setState({
          error: {},
          invalid: false
        })
      }
    }).catch(e => {
      console.log(e, '?')
    })
  }
  render(){
    let { error, invalid } = this.state
    return (
      <form onSubmit={ this.onSubmit }>
        <div className="form-item">
          <label>用户名</label>
          <input type="text" name="username" value={this.state.username} onChange={ this.onChange } onBlur={this.onBlur}/>
          { error.username && <div class="form-error" style={{'color': 'red'}}>{error.username}</div>}
        </div>
        <div className="form-item">
          <label>邮箱</label>
          <input type="email" name="email" value={this.state.email} onChange={ this.onChange }/>
          { error.email && <div class="form-error"  style={{'color': 'red'}}>{error.email}</div>}
        </div>
        <div className="form-item">
          <label>密码</label>
          <input type="password" name="password" value={this.state.password} onChange={ this.onChange }/>
          { error.password && <div class="form-error"  style={{'color': 'red'}}>{error.password}</div>}
        </div>
        <div className="form-item">
          <label>确认密码</label>
          <input type="password" name="password_confirm" value={this.state.password_confirm} onChange={ this.onChange }/>
          { error.password_confirm && <div class="form-error"  style={{'color': 'red'}}>{error.password_confirm}</div>}
        </div>
        <div className="form-item">
          <button disabled={invalid}>注册</button>
        </div>
      </form>
    )
  }
}