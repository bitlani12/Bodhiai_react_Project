import React from 'react';
import { fetchDashboardDataRank} from "../../store/actions/dashboardaction";
import { connect } from 'react-redux';
import Slider from "react-slick";
import './Rank.css'
import rank1 from './../../images/rank.png';
import rank2 from './../../images/military-rank.png';
import rank3 from './../../images/ranking.png';
import rank4 from './../../images/Rank Badge.png';
class Rank extends React.Component{
    
  componentDidMount(){
    this.props.fetchDashboardDataRank();
  }

    render(){
        var settings = {
            dots: false,
            infinite: true,
            speed: 1500,
            autoplaySpeed:3500,
            centerPadding: 0,
           
            slidesToShow: 1,
            centerMode: true,
            autoplay : true,
            initialSlide: 2,
            slidesToScroll: 1,
            arrows:false,
            rtl: false,
           
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
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
                  slidesToScroll: 1 ,
                  touchMove	: true
                }
              }
            ]
          };
        return(
            <div className="container rank" style={{width:'100%'}}>
        <div className="row rankheader">
            <div className=" col-sm-6 col-md-6 col-lg-6 yourrank text-center" > Your Rank </div>
            <div className=" col-sm-6 col-md-6 col-lg-6  text-center" ><img src={rank3} alt="hii" height={35} width={35} ></img></div>
        </div> 
        <div className="row" style={{borderBottom:'solid #d8d6d68a 1px' , height:"2px" , marginLeft: '6%' , marginRight:'10%'}}></div>
            <Slider {...settings} ref="simpleSquare">
                     {this.props.fetched == false ? <div>Loading... </div> : 
                     this.props.data  ? <div>No Test Record Found ! Give it Now. </div> : 
                    this.props.data.map((val) => {
                        return  (
                      <div>
                        <div className="col-sm-12 col-md-12 col-lg-12 text-center ranksubject"> {val.subject}</div>
                        <div className="row rankimagetext text-center"> 
                           
                            <div className=" col-sm-12 col-md-12 col-lg-12  img-fluid img-responsive col-xl-offset-3 col-lg-offset-2 col-md-offset-1" >
                            <img src={rank4} alt="hii"  className='rankimage'/>
                            <h4 className="rankvalue">{val.rank}</h4></div>
                            </div>
                            <table className="table  text-item-center " cellPadding="10" cellSpacing="20"> 
                            
                              <tr className="tr">
                              <td className="td">Your rank </td> 
                                <td className="td">{val.rank}</td>
                              </tr>
                              <tr className="tr">
                                <td className="td">Total Students</td>
                                <td className="td"> {val.total_students}</td>
                              </tr>
                              <tr>
                                <td className="td">Marks </td>
                                <td className="td">{val.marks}</td>
                              </tr>
                              <tr>
                                <td className="td">Published</td>
                                <td className="td"> {val.published}</td>
                              </tr>
                            </table>
                          
                          
                      </div>)
                       
                    })}
                 
             </Slider>
            </div>
           
        )
    }
}



const mapStateToProps = state => {
    return {
      data: state.dashboard.rank,
      fetched : state.dashboard.fetchedddddd
    };
  };
  
  
export default connect(mapStateToProps , { fetchDashboardDataRank})(Rank);