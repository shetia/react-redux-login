import React from 'react';
import { connect } from 'react-redux'
import { addMessage } from '../actions/messageActions'
import { withRouter } from 'react-router-dom'
export default function (ComposedComponent) {
  class requireAuth extends React.Component{
    componentWillMount(){
      console.log(this.props)
      if (!this.props.isAuth ) {
        this.props.addMessage({
          type: 'danger',
          text: '请先登录'
        })
        this.props.history.push('/login')
      }
    }
    componentWillUpdate(nextProps){
      if (!nextProps.isAuth){
        this.props.history.push('/login')
      }
    }
    render(){
        return (
          <ComposedComponent {...this.props}/>
        )
    }
  }
  const mapStateToProps = state => {
    return {
      isAuth: state.auth.isAuth
    }
  }
  return withRouter(connect(mapStateToProps, {addMessage})(requireAuth))
}
