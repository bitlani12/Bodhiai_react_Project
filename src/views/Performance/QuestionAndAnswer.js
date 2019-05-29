import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";

import "./QuestionandAnswer.css";
import Divider from "@material-ui/core/Divider";
import Loading from "../Loading/Loading";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { MDBBadge, MDBContainer } from "mdbreact";
import Done from "@material-ui/icons/Done";
import "./../OnlineTest/Result/Result.css";
class QuestionAndAnswer extends React.Component {
  render() {
    let resultdata = this.props.data.questions;
    // let skippedAnswers = this.props.data ? resultdata.skippedAnswers.map((val) => val) : "";
    // let answeredquestions = this.props.data.thistest ? resultdata.sscansweredquestion.map((val)=> val) : "";
    // let wrongAnswers = this.props.data ? resultdata.wrongAnswers.map((val) => val) : "";
    // let rightAnswers = this.props.data ? resultdata.rightAnswers.map((val) => val) : "";
    let x, skip, wrong, right, choice, youranswer, optionsclicked, selected;

    return (
      <div>
        {this.props.data.questions ? (
          <div>
            <div className="testresult">
              <Typography gutterBottom variant="h5" component="h2">
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
                    {resultdata &&
                      resultdata.map((
                        val,
                        i // sscquestions
                      ) => (
                        <div>
                          <span className="nodisplay">
                            {" "}
                            {(right = val.rightChoice[0])}
                            {(selected = val.selected[0])}
                            {(x = val.timeTaken)}{" "}
                          </span>
                          {/* {skip = skippedAnswers.includes(val.id)}  */}
                          {/* {wrong = wrongAnswers.includes(val.id)}
                                {right = rightAnswers.includes(val.id)}
                                <span className="nodisplay">  {val.choices.map((value) => {if(value.predicament === "Correct"){return  choice = value.id }})}  </span>
                                {right = rightAnswers.includes(choice)}
                                {wrong = wrongAnswers.includes(choice)} */}
                          <span className="nodisplay">
                            {" "}
                            right{" "}
                            {/*optionsclicked = rightAnswers.concat(wrongAnswers) */}{" "}
                          </span>
                          <Card
                            style={{
                              border: "solid #c7c7c747 2px",
                              marginBottom: 10
                            }}
                          >
                            {/* {answeredquestions.map((value ) => {value.quest.id === val.id ? x = value.time : "" + "this is answeredquestion"})} */}
                            {
                              //============================= this is head of each question============================
                            }
                            <Grid
                              container
                              className="resultcardhead"
                              style={{ backgroundColor: "#383e49" }}
                            >
                              <Grid
                                item
                                xs={12}
                                sm={3}
                                lg={3}
                                md={3}
                                className="showmarks"
                                style={{ textAlign: "center" }}
                              >
                                <span style={{ color: "white" }}>
                                  {" "}
                                  Q.{i + 1}
                                </span>
                              </Grid>
                              <Grid
                                item
                                xs={6}
                                sm={6}
                                lg={6}
                                md={6}
                                className="showmarks"
                                style={{ textAlign: "center" }}
                              >
                                <span
                                  style={{ color: "white", fontWeight: 300 }}
                                >
                                  {" "}
                                  Time Taken : {x}/sec
                                </span>
                              </Grid>

                              <Grid
                                item
                                xs={6}
                                sm={3}
                                lg={3}
                                md={3}
                                className="showmarks"
                                style={{ textAlign: "center" }}
                                justify="center"
                                align="center"
                              >
                                <span className="questionstatusbadge">
                                  {" "}
                                  {val.skipped === "True" ? (
                                    <span
                                      style={{
                                        backgroundColor: "#ffce56",
                                        border: "solid #ffce56 3px",
                                        borderRadius: "5px",
                                        padding: 5
                                      }}
                                    >
                                      {" "}
                                      Skipped Question{" "}
                                    </span>
                                  ) : val.selected[0] === val.rightChoice[0] ? (
                                    <span
                                      style={{
                                        backgroundColor: "#26c307d4",
                                        border: "solid #26c307d4 3px",
                                        borderRadius: "5px",
                                        padding: 4
                                      }}
                                    >
                                      {" "}
                                      Right Answer
                                    </span>
                                  ) : (
                                    <span
                                      style={{
                                        backgroundColor: "#ff0500",
                                        border: "solid #ff0500 3px",
                                        borderRadius: "5px",
                                        padding: 4
                                      }}
                                    >
                                      Wrong Answer
                                    </span>
                                  )}
                                </span>
                                {/* right ? <span style={{backgroundColor:"#26c307d4"  ,border:"solid #26c307d4 3px",borderRadius:"12%",padding:8}}> Right Answer</span>: <span style={{backgroundColor:"#ff6384"  ,border:"solid #ff6384 3px",borderRadius:"12%",padding:8}}>Wrong Answer</span> } </span>      */}
                              </Grid>
                            </Grid>
                            <Divider />
                            {
                              //====================================================================
                            }
                            <div className="resultquestion">
                              <div> {val.text}</div>
                              <div>
                                {" "}
                                <img
                                  src={val.picture}
                                  className="questionimg"
                                />
                              </div>
                            </div>
                            <div className="resultoptions">
                              <Grid container>
                                {
                                  <div>
                                    {val.choice.map((value, i) => (
                                      <div>
                                        <div className="resultoptions">
                                          <span> {value.text}</span>{" "}
                                          <span>
                                            <img src={value.picture} />
                                          </span>{" "}
                                          <span>
                                            {" "}
                                            {value.id === right ? (
                                              <span className=" correctbadges">
                                                {" "}
                                                Correct{" "}
                                              </span>
                                            ) : (
                                              ""
                                            )}
                                          </span>
                                          <span>
                                            {value.id === selected ? (
                                              <span className="badge badge-primary">
                                                {" "}
                                                Your Answer{" "}
                                              </span>
                                            ) : (
                                              ""
                                            )}
                                          </span>{" "}
                                          <span />
                                          <MDBBadge
                                            pill
                                            style={{
                                              backgroundColor: "white",
                                              fontSize: 13,
                                              fontWeight: 400,
                                              color: "#0d47a1"
                                            }}
                                          >
                                            <Done style={{ fontSize: 14 }} />
                                            selected by {
                                              value.freq
                                            } student{" "}
                                          </MDBBadge>
                                        </div>{" "}
                                      </div>
                                    ))}
                                  </div>
                                }
                              </Grid>
                            </div>
                            <ExpansionPanel>
                              <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                              >
                                <Typography>
                                  {" "}
                                  <div style={{ fontSize: 16 }}>
                                    Show Explanation
                                  </div>
                                </Typography>
                              </ExpansionPanelSummary>
                              <ExpansionPanelDetails>
                                <Typography>
                                  <div>
                                    {val.explanation.map(exp => (
                                      <div>
                                        {" "}
                                        {exp.text}{" "}
                                        <img
                                          src={exp.picture}
                                          className="questionimg"
                                        />
                                      </div>
                                    ))}
                                  </div>
                                </Typography>
                              </ExpansionPanelDetails>
                            </ExpansionPanel>
                            {
                              //val.choices.map((value) => <div>{value.text} {value.picture} {value.id.includes(resultdata.wrongAnswers.map((val) => val))}</div>)
                            }
                          </Card>
                        </div>
                      ))}
                  </Grid>
                </Grid>
              </Typography>
            </div>
          </div>
        ) : (
          <div>
            wait your result is loading... <Loading />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(QuestionAndAnswer);
