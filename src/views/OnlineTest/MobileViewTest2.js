import React from 'react';
import Example from './Timer';
import Grid from '@material-ui/core/Grid';
import { TestSubmitData } from "../../store/actions/Onlinetest";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Prompt } from 'react-router';
import { Redirect} from 'react-router-dom';
import ShowModal from './Modal';
import Icon from '@material-ui/core/Icon';
import Glyphicon  from 'react-bootstrap';
import {   Button } from "mdbreact";
import { red, orange, grey, blue, yellow } from '@material-ui/core/colors';
import { black } from 'material-ui/styles/colors';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
//import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import LeftIcon from '@material-ui/icons/ArrowLeft'
import RightIcon from '@material-ui/icons/ArrowRight'
import compose from 'recompose/compose'
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import { yellow300 } from 'material-ui/styles/colors';
import { white } from 'material-ui/styles/colors';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import { positions } from '@material-ui/system';
import Loading3 from './../Loading/Loading3';
// import Switch from '@material-ui/core/Switch';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import ArrowDropDownCircle from '@material-ui/icons/ArrowDropDownCircle';
import Close from '@material-ui/icons/Close';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Loading from '../Loading/Loading';
class MobileViewTest2 extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        checkedA: true,
        totaltime: this.props.totaltime,
        index: 0,
        disabledNext: false,
        disabledPrev: false,
        checkcurrentquestionoptionisselectedornot: 0,
        answerselected: -1,
        time: {}, seconds: this.props.totaltime*60,
        questionid:"",
        answer:[] ,
        allanswer:[],
        //this is for seconds
        sec: 0,
        redirect:false,
        alert1:false,
        formIsHalfFilledOut:false,
        showmodal :  false,
      loading: false,
      loadingnext: false
      }
      this.timer = 0;
    }
    bottomdrawerfunc=()=>{
        this.setState({bottomdrawer: !this.state.bottomdrawer})
    }
    componentDidMount() {
      window.onbeforeunload = function() {
    this.setState({alert1:true})
     };
      this.tick();
      this.startTimer();
      this.allanswer();
      setTimeout(() => {
        this.onsubmittest();
      }, this.state.totaltime*60*1000)
      }
    alertmess = () => {
      alert("hii")
    }
      routerWillLeave(nextLocation) {
        // return false to prevent a transition w/o prompting the user,
        // or return a string to allow the user to decide:
        // return `null` or nothing to let other hooks to be executed
        //
        // NOTE: if you return true, other hooks will not be executed!
        if (!this.state.isSaved)
          return 'Your work is not saved! Are you sure you want to leave?'
      }

      allanswer = () => {
      //  const options
        let c = [];
        let x;
      //  const question = this.props.questions ? this.props.questions[index] : null;
        //const options = this.props.questions ?  question.choices.map((val)=> val) :  null;
      //  options.map((val)
        this.props.questions.map((val) => {
        x = [] = [val.id , -1 , this.state.sec]
        this.state.allanswer.push(x) 
      })
      //  this.state.allanswer.push(c)
      }
  // ==============================================this is timer =================================================
    startTimer =()=>{
      if (this.timer == 0 && this.state.seconds > 0) {
        this.timer = setInterval(this.countDown, 1000);
      }
      console.log(this.state.time , "this is time")
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
    
    }
    countDown = ()=> {
      let seconds = this.state.seconds - 1;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });
       
      if (seconds == 0) { 
        clearInterval(this.timer);
      }
    }
    secondsToTime(secs){
      let hours = Math.floor(secs / (60 * 60));
      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);

      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);
     
    
      let obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
      };
    
      return obj;
    }
    callloader(){
          setTimeout(() => {
        this.setState({loadingnext: false})
    }, 500)
    }
  // ==============================================this is timer end =================================================

// =============================this is prev next button ===========================
          togglePrev(e , previd , questionid) {
                      this.setState({checkcurrentquestionoptionisselectedornot : 0 ,loadingnext: true })
                        let index = this.state.index - 1;
                      let questionid1 = this.state.allanswer.map((val , i) => {if(val[0] === previd){
                    //  console.log(val[1])
                        this.setState({answerselected : val[1]})
                        this.setState({sec: val[2]})
                      }})
                      this.callloader()
                      this.state.allanswer.map((val , i) => val.map((value , index) =>{ if(value === questionid){
                        val[0] = questionid;
                        val[1]=  this.state.answerselected;
                        val[2]=this.state.sec;
                      } 
                      }))
                    
                        let disabledPrev = (index === 0);
                        this.setState({ index: index, disabledPrev: disabledPrev, disabledNext: false })
            }
           
          toggleNext(e , questionid , nextid) {
                          let index = this.state.index + 1;
                          let disabledNext = index === (this.props.questions.length - 1);
                          this.setState({ index: index, disabledNext: disabledNext, disabledPrev: false , checkcurrentquestionoptionisselectedornot : 0 , loadingnext: true})
                        
                          let answerselected = this.state.answerselected;
                          let sec = this.state.sec;
                          let c = [] = [questionid , answerselected , sec];
                        
                          let onnextclickidispresentornot = this.state.answer.map((val) => val[0]);
                          let onnextclickidispresentornot1 = this.state.answer.map((val) => val[1]);

                      this.callloader()
                        this.setState({sec: 0});
                          var x = onnextclickidispresentornot.includes(questionid) ? "": 
                              this.state.answer.push(c);
                        //  console.log(onnextclickidispresentornot1 , "this is present or not")
                          this.state.allanswer.map((val , i) => val.map((value , index) =>{ if(value === questionid){
                            val[0] = questionid;
                            val[1]=  this.state.answerselected;
                            val[2]=this.state.sec;
                          console.log(this.state.allanswer)
                          } 
                        }))
                        // this will set the values of next answerselected and seconds
                        this.state.allanswer.map((val , i) => {if(val[0] === nextid){
                          console.log(val[0] , "now  thi  sis workig")
                          this.setState({answerselected : val[1]})
                          this.setState({sec: val[2]})
                        // console.log(answerselected , "this is answer selected")
                        }})
            }
// =============================this is prev next button ===========================
          onAnswerSelected = (e , choiceid , questionid) =>{
            this.setState({answerselected : Number(e.target.value) , checkcurrentquestionoptionisselectedornot : 1})
          console.log("this is selected"  , e.target.value)
           }
// =============================submit test================
          onsubmittest = () => {
                        let questionid = this.props.questions[this.state.index].id;
                                  this.state.allanswer.map((val , i) => val.map((value , index) =>{ if(value === questionid){
                                    val[0] = questionid;
                                    val[1]=  this.state.answerselected;
                                    val[2]=this.state.sec;
                                  }
                                }))
                                let totaltime = (this.props.totaltime*60 - ( (this.state.time.h*3600) + ( this.state.time.m*60) + (this.state.time.s) ))
                                let allanswer = this.state.allanswer;
                                let testid = this.props.testid;
                                this.props.TestSubmitData(testid , allanswer , totaltime , this.props.sub) //.then( this.setState({redirect:true}))
                               
                 }
// =============================this is for seconds =================
          tick =() => {
                              // start timer after button is clicked
                              this.interval = setInterval(() => {
                                this.setState(prevState => ({
                                  sec: prevState.sec + 1
                                }));
                              }, 1000);
            }
            updatequestionid = ( e , nextquestion) => {
                              console.log("this is mext id" , nextquestion)
                              this.setState({questionid : nextquestion })
            }
  // ===================================== clear selection ==========================
          clearselection=(questionid)=>{
                                          this.setState({answerselected: -1 , checkcurrentquestionoptionisselectedornot : 0})
                                          this.state.allanswer.map((val , i) => val.map((value , index) =>{ if(value === questionid){
                                            val[1]=  -1;
                                          console.log(this.state.allanswer , "this is working or not tell me ===============================")
                                          }
                                        }))
          }
          onshowmodal = () => {
                                        this.setState({showmodal : !this.state.showmodal})
          }
          // ===================change question =========================
          onChangeQuestion = (ind , nextid) => {
                                        let questionid = this.props.questions[this.state.index].id;
                                      
                                      return this.state.allanswer.map((val , i) => val.map((value , index) =>{ if(value === questionid){
                                          val[0] = questionid;
                                          val[1]=  this.state.answerselected;
                                          console.log(questionid , this.state.index ,  val[0] ,  val[1] ,  "this is question id " ,)
                                          val[2]=this.state.sec;
                                        } 
                                      })), this.setState({index: ind}) ,

                                      this.state.allanswer.map((val , i) => {if(val[0] === nextid){
                                        console.log(val[0] , "now  thi  sis workig")
                                        this.setState({answerselected : val[1]})
                                        this.setState({sec: val[2]})
                                      }})
          }
                                      
  render() {
   
       const { index, disabledNext, disabledPrev } = this.state;
       const question = this.props.questions ? this.props.questions[index] : null;
       const prevquestion = this.props.questions ? this.props.questions[index-1] : null;
       const nextquestion = this.props.questions ? this.props.questions[index+1] : null; 
       const options = this.props.questions ?  question.choices.map((val)=> val) :  null;  
       const comprehension = this.props.questions ?  this.props.questions[index].comprehension : null;
       const x =   this.state.allanswer[index]   
       const { classes } = this.props;
  
     return(
      <div className="test2" style={{height:"91vh"}}>

           {this.props.redirect ?
           <Redirect to={`/testperformance/${this.props.testid}/${this.props.sub}`}/> : <Prompt  message="You want to leave test in the middle"/> 
          }

          
          <div className="fixedheadertop">
        <Grid container className="onlinetestheader">
        {console.log(this.state.time)}
                <Grid item xs={3} sm={3} lg={3} md={3} style={{}} style={{textAlign: "left" }} justify="left" align="left" >
          <KeyboardArrowLeft style={{marginTop: 8 , marginLeft: 10}} />
                {/* <div className="onlinetestsub"> {this.props.data.sub}</div> */}
                </Grid>
                <Grid item xs={6} sm={6} lg={6} md={6} style={{}} style={{textAlign: "center" , paddingTop: 10}} justify="center" align="center">
                <div> </div> <div><span className="time"> <span className="timetext">{ this.state.time.h <= 9 ? "0"+this.state.time.h : this.state.time.h }</span> <span className="timetext">{this.state.time.m <= 9 ? "0"+this.state.time.m : this.state.time.m }</span> <span className="timetext">{this.state.time.s <= 9 ? "0"+this.state.time.s : this.state.time.s }</span> </span> </div>
                </Grid>
                <Grid item xs={3} sm={3} lg={3} md={3} style={{textAlign: "center"}} justify="center" align="center">
               <div className="olinetestheadersbutton">
                <div className="olinetestheadersbutton1"><button  className="btn btn-success btnmodal " onClick={() => this.onshowmodal()} className="reviewandsubmitbtn" bsStyle="reviewandsubmitbtn">Submit </button> </div>
               {/* <div className="pe-7s-ribbon olinetestheadersbutton1" style={{fontSize: 28 ,  color: "black" , }}></div>
               <div className="pe-7s-info olinetestheadersbutton1" style={{fontSize: 28 ,  color: "black"}}></div> */}
               </div>
                </Grid>
        </Grid>
        </div>
        {/* <Grid container   className="ques" >
              <Grid item xs={12} sm={12} lg={12} md={12} ><div className="questionnoshow"><span className="questionnumber">{this.state.index + 1} of {this.props.questions.length} </span></div></Grid>
        </Grid>  */}
       
          {/* <Grid container  justify="space-between" style={{backgroundColor: "white" , paddingTop : 15, marginBottom: 6}}>
               <Grid item xs={12} sm={12} lg={12} md={12}  style={{ textAlign: "center" , marginTop: 20}} alignContent="center">
                            <div> </div> <div><span className="time"> <span className="timetext">{  "0"+this.state.time.h}</span> <span className="timetext">{this.state.time.m <= 9 ? "0"+this.state.time.m : this.state.time.m }</span> <span className="timetext">{this.state.time.s <= 9 ? "0"+this.state.time.s : this.state.time.s }</span> </span> </div> 
               </Grid>
          </Grid>  */}
         <Grid container  justify="space-between" className="test centercontent" style={{backgroundColor:"white"}}>
       <Grid  xs={3} sm={4} lg={4} className="q"> 
       <div className="forinline" >
       <div  style={{marginTop: -5 , marginLeft: 8 , fontSize: 20 , fontWeight: 800 }} > Q.{this.state.index + 1}</div>
       </div>
       </Grid>
      <Grid  xs={6}  sm={4} lg={4} className="q"><div  style={{textAlign: "center"  , borderRadius: 5 , fontSize: 14 , fontFamily: "'Orbitron', sans-serif;"}}> <span style={{backgroundColor:"#ff7119", color:"white",padding:5 , borderRadius: 5 , fontSize: 12 , }}> <span style={{fontSize: 16}}>{this.state.sec}/s</span> </span> </div></Grid>
     <Grid  xs={3}  sm={4} lg={4} className="q" >
                <div className="" style={{textAlign : "center"}}>
                <div className="pe-7s-ribbon " style={{fontSize: 28 ,  color: "black" , paddingRight: 20 }}></div>
               {/* <div className="pe-7s-info " style={{fontSize: 28 ,  color: "black"}}></div> */}
               </div>
             
        </Grid>
       
         {/* <Grid item xs={12} sm={12} lg={12} md={12} ><div className="questionnoshow"><span className="questionnumber">{this.state.index + 1} of {this.props.questions.length} </span></div></Grid> */}
                    <Grid item xs={12} sm={9} lg={9} md={9} style={{backgroundColor:"white"}} >
                        <div className="question img-responsive">
                          <Questions {...question} comprehension={comprehension} images_loaded={this.props.images_loaded} questions={this.props.questions} index={this.state.index}/>
                          {/* <Switch value="checkedA" /> */}
                          </div>
                               <Grid container>
                                                  <Grid xs={12} sm={8} lg={8} md={8}>
                                                  <div className="options"  style={{marginBottom:"40%"}}>
                                                  {options.map((val)=> 
                                                  <AnswerOption text={val.text} picture={val.picture} answerchecked= {this.state.answerselected} predicament= {val.predicament} id={val.id} onAnswerSelected={this.onAnswerSelected} key={val.id} questionid={question.id}/>
                                                  )}
                                                  </div>
                                                  </Grid>
                                                  <Grid xs={12} sm={4} lg={4} md={4} >
                                                  {/* <span style={{backgroundColor:"#ff7119", color:"white",padding:5}}> Seconds on this question: {this.state.sec} </span> */}
                                                  </Grid>
                                                  {// ===============buttons==========================
                                                  }
                                                  {/* <Grid item xs={12} sm={12} lg={12} md={12} className="">
                                                  <Grid item xs={12} sm={12} lg={12} md={12} className="">
                                                  </Grid>
                                                  <Grid item xs={12} sm={12} lg={12} md={12} className="">
                                                  </Grid>
                                                  <Grid item xs={12} sm={12} lg={12} md={12} className="">
                                                  </Grid> */}
                                                      {/* <div className="testbuttons"> */}
                                                      {/* <div><button onClick={() => this.clearselection(question.id) } className="testbtns nxtprebtn" style={{padding: "5px 10px"}}>Clear Selection</button> </div>  */}
                                                   {/* <div>{this.props.questions[0] === question ? <div className="testbtns  " style={{opacity: 0.3}}>
                                                
                                               <div style={{padding:"5px 15px" }} > {"<"} Prev  </div>  */}
    {/* </div>  :     <Prev toggle={(e) => this.togglePrev(e , prevquestion.id , question.id )} active={disabledPrev} classs="testbtns nxtprebtn"/> }</div>  */}

                                                   {/* <div>{this.props.questions[this.props.questions.length-1] === question ? <button disabled={true} className="testbtns nxtprebtn disabled"  style={{padding: "5px 10px"}}>Next ></button> : <Next toggle={(e) => this.toggleNext(e , question.id , nextquestion.id)}  active={disabledNext} classs="testbtns nxtprebtn"/> } </div> 
                                                */}
                                                      {/* </div>  */}
                                                  {/* </Grid > */}
                                                 
                                </Grid>
                    </Grid>
               
                    {/* <Grid item xs={12} sm={3} lg={3} md={3}  >
                     <div style={{ backgroundcolor: "gray" , border: "solid #80808040 2px"}} className="timeremaining">
                      <div className="allquestiontext ">Questions</div>
                      <div className="allquestionnumber">
                        {this.state.allanswer.map((val , i) => <span className={ i === this.state.index ?  "currentquestion" :  val[2] === 0 ? "clickonquestiontoshow unseen" : val[1] === -1 ? "skippedcolor" : "clickonquestiontoshow selectedquestion"} key={i} onClick={()=>this.onChangeQuestion(i , val[0])}>{i + 1} </span>)}
                        </div>
                        </div>
                      </Grid>   */}
           </Grid>  
           {/* <Grid container  className="testbtnsss" > <Grid xs={12} item style={{textAlign: "center"}} > */}
          {/* <div onClick={()=>this.bottomdrawerfunc()} style={{position: "fixed" , bottom: 0  }}><MenuIcon style={{textAlign: "center"}}/></div> </Grid></Grid>  */}
          
                   
               <div>    
                </div>
                {/* <div style={{position: "fixed" , bottom: "0"}}>hii</div> */}
            {/* <div><button onClick={() => this.onsubmittest(  )}>Review and Submit</button></div> */}
            <div> {this.state.showmodal === true ?
            <ShowModal showmodal={this.state.showmodal} totaltime={this.state.totaltime} totalquestions={Number(this.props.questions.length)} currentselectedanswer={this.state.answerselected}  checkcurrentquestionoptionisselectedornot={this.state.checkcurrentquestionoptionisselectedornot}
            allanswer={this.state.allanswer} onshowmodal={(e) => this.onshowmodal()} onsubmittest={() => this.onsubmittest(  )}/> : ""}</div>

             { this.state.bottomdrawer ? <BottomDrawer bottomdrawerfunc={this.bottomdrawerfunc} allanswer={this.state.allanswer} index={this.state.index} onChangeQuestion={this.onChangeQuestion}  // after questions
             totalquestions={Number(this.props.questions.length)} currentselectedanswer={this.state.answerselected}  checkcurrentquestionoptionisselectedornot={this.state.checkcurrentquestionoptionisselectedornot}
             allanswer={this.state.allanswer}/> : ""}
           
{this.state.loadingnext === false &&  <div style={{position: "sticky" , bottom: 0 , width: "100%" , overflow: "hidden"}}>
 
 <Grid xs={12} sm={8} lg={8} md={8} style={{textAlign: "center" }}>
 <div onClick={()=>this.bottomdrawerfunc()} style={{position: "sticky" , bottom: 10 , fontWeight: 600 , fontSize: 16 , color: "#ff7119" }}> <div><KeyboardArrowUp/></div> <div>Status</div> {/* Status<MenuIcon style={{textAlign: "center"}}/> */}</div> 
 </Grid>
            <Grid container style={{position: "sticky" , bottom: 0 , backgroundColor: "#d6d6d6"}}  className="testbtnsss fixed-bottom" >

           

                                                  <Grid item xs={4}   style={{textAlign: "center" , padding: "8px"}} className="">
                                                <div onClick={() => this.clearselection(question.id) } className="mobiletestbtns" style={{padding: "5px 10px"}}/*className="testbtns nxtprebtn" */><div>Clear</div></div> 
                                                  </Grid>
                                                  <Grid item xs={4}  className="" style={{textAlign: "center" , padding: "8px"}}>
                                                  <div>{this.props.questions[0] === question ? <div className="mobiletestbtns" style={{opacity: 0.3}}>
                                                
                                                <div  > {"<<"} Prev  </div> 
                                              </div>:  <Prev toggle={(e) => this.togglePrev(e , prevquestion.id , question.id )} active={disabledPrev} classs="mobiletestbtns nxtprebtn"/> }</div> 
                                                  </Grid>
                                                  <Grid item xs={4}  className="" style={{textAlign: "center" , padding: "8px"}}>
                                                  <div>{this.props.questions[this.props.questions.length-1] === question ? <div disabled={true} className="mobiletestbtns nxtprebtn disabled"  >Next ></div> : <Next toggle={(e) => this.toggleNext(e , question.id , nextquestion.id)}  active={disabledNext} classs="mobiletestbtns nxtprebtn"/> } </div> 
                                                  </Grid>
                                              </Grid>
                                              </div>}
                                              {this.state.loadingnext ? <Loading3 /> : ""}
       </div>)
     }

  }

  function createStyledd(styles, options) {
    function Styledd(props) {
      const { children, ...other } = props;
      return children(other);
    }
    Styledd.propTypes = {
      children: PropTypes.func.isRequired,
      classes: PropTypes.object.isRequired,
    };
    return withStyles(styles, options)(Styledd);
  }

const Styledd = createStyledd ({
  icon: { fontSize: 40
  },
  root: {
    color: orange[600],
    '&$checked': {
      color: orange[500],
    },
  },  checked: {},
})

  // function createStyled(styles, options) {
  //   function Styled(props) {
  //     const { children, ...other } = props;
  //     return children(other);
  //   }
  //   Styled.propTypes = {
  //     children: PropTypes.func.isRequired,
  //     classes: PropTypes.object.isRequired,
  //   };
  //   return withStyles(styles, options)(Styled);
  // }

  const styles = theme => ({ margin: { margin: theme.spacing.unit, }, extendedIcon: { marginRight: theme.spacing.unit, },  icon: { 
 },});
  function Prev(props) {
    return (
      <div className={props.classs}>
      <div  onClick={props.toggle}> {"<<"} Prev  </div>
      {/* <Styled >
      {({ classes }) =>
     // <button className={props.classs}  ><div className="pe-7s-angle-left" data-notify="icon" style={{fontSize:25,font:"bolder",fontWeight:800}}> </div></button>
      <Fab size="small" color="secondary" aria-label="Add" className={classes.icon} size="large" onClick={props.toggle} disabled={props.active}>
      <LeftIcon   className={classes.icon}/>
   </Fab>
      }
      </Styled> */}
      </div>
    )
  }
  
  function Next(props) {
    return (
      <div className={props.classs}>
       <div  onClick={(e , questionid , nextid) => props.toggle( e , Number(questionid) ,  nextid) }> Next >> </div>
      {/* <Styled >
      {({ classes }) =>
     // <button className={props.classs}  ><div className="pe-7s-angle-left" data-notify="icon" style={{fontSize:25,font:"bolder",fontWeight:800}}> </div></button>
      <Fab  className={classes.root2} onClick={(e , questionid , nextid) => props.toggle( e , Number(questionid) ,  nextid) } disabled={props.active} >
      <RightIcon   className={classes.icon}/>
   </Fab>
      }
      </Styled> */}
      </div>
     // <button className={props.classs} onClick={(e , questionid , nextid) => props.toggle( e , Number(questionid) ,  nextid) } disabled={props.active} ><div className="pe-7s-angle-right" data-notify="icon" style={{fontSize:25}}> </div></button>
      
    );
  }
  
//   function QuestionCount(props) {
// 	return (
// 		<div className="questionCount">
// 			Question<span>{props.counter}</span> of <span>{props.total}</span>
// 		</div>
 
// 	);
// }

function imagesLoaded(parentNode) {
  const imgElements = [...parentNode.querySelectorAll("img")];
  for (let i = 0; i < imgElements.length; i += 1) {
    console.log("this is for checking images", imgElements);
    const img = imgElements[i];
    if (!img.complete) {
      return false;
    }
  }
  return true;
}
 class Questions extends React.Component {
  state={
    image_load: true
   }
  renderImage(imageUrl , index , i ) {
console.log(imageUrl , index , i , "this is question compo")
    return (
      <div>
        <img
          src={imageUrl}
          onLoad={this.handleImageChange}
          onError={this.handleImageChange}
          className={`${index===i ? "questionimagemobile": "hideimages"}`}
        />
      </div>
    );
  }
  handleImageChange = () => {
    console.log("this is image working");
    this.setState({
      image_load: !imagesLoaded(this.galleryElement)
    });
  };
  renderSpinner() {
    if (!this.state.image_load) {
      return this.props.images_loaded();
    }
    return <Loading3/>;
  }
     render(){
    return (
      <div>
        <p>{ this.props.comprehension !== null && this.props.comprehension.text}</p> 
         <p>{this.props.text}</p>
          <div
          className="gallery"
          ref={element => {
            this.galleryElement = element;
          }}
        >
         <div>{this.renderSpinner()} </div>
        {this.props.questions.map((imageurl , i )=> {
         // console.log(imageurl.comprehension.picture , "comprehension")
          return(
            <div>
                {imageurl.comprehension !== null  &&  this.renderImage(imageurl.comprehension.picture , this.props.index , i)}
                {imageurl.picture  !== null &&  this.renderImage(imageurl.picture, this.props.index, i)}
            </div>
          )
        })}
        </div>

        {/* <p>{ this.props.comprehension !== null && this.props.comprehension.text}</p> 
       <p>{this.props.text}</p>
       { this.props.comprehension !== null && <img src={this.props.comprehension.picture} className="questionimagemobile"/> }
         <img src={this.props.picture} className="questionimagemobile"/> */}
      </div>
    )}
    }
    // this is for select anwer 
    function createStyled(styles, options) {
      function Styled(props) {
        const { children, ...other } = props;
        return children(other);
      }
      Styled.propTypes = {
        children: PropTypes.func.isRequired,
        classes: PropTypes.object.isRequired,
      };
      return withStyles(styles, options)(Styled);
    }
  
  const Styled = createStyled ({
    root: {
      color: orange[600],
      '&$checked': {
        color: orange[500],
      },
    },  checked: {},
    root2:{
      backgroundColor: "#2aa6d6f2",
      color: white,
      '&:hover': {
        backgroundColor: '#2aa6d6f2',
        borderColor: '#0062cc',
      },
    }
  })
 
  function AnswerOption(props) {
  
	return (
		<li className="answerOption">
			<label className="" htmlFor={props.answerType}>
               <div> 
                <div>
                  <div className="radioCustomLabel">
                   <span  onClick={(e) => props.onAnswerSelected(e , props.id , props.questionid)} className="answeroption">
                   <Styled>
                   {({ classes }) =>
                  <Radio
                    type="checkbox"  
                    backgroundColor= {green} 
                    className="radioCustomButton"
                   checked={props.answerchecked === props.id}
                    value={props.id}
                    disabled={props.answer}
                    onChange={(e) => props.onAnswerSelected(e , props.id , props.questionid)}
                    classes={{
                      root: classes.root,
                      checked: classes.checked,
                    }}
                  />}
                   </Styled>
                  <span></span>
                {props.text} <img src={props.picture} />
                </span>
                </div>
                </div>
                </div>  
            
			</label>
 
		</li>
	);
}

class BottomDrawer extends React.Component{
  
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
      };
    toggleDrawer = (side, open) => () => {
        console.log("this is working")
        this.setState({
          bottom: !this.state.bottom,
        });
        this.props.bottomdrawerfunc();
      };
      componentDidMount(){
          this.setState({bottom: true})
      }
      componentWillUnmount(){
        this.setState({bottom: false})
      }
      changequestion(i , val){
        this.toggleDrawer('bottom', false)
        this.props.onChangeQuestion(i , val);
      }
    render(){
      let x=0;
      let t=0;
      let checkcurrentoption=this.props.checkcurrentquestionoptionisselectedornot;
        return(
            <SwipeableDrawer
            anchor="bottom"
            open={this.state.bottom}
            onClose={this.toggleDrawer('bottom', false)}
            onOpen={this.toggleDrawer('bottom', true)}
         
         paperAnchorBottom={{overflow: "visible"}}
          >
          <section id="section05" class="demo" >
           {/* <h6>Scroll Down Button #5</h6>  */}
         <a ><span></span></a> 
        </section>
                                       <Grid container>
                                       <Grid xs={12} style={{height: 30}} style={{textAlign: "center" , marginBottom: 50 , fontSize: 16 , fontWeight: 600}}>
                                    
                                       <section id="section05" class="demo" >
                                       swipe 
                                        {/* <h6>Scroll Down Button #5</h6>  */}
                                      <a ><span></span></a> 
                                      </section>
                                      </Grid>
                                       {/* <Grid xs={12} sm={8} lg={8} md={8} zIndex  style={{textAlign: "center" , backgroundColor: "transparent" }}  onClick={this.toggleDrawer('bottom', false)}>
                                       <div style={{ zIndex: 2 , fontSize: 20}} > 
                                       <Close/> {/*<ArrowDropDownCircle />}</div>
                                       </Grid> */}
                                          <Grid xs={4} sm={8} lg={8} md={8} style={{textAlign: "center" }}> <div style={{alignItems: "center" , display: "inline-block"}}> <div style={{textAlign: "center"}} className="currentquestion"></div>Current</div></Grid>
                                          <Grid xs={4} sm={8} lg={8} md={8}  style={{textAlign: "center"}}><div style={{alignItems: "center" , display: "inline-block"}}><div className="skippedcolor"></div>Skipped</div></Grid>
                                          <Grid xs={4} sm={8} lg={8} md={8}  style={{textAlign: "center"}}><div style={{alignItems: "center" , display: "inline-block"}}><div className="selectedquestion"></div>Selected</div></Grid>
                                      </Grid>
            <div style={{ backgroundcolor: "gray" , border: "solid #80808040 2px"}} >
                      <div className="allquestiontext ">Questions</div>
                      <div className="allquestionnumber">
                        {this.props.allanswer.map((val , i) => <span className={ i === this.props.index ?  "currentquestion" :  val[2] === 0 ? "clickonquestiontoshow unseen" : val[1] === -1 ? "skippedcolor" : "clickonquestiontoshow selectedquestion"} key={i} onClick={(e)=>{this.changequestion(i , val[0]);}}>{i + 1} </span>)}
                        </div>
                        </div>
                        {/* <div>
                              <div style={{display: "flex" , justifyContent:" space-around" , margin: 25}}>
                                  <table style={{position:"relative" , width: "40%" , border: "solid gray 1px" , }}>
                                    <tr>
                                        <td style={{ textAlign: "center" , padding: 10}}>Questions 10
                                            <div className="testingone">{">>"}</div>
                                        </td>
                       
                                    </tr>
                                </table>
                                <table style={{position:"relative" , width: "40%" , border: "solid gray 1px" , }}>
                                    <tr>
                                        <td style={{ textAlign: "center" , padding: 10}}>Answered 10
                                            <div className="testingone"><VisibilityOff/></div>
                                        </td>  
                                    </tr>
                                </table>
                                </div>
                                <div style={{display: "flex" , justifyContent:" space-around" , margin: 25}}>
                                  <table style={{position:"relative" , width: "40%" , border: "solid gray 1px" , }}>
                                    <tr>
                                        <td style={{ textAlign: "center" , padding: 10}}>Unanswered 10
                                            <div className="testingone">{">>"}</div>
                                        </td>
                
                                    </tr>
                                </table>
                                <table style={{position:"relative" , width: "40%" , border: "solid gray 1px" , }}>
                                    <tr>
                                        <td style={{ textAlign: "center" , padding: 10}}>Unseen 10
                                            <div className="testingone"><VisibilityOff/></div>
                                        </td>
                                    </tr>
                                </table>
                              </div>
           {this.props.allanswer.map((val , i) =>{if(val[1] === -1){x++} })}
           {this.props.allanswer.map((val , i) => { if(val[2] === 0){t++}})}
 </div>*/  }


                        {/* <h4 style={{backgroundColor: "#80808047" , textAlign: "left" , paddingLeft: "15%"}}>Questions <span className="reviewdetailtime">  {this.props.totalquestions} </span></h4>
                       <h4 style={{backgroundColor: "#80808047" , textAlign: "left" , paddingLeft: "15%"}}> Unanswered <span className="reviewdetailtime">  {x + (/*this.props.currentselectedanswer === -1 ? 0 : -1 checkcurrentoption === 1 ? -1 : 0)} </span></h4>  
                        // <h4 style={{backgroundColor: "#80808047" , textAlign: "left" , paddingLeft: "15%"}}> Answered Questions <span className="reviewdetailtime">  {this.props.totalquestions - x + (/* this.props.currentselectedanswer === -1 ? 0 : 1  checkcurrentoption === 1 ? 1 : 0 )} </span></h4>
                        // <h4 style={{backgroundColor: "#80808047" , textAlign: "left" , paddingLeft: "15%"}}>Unseen Questions <span className="reviewdetailtime"> { t < 1 ? 0 : t - 1} </span></h4> */}
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('bottom', false)}
              onKeyDown={this.toggleDrawer('bottom', false)}
            >
            </div>
          </SwipeableDrawer>
        )
    }
}

const mapStateToProps = state => {
    return {
      data: state.onlinetest.onlinetestdata,
      fetched : state.onlinetest.fetchedonlinetest,
      redirect: state.onlinetest.redirect
    };
  };
  
  export default compose(  withStyles(styles) , connect(mapStateToProps  ,{TestSubmitData}) ) (MobileViewTest2);
