import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import { Button } from '@material-ui/core';
// import ExampleService from './example-service';

class Testip extends Component {
  state={
    subject1 : "" , subject2: "" , subject3 : ""
}
  handleChange=(event,i)=>{
    console.log(event.target.value)
    i === 1 ?  this.setState({subject1: event.target.value }): "";
    i === 2 ?  this.setState({subject2: event.target.value }): "";
    i === 3 ?  this.setState({subject3: event.target.value }): "";
}

  render() {
    return (
      <div>
        <Button>Send Notificatoin</Button>
        <input
                        id="typeinp" 
                        type="range" 
                        min={0} max="100"
                        value={this.state.subject1}
                        className="slider"
                        onChange={(e)=>this.handleChange(e,1)}
                        name="volume"
                        step="0"
                      from="0" to="100"/>
                        <label for="volume">Volume</label>
     {/* <iframe src="http://localhost:3000/#/test" width={"100%"} height={"100%"}/> */}
      </div>
    );
  }
}
export default Testip;