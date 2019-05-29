import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import logo from "./../../images/logo.png";
import HeaderLinks from "./HeaderLinks.jsx";

import dashboardRoutes from "routes/dashboard.jsx";

class Header extends Component {
  constructor(props) {
    super(props);
    this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
    this.state = {
      sidebarExists: false
    };
  }
  mobileSidebarToggle(e) {
    if (this.state.sidebarExists === false) {
      this.setState({
        sidebarExists: true
      });
    }
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function() {
      this.parentElement.removeChild(this);
      // document.documentElement.classList.toggle("nav-open");
      document.documentElement.classList.remove("nav-open");
    };
    document.body.appendChild(node);
  }
  getBrand() {
    var name;
    dashboardRoutes.map((prop, key) => {
      if (prop.collapse) {
        prop.views.map((prop, key) => {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
          return null;
        });
      } else {
        if (prop.redirect) {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        } else {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        }
      }
      return null;
    });
    return name;
  }
  render() {
    return (
      <Navbar fluid style={{ backgroundColor: "white" }}>
        <Navbar.Header>
          <Navbar.Brand>
            <a
              href="#"
              style={{
                color: "black",
                fontWeight: 800,
                paddingLeft: "10px",
                display: "inline"
              }}
            >
              {/*this.getBrand()*/} BodhiAI
            </a>
          </Navbar.Brand>
          <Navbar.Toggle onClick={this.mobileSidebarToggle} />
        </Navbar.Header>
        <Navbar.Collapse>
          <HeaderLinks />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;
