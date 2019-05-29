import React from 'react';
import {Bar , Line , Pie , defaults } from 'react-chartjs-2';
import Media from "react-media";
import './chart.css'


defaults.global.maintainAspectRatio = false
class Chart extends React.Component{
   
    constructor(props){
        super(props);
        this.state = {heightSet: 150 , width : window.innerWidth, };

            this.chartData = (canvas)=> {

                const ctx = canvas.getContext("2d");
                const gradient = ctx.createLinearGradient(0,0,0,400);
             
                gradient.addColorStop(0, '#ff6200e6');   
                gradient.addColorStop(1, 'white');

                return{
                labels: this.props.dates,
                datasets: [
                        {
                        label: 'Marks',
                        data:  this.props.marks.map((val) => val) ,
                        backgroundColor: gradient,
                        fill: true,
                      
                        maintainAspectRatio: false,
                        borderColor: '#ff6200e6',
                        lineTension: 0.1,
                        borderWidth:2,
                       
                        borderCapStyle: 'butt',
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: '#ff6200e6',
                        pointBackgroundColor: '#ff6200e6',
                        pointBorderWidth: 2,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'transparent',
                        pointHoverBorderColor: '#ff6200e6',
                        pointHoverBorderWidth: 2,
                        pointRadius: 5,
                        pointHitRadius: 10,   
                        }
                ]
            }
        }
        
    }
    componentDidMount(){
        this.updateDimensions();
    }
    updateDimensions() {
        this.setState({ width: window.innerWidth });
        console.log(this.state.width)
      }
    render(){
        const heightSet = this.state.width < 400  ?  350 : this.state.width > 400 && this.state.width < 500 ? 330 :  this.state.width > 500 && this.state.width < 768 ? 150: this.state.width > 1000  && this.state.width < 1115 ? 300 : this.state.width > 1115 && this.state.width <1200 ? 200 : this.state.width>1200 && this.state.width < 1400 ? 180 : this.state.width>1400 && this.state.width < 1600 ? 160 :this.state.width>1600 && this.state.width < 1921 ? 120 : 100;
    
    //     <Media query="(max-width: 450px)">
    //     {matches =>
    //       matches ? (
    //         this.setState({heightSet:350})
    //       ) : (
    //         <p>The document is at least 600px wide.</p>
    //       )
    //     }
    //   </Media>
        return(
            <div className="lines" >
             { heightSet && console.log(this.state.width , heightSet)}
            <Line data={this.chartData}
     height={heightSet}
        className="setlinechartprogress"
        
         
            options={{
                maintainAspectRatio: false,
                responsive: true,
                title:{
                    display: true , 
                    text:`${this.props.subject}`,
                    fontSize: 25
                },
                legend:{
                    display:true,
                    position: 'top'
                }, scales: {
                    yAxes: [{
                    
                        ticks: {
                            fontSize:16, 
                            fontColor: 'black',
                            beginAtZero:true,
                            suggestedMin: 0,
                            suggestedMax: 100,
                   
                        } , scaleLabel: {
                            display: true,
                            labelString: `${this.props.chapter} (marks)`,
                            fontSize:16
                          }
                      }] ,
                      xAxes:[{
                          ticks: {
                            beginAtZero:true,  
                          }, scaleLabel: {
                            display: true,
                            labelString: `Dates`,
                            fontSize:16
                          }
                      }]
                   }
                ,  maintainAspectRatio: true} }/>
            </div>
        )
    }
}
export default Chart;