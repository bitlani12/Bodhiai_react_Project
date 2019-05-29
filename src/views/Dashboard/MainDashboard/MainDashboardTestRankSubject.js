import React, { Component } from "react";
import {NavLink } from "react-router-dom";
//import { fetchDashboardDataTakeTest} from "../../store/actions/dashboardaction";
import { connect } from 'react-redux';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import {   Button } from "mdbreact";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';  
import './MainDashboardTestRankSubject.css';
import PropTypes from 'prop-types';

const styles = theme => ({
    button: {
      display: 'block',
      marginTop: theme.spacing.unit * 2,
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
  });
class MainDashboardTestRankSubject extends React.Component{
    constructor(props) {
        super(props);
        this.state = { visible: this.props.open , animation:'slideDown', value: '',
        open: false,};
    }


    componentDidMount(){
        
      }
     
 
    
 
  
      render(){
          return(
               <div>
        <form>
      <div  className="custom-dropdown">
        <select class="mdl-selectfield__select" id="professsion1" name="professsion" onChange={(e)=>this.props.handleChangeOption(e)} value={this.props.value}>
        {this.props.fetched ? 
         this.props.subjects.subjects.map((val)=>(
           <option value={val[0]} className="svalue" >{val[0]}</option>
         ))
        : <option>Loading</option>}
         
        </select>
      
      </div>
    </form>
    {/* //      {console.log(this.props.data + 'this is take test data')}
    //     <button onClick={this.show.bind(this)}>show</button>
            
       
    //     <Rodal visible={this.props.open} showCloseButton={false} animation={this.state.animation} closeMaskOnClick={true}>
       
    //     <div>
    //     <Grid  container>
    //     <Grid item xs={12} sm={12} lg={12} md={12}  style={{textAlign: "center"}} justify="center" align="center" className="lisubject">
    //   <h4>  Subjects </h4>
    //     </Grid>
    //     </Grid>
    //     {this.props.fetched ? 
    //     <div className=" justify-content-center align-items-center  text-center " >

    //      <Card >
    //        {this.props.subjects.subjects.map((val) =>
    //                         <Grid  container>
                               
    //                                 <Grid item xs={12} sm={12} lg={12} md={12}  style={{textAlign: "center"}} justify="center" align="center" className="lisubject" onClick={()=>{this.props.onclicksubject(val[0])  , this.props.close()}} key={val[0]}>
    //                                 <li className="lisubject" >
    //                                 <h6>{val[0]}</h6>
    //                                 </li>
    //                                 </Grid>
    //                           </Grid>
    //                            ) } </Card>
            
    //     </div>: <div>Loading...</div>}
    //     <div className="btnstart" style={{textAlign: "center"}}>
    //                 <Button className="btn btn-danger btnmodal onlyclosebutton" onClick={this.props.close}><i className="fa fa-times" aria-hidden="true" ></i></Button>
            
    //              <div style={{display: "none"}}>  <Button className="btn btn-success btnmodal" onClick={this.props.close} style={{border: "solid gray 1px" }}></Button> </div> 
                   
    //                 </div></div> 
    //             </Rodal>  */}
              </div>
          )
      }
    }

    MainDashboardTestRankSubject.propTypes = {
        classes: PropTypes.object.isRequired,
      }; 

const mapStateToProps = state => {
    return {

    
    };
  };
  
  

export default connect(mapStateToProps , { })(MainDashboardTestRankSubject);
                                               
                                                        
