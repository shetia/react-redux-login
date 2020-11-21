import React from 'react'
import classname from 'classname'
export default class FlashMessage extends React.Component{
  onClick = () => {
    this.props.deleteFlashMessage( this.props.message.id )
  }
  render () {
    let {type, text} = this.props.message
    return (
      <div className={ classname('alert', {
        'alert-success': type === 'success',
        'alert-danger': type === 'danger'
      }) }>
        <button onClick={this.onClick} className="close">&times;</button>
        {text}
      </div>
    )
  }
}