import React from 'react'
import FlashMessage from './FlashMessage'
import { connect } from 'react-redux'
import { deleteFlashMessage } from '../../actions/flashMessages'
class FlashMessageList extends React.Component{
  render () {
    let message = this.props.messages.map((message, index) => {
      return <FlashMessage key={index} message={message} deleteFlashMessage={ this.props.deleteFlashMessage}></FlashMessage>
    })
    return (
      <div className="container">
        { message }
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    messages: state.flashMessage
  }
}
export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessageList)