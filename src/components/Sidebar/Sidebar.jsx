import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import HeaderLinks from "../Header/HeaderLinks.jsx";

import imagine from "assets/img/sidebar-3.jpg";
import logo from "assets/img/reactlogo.png";
import { getstudentprofile } from "../../store/actions/sidebaraction";
import Grid from "@material-ui/core/Grid";
import dashboardRoutes from "routes/dashboard.jsx";
import resetpasw from "./../../images/resetpasw.png";
import dashboard from "./../../images/dashboard.png";
import alltest from "./../../images/alltest.png";
import test2 from "./../../images/test2.png";
import logout from "./../../images/logout.png";
import MESSAGE from "./../../images/MESSAGE.png";
import myperformance from "./../../images/myperformance.png";
import smarttest from "./../../images/smarttest.png";
import weakareas from "./../../images/weakareas.png";
import user from "./../../images/user.png";
import learning from "./../../images/learning.png";
import challenge from "./../../images/challenge.png";
import "./Sidebar.css";
import Loading from "./../../../src/views/Loading/Loading";
import { Button } from "@material-ui/core";
import RightIcon from "@material-ui/icons/ArrowRight";
import UserProfile from "../../views/UserProfile/UserProfile.js";
import progre from "./../../images/progre.png";
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleNavOpen = React.createRef();
    this.state = {
      width: window.innerWidth,
      showuserprofilemodal: false,
      sidebarExists: false
    };
  }
  activeRoute = routeName => {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    this.props.getstudentprofile();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  profile = () => {
    this.setState({ showuserprofilemodal: !this.state.showuserprofilemodal });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  // close sidebar onselect
  sidebarclose = e => {
    // if (this.state.sidebarExists === false) {
    //   this.setState({
    //     sidebarExists: true
    //   });
    // }
    // e.preventDefault();
    // e === 1 && document.documentElement.classList.toggle("nav-open");
    //var node = document.createElement("div");
    // node.id = "bodyClick";
    // node.onclick = function() {
    //   this.parentElement.removeChild(this);
    //   document.documentElement.classList.toggle("nav-open");
    // };
    //document.body.appendChild(node);
  };
  // to work on
  mobileSidebarToggle = (e, close) => {
    // console.log("this is scrolling");
    // if (this.state.sidebarExists === false) {
    //   this.setState({
    //     sidebarExists: true
    //   });
    // }
    // e.preventDefault();
    console.log(
      document.documentElement.classList.toggle("nav-open"),
      "toggle app bodhiai"
    );
    document.documentElement.classList.toggle("nav-open");
    // this.documentElement.removeChild("nav-open");
    // let node = document.createElement("div");
    // node.id = "bodyClick";
    // node.onclick = function() {
    //   this.parentElement.removeChild(this);
    //   document.documentElement.classList.toggle("nav-open");
    // };
    // document.body.appendChild(node);
  };

  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + +")"
    };
    // const name = this.props.data.fullName
    const mychech = "mukeshmukesh bitlani";
    const firstname =
      this.props.data.fullName && this.props.data.fullName.split(" ");
    const name = this.props.data.fullName && firstname[0];

    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color="black"
        data-image={imagine}
      >
        {}
        <div className="sidebar-background" style={sidebarBackground} />
        <div className="logo">
          <a onClick={this.profile} className="simple-text logo-normal">
            {this.props.fetched ? (
              <div>
                <Grid container style={{ marginBottom: -10 }}>
                  <Grid
                    item
                    xs={11}
                    sm={11}
                    lg={11}
                    md={11}
                    className="sidebarprofileset"
                    style={{
                      textAlign: "left",
                      paddingLeft: -10,
                      display: "inline",
                      marginLeft: -20
                    }}
                    justify="left"
                    align="left"
                  >
                    {this.props.data.photo_url === null ||
                    this.props.data.photo_url === "" ? (
                      <img
                        src={user}
                        height={80}
                        width={80}
                        className="sidebarprofileimg"
                      />
                    ) : (
                      <img
                        src={this.props.data.photo_url}
                        height={80}
                        width={80}
                        className="sidebarprofileimg"
                      />
                    )}
                    <span style={{ paddingLeft: 5, textAlign: "center" }}>
                      {this.props.data.fullName && name.length > 8
                        ? name.substr(0, 6) + "..."
                        : name}
                    </span>{" "}
                    {/* <div style={{paddingTop: 10}}>{this.props.data.fullName}</div> */}
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    sm={1}
                    lg={1}
                    md={1}
                    justify="right"
                    align="right"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div>
                      {" "}
                      <RightIcon
                        style={{ fontSize: 40, marginLeft: 12, color: "white" }}
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
            ) : (
              <div>Loading... </div>
            )}
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {this.state.width <= 991 ? <HeaderLinks /> : null}
            {dashboardRoutes.map((prop, key) => {
              const reset = prop.icon === "resetpasw" ? resetpasw : "";
              const dash = prop.icon === "dashboard" ? dashboard : "";
              const test = prop.icon === "alltest" ? alltest : "";
              const log = prop.icon === "logout" ? logout : "";
              const message = prop.icon === "MESSAGE" ? MESSAGE : "";
              const performance =
                prop.icon === "myperformance" ? myperformance : "";
              const smart = prop.icon === "smarttest" ? smarttest : "";
              const weak = prop.icon === "weakareas" ? weakareas : "";
              const maintest = prop.icon === "test2" ? test2 : "";
              const chaleng = prop.icon === "challenge" ? challenge : "";
              const progress = prop.icon === "Progress" ? progre : "";
              const learn = prop.icon === "learning" ? learning : "";
              if (!prop.redirect)
                return (
                  <li
                    className={
                      prop.upgrade
                        ? "active active-pro"
                        : this.activeRoute(prop.path)
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.path}
                      className="nav-link"
                      activeClassName="active"
                      ref={this.handleNavOpen}
                      onClick={e => this.mobileSidebarToggle(e, "close")}
                    >
                      {/* <i className={prop.icon}> */}
                      <i>
                        {prop.icon === "" ? (
                          ""
                        ) : (
                          <img
                            src={
                              reset ||
                              dash ||
                              test ||
                              log ||
                              message ||
                              performance ||
                              smart ||
                              weak ||
                              maintest ||
                              learn ||
                              chaleng ||
                              progress
                            }
                            height={22}
                            width={20}
                          />
                        )}
                      </i>
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              return null;
            })}
          </ul>
        </div>
        {this.state.showuserprofilemodal ? (
          <UserProfile
            handleClose={this.handleClose}
            profile={this.profile}
            open={this.state.showuserprofilemodal}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.sidebar.sidebarprofile,
    fetched: state.sidebar.fetch
  };
};

export default connect(
  mapStateToProps,
  { getstudentprofile }
)(Sidebar);
