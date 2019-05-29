import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import "./PerformanceData.css";
import QuestionAndAnswer from "./QuestionAndAnswer"
import Charts from './charts';
import { Cardshowdata } from '../../components/Card/Cardshowdata';
class Performancedata extends React.Component{
    render(){
        const thistest =  this.props.data;
        const cardData = [this.props.data.accuracy,this.props.data.numberSkipped,this.props.data.numberRight,this.props.data.numberWrong]
        return(
            <div style={{border : "solid gainsboro 1px" , marginTop: 12}}>
            {
           this.props.fetched ?
            <div> 
                  <Cardshowdata arr={cardData}/>
                  <div className="testresult">
                  <Typography gutterBottom variant="h5" component="h2">
                 {/* <div> <h3>Your Result For : <strong>{//this.props.data.marks.test.sub
                 }  </strong> </h3> </div> */}
               
                {/* <div className="resultsummary">
                        <div className="item"  style={{display: "none"}}><div className=" fonticon pe-7s-credit" ></div> {}</div>
                    {/* <div > <div style={{display: "none"}}>  <h4 ><div><div className=" fonticon pe-7s-close-circle" ></div></div>Total Time</h4> </div>  </div>  }
                        <div className="item"><div style={{color: '#79dfff'}} className="fonticon  pe-7s-timer "  ></div><div style={{color: 'white'}}>Accuracy <span  >{this.props.data.accuracy}</span></div></div>
                        <div className="item"><div  style={{color: 'yellow'}} className=" fonticon pe-7s-right-arrow" ></div><div style={{color: 'white'}}>Skipped <span >{this.props.data.numberSkipped}</span></div></div>
                        <div className="item"><div  style={{color: '#41f941'}} className=" fonticon pe-7s-check" ></div> <div style={{color: 'white'}}>Right <span  > {this.props.data.numberRight} </span></div></div>
                        <div className="item"><div   style={{color: 'red'}} className=" fonticon pe-7s-close-circle" ></div><div style={{color: 'white'}}> Wrong <span  > {this.props.data.numberWrong}</span></div></div>
                    </div>  */}

                {/* <div className="resultsummary">
                  <h4 className="item" style={{display: "none"}}>{  }</h4> 
                    <h4 className="item"  style={{display: "none"}}></h4> 
                    <h4 className="item">Accuracy {this.props.data.accuracy}</h4>
                    <h4 className="item">Skipped Answers </h4>
                    <h4 className="item">Right Answers</h4>
                    <h4 className="item">Wrong Answers</h4>
                </div>  */}
               
                  <Grid container >
                        {/* <Grid item xs={12} sm={12} lg={12} md={12}  style={{textAlign: "center"}} justify="center" align="center" >
                           <div className="performancemarks">
                                <div className="marks" style={{display: "inline-block" , margin:0 , padding: 0}} >
                                <span className="markstext">Marks</span>
                                <div className="circle">
                                <div className="markcss marksoutof">Marks <span className="mainmarks">{thistest.myMarks}</span></div>
                                <div className="marksborder "> </div>
                                <div className="markcss markstotalof">Total <span className="totalmarksget">{thistest.totalTestMarks}
                                 </span></div>
                                </div>
                                </div>
                                </div>
                        </Grid>   

                        <Grid container > */}
                        <Grid item xs={12} sm={6} lg={6} md={6}  style={{textAlign: "center"}} justify="center" align="center" >
                           <div className="performancemarks">
                                <div className="marks" style={{display: "inline-block" , margin:0 , padding: 0}} >
                                <span className="markstext">Marks</span>
                                <div className="circle">
                                <div className="markcss marksoutof">Marks <span className="mainmarks">{thistest.myMarks}</span></div>
                                <div className="marksborder "> </div>
                                <div className="markcss markstotalof">Total <span className="totalmarksget">{thistest.totalTestMarks}
                                 </span></div>
                                </div>
                                </div>
                                </div>
                        </Grid>   
                        <Grid item xs={12} sm={6} lg={6} md={6}  style={{textAlign: "center"}} justify="center" align="center" >
                        <div className="performancemarks">
                        <div className="marks" style={{display: "inline-block" , margin:0 , padding: 0}}>
                                <div className="marks" style={{display: "inline-block" , margin:0 , padding: 0}} >
                                <span className="markstext">Rank</span>
                                <div className="circle">
                                {console.log("this is for checking ", this.props.fetchrank)}
                                  {this.props.fetchrank && this.props.rankbytest.ranking.map((val)=>
                                     <div>{val.username === localStorage.getItem("username") ? <div>
                                     <div className="markcss marksoutof"> Your Rank <span className="mainmarks">{val.rank} </span> </div>
                                     <div className="marksborder"> </div>
                                     <div className="markcss markstotalof">Total <span className="totalmarksget">{this.props.rankbytest.ranking.length} </span></div> 
                                     </div>: "" }
                                   </div>
                                 
                                  ) } 
                                 
                                 
                                 </div>
                                
                                {/* <span className="mainmarks">{thistest.myMarks}</span>
                             
                                <div className="markcss markstotalof">Total Test <span className="totalmarksget">{thistest.totalTestMarks}
                                 </span></div> */}
                                </div>
                                </div>
                                </div>
                        {/* <div>{this.props.fetchrank ? 
                        this.props.rankbytestid.ranking.map((val)=> 
                          
                         <div>{val.username === localStorage.getItem("username") ? <div>{val.rank}/{this.props.rankbytestid.ranking.length} </div>: "no working" }</div> 
                        ) : ""}
                       {console.log(localStorage.getItem("username"), "username " , this.props.fetchrank , this.props.rankbytestid.ranking)}
                        </div> */}
                        </Grid>
                        <Grid item xs={12} sm={12} lg={12} md={12}  align="center" justify="center" style={{textAlign: "center"}}>
                                 <Charts   data={this.props.data}/>
                        </Grid>  
                        <Grid item xs={12} sm={12} lg={12} md={12}  align="center" justify="center" style={{textAlign: "center"}}>
                                <QuestionAndAnswer   data={this.props.data}/>
                        </Grid>  
                </Grid>
                </Typography>
                  </div>
           </div> 
           : <div> </div>
}
        </div>
        )
    }
}
export default Performancedata ; 