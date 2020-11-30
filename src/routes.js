import { divide } from 'lodash'
import { Route } from 'react-router-dom'
import React from 'react'
import App from './components/App'
import SigupPage from './components/sigup/SigupPage'
import LoginPage from './components/login/loginPage'
import ShopPage from './components/shop/shopPage'
import requireAuth from './utils/requireAuth'
export default class extends React.Component{
  render () {
    return (
      <div className="container w">
        <Route exact path="/" component={ App }></Route>
        <Route exact path="/sigup" component={ SigupPage }></Route>
        <Route exact path="/login" component={ LoginPage }></Route>
        <Route exact path="/shop" component={ requireAuth(ShopPage) }></Route>
      </div>
    )
  }
}