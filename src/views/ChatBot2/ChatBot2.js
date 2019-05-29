import React from "react";
import DialogueForBot from "./DialogueForBot";
import compose from "recompose/compose";
import { connect } from "react-redux";
import {
  get_current_view,
  get_previous_chat,
  save_chat
} from "./../../store/actions/ChatbotAction";
import "./ChatBot2.css";
import PreviousChat from "./PreviousChat";
import CurrentChat from "./CurrentChat";
import { Animated } from "react-animated-css";
import Slide from "@material-ui/core/Slide";
class ChatBot2 extends React.Component {
  state = {
    idsforanimation: 0,
    sayhi: false,
    width: window.innerWidth
  };
  componentDidMount() {
    this.props
      .get_previous_chat("1")
      .then(() =>
        this.props.aftertestcallchatbot === true
          ? this.props.get_current_view("custom_test_performance")
          : this.props.get_current_view("none")
      );
  }
  componentDidUpdate() {
    var objDiv = this.messagesEnd;
    objDiv.scrollTop = objDiv.scrollHeight;
  }
  componentWillMount() {
    this.handleWindowSizeChange();
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  render() {
    const isMobile = this.state.width <= 500;
    return (
      <div>
        {isMobile === false ? (
          <Animated
            animationIn="slideInRight"
            animationOut="zoomOutLeft"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={true}
            className="chatbotlayout"
            ref={el => {
              this.messagesEnd = el;
            }}
          >
            {/* {this.state.sayhi ?  */}

            <div>
              <div className="chatbotheader">Bodhi AI </div>}
              <div className="chatsection">
                <div
                  ref={node => {
                    this.node = node;
                  }}
                />
                <PreviousChat />
                <div className="shownewmessage">
                  <span>Recent Messages</span>
                </div>
                <CurrentChat />
              </div>
            </div>
          </Animated>
        ) : (
          <Animated
            animationIn="slideInRight"
            animationOut="zoomOutLeft"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={true}
            className="chatbotlayoutmobile"
            ref={el => {
              this.messagesEnd = el;
            }}
          >
            {/* {this.state.sayhi ?  */}

            <div>
              {/* <div className="chatbotheader">Bodhi AI </div>} */}
              <div className="chatsectionmobile">
                <div
                  ref={node => {
                    this.node = node;
                  }}
                />
                <PreviousChat />
                <div className="shownewmessage">
                  <span>Recent Messages</span>
                </div>
                <CurrentChat />
              </div>
            </div>
          </Animated>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentdata: state.chatbot.aftertestchat,
    aftertestcallchatbot: state.onlinetest.aftertestcallchatbot,
    chatscroll: state.chatbot.chatscroll
  };
};
export default compose(
  connect(
    mapStateToProps,
    { get_current_view, get_previous_chat, save_chat }
  )
)(ChatBot2);
