import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotificationSystem from "react-notification-system";
import { fetchDashboardData } from "./../../store/actions/dashboardaction";
//import Header from "components/Header/Header";
//import Footer from "components/Footer/Footer";
//import Sidebar from "components/Sidebar/Sidebar";
import { style } from "variables/Variables.jsx";
//import OnlineTest from './../../views/OnlineTest/OnlineTest'
import dashboardRoutes from "routes/dashboard.jsx";
import { connect } from "react-redux";
//import Result from './../../views/OnlineTest/Result/Result'
import Login from "../../views/Login/Login";
//import IndividualProfile from "../../views/Dashboard/MainDashboard/Profile/IndividualProfile";
//import IndividualSubject from "../../views/Dashboard/MainDashboard/MainDashboardSubject/IndividualSubject";
//import Recommendations from "../../views/Recommendations/Recommendation";
//import DashBoardTestPerformanceMoreDetails from "../../views/Dashboard/DashBoardTestPerformanceMoreDetails";
//import Testip from "../../views/Testip/Testip";
//import TestandLearning from "../../views/Dashboard/MainDashboard/MainDashboardSubject/TestandLearning";

import Loadable from "react-loadable";

const Loads = ({ isLoading, error }) => {
  return <div> </div>;
};
const TestandLearning = Loadable({
  loader: () =>
    import(
      "../../views/Dashboard/MainDashboard/MainDashboardSubject/TestandLearning"
    ),
  loading: Loads
});
const Testip = Loadable({
  loader: () => import("../../views/Testip/Testip"),
  loading: Loads
});
const DashBoardTestPerformanceMoreDetails = Loadable({
  loader: () =>
    import("../../views/Dashboard/DashBoardTestPerformanceMoreDetails"),
  loading: Loads
});
const Recommendations = Loadable({
  loader: () => import("../../views/Recommendations/Recommendation"),
  loading: Loads
});
const IndividualSubject = Loadable({
  loader: () =>
    import(
      "../../views/Dashboard/MainDashboard/MainDashboardSubject/IndividualSubject"
    ),
  loading: Loads
});
const IndividualProfile = Loadable({
  loader: () =>
    import("../../views/Dashboard/MainDashboard/Profile/IndividualProfile"),
  loading: Loads
});

const Result = Loadable({
  loader: () => import("./../../views/OnlineTest/Result/Result"),
  loading: Loads
});

const OnlineTest = Loadable({
  loader: () => import("./../../views/OnlineTest/OnlineTest"),
  loading: Loads
});
const Sidebar = Loadable({
  loader: () => import("components/Sidebar/Sidebar"),
  loading: Loads
});
const Footer = Loadable({
  loader: () => import("components/Footer/Footer"),
  loading: Loads
});

const Header = Loadable({
  loader: () => import("components/Header/Header"),
  loading: Loads
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleNotificationClick = this.handleNotificationClick.bind(this);
    this.state = {
      _notificationSystem: null
    };
  }

  handleNotificationClick(position) {
    document.documentElement.classList.toggle("nav-open");
    var color = Math.floor(Math.random() * 4 + 1);
    var level;
    switch (color) {
      case 1:
        level = "success";
        break;
      case 2:
        level = "warning";
        break;
      case 3:
        level = "error";
        break;
      case 4:
        level = "info";
        break;
      default:
        break;
    }
    this.state._notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s-gift" />,
      message: (
        <div>
          Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for
          every web developer.
        </div>
      ),
      level: level,
      position: position,
      autoDismiss: 15
    });
  }
  componentDidMount() {
    //this.props.fetchDashboardData();

    this.setState({ _notificationSystem: this.refs.notificationSystem });
    var _notificationSystem = this.refs.notificationSystem;
    var color = Math.floor(Math.random() * 4 + 1);
    var level;
    switch (color) {
      case 1:
        level = "success";
        break;
      case 2:
        level = "warning";
        break;
      case 3:
        level = "error";
        break;
      case 4:
        level = "info";
        break;
      default:
        break;
    }
    _notificationSystem
      ? _notificationSystem.addNotification({
          title: <span data-notify="icon" className="pe-7s-gift" />,
          message: (
            <div>
              Welcome to <b>BodhiAI</b>
            </div>
          ),
          level: level,
          position: "tr",
          autoDismiss: 15
        })
      : "";
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    console.log(this.props.auth.isAuthenticated, "this is authentication");
    if (this.props.auth.isAuthenticated === true) {
      return (
        <div>
          <div className="wrapper">
            <NotificationSystem ref="notificationSystem" style={style} />

            <Sidebar {...this.props} />
            <div
              id="main-panel"
              className="main-panel"
              ref="mainPanel"
              style={{ backgroundColor: "white" }}
            >
              <Header {...this.props} />
              <Switch>
                <Route exact path="/test" component={Testip} />
                <Route
                  exact
                  path="/recommendation"
                  component={Recommendations}
                />
                <Route exact path="/checkingip" component={Testip} />
                <Route
                  exact
                  path="/onlinetest/:test_id"
                  component={OnlineTest}
                />
                <Route
                  exact
                  path="/result/:test_id/:subject"
                  component={Result}
                />
                <Route
                  exact
                  path="/individualprofile"
                  component={IndividualProfile}
                />
                <Route
                  exact
                  path="/individualsubject/:subject"
                  component={IndividualSubject}
                />
                <Route
                  exact
                  path="/testperformance/:test_id/:subject"
                  component={DashBoardTestPerformanceMoreDetails}
                />
                <Route
                  exact
                  path="/testandlearning/:subject/:chapter"
                  component={TestandLearning}
                />
                {dashboardRoutes.map((prop, key) => {
                  if (prop.name === "Notifications")
                    return (
                      <Route
                        path={prop.path}
                        exact
                        key={key}
                        render={routeProps => (
                          <prop.component
                            {...routeProps}
                            handleClick={this.handleNotificationClick}
                          />
                        )}
                      />
                    );
                  if (prop.redirect)
                    return (
                      <Redirect from={prop.path} to={prop.to} key={key} exact />
                    );
                  return (
                    <Route
                      path={prop.path}
                      component={prop.component}
                      key={key}
                      exact
                    />
                  );
                })}
              </Switch>
              <Footer />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <Switch>
          <Redirect
            from={this.props.location.pathname}
            to={"/login"}
            component={Login}
            exact
          />
          ;
        </Switch>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    data: state.dashboard.data,
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { fetchDashboardData }
)(Dashboard);
