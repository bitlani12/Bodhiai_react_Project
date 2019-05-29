import React from 'react'

import { fetchrecommendations} from "./../../../../store/actions/myprogress";
import { connect } from 'react-redux';
import Loading from './../../../Loading/Loading';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Arrow from './../GroupDetail/Arrow';
import Slider from "react-slick";
import './Recommandtiondashboard.css'
//import './Recommendation.css'
class RecommendationInDashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {  index: 1 , displayRightArrow: true, displayLeftArrow: false , width : window.innerWidth};
        this._nodes = new Map();
     
       }
       setArrowDisplay = currentSlide => {
        const cityList =this.props.data.recommendations;
        console.log(cityList.length , currentSlide , "this is very important")
        const displayLeftArrow = currentSlide !== 0;
        const displayRightArrow = currentSlide !== cityList.length - this.slidesToShow;
  console.log(currentSlide , cityList.length - this.slidesToShow)
        this.setState({ displayRightArrow, displayLeftArrow });
    };
    clickHandler = (direction) => {
        if (direction === 'left') {
          this.slider.slickPrev();
        } else if (direction === 'right') {
          this.slider.slickNext();
        }
      };
      updateDimensions() {
        this.setState({ width: window.innerWidth });
      }

        componentDidMount(){
            this.props.fetchrecommendations();
        }
        render(){
            this.state.width >1400 ?  this.slidesToShow = 2 :this.state.width < 1400 &&this.state.width > 1130 ? this.slidesToShow = 2 :this.state.width < 1130 &&this.state.width > 600 ? this.slidesToShow = 2  :this.state.width < 600 ? this.slidesToShow = 1 : "";
            var settings = {
             responsive: true,
             dots: false,
             infinite: false,
             speed: 300,
             slidesToShow: this.slidesToShow,
             arrows:false,
             nextArrow: null ,
             lazyLoad: true,
             prevArrow:  null,
             afterChange: currentSlide => this.setArrowDisplay(currentSlide),
             responsive: [
             {
                breakpoint: 1500,
                settings: {
                    slidesToShow: this.slidesToShow,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                
                }
                },
            {
            breakpoint: 600,
            settings: {
             slidesToShow: this.slidesToShow,
             slidesToScroll: 1,
             infinite: false,
           }
         },
         {
            breakpoint: 480,
            settings: {
             slidesToShow: this.slidesToShow,
             slidesToScroll: 1,
             infinite: false,
             
           }
         }
       ]
     }
            return(
                <div style={{borderBottom: "solid gray 1px"}}>
                <Grid  container>
                <Grid item xs={12} sm={12} lg={12} md={12}  style={{textAlign: "left"}} className="subjecttext" justify="center" align="left" style={{backgroundColor: "#383e49"}}>
                Recommendation</Grid>
                <Grid item xs={12} sm={12} lg={12} md={12}>
                <div  className="setrecommendation" style={{  width:"100%"}}>
                {this.props.fetched ? 
                <div className="city-selection">
               {this.state.width > 1024?
                            <Arrow
                            styleClassName={` ${
                                this.props.data.recommendations.length > this.slidesToShow ? this.state.displayRightArrow ?"gallery gallery3" : "disabledprevnext"  : "disabledprevnext"
                              }`}
                            direction="right"
                            clickHandler={this.clickHandler}
                          />
                          : ""}
                          {this.state.width > 1024 ? 
                             <Arrow
                             styleClassName={` ${
                               this.state.displayLeftArrow ?  "gallery gallery3" : "disabledprevnext"
                             }`}
                             direction="left"
                             clickHandler={this.clickHandler}
                           /> : ""}
                          <div className="slierwitharrow">
                      <Slider {...settings}   ref={c => this.slider = c} className="groupdetailslider">
                                      
                                      {this.props.data.recommendations.map((val , i) =>
                                    
                                      <Card  >
                                      { // console.log(this.props.data.subjects.length , i , "this si map ") 
                                      }
                              <div style={{border: "solid #e4dcdc 1px" , }} className="demo-gallery">
                           <Grid container style={{marginBottom: 10 }} className="lightgallery">
                           {/*     <Grid item xs={6} sm={6} lg={6} md={6}  style={{textAlign: "center" , fontWeight: 800 , padding:10 ,  borderBottom: "solid #ece4e4 1px"}} justify="center" align="center" className="vidsubject">
                          Subject:{val.subject} 
                            </Grid>
                            <Grid item xs={6} sm={6} lg={6} md={6}  style={{textAlign: "center" , fontWeight: 800,padding:10  , borderBottom: "solid #ece4e4 1px"}} justify="center" align="center" className="vidsubject">
                           Chapter: {val.chapter}
                            </Grid> */}
                         
                            <Grid item xs={12} sm={12} lg={12} md={12}  style={{textAlign: "center" , fontWeight: 500,padding:0}} justify="center" align="center" >
                    <iframe height="200px" width="100%" src={`https://www.youtube.com/embed/${val.link}`} frameborder="1"  allowfullscreen="allowfullscreen">
                    </iframe>
                    </Grid>
                    </Grid>

                    <Grid container style={{ borderBottom: "solid black 1px" , padding:10}}>
                    <Grid item xs={12} sm={12} lg={12} md={12} className="recommenddashboardsubject">
                          Subject:{val.subject} 
                            </Grid>
                            <Grid item xs={12} sm={12} lg={12} md={12}  className="recommenddashboardsubject">
                           Chapter: {val.chapter}
                            </Grid> 
                            <Grid item xs={12} sm={12} lg={12} md={12} className="recomenddashboardtitle">
                    {val.title} 
                     </Grid></Grid> 
                     </div>
                    </Card>) }
                                      </Slider> 
                                      </div>  </div>: <div><Loading/></div>
                                     
                                      }
                                      </div>
                </Grid>
                </Grid>
                    </div>


//                 <Grid container style={{backgroundColor: "white"}}>
         
//                {this.props.fetched ? 
             
//                 <Grid item xs={12} sm={12} lg={12} md={12}  style={{textAlign: "center" , margin:10}} justify="center" align="center" >
//                {this.props.data.recommendations.map((val) => {
//                    return (
//                    <div style={{border: "solid #e4dcdc 1px" , margin: 20}} className="demo-gallery">
//                         <Grid container style={{marginBottom: 10 }} className="lightgallery">
//                            <Grid item xs={6} sm={6} lg={6} md={6}  style={{textAlign: "center" , fontWeight: 800 , padding:10 ,  borderBottom: "solid #ece4e4 1px"}} justify="center" align="center" className="vidsubject">
//                          Subject: {val.subject} 
//                            </Grid>
//                            <Grid item xs={6} sm={6} lg={6} md={6}  style={{textAlign: "center" , fontWeight: 800,padding:10  , borderBottom: "solid #ece4e4 1px"}} justify="center" align="center" className="vidsubject">
//                           Chapter: {val.chapter}
//                            </Grid>
                          
//                            <Grid item xs={12} sm={12} lg={12} md={12}  style={{textAlign: "center" , fontWeight: 800,padding:5}} justify="center" align="center" className="video-wrap">
//                    <iframe height="100%" width="100%" src={`https://www.youtube.com/embed/${val.link}`} frameborder="1"  allowfullscreen="allowfullscreen"
// >
//                    </iframe>
//                    </Grid>
//                    </Grid>
//                    <Grid container style={{ borderBottom: "solid black 1px" , padding:10}} >
//                            <Grid item xs={12} sm={12} lg={12} md={12}  style={{textAlign: "center" , fontWeight: 800}} justify="center" align="center" className="vidtitle">
//                     {val.title} 
//                     </Grid></Grid> 
//                     </div>
//                )})}
//                </Grid>
//             :   <Grid item xs={12} sm={12} lg={12} md={12}  style={{textAlign: "center"}} justify="center" align="center" ><Loading /> </Grid>} 


    
//     </Grid>

            )
        }
    }
    const mapStateToProps = state => {
        return {
          data: state.progress.recommendation,
          fetched : state.progress.fetchrecommendations
        };
      };
      
      
      export default connect(mapStateToProps , { fetchrecommendations })(RecommendationInDashboard);