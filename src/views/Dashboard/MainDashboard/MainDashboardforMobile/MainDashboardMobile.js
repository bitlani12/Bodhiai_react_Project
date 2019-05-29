import React from "react";
// import MainDashboardSubject from './MainDashboardSubject/MainDashboardSubject';
import { fetchDashboardDataAccuracy } from "./../../../../store/actions/dashboardaction";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";

import DialogueForIitJeeExam from "./../DialogueForIitJeeExam/DialogueForIitJeeExam";
// import Chatbot from '../../Chatbot/Chatbot';
import MainDashboardSubjectMobile from "./MainDashBoardSubjectMobile/MainDashboardSubjectMobile";
import GroupDetailMobile from "./GroupDetailMobile/GroupDetailMobile";
import MainDashboardTestRankMobile from "./MainDashboardTestRankMobile/MainDashboardTestRankMobile";
import "./../GroupDetail/GroupDetail.css";
import "./../MainDashboardTestRank.css";
import "./../MainDashboardSubject/MainDashboardSubject.css";
import "./../../../ChatBot2/ChatBot2.css";
import ChatBot2Mobile from "./Chatbot2Mobile/ChatBot2Mobile";

import { StickyContainer, Sticky } from "react-sticky";
import Features from "./Features_Mobile/Features";
class MainDashboardMobile extends React.Component {
  state = {
    openchat: false
  };

  handlechatbot = e => {
    //
    console.log(
      "this is chatbot",
      document.documentElement.classList.toggle("nav-open", false)
    );
    this.setState({
      openchat: !this.state.openchat
      // idforani: this.state.idforani + 1
    });
  };
  componentDidMount() {}
  render() {
    let checkbatch = localStorage.getItem("batch");
    const styles = {
      appBar: {
        top: "auto",
        bottom: 0
      }
    };
    return (
      <div style={{ backgroundColor: "white" }}>
        {this.state.openchat ? (
          <div>
            <button
              className="fabcancel"
              color={"primary"}
              onClick={e => this.handlechatbot(e)}
            />
          </div>
        ) : (
          <Grid item>
            <div>
              <table>
                <tr>
                  <div>
                    <div className="testingchatbot">
                      <div className="testingchatbot2">
                        {" "}
                        <span className="verticalborderfotbot" />
                        <button
                          style={{
                            marginTop: `${this.scrollHeight -
                              this.offsetHeight}`
                          }}
                          className="fabmobile "
                          // color={"primary"}
                          onClick={e => this.handlechatbot(e)}
                        >
                          Personal Teacher
                        </button>
                      </div>
                    </div>
                  </div>
                </tr>
              </table>
            </div>
          </Grid>
        )}
        {/* <UserGuidance/>    */}

        <Grid container style={{ paddingBottom: 40 }}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            md={12}
            style={{ backgroundColor: "white" }}
          >
            <MainDashboardSubjectMobile />
          </Grid>
          {/*ui for chatbot  */}
          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            md={12}
            style={{ backgroundColor: "white" }}
          >
            <Features />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            md={12}
            style={{ backgroundColor: "white" }}
          >
            <GroupDetailMobile />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            md={12}
            style={{ backgroundColor: "white" }}
          >
            <MainDashboardTestRankMobile />
          </Grid>
        </Grid>
        {this.state.openchat ? (
          <ChatBot2Mobile
            handlechatbot={this.handlechatbot}
            openchat={this.state.openchat}
          />
        ) : (
          <ChatBot2Mobile
            handlechatbot={this.handlechatbot}
            openchat={this.state.openchat}
          />
        )}

        {/* <Chatbot /> */}
        {/* {checkbatch === "24janmorning" || checkbatch === "24janevening" ? (
          <DialogueForIitJeeExam />
        ) : (
          ""
        )} */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.dashboard.accuracy,
    fetched: state.dashboard.fetcheddd
  };
};

export default connect(
  mapStateToProps,
  { fetchDashboardDataAccuracy }
)(MainDashboardMobile);
