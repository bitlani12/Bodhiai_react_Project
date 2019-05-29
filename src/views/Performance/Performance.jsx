import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { fetchMyProgressData , fetchMyPerformanceDateData} from "../../store/actions/myprogress";
import { connect } from 'react-redux';
import PerformanceSubjects from './performanceheader';
import './Performance.css'
import user from './../../images/user.png'

class Performance extends Component {
      constructor(props){
        super(props);
        this.state = { 
          optionshow:false,
          recievedate : "" 
         };
      }
  componentDidMount(){
   this.props.fetchMyProgressData();
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="content" style={{backgroundColor: "white"}}>
        <Grid fluid>
          <Row>
          <Col md={12} lg={12} sm={12}>
            <PerformanceSubjects recievedate = {this.recievedate}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.progress.progress,
    fetched : state.onlinetest.fetchedonlinetest
  };
};


export default connect(mapStateToProps , { fetchMyProgressData , fetchMyPerformanceDateData })(Performance);