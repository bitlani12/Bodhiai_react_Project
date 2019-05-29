import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";

import Close from "@material-ui/icons/Close";
import logo2 from "./../../../images/logo2.png";
import "./../../ChatBot2/ChatBot2.css";
import Loadable from "react-loadable";
import "./../TakeTest.css";
import Loading from "../../Loading/Loading";
import Loading3 from "../../Loading/Loading3";

const Loads = ({ isLoading, error }) => {
  return <div />;
};
const MainDashboardMobile = Loadable({
  loader: () => import("./MainDashboardforMobile/MainDashboardMobile"),
  loading: Loads
});
const MainDashboardSubject = Loadable({
  loader: () => import("./MainDashboardSubject/MainDashboardSubject"),
  loading: Loads
});
const fetchDashboardDataAccuracy = Loadable({
  loader: () =>
    import("./../../../store/actions/dashboardaction").then(
      module => module.fetchDashboardDataAccuracy
    ),
  loading: <div> loading..</div>
});
const ChatBot2 = Loadable({
  loader: () => import("../../ChatBot2/ChatBot2"),
  loading: Loads
});

const MainDashboardTestRank = Loadable({
  loader: () => import("./MainDashboardTestRank"),
  loading: Loads
});
const GroupDetail = Loadable({
  loader: () => import("./GroupDetail/GroupDetail"),
  loading: Loads
});
const RecommendationInDashboard = Loadable({
  loader: () => import("./Recommendation/RecommendationInDashboard"),
  loading: Loads
});

const DialogueForIitJeeExam = Loadable({
  loader: () => import("./DialogueForIitJeeExam/DialogueForIitJeeExam"),
  loading: Loads
});
class MainDashboard extends Component {
  state = {
    width: window.innerWidth,
    heights: window.innerHeight,
    openchat: false,
    idforani: 0,
    before_load_website: true
  };
  handlechatbot = () => {
    console.log("this is chatbot", this.state.openchat);
    this.setState({
      openchat: !this.state.openchat,
      idforani: this.state.idforani + 1
    });
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ before_load_website: false });
    }, 3000);
  }
  componentWillMount() {
    this.handleWindowSizeChange();
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //     // return this.props.children !== nextProps.children;
  //   }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth, heights: window.innerHeight });
  };
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  render() {
    let checkbatch = localStorage.getItem("batch");
    const isMobile = this.state.width <= 500;
    return (
      <React.Fragment>
        {/* {this.state.before_load_website ? (
          <div style={{}}>
            <Loading3 />
          </div>
        ) : (
          ""
        )} */}
        <div style={{ backgroundColor: "white", overflow: "auto" }}>
          {isMobile ? (
            <div>
              <MainDashboardMobile heights={this.state.heights} />
            </div>
          ) : (
            <div>
              <Grid
                container
                style={{ paddingBottom: 40, position: "relative" }}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={12}
                  md={12}
                  style={{ backgroundColor: "white" }}
                >
                  <MainDashboardSubject />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={12}
                  md={12}
                  style={{ backgroundColor: "white" }}
                >
                  <GroupDetail />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={12}
                  md={12}
                  style={{ backgroundColor: "white" }}
                >
                  <MainDashboardTestRank />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={12}
                  md={12}
                  style={{ backgroundColor: "white" }}
                >
                  <RecommendationInDashboard />
                </Grid>
              </Grid>
              {/* {hii} */}
              <div />

              {this.state.openchat ? <ChatBot2 /> : ""}
              {this.state.openchat ? (
                <div>
                  <button
                    className="fabcancel"
                    color={"primary"}
                    onClick={() => this.handlechatbot()}
                  >
                    <Close />{" "}
                  </button>
                </div>
              ) : (
                <div className="buttonss hover">
                  <button
                    className="fab "
                    color={"primary"}
                    onClick={() => this.handlechatbot()}
                  >
                    <img src={logo2} height={50} />
                  </button>
                </div>
              )}
            </div>
          )}
          {/* </Tooltip> */}
          {/* {checkbatch === "24janmorning" || checkbatch === "24janevening" ? (
            <DialogueForIitJeeExam />
          ) : (
            ""
          )} */}
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.dashboard.accuracy,
    fetched: state.dashboard.fetcheddd
  };
};

export default connect(
  mapStateToProps,
  { fetchDashboardDataAccuracy }
)(MainDashboard);
