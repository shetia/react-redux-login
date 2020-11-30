import React from 'react';
import { connect } from 'react-redux'
import MessageItem from './messageItem'
import { deleteMessage } from '../../actions/messageActions'
class MessageList extends React.Component{
  render(){
    console.log(this.props)
    let { message } = this.props
    let messages = message.map(t => {
      return (
        <MessageItem key={t.id} message={t} deleteMessage={this.props.deleteMessage}/>
      )
    })
    return (
      <div className="message-list">
        {messages}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    message: state.message
  }
}
export default connect(mapStateToProps, {deleteMessage})(MessageList)