import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import "./Result.css";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import ResultChart from "./resultchart";
import Divider from "@material-ui/core/Divider";
import Loading from "../../Loading/Loading";
// import
class Result extends React.Component {
  secondsToHms(sec) {
    var hours = Math.floor(sec / 3600);
    hours >= 1 ? (sec = sec - hours * 3600) : (hours = "00");
    var min = Math.floor(sec / 60);
    min >= 1 ? (sec = sec - min * 60) : (min = "00");
    sec < 1 ? (sec = "00") : void 0;
    min.toString().length == 1 ? (min = "0" + min) : void 0;
    sec.toString().length == 1 ? (sec = "0" + sec) : void 0;
    return hours + ":" + min + ":" + sec;
  }
  // componentDidMount(){
  //     this.props.
  // }
  render() {
    let resultdata = this.props.data.marks;
    let skippedAnswers = this.props.data.marks
      ? resultdata.skippedAnswers.map(val => val)
      : "";
    let answeredquestions = this.props.data.marks
      ? resultdata.sscansweredquestion.map(val => val)
      : "";
    let wrongAnswers = this.props.data.marks
      ? resultdata.wrongAnswers.map(val => val)
      : "";
    let rightAnswers = this.props.data.marks
      ? resultdata.rightAnswers.map(val => val)
      : "";
    let x, skip, wrong, right, choice, youranswer, optionsclicked;
    return (
      <div>
        {this.props.fetched ? (
          <div>
            <Card className="testresult">
              <Typography gutterBottom variant="h5" component="h2">
                <div>
                  {" "}
                  <h3>
                    Your Result For :{" "}
                    <strong>{this.props.data.marks.test.sub} </strong>{" "}
                  </h3>{" "}
                </div>
                <hr />
                <div className="resultsummary">
                  <div className="item">
                    <div className=" fonticon pe-7s-credit" />
                    <div style={{ color: "white" }}>
                      Total Questions{" "}
                      <span>
                        {" "}
                        {this.props.data.marks.test.sscquestions.length}
                      </span>
                    </div>{" "}
                  </div>
                  {/* <div > <div style={{display: "none"}}>  <h4 ><div><div className=" fonticon pe-7s-close-circle" ></div></div>Total Time</h4> </div>  </div>  */}
                  <div className="item">
                    <div
                      style={{ color: "#79dfff" }}
                      className="fonticon  pe-7s-timer "
                    />{" "}
                    <div style={{ color: "white" }}>
                      {" "}
                      Time Taken{" "}
                      <span>{this.secondsToHms(resultdata.timeTaken)}</span>
                    </div>
                  </div>
                  <div className="item">
                    <div
                      style={{ color: "yellow" }}
                      className=" fonticon pe-7s-right-arrow"
                    />
                    <div style={{ color: "white" }}>
                      Skipped <span>{resultdata.skippedAnswers.length}</span>
                    </div>
                  </div>
                  <div className="item">
                    <div
                      style={{ color: "#41f941" }}
                      className=" fonticon pe-7s-check"
                    />{" "}
                    <div style={{ color: "white" }}>
                      Right <span>{resultdata.rightAnswers.length}</span>
                    </div>{" "}
                  </div>
                  <div className="item">
                    <div
                      style={{ color: "red" }}
                      className=" fonticon pe-7s-close-circle"
                    />{" "}
                    <div style={{ color: "white" }}>
                      {" "}
                      Wrong <span> {resultdata.wrongAnswers.length}</span>
                    </div>
                  </div>
                </div>
                <hr />
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={6}
                    md={6}
                    className="showmarks"
                    style={{ textAlign: "center" }}
                    justify="center"
                    align="center"
                  >
                    <div className="marks">
                      <span className="markstext">Marks</span>
                      <div className="circle">
                        <div className="markcss marksoutof">
                          Marks{" "}
                          <span className="mainmarks">{resultdata.marks}</span>
                        </div>
                        <div className="marksborder "> </div>
                        <div className="markcss markstotalof">
                          Total{" "}
                          <span className="totalmarksget">
                            {resultdata.test.max_marks}{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={6}
                    md={6}
                    align="center"
                    justify="center"
                  >
                    <ResultChart
                      totalq={this.props.data.marks.test.sscquestions.length}
                      skipped={resultdata.skippedAnswers.length}
                      right={resultdata.rightAnswers.length}
                      wrong={resultdata.wrongAnswers.length}
                    />
                  </Grid>
                </Grid>
                <hr />
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={12}
                    md={12}
                    className="showmarks"
                    style={{ textAlign: "center" }}
                    justify="center"
                    align="center"
                  >
                    <strong style={{ fontSize: 26 }}>Solution</strong>
                    {resultdata.test.sscquestions.map(val => (
                      <div>
                        {(skip = skippedAnswers.includes(val.id))}
                        {(wrong = wrongAnswers.includes(val.id))}
                        {(right = rightAnswers.includes(val.id))}
                        <span className="nodisplay">
                          {" "}
                          {val.choices.map(value => {
                            if (value.predicament === "Correct") {
                              return (choice = value.id);
                            }
                          })}{" "}
                        </span>
                        {(right = rightAnswers.includes(choice))}
                        {(wrong = wrongAnswers.includes(choice))}
                        <span className="nodisplay">
                          {" "}
                          {
                            (optionsclicked = rightAnswers.concat(wrongAnswers))
                          }{" "}
                        </span>
                        <Card
                          style={{
                            border: "solid rgb(176, 179, 176) 1px",
                            boxShadow: "5px  5px 5px  #c9d1d6ad",
                            margin: 10
                          }}
                        >
                          {answeredquestions.map(value => {
                            value.quest.id === val.id
                              ? (x = value.time)
                              : "" + "this is answeredquestion";
                          })}

                          {
                            //============================= this is head of each question============================
                          }
                          <Grid container className="resultcardhead">
                            <Grid
                              item
                              xs={12}
                              sm={8}
                              lg={8}
                              md={8}
                              className="showmarks"
                              style={{ textAlign: "center" }}
                              justify="center"
                              align="center"
                            >
                              <span>
                                {" "}
                                You took {x} seconds on this Question
                              </span>
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              sm={2}
                              lg={2}
                              md={2}
                              className="showmarks"
                              style={{ textAlign: "center" }}
                              justify="center"
                              align="center"
                            >
                              <span className="questionstatusbadge ">
                                {" "}
                                {skip ? (
                                  <span
                                    style={{
                                      backgroundColor: "#ffce56",
                                      border: "solid #ffce56 3px",
                                      borderRadius: "12%",
                                      padding: 8
                                    }}
                                  >
                                    {" "}
                                    Skipped Question{" "}
                                  </span>
                                ) : right ? (
                                  <span
                                    style={{
                                      backgroundColor: "#26c307d4",
                                      border: "solid #26c307d4 3px",
                                      borderRadius: "12%",
                                      padding: 8
                                    }}
                                  >
                                    {" "}
                                    Right Answer
                                  </span>
                                ) : (
                                  <span
                                    style={{
                                      backgroundColor: "#ff6384",
                                      border: "solid #ff6384 3px",
                                      borderRadius: "12%",
                                      padding: 8
                                    }}
                                  >
                                    Wrong Answer
                                  </span>
                                )}{" "}
                              </span>
                            </Grid>
                          </Grid>
                          {
                            //====================================================================
                          }

                          <div className="resultquestion">
                            <div> {val.text}</div>
                            <div>
                              {" "}
                              <img src={val.picture} className="questionimg" />
                            </div>
                          </div>

                          <div className="resultoptions">
                            <div>
                              {val.choices.map(value => (
                                <div className="resultoptions">
                                  {
                                    //value.id ===
                                  }
                                  <span> {value.text}</span>{" "}
                                  <span>{value.picture} </span>{" "}
                                  <span>
                                    {" "}
                                    {value.predicament === "Correct" ? (
                                      <span className=" correctbadges">
                                        {" "}
                                        {value.predicament}{" "}
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </span>
                                  <span>
                                    {optionsclicked.includes(value.id) ? (
                                      <span className="badge badge-primary">
                                        {" "}
                                        Your Answer{" "}
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {
                            //val.choices.map((value) => <div>{value.text} {value.picture} {value.id.includes(resultdata.wrongAnswers.map((val) => val))}</div>)
                          }
                        </Card>
                      </div>
                    ))}
                  </Grid>
                </Grid>
              </Typography>
            </Card>
            }
          </div>
        ) : (
          <h4>
            wait your result is loading... <Loading />
          </h4>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.onlinetest.result,
    fetched: state.onlinetest.fetchedresult,
    fetchrank: state.progress.fetchrank
  };
};
export default connect(
  mapStateToProps,
  {}
)(Result);
