import React, { Component } from "react";
import "./Login.css";
import { LoginUser } from "../../store/actions/authentication";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import linkedin from "./../../images/linkedin.png";
import facebook from "./../../images/facebook.png";
import twitter from "./../../images/twitter.png";
import logo from "./../../images/logo.png";
//import GoogleLogin from './GoogleLogin';
import { NavLink } from "react-router-dom";
//import FacebookLogin from 'react-facebook-login';
import Loadable from "react-loadable";

class Login extends Component {
  constructor(props) {
    super(props);
    // userService.logout();
    this.state = {
      username: "",
      password: "",
      err1: this.props.error,
      emptyvalueerr: false,
      errors: {},
      isLoading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  validateForm() {}
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
      username: event.target.value
    });
  };
  handleChangepass = event => {
    this.setState({
      password: event.target.value
    });
    if (event.which === 13) {
      this.handleSendMessage();
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    setTimeout(() => {
      this.setState({ emptyvalueerr: false, err1: false });
    }, 2500);

    if (this.state.username.length <= 0 || this.state.password.length <= 0) {
      return this.setState({ emptyvalueerr: true });
    } else {
      // this.props.LoginUser()

      this.state.emptyvalueerr === false &&
        this.props
          .LoginUser(
            this.state.username,
            this.state.password,
            this.props.history
          )
          .then(result => {
            //this.context.router.push('/'),
            err => {
              this.setState({ err1: err.data.errors, isLoading: false });
            },
              this.setState({ err1: this.props.error });
            //I do get "success" in console
            //Changes address, does not render /servers component
          });
    }
  };

  render() {
    const responseFacebook = response => {
      console.log(response);
    };

    const responseGoogle = response => {
      console.log(response);
    };
    return (
      <div className="authentication">
        <Grid className="container">
          <div className=" content-center">
            <div className="row clearfix">
              <Grid container>
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
                  <div className="login">
                    <div className="company_detail">
                      <div className="logoin">
                        <h4 className="logo">
                          <img
                            src={logo}
                            className="logoimg"
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
                      <div className="footerss">
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

                {/* <Grid item xs={12} sm={6} lg={6} md={6} className="showmarks" style={{textAlign: "center"}} justify="center" align="center">
                           <DrougnatChart  data1={val.skippedPercent} data2 = {attempted} color={color2} label={label2} hovercolor={hovercolor2}/>
                        </Grid> */}

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
                        <h5>Log in</h5>
                        <hr />
                      </div>
                      <form className="form">
                        <div className="input-group ">
                          <input
                            type="text"
                            className="form-control btn-round"
                            placeholder="User Name"
                            value={this.state.username}
                            onChange={this.handleChange}
                          />
                          <span className="input-group-addon btn-round">
                            <i className="pe-7s-users" />
                          </span>
                        </div>
                        <div className="input-group">
                          <input
                            type="password"
                            placeholder="Password"
                            className="form-control btn-round"
                            value={this.state.password}
                            onChange={this.handleChangepass}
                            onKeyPress={this.onKeyPress}
                          />
                          <span className="input-group-addon btn-round">
                            <i
                              className="pe-7s-unlock"
                              style={{ padding: -20 }}
                            />
                          </span>
                        </div>
                      </form>
                      <div className="footer">
                        <NavLink
                          to=""
                          className="btn btn-warning btn-round btn-block btns"
                          onClick={this.handleSubmit}
                        >
                          {" "}
                          {this.props.load ? (
                            <div> Loading...</div>
                          ) : (
                            <div>SIGN IN</div>
                          )}
                        </NavLink>
                        {/* <FacebookLogin
                                    appId="400864883808451" //APP ID NOT CREATED YET
                                    fields="name,email,picture"
                                    callback={responseFacebook}
                                />  {/*  */}
                        {/* <GoogleLogin
                                    clientId="" //CLIENTID NOT CREATED YET
                                    buttonText="LOGIN WITH GOOGLE"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                /> */}
                        {/* <GoogleLogin/> */}
                        <NavLink
                          to="/userregistration"
                          className="btn btn-warning btn-simple btn-round btn-block"
                        >
                          SIGN UP
                        </NavLink>
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
                    this.state.err1 ? (
                      <h6 className="loginerror">
                        {" "}
                        username and password doesn't exist{" "}
                      </h6>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}
                </Grid>
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
        </Grid>
        <div id="particles-js" />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    error: state.authenticate.error,
    fetched: state.dashboard.fetcheddd,
    load: state.authenticate.load
  };
};

export default connect(
  mapStateToProps,
  { LoginUser }
)(Login);
