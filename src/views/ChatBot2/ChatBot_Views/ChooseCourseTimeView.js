import React from 'react';
import {Redirect} from 'react-router-dom';
import {save_chat , get_current_view ,add_user_click} from './../../../store/actions/ChatbotAction';
import {connect} from 'react-redux';
import Grid from "@material-ui/core/Grid"
import { green } from '@material-ui/core/colors';
class ChooseCourseTimeView extends React.Component{
    state={
        redirect:false,
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
        return(this.setState({clickquickreplybutton: reply}),
        this.dispatchaction(reply),
        this.props.get_current_view(reply),
        this.setState(prevState => ({
          senddata: {
              ...prevState.senddata,
              text: reply,viewType: viewtype
          }
      }),()=>{this.props.save_chat(this.state.senddata) } )
        )}

    onTakeTest=()=>{
        
      this.setState({
          redirect: true
      })
    }
    render(){
        return(
            <div className="choosecoursetimeview">
             <div className="subjectofchoosecourse">{ this.props.data.data.subject}</div>
             <div style={{display: "inline-block" , backgroundColor: "white" , borderRadius: "0px 0px 20px 20px"}}>
                 <Grid container style={{padding: "5px 10px 10px 10px" , textAlign: "center", fontSize: 16 , }}>
                 <Grid item  sm={12} style={{fontWeight: 800 , fontSize: 18 , padding: 5}} >
                    {/* <div> { this.props.data.data.chapter}</div> */}
                    <div> {this.props.data.data.chapter} </div>
                </Grid>
                <Grid item  sm={12}  style={{  textAlign: "center" , display: "table-cell" , border: "solid black 1px " , borderRadius: "10px 10px 10px 10px " , padding: "5px 5px 0px 5px"}}>
                <div >Solved Q</div>
                    <div style={{ margin: "0px 0px 5px 0px" , textAlign: "center" , borderBottom: "solid black 1px" , fontSize: 18 , fontWeight: 600}} >  {this.props.data.data.solved} </div>
                   <Grid container style={{textAlign: "center" , }} > 
                   <Grid item sm={6} style={{width: 100 , textAlign : "center" , borderRight: "solid black 1px"}}><div>Total Q</div><span style={{fontSize: 18 , fontWeight: 600}}>{this.props.data.data.overall_solve}</span></Grid> 
                   <Grid item sm={6}><div>To Solve </div> <span style={{fontSize: 18 , fontWeight: 600}}>{this.props.data.data.to_solve}</span></Grid> </Grid>
                </Grid>
                </Grid>
             </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
   
    };
  };
export default  connect(mapStateToProps ,{save_chat , get_current_view , add_user_click}) (ChooseCourseTimeView);
