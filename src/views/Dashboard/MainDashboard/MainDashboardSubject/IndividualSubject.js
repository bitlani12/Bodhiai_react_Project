import React from 'react';
import compose from 'recompose/compose'
import {fetchMainDashboardIndividualSubject ,  fetchedMainDashboardIndividualSubjectTest  , fetchedMainDashboardIndividualLearning } from "./../../../../store/actions/maindashboardaction";
import {fetchDashboardDataTakeTest} from "./../../../../store/actions/dashboardaction"
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';  
import './IndividualSubject.css'
import Card from '@material-ui/core/Card';

import Loading from '../../../Loading/Loading'; 
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab'
import { lightGreen } from '@material-ui/core/colors';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Slider from "react-slick";
import {NavLink } from "react-router-dom";
import {Collapse} from 'react-bootstrap'
const styles = theme => ({
  root: {
    width: '80%',
    backgroundColor: theme.palette.background.paper,
    margin: "auto",
    backgroundColor: "blue",
    padding:20
  },
  list:{

fontSize: 18
  },
  button1:{
    backgroundColor: "#1c1c1c",
    color: "white",
    minHeight: 5,
    minWidth: 20,
    marginRight:10,
    fontSize: 11,
    fontWeight:400,
    padding: "0px 20px 0px 10px",
    '&:hover':{
      backgroundColor:"#1c1c1c",
      color: "#d8d6d6"
    }
  },expansion:{
    border: "none",
    
    boxShadow: "none"
  }
});

class MainDashboard extends React.Component{
        constructor(props) {
            super(props);
            this.state = { course: 0 , showitemtest : false , expanded: false , currentexpand: null , check: false , taketestbtn : false , Learningbtn: false , expandvalue: ""};
            this._nodes = new Map();
           }
           componentDidMount(){
             this.props.fetchMainDashboardIndividualSubject(this.props.match.params.subject);
           }
    testonindividualsubject=(course , i)=>{
      this.setState({showitemtest: true , check: true , taketestbtn: true , Learningbtn: false , expandvalue: i})
        const subject = this.props.subject
        console.log(course , this.props.subject,"this is course")
        this.setState({course: course  })
        this.props.fetchedMainDashboardIndividualSubjectTest(course , subject)
    }

    handleChangelearning = (course , i) => {
      this.setState({showitemtest: true , check: true , taketestbtn: false, Learningbtn: true , expandvalue : i })
      const subject = this.props.subject
      console.log(course , this.props.subject,"this is learning")
      this.setState({course: course })
      console.log(i , "this is value of i ")
      this.props.fetchedMainDashboardIndividualLearning(course , subject )
      console.log("thisisssss runnong " ,i)
    }

    handleChange = panel => (event, expanded ) => {
      console.log( this.state.showitemtest , "this is fuinction " , panel)
this.setState({check: this.state.check })
      if(panel != null){
      if(this.state.currentexpand != panel ){
      this.setState({ 
        showitemtest: this.state.check,
        currentexpand: panel,
        expanded: expanded ? panel : false,
      })} }
      this.setState({check: false})
    };
// redirect on test
    ontaketest = (test_id) =>{
      console.log("this is id " + test_id)
      this.props.fetchDashboardDataTakeTest(test_id);
      this.setState({showtest : true , taketestid: test_id  })
    }
    checktest=()=>{

    }
    render(){
      var settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        autoplaySpeed:8000,
     
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        slidesToShow: 4,
        autoplay : false,
        centerMode: true,
        initialSlide: 2,
        swipeToSlide : true,
        arrows:true,
      };
      const { classes } = this.props;
      const { expanded } = this.state;
        return(
            <div style={{backgroundColor: "white"}}>
                <Grid  container >
                {this.props.fetched ?
                <Grid item xs={12} sm={12} lg={12} md={12}    style={{margin: "auto" }}>
     {/* <Col sm={4} className="tabname"> */}
    <div className="classtabheading" >Courses</div>
      <Grid container style={{margin: "auto" ,  textAlign: "center" , maxWidth: 1024 , width:"80%" , marginTop: 10}}>
        {/* <Grid item xs={12} sm={12} lg={12} md={12}  style={{backgroundColor: "red" , textAlign: "center" , margin: "auto"  , border: "none"}} justify="center" align="center" > */}
      {this.props.data.map((val , i) =>{ return (
                <Grid item xs={12} sm={12} lg={4} md={4}  style={{textAlign: "left"}}>
        <div  /*expanded={expanded === i} onChange={this.handleChange(i)}*/ style={{margin: 5}}>
        <NavLink to= {`/testandlearning/${this.props.match.params.subject}/${val.name}`}>
                     <div className="listofsubject img-container"><div className="imgg" style={{float: "left" , paddingLeft: 5 , paddingTop: 8 , width: "100%" , textAlign: "left"}}>{i+1} <span style={{paddingLeft: 5}}>{val.name}</span> <span style={{float: "right" , textAlign: "right"}}></span></div> <div  style={{  paddingRight: 15}}> 
                     {/* <Fab
                        variant="extended"
                        size="small"
                        padding="0 15"
                        expanded={expanded === i}
                        color= {lightGreen[100]}
                        aria-label="Add" className={classes.button1} onClick={()=>{ this.testonindividualsubject(val.name , i)}}
                        aria-controls="example-collapse-text"
                        aria-expanded={i}
                        key={i}
                        >Take Test</Fab>
                        <Fab
                        variant="extended"
                        size="small"
                        color= {lightGreen[100]}
                        aria-label="Add"
                        className={classes.button1} onClick={()=>this.handleChangelearning(val.code , i)}
                        aria-controls="example-collapse-text"
                        aria-expanded={i}>
                          Learning
                        </Fab> */}
        </div>
        {/* <div style={{backgroundColor: "blue"}} className="buttononhover">Explore</div> */}
        </div>
      
        </NavLink>
        
        <Collapse in={this.state.expandvalue == i} key={i} style={{marginTop: 10, marginBottom: 10}}>
        <Grid item xs={12} sm={12} lg={12} md={12}  style={{backgroundColor: "white" , textAlign: "center" , margin: "auto"  , border: "none"}} justify="center" align="center" >
        
    {/* {this.state.showitemtest ?
    <div className="definemargin">
    {this.props.load ? <Loading/>:
    // when user click on learning
    this.state.Learningbtn === true ? 
     <div>
       {console.log("thisisisisis")}
       <div style={{ width: "100%",marginTop: "10"}}>
       {this.props.learning.videos.length < 1 ? <h6> No Learning Videos in This Chapter</h6>:this.props.learning.videos.map((val) =><div> 
        <iframe height="300px" width="100%" src={`https://www.youtube.com/embed/${val.link}`} frameborder="1"  allowfullscreen="allowfullscreen" style={{marginTop: 10}}> </iframe>  
        <div style={{fontSize: 16 , fontWeight: 600 , padding: 10}}>{val.title} </div>
        </div>
        )}
      
        </div>
        </div> 
        
        : ""||
       // when click on take test btn
                      this.state.taketestbtn === true ? 
                      this.props.inidvidualsubjecttest.length === 0 ? <Grid  container> <Grid item xs={12} sm={12} lg={12} md={12} style={{textAlign: "center", margin: "auto"}} justify="center" align="center">No Test Find!</Grid> </Grid>  :
                        <div className="tablewithflex">
                        <div className="tabtaketest tabborder tabname classtabheading">
                        <div className="numbertab tabheading">No.</div>
                          <div className=" noofqesti tabheading"> Questions</div> 
                          <div className="tabpublished tabheading">Published </div>
                          <div className="tabpublished tabheading">Actions</div>
                          </div>
                      { this.props.inidvidualsubjecttest.map((val , i) => 
                          
                          <Card> <div className="tabtaketest"> <div className="numbertab">{i+1} </div> <div className=""> {val.num_questions} </div>  <small>{val.published}</small>   <NavLink to={`/onlinetest/${val.id}`}><button className="takeindividualtestbtn" >Take Test</button></NavLink> </div> </Card>
                          
                          )}</div> : ""}  </div>
       : <h5> Click on Take Test Or Learning </h5>
      } */}
         </Grid>
        </Collapse>
      
        </div>
        </Grid>
        )}   )}
       
        </Grid>
                                {/* </Grid> */}
        {/* // <NavItem eventKey={val.name} className="classtab" onClick={()=>this.testonindividualsubject(val.name)}><span className="tabtext">{val.name}</span></NavItem> */}
       
     
     
    {/* </Col> */}
    
    {/* <Col sm={8} className="tabname">
    <div className="classtabheading" >List of Subject</div>
    {this.state.showitemtest ?
    this.props.load ? <Loading/>:
    this.props.inidvidualsubjecttest.length === 0 ? <Grid  container> <Grid item xs={12} sm={12} lg={12} md={12} className="takeatleastonetestaccuracy" style={{textAlign: "center", }} justify="center" align="center">Take Atleast One Test</Grid> </Grid>  :
    <div>
    <div className="tabtaketest tabborder tabname classtabheading">
     <div className="numbertab tabheading">No.</div>
      <div className="tabsubject tabheading">Subject </div> 
      <div className=" noofqesti tabheading"> Questions</div> 
      <div className="tabpublished tabheading">Published </div>
      <div>actions</div>
      </div>
   { this.props.inidvidualsubjecttest.map((val , i) => 
      <Tab.Content animation>
       <Card> <Tab.Pane eventKey={val.topics} ><div className="tabtaketest"> <div className="numbertab">{i+1} </div> <div className="tabsubject">{val.subject} </div> <div className=""> {val.num_questions} </div>  <small>{val.published}</small> <button>Take Test</button> </div> </Tab.Pane> </Card>
      </Tab.Content>
       )}</div>
       : <div> Click on Subject to see </div>}
    </Col> */}

                        
                </Grid>
                
                 : <Loading/>}
                </Grid>
            </div>
        )
    }
}
MainDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => {
    return {
      data: state.maindashboard.inidvidualsubject,
      fetched :  state.maindashboard.fetchedsubjectdetail,
      load: state.maindashboard.load,
      subject : state.maindashboard.individualsubjecttosendinapi,
      inidvidualsubjecttest : state.maindashboard.inidvidualsubjecttest,
      learning: state.maindashboard.learning

    };
  };
  
  

  //export default connect(mapStateToProps , )(MainDashboard);
  export default compose(  withStyles(styles) , connect(mapStateToProps  ,{ fetchMainDashboardIndividualSubject , fetchedMainDashboardIndividualSubjectTest  , fetchedMainDashboardIndividualLearning , fetchDashboardDataTakeTest}) ) (MainDashboard);