import React from "react";
import compose from "recompose/compose";
import { connect } from "react-redux";
import QuickReplyView from "./ChatBot_Views/QuickReplyView";
import OnlyMessageView from "./ChatBot_Views/OnlyMessageView";
import ChooseAimView from "./ChatBot_Views/ChooseAimView";
import TakeTestView from "./ChatBot_Views/TakeTestView";
import ChooseCourseTimeView from "./ChatBot_Views/ChooseCourseTimeView";
import RecommendationVideoView from "./ChatBot_Views/RecommendationVideoView";
import ChallengeView from "./ChatBot_Views/ChallengeView";
import ChartView from "./ChatBot_Views/ChartView";
import VideoView from "./ChatBot_Views/VideoView";
import ChapterAnalysisView from "./ChatBot_Views/ChapterAnalysisView";
import SubjectBriefView from "./ChatBot_Views/SubjectBriefView";
import ChatbotLoading from "./../Loading/ChatbotLoading";
class CurrentChat extends React.Component {
  componentDidUpdate() {
    this.scrollToBottom();
    setTimeout(this.scrollToBottom(), 500);
  }
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };
  render() {
    console.log(this.props.currentdata.length, "this is length of currentchat");
    return (
      <div>
        <div>
          {this.props.currentdata.length > 0 &&
            this.props.currentdata.map((val, i) => {
              return (
                <div>
                  {console.log(
                    " this is dddddd=======",
                    this.props.currentdata.length - 1 === i && val.view
                  )}
                  {val.message && (
                    <OnlyMessageView
                      message={val.message}
                      keywords={val.keywords && val.keywords}
                      i={i}
                      sentByMe={val.sentByMe}
                      lastlength={this.props.currentdata.length - 1}
                      view={val.view}
                      data={val.data}
                    />
                  )}
                  {val.data && val.data.quick_reply && (
                    <QuickReplyView data={val} i={i} disable={false} />
                  )}
                  {val.view && val.view === "welcome_choose_aim" && (
                    <ChooseAimView data={val} i={i} />
                  )}
                  {val.data !== null &&
                    val.view &&
                    val.view === "tests_first_test" && (
                      <TakeTestView data={val} i={i} disable={false} />
                    )}
                  {val.data && val.data.quick_reply
                    ? ""
                    : val.data !== null &&
                      val.view === "welcome_choose_course_time" && (
                        <ChooseCourseTimeView data={val} disable={false} />
                      )}
                  {val.data !== null &&
                    val.view &&
                    val.view === "challenge_specific_test" && (
                      <ChallengeView data={val} />
                    )}
                  {val.data !== null &&
                    val.view &&
                    val.view === "analysis_specific_test" && (
                      <ChartView data={val} />
                    )}
                  {val.data !== null &&
                    val.view &&
                    val.view === "recommendation_videos" && (
                      <VideoView data={val} />
                    )}
                  {val.data !== null &&
                    val.view &&
                    val.view === "chapter_analyse" && (
                      <ChapterAnalysisView data={val} />
                    )}
                  {val.data !== null &&
                    val.view &&
                    val.view === "subject_brief" && (
                      <SubjectBriefView data={val} />
                    )}
                  {val.userclick && (
                    <div className="messagesendbyuser"> {val.userclick} </div>
                  )}
                </div>
              );
            })}
          {this.props.chatbot_loader ? (
            <div>
              {" "}
              <ChatbotLoading
                floats={"left"}
                className="messagesendbybot"
              />{" "}
            </div>
          ) : (
            ""
          )}
        </div>
        {console.log("this is loading", this.props.chatbot_loader)}
        <div
          style={{ float: "left", clear: "both", backgroundColor: "Green" }}
          ref={el => {
            this.messagesEnd = el;
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentdata: state.chatbot.chatbot_current_data,
    chatbot_loader: state.chatbot.chatbot_loader
  };
};
export default compose(
  connect(
    mapStateToProps,
    {}
  )
)(CurrentChat);
