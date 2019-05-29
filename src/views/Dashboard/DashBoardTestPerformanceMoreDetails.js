import React from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import {
  fetchPerformanceDataAfterDateSelect,
  rankbytestid
} from "./../../store/actions/myprogress";
import Grid from "@material-ui/core/Grid";
import QuestionAndAnswer from "./../Performance/QuestionAndAnswer";
import Charts from "./../Performance/charts";
import { Cardshowdata } from "../../components/Card/Cardshowdata";
import Loading from "../Loading/Loading";
import { redirectfalse } from "./../../store/actions/Onlinetest";
import "./../Performance/PerformanceData.css";
class DashboardTestPerfromanceMoreDetail extends React.Component {
  componentDidMount() {
    this.props.fetchPerformanceDataAfterDateSelect(
      this.props.match.params.test_id,
      this.props.match.params.subject
    );
    this.props.rankbytestid(this.props.match.params.test_id);
    this.props.redirectfalse();
  }
  render() {
    const thistest = this.props.data;
    const cardData = [
      this.props.data.accuracy,
      this.props.data.numberSkipped,
      this.props.data.numberRight,
      this.props.data.numberWrong
    ];
    return (
      <div style={{ border: "solid gainsboro 1px", marginTop: 12 }}>
        {this.props.loadafterdateselect === false ? (
          <div>
            <Cardshowdata arr={cardData} />
            <div className="testresult">
              <Typography gutterBottom variant="h5" component="h2">
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={6}
                    md={6}
                    style={{ textAlign: "center" }}
                    justify="center"
                    align="center"
                  >
                    <div className="performancemarks">
                      <div
                        className="marks"
                        style={{
                          display: "inline-block",
                          margin: 0,
                          padding: 0
                        }}
                      >
                        <span className="markstext">Marks</span>
                        <div className="circle">
                          <div className="markcss marksoutof">
                            Marks{" "}
                            <span className="mainmarks">
                              {thistest.myMarks}
                            </span>
                          </div>
                          <div className="marksborder "> </div>
                          <div className="markcss markstotalof">
                            Total{" "}
                            <span className="totalmarksget">
                              {thistest.totalTestMarks}
                            </span>
                          </div>
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
                    style={{ textAlign: "center" }}
                    justify="center"
                    align="center"
                  >
                    <div className="performancemarks">
                      <div
                        className="marks"
                        style={{
                          display: "inline-block",
                          margin: 0,
                          padding: 0
                        }}
                      >
                        <div
                          className="marks"
                          style={{
                            display: "inline-block",
                            margin: 0,
                            padding: 0
                          }}
                        >
                          <span className="markstext">Rank</span>
                          <div className="circle">
                            {this.props.fetchrank &&
                              this.props.rankbytest.ranking.map(val => (
                                <div>
                                  {val.username ===
                                  localStorage.getItem("username") ? (
                                    <div>
                                      <div className="markcss marksoutof">
                                        {" "}
                                        Your Rank{" "}
                                        <span className="mainmarks">
                                          {val.rank}{" "}
                                        </span>{" "}
                                      </div>
                                      <div className="marksborder"> </div>
                                      <div className="markcss markstotalof">
                                        Total{" "}
                                        <span className="totalmarksget">
                                          {this.props.rankbytest.ranking.length}{" "}
                                        </span>
                                      </div>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              ))}
                          </div>

                          {/* <span className="mainmarks">{thistest.myMarks}</span>
                             
                                <div className="markcss markstotalof">Total Test <span className="totalmarksget">{thistest.totalTestMarks}
                                 </span></div> */}
                        </div>
                      </div>
                    </div>
                    {/* <div>{this.props.fetchrank ? 
                        this.props.rankbytestid.ranking.map((val)=> 
                          
                         <div>{val.username === localStorage.getItem("username") ? <div>{val.rank}/{this.props.rankbytestid.ranking.length} </div>: "no working" }</div> 
                        ) : ""}
                       {console.log(localStorage.getItem("username"), "username " , this.props.fetchrank , this.props.rankbytestid.ranking)}
                        </div> */}
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={12}
                    md={12}
                    align="center"
                    justify="center"
                    style={{ textAlign: "center" }}
                  >
                    <Charts data={this.props.data} />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={12}
                    md={12}
                    align="center"
                    justify="center"
                    style={{ textAlign: "center" }}
                  >
                    <QuestionAndAnswer data={this.props.data} />
                  </Grid>
                </Grid>
              </Typography>
            </div>
          </div>
        ) : (
          <div>
            {" "}
            <Loading />
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.progress.performancedata,
    fetched: state.progress.fetchedperformancedata,
    rankbytest: state.progress.rankbytestid,
    fetchrank: state.progress.fetchrank,
    loadafterdateselect: state.progress.loadafterdateselect,
    //   data: state.dashboard.testperformance,
    //   fetched : state.dashboard.fetchedd
    fetchrank: state.progress.fetchrank
  };
};
export default connect(
  mapStateToProps,
  {
    fetchPerformanceDataAfterDateSelect,
    rankbytestid,
    redirectfalse /*fetchDashboardDataTestPerformance , fetchPerformanceDataAfterDateSelect */
  }
)(DashboardTestPerfromanceMoreDetail);
// export default Performancedata ;
