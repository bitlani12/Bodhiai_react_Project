import React, { Component } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { Button } from "mdbreact";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import "./onlinetest.css";
class ShowModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.showmodal,
      animation: "slideDown",
      showloaderaftersubmit: false
    };
  }
  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }
  secondsToHms(min) {
    var sec = min * 60;
    var hours = Math.floor(sec / 3600);
    hours >= 1 ? (sec = sec - hours * 3600) : (hours = "00");
    var min = Math.floor(sec / 60);
    min >= 1 ? (sec = sec - min * 60) : (min = "00");
    sec < 1 ? (sec = "00") : void 0;

    min.toString().length == 1 ? (min = "0" + min) : void 0;
    sec.toString().length == 1 ? (sec = "0" + sec) : void 0;

    return hours + ":" + min + ":" + sec;
  }
  onsubmitte = () => {
    console.log("hiii");
  };
  render() {
    let x = 0;
    let t = 0;
    let checkcurrentoption = this.props
      .checkcurrentquestionoptionisselectedornot;
    return (
      <div>
        <Rodal
          visible={this.props.showmodal}
          showCloseButton={true}
          animation={this.state.animation}
          closeMaskOnClick={true}
          onClose={this.props.onshowmodal}
        >
          <Grid container justify="space-between">
            <Grid item xs={12} sm={12} lg={12} md={12}>
              <div className="reviewandsubmittext">Review and Submit</div>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} md={12}>
              <div className=" justify-content-center align-items-center  text-center">
                <h4
                  style={{
                    backgroundColor: "#80808047",
                    textAlign: "left",
                    paddingLeft: "15%"
                  }}
                >
                  {" "}
                  Total Time{" "}
                  <span className="reviewdetailtime">
                    {" "}
                    {this.secondsToHms(this.props.totaltime)}{" "}
                  </span>{" "}
                </h4>
                {this.props.allanswer.map((val, i) => {
                  if (val[1] === -1) {
                    x++;
                  }
                })}
                {this.props.allanswer.map((val, i) => {
                  if (val[2] === 0) {
                    t++;
                  }
                })}
                <h4
                  style={{
                    backgroundColor: "#80808047",
                    textAlign: "left",
                    paddingLeft: "15%"
                  }}
                >
                  Questions{" "}
                  <span className="reviewdetailtime">
                    {" "}
                    {this.props.totalquestions}{" "}
                  </span>
                </h4>
                <h4
                  style={{
                    backgroundColor: "#80808047",
                    textAlign: "left",
                    paddingLeft: "15%"
                  }}
                >
                  {" "}
                  Unanswered{" "}
                  <span className="reviewdetailtime">
                    {" "}
                    {x +
                      /*this.props.currentselectedanswer === -1 ? 0 : -1*/ (checkcurrentoption ===
                      1
                        ? -1
                        : 0)}{" "}
                  </span>
                </h4>
                <h4
                  style={{
                    backgroundColor: "#80808047",
                    textAlign: "left",
                    paddingLeft: "15%"
                  }}
                >
                  {" "}
                  Answered Questions{" "}
                  <span className="reviewdetailtime">
                    {" "}
                    {this.props.totalquestions -
                      x +
                      /* this.props.currentselectedanswer === -1 ? 0 : 1*/ (checkcurrentoption ===
                      1
                        ? 1
                        : 0)}{" "}
                  </span>
                </h4>
                <h4
                  style={{
                    backgroundColor: "#80808047",
                    textAlign: "left",
                    paddingLeft: "15%"
                  }}
                >
                  Unseen Questions{" "}
                  <span className="reviewdetailtime">
                    {" "}
                    {t < 1 ? 0 : t - 1}{" "}
                  </span>
                </h4>
                <div className="btnstart">
                  {/* <Button className="btn btn-danger btnmodal" onClick={this.props.onshowmodal}><i className="fa fa-times" aria-hidden="true" ></i></Button>
                        <Button className="btn btn-success btnmodal" onClick={this.props.onsubmittest} >Submit Test</Button>   */}
                </div>
              </div>
              {console.log(
                "selected answer",
                this.props.currentselectedanswer,
                x,
                t,
                checkcurrentoption
              )}
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              lg={12}
              md={12}
              style={{ textAlign: "center" }}
            >
              {/* <Button className="btn btn-danger btnmodal" onClick={this.props.onshowmodal}><i className="fa fa-times" aria-hidden="true" ></i></Button> */}
              <button
                className="submittestbtn"
                onClick={() => {
                  this.props.onsubmittest(), this.onsubmitte();
                }}
              >
                Submit Test
              </button>
            </Grid>
          </Grid>
        </Rodal>
      </div>
    );
  }
}
export default ShowModal;
