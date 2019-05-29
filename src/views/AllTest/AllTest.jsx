import React, { Component } from "react";
import {
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import "./Alltest.css";
import Switch from "@material-ui/core/Switch";

import {
  fetchDashboardDataAllTest,
  fetchDashboardAllTestFilter,
  fetchDashboardDataTakeTest
} from "../../store/actions/dashboardaction";
import { connect } from "react-redux";
import {
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  CardGroup,
  View,
  Mask,
  MDBBtn
} from "mdbreact";
import TakeTest from "./../Dashboard/TakeTest";
import Loading from "../Loading/Loading";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      id: 0,
      showtest: false,
      taketestid: 0,
      filter: "All Test",
      checkedA: false,
      checkedB: false,
      Select: "See Test According to Your Choice "
    };
  }
  onOpenTakeTestModal = ids => {
    this.setState({ showtest: true, id: ids });
  };
  componentDidMount() {
    // this.props.fetchDashboardDataAllTest();
  }
  onCloseTakeTestModal = () => {
    this.setState({ showtest: !this.state.showtest });
  };
  ontaketest = test_id => {
    console.log("this is id " + test_id);
    this.props.fetchDashboardDataTakeTest(test_id);
    this.setState({ showtest: true, taketestid: test_id });
  };
  handleChangeOption = e => {
    this.setState({
      filter: e.target.value === "" ? "All Test" : e.target.value
    });
    console.log(e.target.value);
    // if(e.target.value === "" ) { return this.props.fetchDashboardDataAllTest();}
    this.props.fetchDashboardAllTestFilter(e.target.value);

    // this.setState({ value: event.target.value , showItems: 3 });
    // this.onclicksubject(event.target.value)
  };
  alltest = () => {
    this.state.checkedB === true ? (
      this.props.fetchDashboardAllTestFilter("SubjectTest")
    ) : this.state.checkedA === true ? (
      this.props.fetchDashboardAllTestFilter("MockTest")
    ) : this.state.checkedA === false && this.state.checkedB === false ? (
      <h1>{this.state.Select}</h1>
    ) : (
      ""
    );
  };
  handleChangeB = name => event => {
    console.log(name, event.target.checked, "this is ");
    this.setState({ checkedB: !this.state.checkedB, checkedA: false }, () => {
      this.alltest();
    });
    console.log(this.state.checkedB);
  };
  handleChangeA = name => event => {
    console.log(name, event.target.checked, "this is ");
    this.setState({ checkedA: !this.state.checkedA, checkedB: false }, () => {
      this.alltest();
    });
  };
  render() {
    const ontaketest = this.ontaketest;
    const onCloseTakeTestModal = this.onCloseTakeTestModal;
    return (
      <div style={{ backgroundColor: "white" }}>
        <div className=" alltest">
          <Grid container>
            <Grid
              item
              xs={6}
              sm={6}
              lg={6}
              md={6}
              style={{ textAlign: "left" }}
              className="subjecttext"
              justify="center"
              align="left"
              style={{ backgroundColor: "#383e49" }}
            >
              {this.state.filter}
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              lg={6}
              md={6}
              style={{ textAlign: "right" }}
              justify="center"
              align="right"
              style={{ backgroundColor: "#383e49", paddingRight: "15%" }}
            >
              {/* <form>
      <div  className="custom-dropdown ">
        <select class="mdl-selectfield__select" id="professsion1" name="professsion" onChange={(e)=>this.handleChangeOption(e)} value={this.props.value}>
        <option value="">All Test </option>
        <option value="MockTest">Mock Test</option>
        <option value="SubjectTest">Subject-Wise Test</option>
        </select>
      </div>
    </form> */}
            </Grid>
          </Grid>
          <Col
            lg={12}
            md={12}
            sm={12}
            style={{ textAlign: "center", marginTop: 10 }}
            justify="center"
            align="center"
          >
            <h5>
              {" "}
              Test Filter : MockTest
              <Switch
                checked={this.state.checkedA}
                onClick={this.handleChangeA("checkedA")}
                value="checkedA"
              />
              Subject-Wise Test
              <Switch
                checked={this.state.checkedB}
                onClick={this.handleChangeB("checkedB")}
                value="checkedB"
                color="primary"
              />
            </h5>
            <div>
              {this.state.checkedA === false &&
              this.state.checkedB === false ? (
                <h4>Select The Option According to Your Choice To See Test</h4>
              ) : this.props.fetched ? (
                <CardGroup className="cards">
                  {this.props.data.map(val => {
                    return (
                      <div className="alltestcards d-flex justify-content-end">
                        <Card>
                          <CardBody className="onetestcard">
                            <div class="arrow-rightforbadge">
                              <span> {val.published}</span>
                            </div>
                            <CardText>
                              <div style={{ marginBottom: -10 }}>
                                {" "}
                                <img
                                  src={val.logo}
                                  height={60}
                                  width={60}
                                  style={{ marginTop: 15 }}
                                />
                              </div>
                              <Grid
                                item
                                xs={12}
                                sm={12}
                                lg={12}
                                md={12}
                                justify="center"
                                align="center"
                              />
                              <CardTitle className="cardtitle">
                                {val.subject}
                              </CardTitle>
                              <div> Question: {val.num_questions}</div>
                              <div> Created By : {val.creator}</div>
                              Topics : {val.topics[0]}
                            </CardText>
                            <button
                              href="#"
                              className="taketestbtn"
                              onClick={() => ontaketest(val.id)}
                            >
                              {" "}
                              Take Test
                            </button>
                          </CardBody>
                        </Card>
                      </div>
                    );
                  })}{" "}
                </CardGroup>
              ) : (
                <Loading />
              )}
            </div>
          </Col>
        </div>
        <Grid fluid>
          <Row>
            <Col />
          </Row>

          <Row>
            {this.state.showtest == true ? (
              <TakeTest
                open={this.state.showtest}
                close={onCloseTakeTestModal}
              />
            ) : (
              ""
            )}
          </Row>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.dashboard.alltest,
    fetched: state.dashboard.fetchedalltest
  };
};

export default connect(
  mapStateToProps,
  {
    fetchDashboardDataAllTest,
    fetchDashboardAllTestFilter,
    fetchDashboardDataTakeTest
  }
)(UserProfile);
