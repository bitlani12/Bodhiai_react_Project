import React, { Component, Fragment } from "react";

import { Grid, Row, Col } from "react-bootstrap";
import "./MainDashboard/MainDashboardTestRank.css";
import Slider from "react-slick";
import "./Dashboard.css";
import { Redirect } from "react-router-dom";
import {
  fetchDashboardData,
  fetchDashboardDataTestPerformance,
  fetchDashboardDataTakeTest,
  checksubject
} from "./../../store/actions/dashboardaction";
import { connect } from "react-redux";
import subjectimg from "./../../images/subjectimg.png";
// #68ac95
import Loadable from "react-loadable";
import DashboardTestPerfromance from "././DashboardTestPerformance";
import "./../OnlineTest/onlinetest.css";
const Loads = ({ isLoading, error }) => {
  return <div />;
};
const Loading = Loadable({
  loader: () => import("../Loading/Loading"),
  loading: Loads
});
const Modal = Loadable({
  loader: () => import("react-responsive-modal"),
  loading: Loads
});
const TakeTest = Loadable({
  loader: () => import("./TakeTest"),
  loading: Loads
});
const Progress = Loadable({
  loader: () => import("./progress"),
  loading: Loads
});
const AverageTiming = Loadable({
  loader: () => import("./AverageTiming"),
  loading: Loads
});
const Accuracy = Loadable({
  loader: () => import("./Accuracy.js"),
  loading: Loads
});
// const DashboardTestPerfromance = Loadable({
//   loader: () => import("./DashboardTestPerformance.js"),
//   loading: Loads
// });

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      id: 0,
      showtest: false,
      taketestid: 0
    };
  }
  componentDidMount() {
    this.props.checksubject().then(this.props.fetchDashboardData());
  }
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  onOpenModal = ids => {
    this.setState({ open: true, id: ids });
  };

  onCloseModal = () => {
    this.setState({ open: !this.state.open });
  };

  onOpenTakeTestModal = ids => {
    this.setState({ showtest: true, id: ids });
  };

  onCloseTakeTestModal = () => {
    this.setState({ showtest: !this.state.showtest });
  };
  ontaketest = test_id => {
    console.log("this is id " + test_id);
    this.props.fetchDashboardDataTakeTest(test_id);
    this.setState({ showtest: true, taketestid: test_id });
  };
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      autoplaySpeed: 8000,

      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
      slidesToShow: 4,
      autoplay: true,
      initialSlide: 2,
      swipeToSlide: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,

            autoplay: true,

            dots: false
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,

            autoplay: true,

            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,

            autoplay: true,

            initialSlide: 0,
            touchMove: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,

            autoplay: true,

            initialSlide: 0,
            touchMove: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            autoplay: true,

            touchMove: true
          }
        }
      ]
    };
    const { open } = this.state;
    const onOpenModal = this.onOpenModal;
    const onCloseModal = this.onCloseModal;
    const onOpenTakeTestModal = this.onOpenTakeTestModal;
    const onCloseTakeTestModal = this.onCloseTakeTestModal;
    const ontaketest = this.ontaketest;
    const state = this.state;
    const check = "has course";
    return (
      <React.Fragment>
        <div>
          <Grid fluid style={{ backgroundColor: "white" }}>
            <div className="paperdetails">
              {console.log(this.props.fetched)}
              {this.props.fetched === false ? (
                <div>
                  {" "}
                  <Loading />{" "}
                </div>
              ) : this.props.data.length === 0 ? (
                <div
                  item
                  xs={12}
                  sm={12}
                  lg={12}
                  md={12}
                  className="takeatleastonetestaccuracy"
                  style={{ textAlign: "center", textAlign: "center" }}
                  justify="center"
                  align="center"
                >
                  Test Not Added
                </div>
              ) : (
                <Slider {...settings} ref="simpleSquare">
                  {this.props.data.map(function(val, i) {
                    return (
                      <div
                        key={val.id}
                        className=" align-items-center "
                        align="center"
                        className="containers"
                      >
                        <div
                          className="list"
                          style={{ backgroundColor: "white" }}
                        >
                          <div className="subjectlogoimage">
                            {" "}
                            {val.logo === null ? (
                              <img src={subjectimg} height={100} width={100} />
                            ) : (
                              <img
                                src={val.logo}
                                alt="hii"
                                height={100}
                                width={100}
                              />
                            )}
                          </div>
                          <h5 className="subject">{val.subject}</h5>
                          <Row className="dashboardquestionnumber">
                            <Col lg={6} sm={12} md={6}>
                              Questions
                            </Col>
                            <Col lg={6} sm={12} md={6}>
                              <span className="no">
                                {val.num_questions + " "}
                              </span>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="border" />{" "}
                          </Row>
                          <Row className="topics">
                            <Col lg={6} sm={12} md={6}>
                              Topics
                            </Col>
                            <Col lg={6} sm={12} md={6}>
                              <span className="onetopic">
                                {val.topics.length === 0
                                  ? ""
                                  : val.topics && val.topics[0].length > 12
                                  ? val.topics[0].substring(0, 12) + "..."
                                  : val.topics[0]}{" "}
                              </span>
                            </Col>
                            {/* <Col lg={6} sm={6} md={6}>
                <button className="showallbtn" className="taketestbtn" onClick={() => onOpenModal(val.id)} >All Topics</button>
               { val.id === state.id ? <ToggleModal  open={open} topics={val.topics} close={onCloseModal}/> : '' }
                </Col> */}
                            <Col lg={12} sm={12} md={12}>
                              <button
                                className="taketestbtn"
                                onClick={() => ontaketest(val.id)}
                              >
                                {" "}
                                Take Test
                              </button>
                            </Col>
                          </Row>
                          {/* <Row ><Col className="border"></Col> </Row>
<p>   </p>  */}
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              )}
            </div>
            <Row>
              <Col
                md={4}
                sm={12}
                lg={4}
                style={{ marginBottom: 10, marginTop: 10 }}
              >
                <DashboardTestPerfromance />
              </Col>
              <Col
                md={4}
                sm={12}
                lg={4}
                style={{ marginBottom: 10, marginTop: 10 }}
              >
                <Accuracy />
              </Col>
              <Col
                md={4}
                sm={12}
                lg={4}
                style={{ marginBottom: 10, marginTop: 10 }}
              >
                <AverageTiming />
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={12} sm={12}>
                <Progress />
              </Col>
            </Row>
            {this.props.checksubjec &&
              console.log(
                this.props.checksubjec.subjects,
                check,
                "this is check subject"
              )}
          </Grid>
          {this.state.showtest == true ? (
            <TakeTest open={this.state.showtest} close={onCloseTakeTestModal} />
          ) : (
            ""
          )}
        </div>
      </React.Fragment>
    );
  }
}

class ToggleModal extends React.Component {
  render() {
    var style = {
      backgroundColor: "rgba(36, 123, 160, 0.7)",
      padding: 100
    };

    return (
      <div>
        <Modal
          open={this.props.open}
          showCloseIcon={false}
          center
          closeOnOverlayClick={true}
          animationDuration={500}
          classNames={{ overlay: style }}
        >
          <div className=" justify-content-center align-items-center modaltopic">
            Topics
          </div>
          <p>
            {this.props.topics.map(topics => (
              <li className="text te">{topics}</li>
            ))}
          </p>
          <button className="modalok" onClick={this.props.close}>
            Ok
          </button>
        </Modal>
      </div>
    );
  }
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "white",
        color: "black"
      }}
      onClick={onClick}
    >
      <div className="pe-7s-angle-right arrows" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      <div className="pe-7s-angle-left arrows" data-notify="icon" />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data1: state.dashboard.taketest,
    data: state.dashboard.data,
    fetched: state.dashboard.fetched,
    show: state.dashboard.showtestmodal,
    checksubjec: state.dashboard.checksubject
  };
};

export default connect(
  mapStateToProps,
  {
    fetchDashboardData,
    fetchDashboardDataTestPerformance,
    fetchDashboardDataTakeTest,
    checksubject
  }
)(Dashboard);
