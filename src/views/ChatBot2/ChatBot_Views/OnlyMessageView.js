import React from "react";
import classNames from "classnames";
import SwipeableViews from "react-swipeable-views";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import {
  save_chat,
  get_current_view,
  add_user_click
} from "./../../../store/actions/ChatbotAction";
import { connect } from "react-redux";
import compose from "recompose/compose";
import ChatbotButtonsForUser from "./ChatbotButtonsForUser/ChatbotButtonsForUser";
const styles = {
  root: {
    padding: "0px 28px 0px 0px"
    // width: 675,
  },
  slide1: {
    width: 120,
    // background: '#FEA900',
    marginRight: 10
  },
  slide2: {
    width: 150,
    background: "#B3DC4A"
  },
  slide3: {
    width: 150,
    background: "#6AC0FF"
  },
  slideStyle: {
    width: "auto !important"
  }
};
class OnlyMessageView extends React.Component {
  constructor() {
    super();
    this.state = {
      tabIndex: 0,
      clickquickreplybutton: "",
      senddata: {
        sentByMe: true,
        text: "",
        loading: false,
        viewType: "",
        clickable: false,
        data: null
      }
    };
  }
  handleMainChangeIndex(tabIndex) {
    console.log(tabIndex);
    this.setState({
      tabIndex
    });
  }
  dispatchaction = reply => {
    this.props.add_user_click(reply, this.props.i);
  };
  onhandletextreply = (reply, viewtype) => {
    return (
      this.setState({ clickquickreplybutton: reply }),
      this.dispatchaction(reply),
      this.props.get_current_view(reply),
      this.setState(
        prevState => ({
          senddata: {
            ...prevState.senddata,
            text: reply,
            viewType: viewtype
          }
        }),
        () => {
          this.props.save_chat(this.state.senddata);
        }
      )
    );
  };
  render() {
    const { classes, theme } = this.props;
    return (
      <div style={{ width: "100%", display: "inline-block" }}>
        <div
          className={
            this.props.sentByMe ? "messagesendbyuser" : "messagesendbybot"
          }
        >
          {this.props.message}
          {/* <span className="messagelastpoint"></span>*/}
        </div>
        <div>
          {/* this is message  here only
             {this.props.data.message} */}
          {/* {console.log(this.props.data.keywords , "keywords")} */}
        </div>
        {console.log(this.props.data)}
        <div>
          {this.props.view === "tests_first_test" &&
          this.props.data !== null ? (
            ""
          ) : this.props.lastlength === this.props.i &&
            this.props.keywords &&
            this.props.keywords !== null ? (
            <ChatbotButtonsForUser>
              {this.props.keywords.map(val => {
                console.log(this.props.keywords, "this is keywords coming");
                return (
                  <div>
                    <button
                      onClick={() => {
                        this.onhandletextreply(val);
                      }}
                      className="btndesignforbottom"
                    >
                      {val}
                    </button>
                  </div>
                );
              })}
            </ChatbotButtonsForUser>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
OnlyMessageView.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {};
};
export default compose(
  connect(
    mapStateToProps,
    { save_chat, get_current_view, add_user_click }
  )
)(OnlyMessageView);
