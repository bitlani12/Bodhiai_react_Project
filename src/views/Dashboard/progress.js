import React, { Component } from 'react';
import { fetchDashboardDataProgress} from "../../store/actions/dashboardaction";
import { connect } from 'react-redux';
import Slider from "react-slick";
import Chart from './Chart'
import './Progress.css';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import progress from './../../images/progress.png';
import Loading from '../Loading/Loading';

class Progress extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount(){
    this.props.fetchDashboardDataProgress();
  }

  render() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 10000,
        autoplaySpeed:3500,
        centerPadding: 0,
        slidesToShow: 2,
        autoplay : true,
        initialSlide: 1,
        arrows:false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            
              autoplay : true,
              height:1000,
              autoplaySpeed:1500,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay : true,
              height:1000,
              autoplaySpeed:1500,
              initialSlide: 0,
              touchMove	: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              autoplay : true,
              height:1000,
              autoplaySpeed:1500,
       
              touchMove	: true
            }
          }
        ]
      };
    return (
      <div >
        <Card>
        <div  style={{height: '450' }}>
                    <div  className="row youraccuracy" >
                            <Grid  container style={{paddingLeft:17}}>
                                  
                                    <Grid item xs={8} sm={8} lg={8} md={8} className="showmarks" style={{textAlign: "center"}} justify="center" align="center">
                                <div className="accuracy"> Progress</div>  
                                    </Grid>
                                    <Grid item xs={2} sm={2} lg={2} md={2} className="showmarks" style={{textAlign: "center"}} justify="center" align="center">
                                    <img src={progress} alt="hii"  height={35} width={35} /> 
                                    </Grid>
                                    </Grid>
    </div>
    <div style={{height: 350}}>
    <Slider {...settings} ref="simpleSquare">
     {this.props.fetched === false  ? <div> <Loading /></div> :
 this.props.data.length === 0 ?   <Grid  container> <Grid item xs={12} sm={12} lg={12} md={12} className="takeatleastonetestaccuracy" style={{textAlign: "center", }} justify="center" align="center">Take Atleast One Test</Grid> </Grid> :
        this.props.data.map((val) => {
            let marks = val.marks.map((value) => {return value});
            let dates = val.dates.map((date) => {return date})
            return(
              <div style={{height:350}}>
          <Chart subject={val.subject} chapter={val.chapter} marks={marks} dates={dates}/>
          </div>
            ) })} 
        </Slider>
        </div>
        </div>
        </Card>
      </div>
    )
  }
}





const mapStateToProps = state => {
    return {
      data: state.dashboard.progress,
    fetched : state.dashboard.fetchedprogress
    };
  };
  
  
export default connect(mapStateToProps , { fetchDashboardDataProgress})(Progress);