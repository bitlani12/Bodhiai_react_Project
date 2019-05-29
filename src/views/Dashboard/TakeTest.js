import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { fetchDashboardDataTakeTest } from "../../store/actions/dashboardaction";
import { connect } from "react-redux";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { Button } from "mdbreact";
import "./TakeTest.css";
import Modal from "react-responsive-modal";
import stopwatch from "./../../images/stopwatch.png";
import question from "./../../images/question.png";
import discount from "./../../images/discount.png";
import calendar from "./../../images/calendar.png";
import Loading from "./../Loading/Loading";
import Grid from "@material-ui/core/Grid";
import starttest from "././../../images/starttest.png";
//import "./../OnlineTest/onlinetest.css";
class TakeTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.open,
      animation: "slideDown",
      showimage: false
    };
  }
  secondsToHms(min) {
    let sec = min * 60;
    var hours = Math.floor(sec / 3600);
    hours >= 1 ? (sec = sec - hours * 3600) : (hours = "00");
    var min = Math.floor(sec / 60);
    min >= 1 ? (sec = sec - min * 60) : (min = "00");
    sec < 1 ? (sec = "00") : void 0;
    min.toString().length == 1 ? (min = "0" + min) : void 0;
    sec.toString().length == 1 ? (sec = "0" + sec) : void 0;
    return hours + ":" + min + ":" + sec;
  }

  show() {
    this.setState({ visible: true });
  }
  hide() {
    this.setState({ visible: false });
  }
  saveimginlocalstorage(url) {
    let x;
    // console.log("came here" , img)
    //const url = axios(img).then(res => {})
    //   .then(res => { localStorage.setItem("img" , res.data ) }, this.state.showimage ? "" :  this.setState({showimage: true}))
    // var canvas = this.refs.canvas;
    // canvas.width = url.width;
    // canvas.height = url.height;
    // base64Img.requestBase64(url, function(err, res, body) {
    // localStorage.setItem("img",body) , console.log(body)
    //         } , this.state.showimage ? "" :  this.setState({showimage: true}));
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Rodal
          visible={this.props.open}
          showCloseButton={true}
          animation={this.state.animation}
          closeMaskOnClick={true}
          onClose={this.props.close}
          className="setrodalformobilescreen"
        >
          {console.log(this.props.load)}
          {this.props.load ? (
            <Loading />
          ) : (
            <div className=" justify-content-center align-items-center  text-center ">
              <div className="taketestsubject">
                <div>
                  {" "}
                  <img
                    src={starttest}
                    height={100}
                    width={100}
                    className="starttestimg"
                  />{" "}
                </div>
                <span className="text-center">{this.props.data.subject}</span>
              </div>
              {/* <div>{this.props.data.topics.map((val) =>{ return (<li> {val}</li>)})}</div> */}
              <div>
                <table className="modaltable">
                  <tr>
                    {" "}
                    <td className="modaltd">
                      <img src={question} alt="hii" height={25} />
                      &nbsp;&nbsp;&nbsp; Questions
                    </td>{" "}
                    <td> </td>{" "}
                    <td className="modalval">{this.props.data.numQuestions}</td>{" "}
                  </tr>
                  <tr>
                    {" "}
                    <td className="modaltd">
                      {" "}
                      <img src={stopwatch} alt="hii" height={25} />
                      &nbsp;&nbsp;&nbsp; Time
                    </td>{" "}
                    <td />{" "}
                    <td className="modalval">
                      {this.secondsToHms(this.props.data.time)}
                    </td>{" "}
                  </tr>
                  <tr>
                    {" "}
                    <td className="modaltd">
                      <img src={discount} alt="hii" height={25} />{" "}
                      &nbsp;&nbsp;&nbsp; Maximum Marks
                    </td>{" "}
                    <td> </td>{" "}
                    <td className="modalval">{this.props.data.maxMarks}</td>{" "}
                  </tr>
                  <tr>
                    {" "}
                    <td className="modaltd">
                      <img src={calendar} alt="hii" height={25} />{" "}
                      &nbsp;&nbsp;&nbsp; Published on
                    </td>{" "}
                    <td> </td>{" "}
                    <td className="modalval">{this.props.data.publised}</td>{" "}
                  </tr>
                </table>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={21}
                    lg={12}
                    md={12}
                    style={{ textAlign: "center" }}
                    justify="center"
                    align="center"
                  >
                    <h6>
                      {this.props.data.topics.map(val => (
                        <div> {val},</div>
                      ))}
                    </h6>
                  </Grid>
                </Grid>
                <div className="btnstart">
                  {/* <Button className="btn btn-danger btnmodal" onClick={this.props.close}><i className="fa fa-times" aria-hidden="true" ></i></Button> */}

                  <NavLink to={`/onlinetest/${this.props.data.id}`}>
                    <button
                      className="submittestbtn"
                      onClick={this.props.close}
                    >
                      START TEST
                    </button>
                  </NavLink>
                </div>
              </div>
              {/* <img src={this.props.data.images[0]} /> */}
              {/* <canvas ref="canvas" width={200} height={200}></canvas> */}
              {this.props.data.images &&
                this.saveimginlocalstorage(this.props.data.images[0])}
              {
                //this.state.showimage ? <img src={`${localStorage.getItem("img")}`} alt="error"/> : ""
              }
            </div>
          )}
        </Rodal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.dashboard.taketest,
    fetched: state.dashboard.fetcheddd,
    load: state.dashboard.load
  };
};

export default connect(
  mapStateToProps,
  { fetchDashboardDataTakeTest }
)(TakeTest);
