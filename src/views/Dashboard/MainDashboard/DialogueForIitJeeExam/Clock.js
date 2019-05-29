import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
class Clock extends Component {
     constructor(props) {
     super(props);
     this.state = {
               days: 0,
               hours: 0,
               minutes: 0,
               seconds: 0,
          };
     }
     componentWillMount() {
          this.getTimeUntil(this.props.deadline);
     }
     componentDidMount() {
          setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
     }  
     leading0(num) {
          return num < 10 ? '0' + num : num;
     }
     getTimeUntil(deadline) {
         console.log("hi"  , deadline)
          const time = Date.parse(deadline) - Date.parse(new Date());
          if(time < 0) {
               this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          
          } else {
               const seconds = Math.floor((time/1000)%60);
               const minutes = Math.floor((time/1000/60)%60);
               const hours = Math.floor((time/(1000*60*60))%24);
               const days = Math.floor(time/(1000*60*60*24));
               this.setState({ days, hours, minutes, seconds });
               console.log("")
          }
     }
     render() {
          return(
               <div style={{textAlign: "center" ,  fontSize: 18 ,fontWeight: 500 , alignContent: "center" , margin: "auto" }}>
                         {/* <div> </div> <div><span className="time"> <span className="timetext">{ this.state.time.h <= 9 ? "0"+this.state.time.h : this.state.time.h }</span> <span className="timetext">{this.state.time.m <= 9 ? "0"+this.state.time.m : this.state.time.m }</span>
                          <span className="timetext">{this.state.time.s <= 9 ? "0"+this.state.time.s : this.state.time.s }</span> </span> </div>
                   */}
                   <Grid  container style={{}} className="setclock">
                            <Grid item xs={3} sm={2} lg={2} md={2} className="groupimg" style={{textAlign: "center" , }}>
                            <span className="time" style={{margin: 10}}> 
                          <div  style={{margin: 10}}>Days</div>
                          <span className="" style={{color: "black"}}>
                       <span style={{color: "white" , backgroundColor: "#3f6fbf", padding: 5 , marginBottom: 5}}> {this.leading0(this.state.days)}  </span> 
                       {/* <span style={{textAlign: "center"}}>:</span>
                         <div>Days</div>  */}
                    </span>
                    </span>
                            </Grid>

                            <Grid item xs={3} sm={2} lg={2} md={2} className="groupimg" style={{textAlign: "center"}}>
                            <span className="time" style={{margin: 5}}> 
                    <div style={{margin: 10}}>Hrs</div>
                          <span className="" style={{color: "black"}}>
                    <span className="Clock-hours">
                    <span  style={{color: "white" , backgroundColor: "#3f6fbf" , padding: 5 , marginBottom: 5}}>   {this.leading0(this.state.hours)} </span> 
                    {/* <span  style={{textAlign: "center"}}>:</span> */}
                         {/* <div> Hrs </div>  */}
                    </span>
                    </span>
                    </span>
                            </Grid>

                            <Grid item xs={3} sm={2} lg={2} md={2} className="groupimg" style={{textAlign: "center"}}>
                            <span className="time" style={{margin: 10}}> 
                    <div  style={{margin: 10}}>Min</div>
                          <span className="" style={{color: "black"}}>
                    <span className="Clock-minutes">
                    <span  style={{color: "white" , backgroundColor: "#3f6fbf" , padding: 5 , marginBottom: 5}}>    {this.leading0(this.state.minutes)} </span> 
                    {/* <span style={{textAlign: "center"}}>:</span>
                         <div> Min</div> */}
                    </span>
                    </span>
                    </span>

                            </Grid>
                            <Grid item xs={3} sm={2} lg={2} md={2} className="groupimg" style={{textAlign: "center"}}>
                            <span className="time" style={{margin: 10}}> 
                    <div  style={{margin: 10}}>Sec</div>
                          <span className="" style={{color: "black"}}>
                    <span className="Clock-seconds">
                    <span  style={{color: "white" , backgroundColor: "#3f6fbf", padding: 5 , marginBottom: 5}}>    {this.leading0(this.state.seconds)} </span> 
                    {/* <span style={{textAlign: "center"}}>:</span> */}
                         {/* <div> Sec </div> */}
                    </span>
                    </span>
                    </span>
                            </Grid>
                            </Grid>
                      

                    {/* <span className="time" style={{textAlign: "center"}}>:</span> */}
                    
                 

                    {/* <span className="time" style={{textAlign: "center"}}>:</span> */}

                
                    {/* <span className="time" style={{textAlign: "center"}}>:</span> */}


                 
               </div>
          );
     }
}
export default Clock;