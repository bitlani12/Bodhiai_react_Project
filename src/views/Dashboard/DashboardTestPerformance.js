import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchDashboardDataTestPerformance } from "../../store/actions/dashboardaction";
import {fetchPerformanceDataAfterDateSelect , rankbytestid} from "../../store/actions/myprogress"
import Grid from '@material-ui/core/Grid';
import './DashboardTestPerforman.css';
import CircularProgressbar from 'react-circular-progressbar';
import performance1 from './../../images/testperformance.png';
import Card from '@material-ui/core/Card';
import MobileStepper from '@material-ui/core/MobileStepper';
import {Animated} from "react-animated-css";
import Loading from "../Loading/Loading";
import { orange } from "@material-ui/core/colors";
import Slider from "react-slick";
import { Button } from "@material-ui/core";
import {NavLink} from 'react-router-dom';
class DashboardTestPerfromance extends Component{
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      disabledNext: false,
      disabledPrev: false
    }
  }
  togglePrev(e) {
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
    componentDidMount(){
         this.props.fetchDashboardDataTestPerformance();
      }
      performancemoredetail=(subject , testid)=>{
        console.log(subject,testid)
        this.props.fetchPerformanceDataAfterDateSelect(testid ,subject);
        this.props.rankbytestid(testid)
          }
    render(){
      const { index, disabledNext, disabledPrev } = this.state
      const profile = this.props.data ? this.props.data[index] : null
        return(
          <Card className="testperformancheight">
         <div style={{backgroundColor:"white" , marginBottom: 0 , height:"100%" ,  width: '100%'}} className="slider2" >
       
           <div className=" youraccuracy">
           <Grid  container>
                       <Grid item xs={8} sm={8} lg={8} md={8} className="showmarks" style={{textAlign: "center", margin: 5}} justify="center" align="center">
                       <div className="accuracy">  Test Performance </div>  
                       </Grid>
                       <Grid item xs={2} sm={2} lg={2} md={2} className="showmarks" style={{textAlign: "center"}} justify="center" align="center">
                       <img src={performance1} alt="hii" height={32} width={32}></img>
                       </Grid>
                       </Grid>
           </div>
           <div className="row" style={{borderBottom:'solid #d8d6d68a 1px' , height:"2px" , marginLeft: '6%' , marginRight:'10%'}}></div>
      {this.props.fetched === false ? <div><Loading /></div> :
      <div>
         {/* <div>
            <button onClick={this.togglePrev.bind(this)} disabled={disabledPrev}>Prev</button>
            <button onClick={this.toggleNext.bind(this)} disabled={disabledNext}>Next</button>
          </div> */}
          {this.props.data.length === 0 ?   <Grid  container> <Grid item xs={12} sm={12} lg={12} md={12} className="takeatleastonetestaccuracy" style={{textAlign: "center", }} justify="center" align="center">Take Atleast One Test</Grid> </Grid>  :
          <div>
           <Animated animationIn="flipInX" animationOut="flipInX" key={this.state.index}>
         <Main {...profile} key={this.state.index} performancemoredetail={this.performancemoredetail} /> 
         </Animated>
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
                      <button onClick={this.togglePrev.bind(this)} disabled={disabledPrev} size="small" className={ + this.state.index === 0 ? " prev-next-buttonnn  previousss disabled" : "prev-next-buttonnn  previousss"}>
                        <span>  &larr;</span>
                      </button>
                    }
                  />
           </div>
           </div>
           }
         </div>
 } 
 </div>
 </Card>
        )
    }
}
// Performancedata 

class Main extends React.Component{

render(){
  return(
    <div>
     <div>
    
     <div className="row">
                <Grid  container>
                       <Grid item xs={12} sm={12} lg={12} md={12} className="showmarks" style={{textAlign: "center" , }} justify="center" align="center" >
                       <div className="topic2" style={{fontFamily: "Roboto,Helvetica Neue,Arial,sans-serif"}}> Topic : {this.props.subject}</div>
                       </Grid>
                </Grid>
                <div style={{backgroundColor:"white",textAlign:"center" , marginBottom:0 , padding:0 , margin: 0 , }} >
                <Grid  container className="settestperformance">
                       <Grid item xs={3} sm={3} lg={3} md={3} className="showmarks first" style={{textAlign: "center" , }} justify="center" align="center">
                       <div style={{height:'100px', width:'130px' }} className="col-lg-12 col-sm-12 col-md-12   testperformancecircular">
                                  <CircularProgressbar 
                                    percentage={this.props.percent}
                                    text={`${this.props.percent}%`}
                                    className="progressbar"
                                    initialAnimation
                                    styles={{
                                        path: { stroke: `#3c3535d4` },
                                        text: { fill: '#3c3535d4', fontSize: '16px'},
                                      }}
                                    />
                                      </div>       
                       </Grid>           
         <Grid item xs={8} sm={8} lg={8} md={8} className="testperformtable second" style={{textAlign: "center"}} justify="center" align="center">
      
    <div className=" testperformancetable" >

    <table className="table" cellpadding="0" cellSpacing="0" style={{textAlign:"center"}}>

<tr className="totalq ">
 <td className="td ">Questions</td> <td> <div className="valtotalq">{this.props.total_questions}</div>  </td>
  </tr>
  <tr className="rightans">
 <td className="td" style={{fontSize: 30 }} ><div className="pe-7s-check" ></div></td> <td  ><div className="valrightans">{this.props.rightAnswers}</div> </td>
  </tr>
  <tr className="wrongAnswers">
 <td className="td"  style={{fontSize: 30 }}><div className="pe-7s-close-circle " ></div></td> <td ><div className="valuewrng">{this.props.wrongAnswers}</div> </td>
  </tr>
  <tr className="time">
 <td className="td" style={{fontSize: 30}}><div className="pe-7s-timer" > </div></td> <td> <div className="valtime">{this.props.time}</div>  </td>
  </tr>
  </table>
        </div>
        </Grid>
        {/* <button className="button1" style={{color: "white" , marginTop: -20 ,bottom: 10 , backgroundColor: "#ff6200e6" , border: "solid #ff6200e6 1px" , borderRadius:5, padding:"3px 15px 2px 15px 3px"}} onClick={()=>this.props.performancemoredetail()}>More Details</button> */}
        </Grid>
        </div>
        <NavLink to={`/testperformance/${this.props.testid}/${this.props.subject}`}> 
        <button style={{color: "white" , marginTop: -20 ,bottom: 10 , backgroundColor: "#ff6200e6" , border: "solid #ff6200e6 1px" , borderRadius:5, padding:"3px 15px 2px 15px 3px"}} onClick={()=>this.props.performancemoredetail(this.props.subject ,this.props.testid)}>More Details</button>
       </NavLink>
        </div>
    
              </div>
    </div>
  )
}
}

// class Main extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       index: 1,
//       disabledNext: false,
//       disabledPrev: false
//     }
//   }
//   togglePrev(e) {
//     let index = this.state.index - 1
//     let disabledPrev = false
//     if (index <= 0) {
//       e.preventDefault()
//       index = 0
//       disabledPrev = true
//     }

//     this.setState({ index: index, disabledPrev: disabledPrev, disabledNext: false })
//   }

//   toggleNext(e) {
//     let index = this.state.index + 1
//     let disabledNext = false
//     if (index === this.props.data.length - 1) {
//       e.preventDefault()
//       index = this.props.data.length - 1
//       disabledNext = true
//     }

//     this.setState({ index: index, disabledNext: disabledNext, disabledPrev: false })
//   }
//   render() {
//     const { index, disabledNext, disabledPrev } = this.state
//     const profile = this.props.profiles ? this.props.data[index] : null
//     if (data) {
//       return (
//        <div className='profile'>
//           <div>
//             <button onClick={this.togglePrev.bind(this)} disabled={disabledPrev}>Prev</button>
//             <button onClick={this.toggleNext.bind(this)} disabled={disabledNext}>Next</button>
//           </div>
//           <Profile {...profile} />
//        </div>
//       )
//     } else {
//       return <span>error</span>
//     }
//   }
// }

const mapStateToProps = state => {
    return {
      data: state.dashboard.testperformance,
      fetched : state.dashboard.fetchedd
    };
  };
  
  

export default connect(mapStateToProps , { fetchDashboardDataTestPerformance , fetchPerformanceDataAfterDateSelect , rankbytestid})(DashboardTestPerfromance);