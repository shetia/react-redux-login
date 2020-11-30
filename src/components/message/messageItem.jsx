import React from 'react';
// cnpm i -S classname
import classname from 'classname'
export default class MessageItem extends React.Component{
  del = () => {
    this.props.deleteMessage(this.props.message.id)
  }
  render(){
    let {type, text} = this.props.message
    console.log(this.props.message)
    return (
      <div className={classname('message-item', {
        'success': type === 'success',
        'danger': type === 'danger'
      })}>
        {text}
        <span className="btn-close" onClick={this.del}>x</span>
      </div>
    )
  }
}