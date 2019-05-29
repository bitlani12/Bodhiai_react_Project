import React from "react";
import Card from '@material-ui/core/Card';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';  
import './IndividualProfile.css';

class IndividualProfile extends React.Component{
    render(){
        const photo = this.props.data && this.props.data.photo
        const name =  this.props.data && this.props.data.name
        const details = this.props.data && this.props.data.details
        return(
            <Card>
            <div>
               {this.props.fetched?
               <div>
                   
                     <Grid  container>
                     <Grid item xs={12} sm={12} lg={12} md={12}  style={{textAlign: "center"}}  justify="center" align="center" >
                     <div>
          <p class="paras"></p>
        </div>
                <div class="card-blocks">
                    <p class="white-texts">  <img src={photo} height="150" width="150" className="rounded-circles"/></p>
                    <h3>{name}</h3>
                </div>
                   </Grid>
                   </Grid>
                   <div className="gridcard">
                   <Grid  container >
                   {details.map((val)=>{
                      return(
                       
                    
                        
                      <Grid  xs={12} sm={4} lg={4} md={4}  style={{textAlign: "center"}}  justify="center" align="center" className="profiledetailcard" >
                      <div>
                   <Card>
                      { <div><img src={val.logo
                      } height={150} width={150}/></div> }
                      <span><h4 className="profilesubject">{val.subject
                      }</h4></span>
                      <hr/>
                      <div className="userdetails">

                            <span className="userdetail">Attempted<h6>{val.attempted
                            }</h6></span>
                            <span className="userdetail">Right<h6>{val.right
                            }</h6></span>
                            <span className="userdetail">Accuracy<h6>{Math.round(val.accuracy * 100) / 100
                            }%</h6></span>
                       </div>
                    </Card>
                    </div>
                      </Grid>
                     
                  
                      )
                   })}
             
                   {/* {details.map((val) => {
                    <Grid item xs={12} sm={12} lg={12} md={12}  style={{textAlign: "center"}}  justify="center" align="center" className="profilepersonname" >
                                    {val.subject}
                                    {val.logo}
                                    {val.attempted}
                                    {val.right}
                                    {val.accuracy}
                    </Grid> 
                   })} */}
                    
                   </Grid>
            </div>
                   </div>
                   : <div>Loading... </div>

               }
            </div>
            </Card>
        )
    }
}
const mapStateToProps = state => {
    return {
      data: state.maindashboard.individualprofile,
      fetched : state.maindashboard.fetchedindividualprofile,
    };
  };
export default connect(mapStateToProps , {})(IndividualProfile);