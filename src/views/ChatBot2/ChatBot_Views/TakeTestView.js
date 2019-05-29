import React from 'react';
import {Redirect} from 'react-router-dom';
import compose from 'recompose/compose';
import {connect} from 'react-redux';
import {save_chat , get_current_view , add_user_click} from "./../../../store/actions/ChatbotAction";
class TakeTestView extends React.Component{
    state={
        redirect:false,disable: false , 
             senddata : {
               sentByMe:true,
               text: '',
               loading:false,
               viewType: "",
               clickable:false,
               data:null,
       }};
       dispatchaction=(reply)=>{
        this.props.add_user_click(reply , this.props.i)
 }
    onhandletextreply=(reply , viewtype)=>{
        return(this.setState({clickquickreplybutton: reply , disable: true}),
        // this.props.get_current_view("custom_test_performance"),
        this.dispatchaction(reply),
       // this.props.afterTakeTest(),
        
        this.setState(prevState => ({
          senddata: {
              ...prevState.senddata,
              text: reply,viewType: viewtype
          }
      }),()=>{this.props.save_chat(this.state.senddata)}),
      this.setState({redirect: true})
        )}
    onTakeTest=()=>{
      this.setState({
          redirect: true
      })
    }
    render(){
        return(
            <div className="taketestview">
                <button onClick={()=> this.onhandletextreply( "Start Test" ,"tests_first_test")} className="chatbottaketestbtn" disabled={this.props.disable || this.state.disable}>
                Take Test
                {/* { this.props.data.data.subject}
                {this.props.data.data.test_id}
                {this.props.data.data.numberQuestions} */}
                </button>
                {this.state.redirect=== true ? <Redirect to={`/onlinetest/${this.props.data.data.test_id}`}/>: ""}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
   
    };
  };
export default compose( connect(mapStateToProps ,{save_chat , get_current_view , add_user_click}) ) (TakeTestView);
