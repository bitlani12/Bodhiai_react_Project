import React from 'react';
import {Doughnut} from 'react-chartjs-2';
class ResultChart extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            chartData : [4,5,5,5,]
        }
    }
    render(){
        const data = {
            labels: [
                "Right",
                "Skipped",
                "Wrong"
            ],
            datasets: [
                {
                    data: [this.props.right,this.props.skipped,  this.props.wrong],
                    backgroundColor: [
                        "#26c307d4",
                        "#FFCE56",                    
                        "#FF6384",
                    ],
                    hoverBackgroundColor: [
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384",
                    ]
                }]
           };
    
        return(
            <div>
                <Doughnut
    data={data}
    width={1000}
    height={250}
    options={{
        maintainAspectRatio: false
    }}
/>

            </div>
        )
    }
}

export default ResultChart;