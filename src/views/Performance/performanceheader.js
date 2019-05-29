import React from "react";
import compose from "recompose/compose";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  fetchMyProgressData,
  fetchMyPerformanceDateData,
  fetchPerformanceDataAfterDateSelect,
  rankbytestid
} from "../../store/actions/myprogress";
import { connect } from "react-redux";
import Loading from "./../Loading/Loading";
import { Animated } from "react-animated-css";
import SelectDate from "./Performanceselectdate";
import Performancedata from "./PerformanceData";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Arrow from "./../Dashboard/MainDashboard/GroupDetail/Arrow";
import Slider from "react-slick";
const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "33.33%"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
});
class PerformanceSubjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionshow: false,
      idforanimation: 0,
      idsforanimation: 0,
      showperformancedata: false,
      // this is for subject
      currentslide: 1,
      lastslide: 3,
      initialprev: 0,
      index: 1,
      displayRightArrow: true,
      displayLeftArrow: false,
      width: window.innerWidth
    };
  }
  // for subject =======================
  componentDidMount() {
    // this.props.fetchMainDashboardSubjectsData();
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
  // ==========================================
  buttonshow = subject => {
    console.log(subject, "this is clicked ");
    this.setState({ optionshow: true }),
      this.setState({ showperformancedata: false });
    this.setState({ subject: subject });
    this.props.fetchMyPerformanceDateData(subject);
  };
  dateselected = e => {
    this.setState({ idsforanimation: this.state.idsforanimation + 1 }),
      console.log(
        e.target.value,
        this.state.subject,
        "this is value selected "
      );
    this.props.fetchPerformanceDataAfterDateSelect(
      e.target.value,
      this.state.subject
    );
    this.props.rankbytestid(e.target.value);
    this.setState({ showperformancedata: true });
  };
  render(props) {
    const { classes } = this.props;

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
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: this.slidesToShow,

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
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };
    return (
      <div>
        <div>
          <Grid item xs={12} sm={12} lg={12} md={12}>
            <div className="Mainperformance" style={{ width: "100%" }}>
              {this.props.fetchedprogress ? (
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
                      <Arrow
                        styleClassName={` ${
                          this.props.data.subjects.length > this.slidesToShow
                            ? this.state.displayRightArrow
                              ? "gallery gallery3"
                              : "disabledprevnext"
                            : "disabledprevnext"
                        }`}
                        direction="right"
                        clickHandler={this.clickHandler}
                      />
                    ) : (
                      ""
                    )}
                    {this.state.width > 1024 ? (
                      <Arrow
                        styleClassName={` ${
                          this.state.displayLeftArrow
                            ? "gallery gallery3"
                            : "disabledprevnext"
                        }`}
                        direction="left"
                        clickHandler={this.clickHandler}
                      />
                    ) : (
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
                      <Slider
                        {...settings}
                        ref={c => (this.slider = c)}
                        className="groupdetailslider"
                      >
                        {this.props.data.subjects.map((val, i) => (
                          <Card className="subjectcard">
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
                                {/* <NavLink to="/individualsubject"> */}
                                <Card
                                  className="subjectcard"
                                  onClick={() => this.buttonshow(val[0])}
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
                                          height="130"
                                          width="130"
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
                                      <h6 style={{ color: "black" }}>
                                        {val[0]}
                                      </h6>
                                    </Grid>
                                  </Grid>
                                </Card>

                                {/* </NavLink> */}
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
        {console.log(this.props.load, "hiiii")}
        {this.state.optionshow === false ? (
          ""
        ) : this.props.load === false ? (
          <div className="text-center">
            {console.log(this.props.load, "hiiii")},
            <Animated
              animationIn="zoomInDown"
              animationOut="wobble"
              isVisible={true}
              key={this.state.idforanimation}
            >
              {console.log(this.state.subject, "this is subject")}
              {this.props.fetched ? (
                <SelectDate
                  date={this.props.date}
                  dateselected={this.dateselected}
                />
              ) : (
                <h3>
                  <Loading />
                </h3>
              )}
            </Animated>
          </div>
        ) : (
          <Loading />
        )}
        {this.state.showperformancedata === false ? (
          ""
        ) : (
          <div className="text-center">
            {console.log(
              this.props.performancedata,
              "this is performance data"
            )}
            <Animated
              animationIn="zoomInDown"
              animationOut="wobble"
              isVisible={true}
              key={this.state.idsforanimation}
            >
              {this.props.loadafterdateselect === false ? (
                <Performancedata
                  data={this.props.performancedata}
                  dateselected={this.dateselected}
                  fetched={this.props.fetchedperformancedata}
                  rankbytest={this.props.rankbytest}
                  fetchrank={this.props.fetchrank}
                />
              ) : (
                <Loading />
              )}
            </Animated>
          </div>
        )}
      </div>
    );
  }
}
PerformanceSubjects.propTypes = {
  classes: PropTypes.object.isRequired
};

//export default withStyles(styles)(DetailedExpansionPanel);fetchedprogress

const mapStateToProps = state => {
  return {
    data: state.progress.progress,
    fetchedprogress: state.progress.fetchedprogress,
    fetched: state.progress.fetcheddate,
    date: state.progress.date,
    load: state.progress.load,
    loadafterdateselect: state.progress.loadafterdateselect,
    performancedata: state.progress.performancedata,
    fetchedperformancedata: state.progress.fetchedperformancedata,
    // for rank
    rankbytest: state.progress.rankbytestid,
    fetchrank: state.progress.fetchrank
  };
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    {
      fetchMyProgressData,
      fetchMyPerformanceDateData,
      fetchPerformanceDataAfterDateSelect,
      rankbytestid
    }
  )
)(PerformanceSubjects);
