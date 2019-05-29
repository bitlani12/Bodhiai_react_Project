import React from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
//import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
//import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import { fetchMyProgressData} from "../../store/actions/myprogress";
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Arrow from './../Dashboard/MainDashboard/GroupDetail/Arrow';
import Chip from '@material-ui/core/Chip';
//import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { renderComponent } from 'recompose';
import shortid  from 'shortid';
import {Animated} from "react-animated-css";
import Grid from '@material-ui/core/Grid';
import Loading from './../Loading/Loading';
import Slider from "react-slick";
const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});


class DetailedExpansionPanel extends React.Component  {
    constructor(props){
        super(props);
        this.state = { 
          optionshow:false,
          id : 0,
          showperformancedata: false,
        
          currentslide : 1 ,lastslide: 3, initialprev: 0 , index: 1 ,displayRightArrow: true, displayLeftArrow: false, width : window.innerWidth
          
         };
      }

    buttonshow = (id , subject) => {
      this.setState({optionshow: true }),
      this.setState({id: id }),
      this.setState({subject : subject})
    }
    componentDidMount(){
      // this.props.fetchMainDashboardSubjectsData();
      this.updateDimensions();
      window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    clickHandler = (direction) => {
      if (direction === 'left') {
        this.slider.slickPrev();
      } else if (direction === 'right') {
        this.slider.slickNext();
      }
    };

    updateDimensions() {
      this.setState({ width: window.innerWidth });
    }

    setArrowDisplay = currentSlide => {
      const cityList =this.props.data.subjects;
      console.log(cityList.length , currentSlide , "this is very important")
      const displayLeftArrow = currentSlide !== 0;
      const displayRightArrow = currentSlide !== cityList.length - this.slidesToShow;
      console.log(currentSlide , cityList.length - this.slidesToShow , this.state.width)
      this.setState({ displayRightArrow, displayLeftArrow });
      console.log(displayLeftArrow , displayRightArrow)
  };
    render(props){
  const { classes } = this.props;

  this.state.width >1400 ?  this.slidesToShow = 4 :this.state.width < 1400 &&this.state.width > 1130 ? this.slidesToShow = 3 :this.state.width < 1130 &&this.state.width > 600 ? this.slidesToShow = 2  :this.state.width < 600 ? this.slidesToShow = 1 : "";
  var settings = {
     dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: this.slidesToShow,

  arrows: false,
  nextArrow: null ,//this.state.index < 4 &&  window.innerWidth > 1024 ? <SampleNextArrow classs="disabledprevnext"/> :  this.state.currentslide  === this.state.index ?   <SampleNextArrow classs="disabledprevnext"/> : <SampleNextArrow classs="gallery gallery3"/>,
 prevArrow:  null ,//this.state.initialprev === 0 ?  <SamplePrevArrow classs="disabledprevnext"/> :  <SamplePrevArrow classs="gallery gallery3"/>,
 afterChange: currentSlide => this.setArrowDisplay(currentSlide),
responsive: [
{
breakpoint: 1400,
settings: {
  slidesToShow: this.slidesToShow,
  
  infinite: false,
  dots: false,
}
},
{
breakpoint: 600,
settings: {
  slidesToShow: 1,
  slidesToScroll: 1
}
},
{
breakpoint: 480,
settings: {
  slidesToShow: 1,
  slidesToScroll: 1
}
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
}
  return (
    <div >

      <div >
      
        <div >
        </div>
          <div>
    </div>
          <div />
          <Grid item xs={12} sm={12} lg={12} md={12}>
                                <div  className="Mainperformance" style={{  width:"100%"}}>
                                {this.props.fetchedprogress ? this.props.data.subjects.length  === 0 ? <Grid  container> <Grid item xs={12} sm={12} lg={12} md={12} className="takeatleastonetestaccuracy" style={{textAlign: "center", }} justify="center" align="center">Take Atleast One Test</Grid> </Grid>  :                      
                               <div className="city-selection">
                              {this.state.width > 1024 ? 
                                            <Arrow
                                            
                                            styleClassName={` ${
                                              this.props.data.subjects.length > this.slidesToShow ? this.state.displayRightArrow ?"gallery gallery3" : "disabledprevnext"  : "disabledprevnext"
                                              }`}
                                            direction="right"
                                            clickHandler={this.clickHandler}
                                          />: ""}
                                          {this.state.width > 1024 ? 
                                              <Arrow
                                              styleClassName={` ${
                                                this.state.displayLeftArrow ?   "gallery gallery3" : "disabledprevnext"
                                              }`}
                                              direction="left"
                                              clickHandler={this.clickHandler}
                                            /> : ""}
                                            
                             { console.log(this.props.data.subjects.length , "this is lenght of sujectssss")}
                              {this.state.index === 1 ? this.setState({ index: this.props.data.subjects.length}) : ""}
                              <div className="slierwitharrow">
                              <Slider {...settings}  ref={c => this.slider = c} className="groupdetailslider" >
                           
                              {this.props.data.subjects.map((val , i) =>
                             
                             <Card className="subjectcard" >
                             <Grid container>
                             <Grid item xs={12} sm={12} lg={12} md={12}  style={{textAlign: "left"}}  justify="center" align="left" style={{backgroundColor: "#7f8c8d"}}>
                            {/* <NavLink to="/individualsubject"> */}
                              <Card className="subjectcard" onClick={()=> this.buttonshow(val[0])} key={i} className="cardsubject">
                              {  console.log(this.props.data.subjects.length , i , "this si map ") }
                            <Grid  container>
                                <Grid item xs={12} sm={12} lg={12} md={12} className="subjectimage" style={{textAlign: "center"}} justify="center" align="center" style={{backgroundColor: "white"}}>
                                <div> <img src={val[1]} className="subjectimg" height="130" width="130"/> </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12} lg={12} md={12} className="showmarks" style={{textAlign: "center"}} justify="center" align="center">
                                    <h6 style={{color: "black"}}>{val[0]}</h6>
                                    </Grid>
                              </Grid>
                                </Card>
                                
                                {/* </NavLink> */}
                                </Grid> 
                                </Grid>
                                </Card>
                               )  }
                              
                              </Slider> 
                              </div>
                             </div>
                                 : <div><Loading /></div> }
                                 </div> 
                                </Grid>
         
        
   
     
         
       
      
      </div>
        {console.log( this.props.load,"hiiii")}
        {this.state.optionshow === false ? "" :
        this.props.load === false ? <div className="text-center">
         { console.log( this.props.load,"hiiii")},
        <Animated animationIn="zoomInDown" animationOut="wobble" isVisible={true} key={this.state.idforanimation}> 
         {console.log(this.state.subject , "this is subject")}
          {this.props.fetched ?  /*<SelectDate date={this.props.date} dateselected={this.dateselected}/> */ "this is click" : <h3><Loading /></h3> }
        </Animated>
        </div>  : <Loading/>}
        {this.state.showperformancedata === false ? "" : <div className="text-center">
      {console.log(this.props.performancedata , "this is performance data")}
        <Animated animationIn="zoomInDown" animationOut="wobble" isVisible={true} key={this.state.idsforanimation}> 
        
          {this.props.loadafterdateselect === false ?  /*<Performancedata data={this.props.performancedata} dateselected={this.dateselected} fetched={this.props.fetchedperformancedata}/>  */ "this is click" : <Loading/> }
        </Animated>
         </div>}
    </div>
  );
}
}

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

//export default withStyles(styles)(DetailedExpansionPanel);

const mapStateToProps = state => {
    return {
      data: state.progress.progress,
      fetchedprogress: state.progress.fetchedprogress,
      // data: state.progress.progress,
      // fetched : state.onlinetest.fetchedonlinetest
    };
  };
  
  
  export default compose(  withStyles(styles) , connect(mapStateToProps  ,{fetchMyProgressData}) ) (DetailedExpansionPanel);






  // <Chip label={val}  style={{fontSize:16 , margin:10}}   key={shortid.generate()} color="secondary"
  //       variant="outlined" div ={<div> </div> }/>

        
  //       <Chip label="Institue Analysis"  style={{fontSize:16 , margin:10}} color="secondary" variant="outlined" onClick={() => this.props.recievedate(this.state.subject)}/>
  //       <Chip label="Online Analysis"  style={{fontSize:16 , margin:10}} color="secondary" variant="outlined" onClick={() => this.props.recievedate(this.state.subject)}/>