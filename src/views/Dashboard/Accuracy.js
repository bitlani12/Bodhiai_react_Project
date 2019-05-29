import React, { Component } from "react";
import { fetchDashboardDataAccuracy , fetchAccuracyMoreDetail} from "../../store/actions/dashboardaction";
import { connect } from 'react-redux';
import accuracy1 from './../../images/accuracy.png';
import CircularProgressbar from 'react-circular-progressbar';
import Slider from "react-slick";
import './Accuracy.css';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Rodal from 'rodal';
import MobileStepper from '@material-ui/core/MobileStepper';
import {Animated} from "react-animated-css";
import Loading from "../Loading/Loading";
class Accuracy extends Component{

    constructor() {
        super();
        this.state = {
          isFlipped: false,
          showmodal: false,
          subject: "",
          chapterName: "",
          index: 0,
          disabledNext: false,
          disabledPrev: false
        };
      }
     
      togglePrev(e) {
        console.log(e , "this is e")
        let index = this.state.index - 1
        let disabledPrev = false
        if (index <= 0) {
          e.preventDefault()
          index = 0
          disabledPrev = true
        }
        this.setState({ index: index, disabledPrev: disabledPrev, disabledNext: false })
      }
    
      toggleNext(e) {
        let index = this.state.index + 1
        let disabledNext = false
        if (index === this.props.data.length - 1) {
          e.preventDefault()
          index = this.props.data.length - 1
          disabledNext = true
        }
        this.setState({ index: index, disabledNext: disabledNext, disabledPrev: false })
      }

      onmoredetailaccuracy=(subject , chaptercode , chapterName)=>{
        console.log("this is clicked")
        this.props.fetchAccuracyMoreDetail(subject , chaptercode)
        this.setState({showmodal : true , subject: subject , chapterName: chapterName})
        console.log(chaptercode)
      }
     
      onClose = () => {
        this.setState({showmodal : false})
      }
    
    componentDidMount(){
        this.props.fetchDashboardDataAccuracy();
      }

    render(){
      const { index, disabledNext, disabledPrev } = this.state
      const profile = this.props.data ? this.props.data[index] : null

        return(  <Card className="accuracycardheight" >
            <div style={{height:350}}>
                {console.log(this.props.data,1234)}
                <div  className="row youraccuracy">
                <Grid  container>
                        <Grid item xs={8} sm={8} lg={8} md={8}  style={{textAlign: "center"}} justify="center" align="center">
                     <div className="accuracy"> Your accuracy</div>  
                        </Grid>
                        <Grid item xs={2} sm={2} lg={2} md={2} className="showmarks" style={{textAlign: "center"}} justify="center" align="center">
                        <img src={accuracy1} alt="hii"  height={35} width={35} /> 
                        </Grid>
                        </Grid>
             </div>
             <div style={{marginBottom: 4}}></div>
             {this.props.fetched !=  true ? <div><Loading/></div>:
             <div>
                  <div>    
                  <div className="row col-lg-offset-2 " style={{  marginLeft: '6%' , marginRight:'11%' , backgroundColor:'white' }}></div>
                  <div className="">
                {this.props.data.length === 0 ?   
       <Grid  container> <Grid item xs={12} sm={12} lg={12} md={12} className="takeatleastonetestaccuracy" style={{textAlign: "center", }} justify="center" align="center">Take Atleast One Test</Grid> </Grid> :
                <div > 
                <Back subject={profile.subject} chapter={profile.chapter} accuracy= {profile.accuracy} chapterName= {profile.chapterName}  onmoredetailaccuracy={this.onmoredetailaccuracy}  key={this.state.index}/> 
                  <div  className="prevnextbtnstepper">       
                    <MobileStepper
                    variant={""}
                    position="static"
                    nextButton={
                      <button onClick={this.toggleNext.bind(this)} disabled={this.props.data.length -1 === index  && true}  size="small" className={this.props.data.length -1 === index ? "prev-next-buttonnn nexttt disabled": "prev-next-buttonnn nexttt "}>
                     <span className="arrowww"> &rarr; </span>
                      </button>
                    }
                    backButton={
                      <button onClick={this.togglePrev.bind(this)} disabled={disabledPrev} size="small"className={ + this.state.index === 0 ? " prev-next-buttonnn  previousss disabled" : "prev-next-buttonnn  previousss"}>
                        <span>  &larr;</span>
                      </button>
                    }
                  />
                  </div>
                </div>
               }    
                 </div>
                </div>

                <div  className="prevnextbtnstepper">                                                            
            
                
           
           </div>
            </div>
            }   
  {this.state.showmodal ? <MoreDetail showmodal={this.state.showmodal} subject={this.state.subject} fetchedmoredetail={this.props.fetchedmoredetail}  accuracymoredetail={this.props. accuracymoredetail} chapterName={this.state.chapterName} onClose={this.onClose}/> : ""}
                </div>
                </Card>
        )
    }
}


class Back extends React.Component{
  buttonclick = ()=> {
    console.log("this is ")
  }
  render(){
    const text = Math.round(this.props.accuracy * 100) / 100;
    return(
   <div>
    
        <div className="  backflipcard" style={{backgroundColor:'white' , height:255 , width: '100%' }}>
      
        <Animated animationIn="flipInX" animationOut="flipInX" >
       <div className="row">
       
       <Grid  container  >
          <Grid item xs={12} sm={21} lg={12} md={12} className="showmarks" style={{textAlign: "center", }} justify="center" align="center">
          <div className="topic2">Topic : {this.props.subject}</div>
          </Grid>
        </Grid>
       <Grid  container>             
     {/*width : 150 is not making responsive otherwise it is responsive */}
     <Grid item xs={4} sm={4} lg={4} md={3} className="showmarks" style={{textAlign: "center", }} justify="center" align="center">
            <div  style={{width:130 , padding:15 ,  }} className=" circleprogressbar">
                    <CircularProgressbar 
                    percentage={text}
                    text={`${text}%`}
                    className="progressbar"
                    initialAnimation
                    styles={{
                        path: { stroke: '#3c3535d4' },
                        text: { fill: '#3c3535d4', fontSize: '16px'}, 
                        }}/>
                        
            </div>
          
            </Grid>
            <Grid item xs={8} sm={8} lg={8} md={7} className="showmarks" style={{textAlign: "center" , }} justify="center" align="center">
          <div className="accuracyshowtext">
                <div className="topic1"> Chapter : {this.props.chapterName}</div>
               <div className="moredetailsbtn">
                <button className="button1" onClick={()=>this.props.onmoredetailaccuracy( this.props.subject, this.props.chapter, this.props.chapterName)} > More Details</button> 
               </div>
               </div>
            </Grid>
            </Grid>
            </div>
        {/* <div className="col-md-12 col-sm-12 col-lg-12 progressbarstriped">
                   <div className="progress progresaccuracy">
                    <div className="progress-bar progress-bar-striped active " role="progressbar"
                    aria-valuenow={text} style={{width: `${text}%`}}>
                    </div>
                    </div>
                   
        </div> */}
       
        </Animated>
        </div>

        </div>
    )}
}
// const Back = (props) => {
//     const text = Math.round(props.accuracy * 100) / 100;
//     return(
   
//         <div className="  backflipcard" style={{backgroundColor:'white' , height:255 , width: '100%' }}>
//         <Animated animationIn="flipInX" animationOut="flipInX" isVisible={false}>
//        <div className="row">
       
//        <Grid  container  >
//           <Grid item xs={12} sm={21} lg={12} md={12} className="showmarks" style={{textAlign: "center", }} justify="center" align="center">
//           <div className="topic2">Topic : {props.subject}</div>
//           </Grid>
//         </Grid>
//        <Grid  container>             
//      {/*width : 150 is not making responsive otherwise it is responsive */}
//      <Grid item xs={4} sm={4} lg={4} md={3} className="showmarks" style={{textAlign: "center", }} justify="center" align="center">
//             <div  style={{width:130 , padding:15 ,  }} className=" circleprogressbar">
//                     <CircularProgressbar 
//                     percentage={text}
//                     text={`${text}%`}
//                     className="progressbar"
//                     initialAnimation
//                     styles={{
//                         path: { stroke: '#3c3535d4' },
//                         text: { fill: '#3c3535d4', fontSize: '16px'},
//                         }}/>
//             </div>
//             </Grid>
//             <Grid item xs={8} sm={8} lg={8} md={7} className="showmarks" style={{textAlign: "center" , }} justify="center" align="center">
//           <div className="accuracyshowtext">
//                 <div className="topic1"> Chapter : {props.chapterName}</div>
//                <div className="moredetailsbtn"><button className="button1" onClick={()=>props.onmoredetailaccuracy( props.subject,props.chapter,props.chapterName)} > More Details</button></div>
//                </div>
//             </Grid>
//             </Grid>
//             </div>
//         <div className="col-md-12 col-sm-12 col-lg-12 progressbarstriped">
//                    <div className="progress progresaccuracy">
//                     <div className="progress-bar progress-bar-striped active " role="progressbar"
//                     aria-valuenow={text} style={{width: `${text}%`}}>
//                     </div>
//                     </div>
                   
//         </div>
//         </Animated>
//         </div>
 
//     )}

        class MoreDetail extends React.Component {
                  constructor(props) {
                    super(props);
                    this.state = { visible: this.props.showmodal , subject: this.props.subject};
                }
                show() {
                  this.setState({ visible: true });
              }
              hide() {
                  this.setState({ visible: false });
              }
              render() {
                const accuracymoredetail = this.props.accuracymoredetail && this.props.accuracymoredetail
                const accuracy = Math.round(accuracymoredetail.accuracy * 100) / 100;
                const skippedPercent = Math.round(accuracymoredetail.skippedPercent * 100) / 100;
                return (
                    <div>
                        { this.props.fetchedaccuracymoredetail && console.log(this.props.accuracymoredetail.accuracy)}
                        <Rodal visible={this.state.visible} onClose={this.props.onClose}  >
                        {console.log(this.props.fetchedmoredetail , "this is fetched")}
                        {this.props.fetchedmoredetail ? <div>
                          {console.log(this.props.chapterName, "this is chapter name ")}
                          <Grid container>
                          <Grid item xs={12} sm={12} lg={12} md={12} style={{textAlign: "center" , }} justify="center" align="center">
                          
                         <h4> {this.props.subject} </h4>
                          <h6>{this.props.chapterName}</h6>
                          </Grid>
                          <Grid item xs={6} sm={6} lg={6} md={6} style={{textAlign: "center" , }} justify="center" align="center">
                          <div  style={{width:100 ,  }} className=" circleprogressbar">
                    <CircularProgressbar 
                    percentage={accuracy}
                    text={`${accuracy}%`}
                    className="progressbar"
                    initialAnimation
                    styles={{
                        path: { stroke: '#3e98c7' },
                        text: { fill: '', fontSize: '16px'},
                        }}/>
                       <h6> Accuracy </h6>
                        </div>
                        <hr/>
                    </Grid>
                    <Grid item xs={6} sm={6} lg={6} md={6} style={{textAlign: "center" , }} justify="center" align="center">
                    <div  style={{width:100 ,  }} className=" circleprogressbar">
                    <CircularProgressbar 
                    percentage={skippedPercent}
                    text={`${skippedPercent}%`}
                    className="progressbar"
                    initialAnimation
                    styles={{
                      path: { stroke: `#FFCE56` },
                      text: { fill: '#FFCE56', fontSize: '16px' },
                    }}/>
                  <h6>  Skipped </h6>
                    </div>
                    <hr/>
                   </Grid>
                  
                   <Grid item xs={6} sm={6} lg={6} md={6} style={{textAlign: "center" , paddingLeft:5}} justify="left" >
                  <h4 className="textofmoredetail">Attempted:<span className="colortotal"> {accuracymoredetail.totalAttempted} </span></h4> 
                   </Grid>
                   <Grid item xs={6} sm={6} lg={6} md={6} style={{textAlign: "center" ,paddingLeft:5 }} justify="left" >
                   <h4 className="textofmoredetail alignright">    Right:  <span className="colorright">{accuracymoredetail.totalRight}</span></h4> 
                   </Grid>
                   <Grid item xs={6} sm={6} lg={6} md={6} style={{textAlign: "center" , paddingLeft:5}}justify="left" >
                <h4 className="textofmoredetail ">    Wrong:  <span className="colorwrong">{accuracymoredetail.totalWrong}</span></h4> 
                   </Grid>
                   <Grid item xs={6} sm={6} lg={6} md={6} style={{textAlign: "center" , paddingLeft:5}} justify="left" >
               <h4 className="textofmoredetail alignright">     Skipped: <span className="colorskipped">{accuracymoredetail.totalSkipped}</span> </h4> 
                   </Grid>
                   </Grid>
                        </div> :  
                         <Grid container>
                         <Grid item xs={12} sm={12} lg={12} md={12} style={{textAlign: "center" , }} justify="center" align="center" height={250}><Loading/></Grid>
                         </Grid>
                        }
                        
                        </Rodal>
                    </div>
                )
            }
      }

const mapStateToProps = state => {
    return {
      data: state.dashboard.accuracy,
      fetched : state.dashboard.fetcheddd,
      accuracymoredetail: state.dashboard.accuracymoredetail,
      fetchedmoredetail : state.dashboard.fetchedaccuracymoredetail
    };
  };
  
  

  export default connect(mapStateToProps , { fetchDashboardDataAccuracy , fetchAccuracyMoreDetail})(Accuracy);

