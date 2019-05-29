import React from "react";
import Slider from "react-slick";
import Card from "@material-ui/core/Card";
import {
  fetchMainDashboardSubjectsData,
  fetchMainDashboardIndividualSubject
} from "../../../../../store/actions/maindashboardaction";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
// import "./MainDashboardSubject.css"
import { NavLink } from "react-router-dom";
import Loading from "../../../../Loading/Loading";
import "./../../MainDashboardSubject/MainDashboardSubject.css";
// import Arrow from './../GroupDetail/Arrow'

class MainDashboardSubjectMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentslide: 1,
      lastslide: 3,
      initialprev: 0,
      index: 1,
      displayRightArrow: true,
      displayLeftArrow: false,
      width: window.innerWidth
    };
    this._nodes = new Map();
  }
  // ============================================ for arrows
  componentDidMount() {
    this.props.fetchMainDashboardSubjectsData();
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  clickHandler = direction => {
    if (direction === "left") {
      this.slider.slickPrev();
    } else if (direction === "right") {
      this.slider.slickNext();
    }
  };

  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }

  setArrowDisplay = currentSlide => {
    const cityList = this.props.data.subjects;
    console.log(cityList.length, currentSlide, "this is very important");
    const displayLeftArrow = currentSlide !== 0;
    const displayRightArrow =
      currentSlide !== cityList.length - this.slidesToShow;
    console.log(
      currentSlide,
      cityList.length - this.slidesToShow,
      this.state.width
    );
    this.setState({ displayRightArrow, displayLeftArrow });
    console.log(displayLeftArrow, displayRightArrow);
  };
  // ======================================================&&&&==================================
  // nextClick=(e )=>{
  //   //alert('next');
  //   const subject = this.props.data.subject;
  //   this.setState({currentslide: e , initialprev: e  })
  // //  const displayLeftArrow = this.state.currentSlide !== 0;
  //  // const displayRightArrow = this.state.currentSlide !== subject.length - this.slidesToShow;
  //  // this.setState({ displayRightArrow, displayLeftArrow });
  //   }

  individualsubject = subject => {
    console.log(subject);

    this.props.fetchMainDashboardIndividualSubject(subject);
  };
  render() {
    this.state.width > 1400
      ? (this.slidesToShow = 4)
      : this.state.width < 1400 && this.state.width > 1130
      ? (this.slidesToShow = 3)
      : this.state.width < 1130 && this.state.width > 600
      ? (this.slidesToShow = 2)
      : this.state.width < 600
      ? (this.slidesToShow = 1)
      : "";
    var settings = {
      centerMode: true,

      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      initialSlide: 0,
      arrows: false,
      nextArrow: null, //this.state.index < 4 &&  window.innerWidth > 1024 ? <SampleNextArrow classs="disabledprevnext"/> :  this.state.currentslide  === this.state.index ?   <SampleNextArrow classs="disabledprevnext"/> : <SampleNextArrow classs="gallery gallery3"/>,
      prevArrow: null, //this.state.initialprev === 0 ?  <SamplePrevArrow classs="disabledprevnext"/> :  <SamplePrevArrow classs="gallery gallery3"/>,
      afterChange: currentSlide => this.setArrowDisplay(currentSlide),
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: this.slidesToShow,

            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };
    return (
      <div>
        <div style={{ marginBottom: 20, width: "100%" }}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              lg={12}
              md={12}
              style={{ textAlign: "left" }}
              className="subjecttext"
              justify="center"
              align="left"
              style={{ backgroundColor: "#383e49" }}
            >
              Subjects
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={12} md={12}>
            <div
              className="MainDashboardSubjectsformobile"
              style={{ width: "100%" }}
            >
              {this.props.fetched ? (
                this.props.data.subjects.length === 0 ? (
                  <Grid container>
                    {" "}
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      lg={12}
                      md={12}
                      className="takeatleastonetestaccuracy"
                      style={{ textAlign: "center" }}
                      justify="center"
                      align="center"
                    >
                      Take Atleast One Test
                    </Grid>{" "}
                  </Grid>
                ) : (
                  <div className="city-selection">
                    {this.state.width > 1024 ? (
                      <div />
                    ) : (
                      //     <Arrow
                      //     styleClassName={` ${
                      //       this.props.data.subjects.length > this.slidesToShow ? this.state.displayRightArrow ?"gallery gallery3" : "disabledprevnext"  : "disabledprevnext"
                      //       }`}
                      //     direction="right"
                      //     clickHandler={this.clickHandler}
                      //   />: ""}
                      //   {this.state.width > 1024 ?
                      //       <Arrow
                      //       styleClassName={` ${
                      //         this.state.displayLeftArrow ?   "gallery gallery3" : "disabledprevnext"
                      //       }`}
                      //       direction="left"
                      //       clickHandler={this.clickHandler}
                      //     />
                      ""
                    )}

                    {console.log(
                      this.props.data.subjects.length,
                      "this is lenght of sujectssss"
                    )}
                    {this.state.index === 1
                      ? this.setState({
                          index: this.props.data.subjects.length
                        })
                      : ""}
                    <div className="slierwitharrow">
                      <Slider {...settings} ref={c => (this.slider = c)}>
                        {this.props.data.subjects.map((val, i) => (
                          <Card>
                            <Grid container>
                              <Grid
                                item
                                xs={12}
                                sm={12}
                                lg={12}
                                md={12}
                                style={{ textAlign: "left" }}
                                justify="center"
                                align="left"
                                style={{ backgroundColor: "#7f8c8d" }}
                              >
                                <NavLink to="/individualsubject">
                                  <Card
                                    className="subjectcard"
                                    onClick={() =>
                                      this.individualsubject(val[0])
                                    }
                                    key={i}
                                    className="cardsubject"
                                  >
                                    {console.log(
                                      this.props.data.subjects.length,
                                      i,
                                      "this si map "
                                    )}
                                    <Grid container>
                                      <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        lg={12}
                                        md={12}
                                        className="subjectimage"
                                        style={{ textAlign: "center" }}
                                        justify="center"
                                        align="center"
                                        style={{ backgroundColor: "white" }}
                                      >
                                        <div>
                                          {" "}
                                          <img
                                            src={val[1]}
                                            className="subjectimg"
                                            height={120}
                                            width={120}
                                          />{" "}
                                        </div>
                                      </Grid>
                                      <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        lg={12}
                                        md={12}
                                        className="showmarks"
                                        style={{ textAlign: "center" }}
                                        justify="center"
                                        align="center"
                                      >
                                        <h6
                                          style={{
                                            color: "black",
                                            fontSize: 10
                                          }}
                                        >
                                          {val[0]}
                                        </h6>
                                      </Grid>
                                    </Grid>
                                  </Card>
                                </NavLink>
                              </Grid>
                            </Grid>
                          </Card>
                        ))}
                      </Slider>
                    </div>
                  </div>
                )
              ) : (
                <div>
                  <Loading />
                </div>
              )}
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}

function SampleNextArrow(props) {
  //className, style,
  const { onClick, onchange } = props;
  return (
    <div onClick={onClick} className={props.classs}>
      <div class="prev-next-button-next next">
        <svg viewbox="0 0 100 100">
          <path
            className="arrow"
            d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z "
            transform="translate(85,100) rotate(180) "
          />
        </svg>
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  //className, style,
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: "red", float: "right" }}
      className={props.classs}
    >
      <div className="prev-next-button previous">
        <svg viewbox="0 0 100 100">
          <path
            className="arrow"
            d="M 50,0 L 60,13 L 20,50 L 60,90 L 50,100 L 0,50 Z"
            transform=" translate(15,0)"
          />
        </svg>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    data: state.maindashboard.subjects,
    fetched: state.maindashboard.fetched
  };
};

export default connect(
  mapStateToProps,
  { fetchMainDashboardSubjectsData, fetchMainDashboardIndividualSubject }
)(MainDashboardSubjectMobile);
