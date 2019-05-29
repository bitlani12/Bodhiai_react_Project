import React from "react";
import Example from "./Timer";
import { TestSubmitData } from "../../store/actions/Onlinetest";
import { connect } from "react-redux";
import Test2 from "./Test2";
import MobileViewTest2 from "./MobileViewTest2";
import Loading from "../Loading/Loading";
import Loading2 from "../Loading/Loading2";

function imagesLoaded(parentNode) {
  const imgElements = [...parentNode.querySelectorAll("img")];
  for (let i = 0; i < imgElements.length; i += 1) {
    console.log("this is for checking images", imgElements);
    const img = imgElements[i];
    if (!img.complete) {
      return false;
    }
  }
  return true;
}

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      totalanswer: [],
      checkmobilebrowser: false,
      width: window.innerWidth,
      image_load: true
    };
  }
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }
  // check images load than start time
  images_loaded = () => {
    this.state.image_load && this.setState({ image_load: false });
  };
  render() {
    const isMobile = this.state.width <= 500;
    let totaltime = this.props.data.totalTime;
    let questions = this.props.data.sscquestions.map(val => val);

    return (
      <div>
        {//this.state.image_load === false ? (
        isMobile ? (
          <MobileViewTest2
            questions={questions}
            testid={this.props.testid}
            totaltime={totaltime}
            sub={this.props.data.sub}
            images_loaded={this.images_loaded}
          />
        ) : (
          <Test2
            questions={questions}
            testid={this.props.testid}
            totaltime={totaltime}
            sub={this.props.data.sub}
            images_loaded={this.images_loaded}
          />
        )
        // ) : (
        // <Loading />
        //)
        }
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.onlinetest.onlinetestdata,
    fetched: state.onlinetest.fetchedonlinetest
  };
};

export default connect(
  mapStateToProps,
  { TestSubmitData }
)(Test);
