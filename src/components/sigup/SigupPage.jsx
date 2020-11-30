import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as sigupActions from '../../actions/sigupActions'
import * as messageActions from '../../actions/messageActions'
import SigupForm from './SigupForm'
import { withRouter } from 'react-router-dom'
 class SigupPage extends React.Component{
  render(){
    return (
      <div className="sigup">
        <div className="sigup-box">
          <SigupForm sigupActions={this.props.sigupActions} messageActions={this.props.messageActions}  history={ this.props.history }/>
        </div>
      </div>
    )
  }
}
const mapActionsToProps = (dispatch) => {
  return {
    sigupActions: bindActionCreators(sigupActions, dispatch),
    messageActions: bindActionCreators(messageActions, dispatch)
  }
}
export default withRouter(connect(null, mapActionsToProps)(SigupPage))