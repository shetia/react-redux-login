import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/loginActions'
 class Navgator extends React.Component{
  logout = (e) => {
    e.preventDefault()
    this.props.logout()
  }
  render(){
    let {isAuth, user} = this.props.auth
    let List = isAuth ? (
      <div>
        <span>{user.username}</span>
        <a href="#" onClick={this.logout}>退出</a>
      </div>
    ) : (
      <div>
        <NavLink exact to="/login" className="link">登录</NavLink>
        <NavLink exact to="/sigup" className="link">注册</NavLink>
      </div>
    )
    return (
      <div className="head">
        <div className="head-box w">
          <div className="head-left">
            <NavLink exact to="/">首页</NavLink>
            <NavLink exact to="/shop">Shop</NavLink>
          </div>
          <div className="head-right">
            {List}
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps, { logout })(Navgator)