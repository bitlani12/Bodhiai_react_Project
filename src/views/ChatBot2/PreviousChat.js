import React from 'react';
import compose from 'recompose/compose';
import {connect} from 'react-redux';
import QuickReplyView from './ChatBot_Views/QuickReplyView';
import ChooseAimView from './ChatBot_Views/ChooseAimView';
import OnlyMessageView from './ChatBot_Views/OnlyMessageView';
import TakeTestView from './ChatBot_Views/TakeTestView';
import{ get_previous_chat }from './../../store/actions/ChatbotAction';
import ChartView from './ChatBot_Views/ChartView';
import VideoView from './ChatBot_Views/VideoView';
import ChapterAnalysisView from './ChatBot_Views/ChapterAnalysisView';
import SubjectBriefView from './ChatBot_Views/SubjectBriefView';
class PreviousChat extends React.Component{
    state={
        pagination:1,
        runonce: 0,
        onceonly: true
    }
    pagination=()=>{
     this.setState({runonce: 1})
        this.setState({pagination : this.state.pagination + 1})
        ,this.props.get_previous_chat(this.state.pagination)
        
    }

    componentDidUpdate() {
   
    this.state.onceonly ?  this.scrollToBottom() : ""
    //  setTimeout(this.scrollToBottom(), 2000);
    
        
      }
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({  }  ),
        this.setState({onceonly: false})
      }
    render(){
        return(
            <div>
                {console.log("this is pre", this.props.previousdata.data && this.props.previousdata.data.chatHistory.length)}
           <div style={{width: "100%" , textAlign: "center"}}>  {this.props.previos_data_available ? "" :<button onClick={()=>this.pagination()} className="loadmorebtn"> Previous </button> }  </div> 
            {this.props.previousdata && this.props.previousdata.map((val , i)=>{
                return(<div>
                  { val.text && <OnlyMessageView message={val.text} i={i} keywords={""} sentByMe={val.sentByMe} />}
           {val.data &&  val.data.quick_reply && <QuickReplyView data={val} i={i} disable={true}/>}
           {val.viewType && val.viewType === "welcome_choose_aim" && <ChooseAimView data={val} i={i} disable={true}/>}
           {val.data !== null && val.viewType && val.viewType === "tests_first_test" && <TakeTestView data={val} disable={true}/>}
           {val.viewType && val.viewType === "score" || val.viewType === "pieChart" || val.viewType === "pieChart" && <ChartView data={val} disable={true}/>}
           {val.viewType && val.viewType === "recommendation_videos" && <VideoView data={val} />}
           {val.viewType && val.viewType  === "chapter_analyse" && <ChapterAnalysisView data={val} /> }

           {val.data !== null && val.viewType && val.viewType === "subject_brief" && <SubjectBriefView data={val} /> }
           {val.userclick}
           {/* {this.scrollToBottom()} */}
              </div> 
                )
            })}   
             { <div style={{ float:"left", clear: "both" , backgroundColor: "Green" }}
                 ref={(el) => { this.messagesEnd = el; }}>
          
          </div> }
        
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
   previousdata : state.chatbot.chatbot_previous_data,
   previos_data_available : state.chatbot.previos_data_available
    //   data: state.maindashboard.inidvidualsubject,
    //   fetched :  state.maindashboard.fetchedsubjectdetail,
    //   load: state.maindashboard.load,
    //   subject : state.maindashboard.individualsubjecttosendinapi,
    //   inidvidualsubjecttest : state.maindashboard.inidvidualsubjecttest,
    //   learning: state.maindashboard.learning

    };
  };
  export default compose( connect(mapStateToProps  ,{ get_previous_chat/*get_current_view , get_previous_chat , save_chat*/ }) ) (PreviousChat);