import React from "react";
import { fetchMainDashboardGroupDetail } from "./../../../../store/actions/maindashboardaction";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Slider from "react-slick";
import Card from "@material-ui/core/Card";
import "./GroupDetail.css";
import Loading from "../../../Loading/Loading";

import Arrow from "./Arrow";
class GroupDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      displayRightArrow: true,
      displayLeftArrow: false,
      width: window.innerWidth
    };
    this._nodes = new Map();
  }

  componentDidMount() {
    this.props.fetchMainDashboardGroupDetail();
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  setArrowDisplay = currentSlide => {
    const cityList = this.props.data.group_details;
    console.log(cityList.length, currentSlide, "this is very important");
    const displayLeftArrow = currentSlide !== 0;
    const displayRightArrow =
      currentSlide !== cityList.length - this.slidesToShow;
    console.log(currentSlide, cityList.length - this.slidesToShow);
    this.setState({ displayRightArrow, displayLeftArrow });
  };

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
      responsive: true,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: this.slidesToShow,
      arrows: false,
      nextArrow: null, // <SampleNextArrow classs="gallery gallery3"/>,
      prevArrow: null, // <SamplePrevArrow classs="gallery gallery3"/>,
      afterChange: currentSlide => this.setArrowDisplay(currentSlide),

      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: this.slidesToShow,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: this.slidesToShow,
            slidesToScroll: 1,
            infinite: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: this.slidesToShow,
            slidesToScroll: 1,
            infinite: false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };

    return (
      <div>
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
            Group Details
          </Grid>
          <Grid item xs={12} sm={12} lg={12} md={12}>
            <div className="MainDashboardSubjects " style={{ width: "100%" }}>
              {this.props.fetched ? (
                this.props.data.group_details.length === 0 ? (
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
                          this.props.data.group_details.length >
                          this.slidesToShow
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
                    <div className="slierwitharrow">
                      <Slider
                        {...settings}
                        ref={c => (this.slider = c)}
                        className="groupdetailslider"
                      >
                        {this.props.data.group_details.map((val, i) => (
                          <Card className="subjectcard">
                            {
                              // console.log(this.props.data.subjects.length , i , "this si map ")
                            }
                            <Grid container>
                              <Grid
                                item
                                xs={4}
                                sm={5}
                                lg={5}
                                md={5}
                                className="groupimg"
                                style={{ textAlign: "left" }}
                                justify="left"
                                align="left"
                                style={{ backgroundColor: "white" }}
                              >
                                <img
                                  src={val.group_logo}
                                  className="groupimg"
                                />
                              </Grid>
                              <Grid
                                item
                                xs={7}
                                sm={7}
                                lg={7}
                                md={7}
                                className="subjectimage"
                                style={{ textAlign: "center" }}
                                justify="center"
                                align="center"
                                style={{ backgroundColor: "white" }}
                              >
                                <div>
                                  {" "}
                                  <img src={val.logo} />{" "}
                                </div>
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                sm={12}
                                lg={12}
                                md={12}
                                className="showmarks"
                                style={{
                                  textAlign: "center",
                                  borderBottom: "solid #8080801f 1px"
                                }}
                                justify="center"
                                align="center"
                              >
                                <h6 style={{}}>{val.subject}</h6>
                              </Grid>
                              <div className="groupdetail">
                                <Grid
                                  item
                                  xs={6}
                                  sm={6}
                                  lg={6}
                                  md={6}
                                  className=""
                                  style={{ textAlign: "center" }}
                                  justify="center"
                                  align="center"
                                >
                                  <h6 style={{ fontSize: 14, fontWeight: 500 }}>
                                    {" "}
                                    Group Rank
                                    <div className="grprank">
                                      {val.group_rank}
                                    </div>
                                  </h6>
                                </Grid>
                                <Grid
                                  item
                                  xs={6}
                                  sm={6}
                                  lg={6}
                                  md={6}
                                  className="showmarks"
                                  style={{ textAlign: "center" }}
                                  justify="center"
                                  align="center"
                                >
                                  <h6 style={{ fontSize: 14, fontWeight: 500 }}>
                                    {" "}
                                    Total Rank
                                    <div className="grprank">
                                      {val.totalRank}
                                    </div>
                                  </h6>
                                </Grid>
                              </div>
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
                                <div> </div>
                              </Grid>
                            </Grid>
                          </Card>
                        ))}
                      </Slider>
                    </div>{" "}
                  </div>
                )
              ) : (
                <div>
                  <Loading />
                </div>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function SampleNextArrow(props) {
  //className, style,
  const { onClick } = props;
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

const SamplePrevArrow = props => {
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
            d="M 50,0 L 80,40 L 20,50 L 60,90 L 50,100 L 0,50 Z"
            transform=" translate(15,0)"
          />
        </svg>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    data: state.maindashboard.groupdetail,
    fetched: state.maindashboard.fetchedgroupdetail,
    load: state.maindashboard.load
  };
};
export default connect(
  mapStateToProps,
  { fetchMainDashboardGroupDetail }
)(GroupDetail);
