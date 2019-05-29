import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { fetchMyProgressData } from "../../store/actions/myprogress";
import { connect } from "react-redux";
import "./WeakAreas.css";
import Loadable from "react-loadable";
import { Animated } from "react-animated-css";
import CallingChart from "./callingchart";
const Loads = ({ isLoading, error }) => {
  return <div />;
};
// const CallingChart = Loadable({
//   loader: () => import("./callingchart"),
//   loading: Loads
// });
const Subjects = Loadable({
  loader: () => import("./Subjects"),
  loading: Loads
});

// import Card from "components/Card/Card.jsx";

class WeakAreas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      recievedate: "",
      showweakness: false
    };
  }

  componentDidMount() {
    this.props.fetchMyProgressData();
  }

  recievedate = date => {
    console.log(date + "this is date");
    this.props.fetchMyProgressDate(date);
  };

  buttonsubject = subject => {
    this.setState({ showweakness: true }),
      this.setState(this.setState({ subject: subject }));
  };
  render() {
    return (
      <div className="content" style={{ backgroundColor: "white" }}>
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Subjects buttonsubject={this.buttonsubject} />
            </Col>
          </Row>
          <Row>
            <Col>
              {this.state.showweakness === false ? (
                ""
              ) : (
                <div className="text-center">
                  <Animated
                    animationIn="zoomInDown"
                    animationOut="wobble"
                    isVisible={true}
                    key={this.state.subject}
                  >
                    <CallingChart subject={this.state.subject} />
                  </Animated>
                </div>
              )}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.progress.progress,
    fetched: state.onlinetest.fetchedonlinetest
  };
};

export default connect(
  mapStateToProps,
  { fetchMyProgressData }
)(WeakAreas);
