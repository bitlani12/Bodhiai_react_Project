import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
//import Stepper from "@material-ui/core/Stepper";
//import Step from "@material-ui/core/Step";
//import StepLabel from "@material-ui/core/StepLabel";
//import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import { Redirect } from "react-router-dom";
//import FormControl from "@material-ui/core/FormControl";
//import FormLabel from "@material-ui/core/FormLabel";

import compose from "recompose/compose";
import { setLanguageandSubject } from "../../store/actions/setinitiallanguageandsubject";
import { connect } from "react-redux";
import "./Stepper.css";
import Loadable from "react-loadable";

const Loads = ({ isLoading, error }) => {
  return <div />;
};
const FormLabel = Loadable({
  loader: () => import("@material-ui/core/FormLabel"),
  loading: Loads
});
const FormControl = Loadable({
  loader: () => import("@material-ui/core/FormControl"),
  loading: Loads
});
const StepLabel = Loadable({
  loader: () => import("@material-ui/core/StepLabel"),
  loading: Loads
});
const Step = Loadable({
  loader: () => import("@material-ui/core/Step"),
  loading: Loads
});
Stepper;
const Stepper = Loadable({
  loader: () => import("@material-ui/core/Stepper"),
  loading: Loads
});
const styles = theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

function getSteps() {
  return ["Select Language", "Select Subject", "Go For Test"];
}

class HorizontalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    skipped: new Set(),
    err: false,
    valueselected: "",
    languageselected: "",
    subjectselected: ""
  };
  onchange1 = e => {
    console.log(e.target.value);
    this.setState(
      {
        languageselected: e.target.value,
        valueselected: e.target.value
      },
      () => {
        this.postapi();
      }
    );
  };
  onchange2 = e => {
    console.log(e.target.value);
    this.setState(
      {
        subjectselected: e.target.value,
        valueselected: e.target.value
      },
      () => {
        this.postapi(1);
      }
    );
  };
  redirec = () => {
    document.location = "/";
  };
  getStepContent = step => {
    switch (step) {
      case 0:
        return (
          <React.Fragment>
            <div className="firststep">
              <div>
                <div>
                  <FormControl component="fieldset" required>
                    <FormLabel component="legend">
                      <h3> Language </h3>
                    </FormLabel>
                    <div className="languageandsubjectselect">
                      <span className="opt">
                        {" "}
                        <button
                          id="radio1"
                          name="language"
                          value="Hindi"
                          onClick={e => this.onchange1(e)}
                          checked={this.state.valueselected === "Hindi"}
                          className={`radiobtn btn-ghost btn-blue + ${
                            this.state.valueselected === "Hindi" ? "color" : ""
                          }`}
                        >
                          Hindi
                        </button>
                      </span>
                      <span className="opt">
                        {" "}
                        <button
                          type="radio"
                          name="language"
                          value="English"
                          onClick={e => this.onchange1(e)}
                          checked={this.state.valueselected === "English"}
                          className={`radiobtn btn-ghost btn-blue + ${
                            this.state.valueselected === "Hindi" ? "color" : ""
                          }`}
                        >
                          English
                        </button>{" "}
                      </span>
                    </div>
                  </FormControl>
                </div>
                {/* <span className="btnnextstep">  <button onClick= {() => {this.postapi() } } className="btninselectlanguageandsubject"> 
                  Next
                </button> </span>  */}
              </div>
            </div>
          </React.Fragment>
        );
      case 1:
        return (
          <div className="firststep">
            <div>
              <FormControl component="fieldset" required>
                <FormLabel component="legend">
                  <h3>Subject</h3>
                </FormLabel>
                <div className="languageandsubjectselect">
                  <span className="opt">
                    {" "}
                    <button
                      type="radio"
                      name="gender"
                      value="SSC"
                      onClick={e => this.onchange2(e)}
                      checked={this.state.valueselected === "SSC"}
                      className={`radiobtn btn-ghost btn-blue + ${
                        this.state.valueselected === "Hindi" ? "color" : ""
                      }`}
                    >
                      SSC{" "}
                    </button>
                  </span>
                  <span className="opt">
                    {" "}
                    <button
                      type="radio"
                      name="gender"
                      value="NEET"
                      onClick={e => this.onchange2(e)}
                      checked={this.state.valueselected === "onChange"}
                      className={`radiobtn btn-ghost btn-blue + ${
                        this.state.valueselected === "Hindi" ? "color" : ""
                      }`}
                    >
                      NEET
                    </button>
                  </span>
                  <span className="opt">
                    {" "}
                    <button
                      type="radio"
                      name="gender"
                      value="IITJEE"
                      onClick={e => this.onchange2(e)}
                      checked={this.state.valueselected === "IITJEE"}
                      className={`radiobtn btn-ghost btn-blue + ${
                        this.state.valueselected === "Hindi" ? "color" : ""
                      }`}
                    >
                      IITJEE
                    </button>{" "}
                  </span>
                </div>
              </FormControl>

              {/* <span className="btnnextstep">  <button onClick= {() => {this.postapi(1) } } className="btninselectlanguageandsubject" > 
                  Next
                </button> </span>  */}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="laststep">
            <div className="gofortest"> All Steps completed Go For Test </div>

            <div className="gofortest">
              <button className="gobtn" onClick={() => this.redirec()}>
                {" "}
                Go{" "}
              </button>{" "}
            </div>
          </div>
        );
      default:
        return "Unknown step";
    }
  };
  postapi(number) {
    if (this.state.valueselected === "") {
      this.setState({
        err: true
      });
      console.log(this.state.err);
    } else {
      this.handleNext();
      let language = this.state.languageselected;
      let subject = this.state.subjectselected;
      console.log(
        "here is else ",
        language,
        subject,
        language !== "",
        subject !== ""
      );

      this.setState({ valueselected: "" });
      if (language !== "" && subject !== "") {
        switch (number) {
          case 1:
            console.log(
              language,
              subject,
              "here is languae and subject =============="
            );
            return (
              number === 1
                ? this.props.setLanguageandSubject(language, subject)
                : "",
              this.setState({ valueselected: "" })
            );
          default:
            return "Unknown step";
        }
      }
    }
  }

  isStepOptional = step => {
    return step === 5;
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }
    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped
      };
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            if (this.isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>
                  <h4>{label}</h4>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {
            <div>
              <Typography className={classes.instructions}>
                <h3>{this.getStepContent(activeStep)}</h3>
              </Typography>
              <div>
                {this.state.err ? "Select Your Favourite option" : ""}
                {/* <button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </button> */}
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

HorizontalLinearStepper.propTypes = {
  classes: PropTypes.object
};
const mapStateToProps = state => {
  return {
    data: state.progress.progress,
    fetched: state.onlinetest.fetchedonlinetest
  };
};
//export default withStyles(styles)(HorizontalLinearStepper);
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { setLanguageandSubject }
  )
)(HorizontalLinearStepper);
