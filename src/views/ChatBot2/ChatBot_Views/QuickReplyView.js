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
import Grid from "@material-ui/core/Grid";
import Pagination from "./Pagination/Pagination";
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
    width: "auto !important",
    paddingBottom: 20
  }
};
class QuickReplyView extends React.Component {
  constructor() {
    super();
    this.state = {
      tabIndex: 0,
      disable: false,
      arrayval: 0,
      checki: 0,
      x: 0,
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
  handleMainChangeIndex = tabIndex => {
    console.log(tabIndex, "this is index");
    this.setState({ tabIndex });
  };
  dispatchaction = reply => {
    this.props.add_user_click(reply, this.props.i);
  };
  onhandlequickreplies = (reply, viewtype) => {
    return (
      this.setState({ clickquickreplybutton: reply, disable: true }),
      this.props.get_current_view(reply),
      this.dispatchaction(reply),
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

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };
  handleBacks = () => {
    // console.log(this.prevState.arrayval)
    this.setState(prevState => {
      this.setState({
        arrayval: this.state.arrayval + 0.58,
        checki: prevState.checki + 1
      });
    });
    console.log(this.state.arrayval, "arrayval");
  };
  render() {
    const { classes, theme } = this.props;
    return (
      <div>
        {/* <div className="messagesendbybot ">{this.props.data.message} */}
        {/* <span className="messagelastpoint"></span>*/}
        {/* </div>  */}
        <div>
          <SwipeableViews
            style={styles.root}
            slideStyle={styles.slideStyle}
            onChangeIndex={this.handleMainChangeIndex.bind(this)}
            index={this.state.tabIndex}
            enableMouseEvents="true"
          >
            {this.props.data &&
              this.props.data.data.quick_reply.map((val, i) => {
                return (
                  <Grid item>
                    <div style={{ textAlign: "center" }}>
                      {i === this.state.checki && this.handleBacks()}
                      <div
                        key={val.button_text}
                        style={Object.assign({}, styles.slide, styles.slide1)}
                      >
                        <ListItem
                          button
                          onClick={() => {
                            this.onhandlequickreplies(
                              val.hidden_variable,
                              "messageView"
                            );
                          }}
                          style={{
                            backgroundColor: "white",
                            textAlign: "center",
                            margin: 5,
                            boxShadow: "2px 2px 10px 1px #cec7c7",
                            minHeight: 110
                          }}
                          disabled={this.props.disable || this.state.disable}
                          className={`${
                            this.props.disable ? "disablebuttonchatbot" : ""
                          }`}
                        >
                          <div style={{ margin: "auto", overflow: "hidden" }}>
                            <div>
                              <img
                                src={val.image}
                                alt={val.button_text}
                                style={{ objectFit: "contain" }}
                                height={50}
                                width={50}
                              />
                            </div>
                            <div> {val.button_text} </div>
                          </div>
                        </ListItem>
                      </div>
                    </div>
                  </Grid>
                );
              })}
          </SwipeableViews>
          <Pagination
            dots={this.props.data.data.quick_reply.length - this.state.arrayval}
            index={this.state.tabIndex}
            onChangeIndex={this.handleMainChangeIndex}
          />
          {/* {this.props.data.data.quick_reply.length > 2 ? <div style={{textAlign: "center" , marginTop: -15}}>{"<"}----- Swipe -----></div> : "" } */}
        </div>
        {/* <div>{this.state.clickquickreplybutton}</div> */}
      </div>
    );
  }
}
QuickReplyView.propTypes = {
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
)(QuickReplyView);
