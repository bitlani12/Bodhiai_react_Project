import React from 'react';
import Grid from '@material-ui/core/Grid';
import { fetchDashboardDataAverageTime} from "../../store/actions/dashboardaction";
import { connect } from 'react-redux';
import stopwatch from './../../images/stopwatch.png';
import CircularProgressbar from 'react-circular-progressbar';
import './AverageTiming.css';
import Slider from "react-slick";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import compose from 'recompose/compose';
import Card from '@material-ui/core/Card';
import {Animated} from "react-animated-css";
import Loading from '../Loading/Loading';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const styles = theme => ({
    root: {
      maxWidth: 400,
      flexGrow: 1,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing.unit * 4,
      backgroundColor: theme.palette.background.default,
    },
    img: {
      height: 255,
      display: 'block',
      maxWidth: "auto",
      overflow: 'hidden',
      width: '100%',
    },
  });
  
class AverageTiming extends React.Component{
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
    this.setState({ index: index, disabledPrev: disabledPrev })
  }

  toggleNext(e) {
    let index = this.state.index + 1
    let disabledNext = false

    if (index === this.props.data.length - 1) {
      e.preventDefault()
      console.log("this is last length")
      index = this.props.data.length - 1
      disabledNext = true
    }
    this.setState({ index: index, disabledNext: disabledNext})
  }

    componentDidMount(){
        this.props.fetchDashboardDataAverageTime();
      }
;
    
    render(){
        const { index, disabledNext, disabledPrev } = this.state
      const profile = this.props.data ? this.props.data[index] : null

        return(
             <Card className="accuracycardheight" >
             <div>
             {/* <div  className="row youraccuracy">
              <div className=" col-lg-6 col-xs-6 col-md-6 col-lg-offset-1 accuracy"> Average Timing</div>
             {/* <div className=" col-lg-3 col-xs-6 col-md-6 col-lg-offset-3 imgs">  <img src={accuracy1} alt="hii"   /> </div> */}
             <div  className=" youraccuracy">
             <Grid  container>
                        <Grid item xs={8} sm={8} lg={8} md={8} style={{textAlign: "center"}} justify="center" align="center">
                     <div className="accuracy"> Average Time </div>  
                        </Grid>
                        <Grid item xs={2} sm={2} lg={2} md={2}  style={{textAlign: "center"}} justify="center" align="center">
                        <img src={stopwatch} alt="hii" height={35} width={35}/>
                        </Grid>
                        </Grid>
                        </div>
                                          
                                            <div style={{marginBottom: 4}}></div>
                                            <div className="row" style={{   marginLeft: '6%' , marginRight:'11%' , }}></div>
                      {this.props.fetched !=  true ? <div ><Loading /></div> : 
                      <div style={{ height:250 }} >
                                       {this.props.data.length === 0 ?   <Grid  container> <Grid item xs={12} sm={12} lg={12} md={12} className="takeatleastonetestaccuracy" style={{textAlign: "center", }} justify="center" align="center">Take Atleast One Test</Grid> </Grid>  : 
                                       <div>
                                          <MainAverageTime {...profile} key={this.state.index} disabled = {this.state.disabled}/>   
                                      <div  className="prevnextbtnstepper">                                                            
                                    <MobileStepper
                                      variant={""}
                                            position="static"
                                            nextButton={
                                              <button onClick={this.toggleNext.bind(this)} disabled={this.props.data.length -1 === index  && true} size="small" className={this.props.data.length -1 === index ? "prev-next-buttonnn nexttt disabled": "prev-next-buttonnn nexttt "}>
                                            <span className="arrowww"> &rarr; </span>
                                              </button>
                                            }
                                            backButton={
                                              <button onClick={this.togglePrev.bind(this)} disabled={ disabledPrev} size="small" className={ + this.state.index === 0 ? " prev-next-buttonnn  previousss disabled" : "prev-next-buttonnn  previousss"}>
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

class MainAverageTime extends React.Component{
  
  render(){
    let  text;
    return(
      <div>
         <div>
         <Animated animationIn="flipInX" animationOut="flipInX" isVisible={false}>
               <span style={{display: "none"}}>  { text = this.props.totalAverage.toString().substr(0,4) } </span>
              
                                             <div className="row"> 
                                         <div className=" col-md-12 col-sm-12 col-lg-12 col-xl-12  text-center textchapter" style={{backgroundColor:'white'}}>  {this.props.chapter}</div>
                                         </div>
                                             <div className="row heightofthissection flipbutton " style={{backgroundColor:'white'}}>
                                          <div className="  col-md-12 col-sm-12 col-lg-12 col-xl-12 " style={{width:150 }}>
                                                 <CircularProgressbar 
                                                 percentage={text}
                                                 text={`${text}/s`}
                                                 className="progressbar"
                                                 initialAnimation
                                                 styles={{
                                                     path: { stroke: '#3c3535d4' },
                                                     text: { fill: '#3c3535d4', fontSize: '16px'},
                                                     }}
                                                 />
                                         </div>
                                         </div> 
                                         </Animated>
                             </div>
      </div>
    )
  }
}
AverageTiming.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
const mapStateToProps = state => {
    return {
      data: state.dashboard.averagetime,
      fetched : state.dashboard.fetchedddd
    };
  };
  
  export default compose(  withStyles(styles) , connect(mapStateToProps  ,{ fetchDashboardDataAverageTime}) ) (AverageTiming);