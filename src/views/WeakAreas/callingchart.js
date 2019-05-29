import React from 'react';
import DrougnatChart from './chart/Drougnat';
import { fetchWeakAreasData } from "../../store/actions/myprogress";
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import './WeakAreas.css'
class CallingChart extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
           
        }
    }
    componentDidMount(){
      
        this.props.fetchWeakAreasData(this.props.subject);
    }
    render(){
        let label1=[ "Right Answer Percentage","Wrong Answer Percentage",] ; 
        let label2 = [ "Total Attempted Percentage","Skipped Percentage"];
        let color1= ["#26c307d4","#FF6384"];
        let color2= ["#FFCE56","#36A2EB"];
        let hovercolor1 =  ["#26c307d4","#FF6384"];
        let hovercolor2 = ["#FFCE56","#36A2EB"];

        let wrong , right , attempted , skippedpercent , attemptedpercent;
        return(
            <div>
                 {this.props.fetched === false ? <h3>Loading...</h3> : ""}

                {this.props.data.length != 0 ? 
                
                    this.props.data.map((val) => {
                         wrong = (val.totalWrong / val.totalAttempted)*100;
                        right = 100 - wrong;
                        attempted = 100 - val.skippedPercent;
                        skippedpercent = (val.totalSkipped /(val.totalSkipped + val.totalAttempted) ) * 100;
                        attemptedpercent = 100 - skippedpercent;
                      {return <Card style={{margin:10 }}>
                         
                           
                        <h2>   {val.chapter} </h2>
                       <hr/>
                        <Grid container >
                        <Grid item xs={12} sm={6} lg={6} md={6} className="showmarks" style={{textAlign: "center"}} justify="center" align="center">
                       
                         {right === 0 && wrong === 0 ? "You didn't attempt any question" : 
                          <DrougnatChart data1={right} data2={wrong}  color={color1} label={label1} hovercolor={hovercolor1}/> } 
                         {console.log(right , wrong , "this is right or wrong ")}
                           </Grid>
                           <Grid item xs={12} sm={6} lg={6} md={6} className="showmarks" style={{textAlign: "center"}} justify="center" align="center">
                           <DrougnatChart  data1={skippedpercent} data2 = {attemptedpercent} color={color2} label={label2} hovercolor={hovercolor2}/>
                        </Grid>

                        <Grid item xs={12} sm={12} lg={12} md={12} className="showmarks" style={{textAlign: "center"}} justify="center" align="center">
                            <div className="weakareasdetail">
                                <div className="item">Total Right Question {val.totalRight}</div>
                                <div className="item">Total Wrong Question {val.totalWrong}</div>
                                <div className="item"> Total Attempted Question {val.totalAttempted} </div>
                                <div className="item">Total Skipped Question {val.totalSkipped}</div>
                            </div>
                        </Grid>
                        </Grid>
                       </Card> }  
                    })
                  
                 :  <h1> You Did't Given Any Test Yet.  </h1>  }
               
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
      data: state.progress.weakareas,
      fetched : state.progress.fetchedweakareas
    };
  };
  
  export default connect(mapStateToProps , { fetchWeakAreasData })(CallingChart);