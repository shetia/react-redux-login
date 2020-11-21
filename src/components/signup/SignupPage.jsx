import React from 'react'
import SignupForm from './SignupForm'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as signupActions from '../../actions/signupAction'
import * as flashMessageActions from '../../actions/flashMessages'
class SignupPage extends React.Component{
  constructor () {
    super()
    this.state = {

    }
  }
  render () {
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <SignupForm  signupActions={ this.props.signupActions } flashMessageActions={this.props.flashMessageActions}></SignupForm>
        </div>
        <div className="col-md-3"></div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signupActions: bindActionCreators(signupActions, dispatch),
    flashMessageActions: bindActionCreators(flashMessageActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SignupPage)