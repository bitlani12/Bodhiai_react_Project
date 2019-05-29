import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Grid } from "@material-ui/core";
import { Chip } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import User from "./../../../images/user.png";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { get_current_view } from "./../../../store/actions/ChatbotAction";
import compose from "recompose/compose";
import { connect } from "react-redux";
const AutoPlaySwipeableViews = SwipeableViews;
const token = localStorage.getItem("Token");
const AuthString = `Token ${token}`;
const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
  }
];

const styles = {
  root: {
    padding: "0 20px 0px 0px",
    width: "auto"
  },
  slideContainer: {
    padding: "0 0px",
    width: "auto"
  },
  slide: {
    paddingRight: 4,
    minHeight: 100,
    color: "#fff"
  },
  slide1: {
    // backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: "#B3DC4A"
  },
  slide3: {
    backgroundColor: "#6AC0FF"
  },
  img: {
    // height: 400,
    display: "block",
    overflow: "hidden",
    width: "100%"
  },
  chip: {
    //  margin: 10,
    backgroundColor: "white",
    padding: "25px 5px 25px 10px",
    borderRadius: 100,
    boxShadow: "2px 2px 10px 1px #e0dfdf",
    marginTop: 5,
    border: "solid white 1px"
  }
};

class ChallengeView extends React.Component {
  state = {
    activeStep: 0,
    open: false
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

  handleStepChange = activeStep => {
    console.log(activeStep);
    this.setState({ activeStep });
  };
  handlechallenge = username => {
    console.log("hii", username);
    this.setState({ loading: true, open: true });
    return axios
      .post(
        "https://www.bodhiai.in/api/basicinformation/challenge_student/",
        { username: username },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        //  console.log(response)
        //  this.setState({loading: false})
        this.props.get_current_view(username);
        // dispatch(fetchmaindashboardsubjects(response.data)),
        console.log("this is called or not ");
      })
      .catch(error => {
        console.log(error.config);
      });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = this.props.product && this.props.product.all_images.length;
    let productimage = this.props.product && this.props.product.all_images;
    return (
      <div style={{}}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
          style={styles.root}
          slideStyle={styles.slideContainer}
        >
          {this.props.data &&
            this.props.data.data.map((step, index) => (
              <div
                key={step.label}
                style={Object.assign({}, styles.slide, styles.slide1)}
              >
                <div>
                  <Chip
                    avatar={
                      step.photo === null ? (
                        <Avatar
                          alt="B"
                          src={User}
                          style={{ backgroundColor: "gray", height: 35 }}
                        />
                      ) : (
                        <Avatar
                          alt="A"
                          src={step.photo}
                          style={{ backgroundColor: "gray", height: 35 }}
                        />
                      )
                    }
                    label={
                      <div>
                        <div style={{ fontSize: 16 }}>{step.name}</div>{" "}
                        <div style={{ fontSize: 14, fontFamily: "serif" }}>
                          {" "}
                          Rank : {step.rank}
                        </div>{" "}
                      </div>
                    }
                    className={classes.chip}
                    variant="outlined"
                    onClick={() => {
                      this.handlechallenge(step.username);
                    }}
                  />
                </div>
              </div>
            ))}
        </AutoPlaySwipeableViews>
        <div style={{ textAlign: "center" }}>
          {"<"}----- Click To Challenge Or Swipe ----->
        </div>

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={
            <span id="message-id" style={{ fontSize: 18 }}>
              Challenge Sent
            </span>
          }
          action={[
            <Button
              key="undo"
              color="secondary"
              size="small"
              onClick={this.handleClose}
            >
              {/* UNDO */}
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}
ChallengeView.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
const mapStateToProps = () => {
  return {};
};
export default compose(
  connect(
    mapStateToProps,
    { get_current_view }
  ),
  withStyles(styles, { withTheme: true })
)(ChallengeView);
