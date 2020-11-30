import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import Navgator from './components/navgator'
import Message from './components/message/messageList'
import jwtDecode from 'jwt-decode'
import setToken from './utils/setToken'
import { setCurUser } from './actions/loginActions'
import './index.css'
let token = sessionStorage.getItem('token')

if (token) {
  setToken(token)
  store.dispatch(setCurUser(jwtDecode(token)))
}
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter routes={ Routes }>
      <Navgator/>
      <Message/>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
