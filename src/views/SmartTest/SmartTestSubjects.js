import React from "react";
import compose from "recompose/compose";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { fetchSmartTestData } from "../../store/actions/Onlinetest";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import shortid from "shortid";
import { Animated } from "react-animated-css";
import Startsmarttest from "./Startsmarttest";
import Loading from "./../Loading/Loading";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "33.33%"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
});

class SmartTestSubjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionshow: false,
      id: 0,
      subject: "",
      showmodal: false
    };
  }

  buttonshow = subject => {
    this.setState({ optionshow: true }),
      //  this.setState({id: id }),
      this.setState({ subject: subject });
    console.log(subject, "this is subject");
    this.props.fetchSmartTestData(subject);
    this.setState({ subject: "", showmodal: true });
  };

  onshowmodal = () => {
    this.setState({ showmodal: !this.state.showmodal });
    console.log("yes i am here", this.state.showmodal);
  };

  render(props) {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ExpansionPanel defaultExpanded>
          {/* <ExpansionPanelSummary >
          <div className={classes.column}>
            <Typography className={classes.heading}>Location</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Select trip destination</Typography>
          </div>
        </ExpansionPanelSummary> 
      
        
        <ExpansionPanelActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </ExpansionPanelActions> */}
          <div className={classes.column}>
            {/* <div className={classes.heading} > Location </div> */}
          </div>
          <div className={classes.column}>
            {/* <div className={classes.secondaryHeading + "text-center"} >Click on Subject</div> */}
          </div>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column} />

            <li>
              {this.props.data.subjects ? (
                this.props.data.subjects.map(val => (
                  <Chip
                    label={val}
                    style={{ fontSize: 16, margin: 10 }}
                    onClick={() => this.buttonshow(val)}
                    key={shortid.generate()}
                    color="secondary"
                    variant="outlined"
                    div={<div> </div>}
                  />
                ))
              ) : (
                <div>
                  <Loading />
                </div>
              )}{" "}
            </li>
            {console.log(this.props.data.subjects)}

            {/* <Chip label={props.val}  style={{fontSize:16 , margin:10}}  color="secondary"
        variant="outlined" div ={<div> </div> }/> */}

            <div className={classNames(classes.column, classes.helper)}>
              <Typography variant="caption" style={{ fontSize: 20 }}>
                Click on any Subject to see test according to your weakness
                <br />
                {/* <a href="#sub-labels-and-columns" className={classes.link}>
                Learn more
              </a> */}
              </Typography>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {
          //this is show button
        }
        {this.state.optionshow === false ? (
          ""
        ) : (
          <div className="text-center">
            <Startsmarttest
              showmodal={this.state.showmodal}
              onshowmodal={this.onshowmodal}
            />
          </div>
        )}
      </div>
    );
  }
}

SmartTestSubjects.propTypes = {
  classes: PropTypes.object.isRequired
};

//export default withStyles(styles)(DetailedExpansionPanel);

const mapStateToProps = state => {
  return {
    data: state.onlinetest.smarttestsubject,
    fetched: state.onlinetest.fetchedsmarttestsubject
  };
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { fetchSmartTestData }
  )
)(SmartTestSubjects);
