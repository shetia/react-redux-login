import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/login'
class Navigation extends React.Component{
  logout = (e) => {
    e.preventDefault()
    console.log('退出');
    this.props.logout()
  }
  render () {
    const { isAuthenticated, user } = this.props.auth
    let userLinks = (
      <ul className="nav nav-pills">
        <li>
          <span  className="nav-link">{user.username}</span>
        </li>
        <li  >

          <a   className="nav-link" onClick={ this.logout }>退出</a>
        </li>
      </ul>
    )
    let guestLinks = (
      <ul className="nav nav-pills">
        <li  >
          <Link to='/login' className="nav-link">登录</Link>
        </li>
        <li  >
          <Link to='/signup' className="nav-link">注册</Link>
        </li>
      </ul>
    )
    return (

        <nav className="navbar navbar-expand-lg  bg-light mb-3">
          <div className="container ">
            <Link className="navbar-brand" to='/'>Home</Link>
            <Link className="navbar-brand" to='/shop'>Shop</Link>
            {isAuthenticated ? userLinks : guestLinks}
          </div>
        </nav>
    )
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps, { logout })(Navigation)