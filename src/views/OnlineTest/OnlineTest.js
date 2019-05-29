import React from "react";
import { fetchOnlineTestData } from "../../store/actions/Onlinetest";
import { connect } from "react-redux";
import Test from "./Test";
import "./onlinetest.css";
import Loading2 from "../Loading/Loading2";
import Grid from "@material-ui/core/Grid";
class OnlineTest extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.test_id + "this is param");
    console.log(this.props.data.totalTime, "this is total time ");
    this.props.fetchOnlineTestData(this.props.match.params.test_id);
  }

  render() {
    return (
      <div className="test">
        <Grid container>
          {this.props.fetched === true ? (
            <Grid lg={12} md={12} sm={12}>
              <Test
                data={this.props.data}
                testid={this.props.data.id}
                totaltime={this.props.data.totalTime}
                key={this.props.data.id}
              />
            </Grid>
          ) : (
            <Grid lg={12} md={12} sm={12}>
              <Loading2 />
            </Grid>
          )}
        </Grid>
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
  { fetchOnlineTestData }
)(OnlineTest);
