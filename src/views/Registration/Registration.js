import React, { Component } from "react";
import { UserRegistration } from "../../store/actions/authentication";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { red } from "@material-ui/core/colors";
import linkedin from "./../../images/linkedin.png";
import facebook from "./../../images/facebook.png";
import twitter from "./../../images/twitter.png";
import logo from "./../../images/logo.png";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
class Registration extends Component {
  constructor(props) {
    super(props);
    // userService.logout();
    this.state = {
      username: "",
      firstname: "",
      password: "",
      mobilenumbererr: false,
      conformpassword: "",
      usernameexisterr: this.props.usernameexist,
      code: "bodhiai",
      passwordshort: false,
      emptyvalueerr: false,
      passwordnotmatcherr: false,
      isLoading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  validateForm() {}
  handleChangeNumber = event => {
    console.log(event.target.value);
    const username = event.target.validity.valid
      ? event.target.value
      : this.state.username;
    this.setState({ username });
  };
  handleChangeName = event => {
    console.log(event.target.value);
    const firstname = event.target.validity.valid
      ? event.target.value
      : this.state.firstname;
    this.setState({ firstname });
  };
  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    setTimeout(() => {
      this.setState({
        emptyvalueerr: false,
        passwordnotmatcherr: false,
        passwordshort: false,
        mobilenumbererr: false
      });
    }, 2500);

    if (
      this.state.username.length <= 0 ||
      this.state.firstname.length <= 0 ||
      this.state.password.length <= 0
    ) {
      return this.setState({ emptyvalueerr: true });
    } else if (this.state.username.length !== 10) {
      return (
        console.log("yes this is working errr"),
        this.setState({ mobilenumbererr: true })
      );
    } else if (this.state.password !== this.state.conformpassword) {
      {
        return this.setState({ passwordnotmatcherr: true });
      }
    } else if (this.state.password.length < 8) {
      {
        return this.setState({ passwordshort: true });
      }
    } else {
      console.log(
        "every thing is perfect",
        this.state.username,
        this.state.firstname,
        this.state.password
      );
      this.props.UserRegistration(
        this.state.username,
        this.state.password,
        this.state.firstname,
        this.state.code
      );
      this.setState({ username: "", password: "" });
    }
  };
  render() {
    let tooltip = (
      <Tooltip id="tooltip">
        <strong>Enter 10 Digit Numbers Only</strong>
      </Tooltip>
    );
    let tooltip2 = (
      <Tooltip id="tooltip">
        <strong>Enter Text Only</strong>
      </Tooltip>
    );
    return (
      <div className="authentication">
        <div className="container">
          <div className=" content-center">
            <div className="row clearfix">
              <Grid container spacing={54}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={6}
                  md={6}
                  className="showmarks"
                  style={{ textAlign: "left" }}
                  justify="center"
                  align="center"
                >
                  <div className="">
                    <div className="company_detail">
                      <div className="logoin">
                        <h4 className="logo">
                          <img
                            src={logo}
                            alt="Logo"
                            height={150}
                            width={150}
                            style={{ marginTop: 40, alignItems: "center" }}
                          />
                          <strong>BodhiAI</strong>{" "}
                        </h4>
                      </div>
                      <h3>
                        Welcome to <strong>BODHIAI</strong>
                      </h3>
                      <p>
                        Access your online test , score performance report,
                        weakness , study materials and recent updates like a
                        Game. Get the ultimate simulated experience of the
                        actual test with complete strength and weakness
                        analysis.
                      </p>
                      <div className="footer">
                        <ul className="social_link list-unstyled">
                          <li>
                            <a href="#" title="LinkedIn">
                              <i
                                className="zmdi zmdi-linkedin"
                                style={{ padding: 10 }}
                              >
                                <img src={linkedin} />
                              </i>
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Facebook">
                              <i
                                className="zmdi zmdi-facebook"
                                style={{ padding: 10 }}
                              >
                                <img src={facebook} />
                              </i>
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Twitter">
                              <i
                                className="zmdi zmdi-twitter"
                                style={{ padding: 10 }}
                              >
                                <img src={twitter} />
                              </i>
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Google plus">
                              <i
                                className="zmdi zmdi-google-plus"
                                style={{ padding: 10 }}
                              >
                                <img src={linkedin} />
                              </i>
                            </a>
                          </li>
                        </ul>
                        <hr />
                        <ul className="list-unstyled">
                          <li>
                            <a href="#" target="_blank" style={{ padding: 10 }}>
                              Contact Us
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank" style={{ padding: 10 }}>
                              About Us
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://www.bodhiai.in"
                              target="_blank"
                              style={{ padding: 10 }}
                            >
                              Website
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={5}
                  lg={5}
                  md={5}
                  className="showmarks"
                  style={{ textAlign: "center" }}
                  justify="center"
                  align="center"
                >
                  <div className=" cardlogin">
                    <div className="card-plain ">
                      <div className="header">
                        <h5>SIGNUP</h5>
                        <hr />
                      </div>
                      <form className="form">
                        <OverlayTrigger placement="left" overlay={tooltip}>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control btn-round"
                              placeholder="Mobile Number"
                              value={this.state.username}
                              name="username"
                              pattern="[0-9]*"
                              onChange={this.handleChangeNumber}
                            />
                            <span className="input-group-addon btn-round">
                              <i className="pe-7s-users" />
                            </span>
                          </div>
                        </OverlayTrigger>

                        <OverlayTrigger placement="left" overlay={tooltip2}>
                          <div className="input-group">
                            <input
                              type="text"
                              placeholder="First Name"
                              name="firstname"
                              className="form-control btn-round"
                              pattern="[A-Za-z]*"
                              value={this.state.firstname}
                              onChange={this.handleChangeName}
                            />
                            <span className="input-group-addon btn-round">
                              <i
                                className="pe-7s-add-user"
                                style={{ padding: -20 }}
                              />
                            </span>
                          </div>
                        </OverlayTrigger>
                        <div className="input-group ">
                          <input
                            type="password"
                            className="form-control btn-round"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                          />
                          <span className="input-group-addon btn-round">
                            <i className="pe-7s-unlock" />
                          </span>
                        </div>
                        <div className="input-group">
                          <input
                            type="password"
                            placeholder="Password Confirmation"
                            name="conformpassword"
                            className="form-control btn-round"
                            value={this.state.conformpassword}
                            onChange={this.handleChange}
                          />
                          <span className="input-group-addon btn-round">
                            <i
                              className="pe-7s-unlock"
                              style={{ padding: -20 }}
                            />
                          </span>
                        </div>
                        {/* <div className="input-group">
                                    <input type="password" placeholder="Code If you Have" className="form-control btn-round"  value={this.state.code} onChange={this.handleChange} name="code" />
                                    <span className="input-group-addon btn-round"  ><i className="pe-7s-unlock" style={{padding:-20}} ></i></span>
                                </div> */}
                      </form>
                      <div className="footer">
                        <a
                          className="btn btn-warning btn-round btn-block btns"
                          onClick={this.handleSubmit}
                        >
                          {" "}
                          {this.props.load ? (
                            <div> Loading...</div>
                          ) : (
                            <div>SIGNUP</div>
                          )}
                        </a>
                        <a
                          href="/login"
                          className="btn btn-warning btn-simple btn-round btn-block"
                        >
                          LOGIN
                        </a>
                      </div>
                      <a href="/forgotpassword" className="link">
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  {this.state.emptyvalueerr ? (
                    <h6 className="loginerror">Value is empty </h6>
                  ) : (
                    ""
                  )}
                  {this.state.emptyvalueerr === false ? (
                    this.state.passwordnotmatcherr ? (
                      <h6 className="loginerror">
                        {" "}
                        Password and Conform match
                      </h6>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}
                  {this.state.passwordshort ? (
                    <h6 className="loginerror"> Password too Short</h6>
                  ) : (
                    ""
                  )}
                  {this.state.emptyvalueerr === false ? (
                    this.state.passwordnotmatcherr === false ? (
                      this.state.passwordshort === false ? (
                        this.state.usernameexisterr ? (
                          <h6 className="loginerror">
                            {" "}
                            Password and Conform match
                          </h6>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}
                  {this.state.mobilenumbererr ? (
                    <h6 className="loginerror">
                      Mobile Number Should Be 10 Digit
                    </h6>
                  ) : (
                    ""
                  )}
                </Grid>
                {console.log(this.props.load, "this is load")}
                {/* <div className="form-group">
                       
                        {loading &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>
                    {error &&
                        <div className={'alert alert-danger'}>{error}</div>
                    } */}
              </Grid>
            </div>
          </div>
        </div>
        <div id="particles-js" />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    error: state.authenticate.error,
    fetched: state.dashboard.fetcheddd,
    load: state.authenticate.load,
    usernameexist: state.authenticate.usernameexist
  };
};

export default connect(
  mapStateToProps,
  { UserRegistration }
)(Registration);
