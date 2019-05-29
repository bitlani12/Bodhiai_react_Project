import React from 'react';
class MessageView extends React.Component{
    render(){
        return(
            <div>
           {this.props.text}
            </div>
        )
    }
}
export default MessageView;