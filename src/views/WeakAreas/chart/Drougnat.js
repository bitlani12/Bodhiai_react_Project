import React from 'react';
import {Doughnut} from 'react-chartjs-2';
class DrougnatChart extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
           
        }
    }
    render(){
        const data = {
            labels: this.props.label,
            datasets: [
                {
                    data: [this.props.data1 , this.props.data2 ],
                    backgroundColor: this.props.color,
                    hoverBackgroundColor: this.props.hovercolor
                }]
           };
    
        return(
            <div>
                
             { isNaN(this.props.data1)  && isNaN(this.props.data2) ?<h4  style={{marginTop: 100 , fontWeight: 600}}>You didn't Attempt any question</h4> : <Doughnut
                data={data} 
                
                width={2000}
                height={300}
                options={{
                maintainAspectRatio: false
                    }}
                    />}
            </div>
        )
    }
}

export default DrougnatChart;