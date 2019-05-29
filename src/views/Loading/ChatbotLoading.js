import React from "react";
import "./ChatbotLoading.css";
class ChatbotLoading extends React.Component {
  render() {
    return (
      <div>
        <div class="spinnerss" style={{ float: `${this.props.floats}` }}>
          <div class="bounce1" />
          <div class="bounce2" />
          <div class="bounce3" />
          {/* <div class="bounce4"></div> */}
        </div>
      </div>
    );
  }
}
export default ChatbotLoading;
