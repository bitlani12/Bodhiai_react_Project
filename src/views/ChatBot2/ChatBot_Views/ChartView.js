import React from 'react';
import {Pie} from 'react-chartjs-2';
import CircularProgressbar from 'react-circular-progressbar'
import Grid from '@material-ui/core/Grid'
import StopWatch from './../../../images/stopwatch.png';
class ChartView extends React.Component{
     data = {
        labels: [
            // 'Red',
            `Attempted(${  this.props.data.data   && this.props.data.data.attempted})`,
            `Skipped(${ this.props.data.data && 100 -this.props.data.data.attempted})`
        ],
        datasets: [{
            data: [ this.props.data.data && this.props.data.data.attempted,this.props.data.data && 100 -this.props.data.data.attempted ],
            backgroundColor: [
            // '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            // '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };
  render() {
    // {console.log(this.props.data.data.graph_type) , "this is for console log"}
    return (
      <div className="chartview">
             {this.props.data.data && this.props.data.data.graph_type === "attempt" && <Pie data={this.data} className="chartview"/>}
             
             {this.props.data.data && this.props.data.data.graph_type === "score" && 
                    <Grid container>
                    <Grid item sm={8}>
                    <div style={{ width:'90px' , marginLeft: 30}}> 
                        <CircularProgressbar percentage={this.props.percent} text={`${this.props.data.data.score}%`}
                        className="progressbar"  initialAnimation styles={{ path: { stroke: `#3c3535d4` }, text: { fill: '#3c3535d4', fontSize: '16px'},}}/>
                        <div className="scoreofprogressview">Score</div>
                        </div>
                    </Grid>
                    <Grid item sm={4}>
                    <div className="chartviewright"> Right {this.props.data.data.rightAnswers}</div>
                    <div className="chartviewwrong"> Wrong {this.props.data.data.wrongAnswers}</div>
                    </Grid>
                    </Grid>
            }

            {this.props.data.data && this.props.data.data.graph_type === "timeTaken" && <div>
            <Grid container>
                    <Grid item sm={6}>
                    <img src={StopWatch} height={40} width={40} />
                    </Grid>
                    <Grid item sm={6} style={{paddingTop: 5 , fontSize: 20 , fontWeight: 500}}>  {this.props.data.data.time}</Grid>
            </Grid>
           </div>}
        


      </div>
    );
  }
}
export default ChartView;