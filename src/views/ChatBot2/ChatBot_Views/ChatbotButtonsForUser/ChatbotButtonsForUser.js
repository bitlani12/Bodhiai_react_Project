import React from 'react';
import './../../ChatBot2.css'
class ChatbotButtonsForUser extends React.Component{
    render(){
        return(
            <div className="bottombtnforchat">
               
                {this.props.children}
                
            </div>
        )
    }
}
export default ChatbotButtonsForUser;