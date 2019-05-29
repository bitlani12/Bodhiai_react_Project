import React from "react";
import {
  fetchedMainDashboardIndividualSubjectTest,
  fetchedMainDashboardIndividualLearning
} from "../../../../store/actions/maindashboardaction";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Loading from "../../../Loading/Loading";

class TestandLearning extends React.Component {
  componentDidMount() {
    this.props.fetchedMainDashboardIndividualSubjectTest(
      this.props.match.params.chapter,
      this.props.match.params.subject
    );
    this.props.fetchedMainDashboardIndividualLearning(
      this.props.match.params.chapter,
      this.props.match.params.subject
    );
  }
  render() {
    return (
      <div>
        {console.log()}
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
            Tests of {this.props.match.params.chapter}
          </Grid>
        </Grid>
        {
          <div
            className="definemargin"
            style={{ paddingTop: 15, paddingBottom: 15 }}
          >
            {this.props.load ? (
              <Loading />
            ) : // when user click on learning
            // this.state.Learningbtn === true ?
            //  <div>
            //    {console.log("thisisisisis")}
            //    <div style={{ width: "100%",marginTop: "10"}}>
            //    {this.props.learning.videos.length < 1 ? <h6> No Learning Videos in This Chapter</h6>:this.props.learning.videos.map((val) =><div>
            //     <iframe height="300px" width="100%" src={`https://www.youtube.com/embed/${val.link}`} frameborder="1"  allowfullscreen="allowfullscreen" style={{marginTop: 10}}> </iframe>
            //     <div style={{fontSize: 16 , fontWeight: 600 , padding: 10}}>{val.title} </div>
            //     </div>
            //     )}

            //     </div>
            //     </div>

            //     : ""||

            this.props.inidvidualsubjecttest.length === 0 ? (
              <Grid container>
                {" "}
                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={12}
                  md={12}
                  style={{ textAlign: "center", margin: "auto" }}
                  justify="center"
                  align="center"
                >
                  No Test Find!
                </Grid>{" "}
              </Grid>
            ) : (
              <div className="tablewithflex">
                <div className="tabtaketest tabborder tabname classtabheading">
                  <div className="numbertab tabheading">No.</div>
                  <div className=" noofqesti tabheading"> Questions</div>
                  <div className="tabpublished tabheading">Published </div>
                  <div className="tabpublished tabheading">Actions</div>
                </div>
                {this.props.inidvidualsubjecttest.map((val, i) => (
                  <Card>
                    {" "}
                    <div className="tabtaketest">
                      {" "}
                      <div className="numbertab">{i + 1} </div>{" "}
                      <div className=""> {val.num_questions} </div>{" "}
                      <small>{val.published}</small>{" "}
                      <NavLink to={`/onlinetest/${val.id}`}>
                        <button className="takeindividualtestbtn">
                          Take Test
                        </button>
                      </NavLink>{" "}
                    </div>{" "}
                  </Card>
                ))}
              </div>
            ) // : ""
            }
          </div>
        }
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
            Learning of {this.props.match.params.chapter}
          </Grid>
        </Grid>
        <div>
          {console.log("thisisisisis")}
          <div style={{ width: "100%", marginTop: "10" }}>
            {this.props.loadvideos === false ? (
              <Loading />
            ) : this.props.learning.videos.length < 1 ? (
              <Grid container>
                {" "}
                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={12}
                  md={12}
                  style={{ textAlign: "center", margin: "auto" }}
                  justify="center"
                  align="center"
                >
                  No Learning Video Find!
                </Grid>{" "}
              </Grid>
            ) : (
              this.props.learning.videos.map(val => (
                <div>
                  <iframe
                    height="300px"
                    width="100%"
                    src={`https://www.youtube.com/embed/${val.link}`}
                    frameborder="1"
                    allowfullscreen="allowfullscreen"
                    style={{ marginTop: 10 }}
                  >
                    {" "}
                  </iframe>
                  <div style={{ fontSize: 16, fontWeight: 600, padding: 10 }}>
                    {val.title}{" "}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}
// export default TestandSubject;
const mapStateToProps = state => {
  return {
    //   data: state.maindashboard.inidvidualsubject,
    //   fetched :  state.maindashboard.fetchedsubjectdetail,
    load: state.maindashboard.load,
    //   subject : state.maindashboard.individualsubjecttosendinapi,
    inidvidualsubjecttest: state.maindashboard.inidvidualsubjecttest,
    learning: state.maindashboard.learning,
    loadvideos: state.maindashboard.loadvideos
  };
};

//export default connect(mapStateToProps , )(MainDashboard);
export default connect(
  mapStateToProps,
  {
    fetchedMainDashboardIndividualSubjectTest,
    fetchedMainDashboardIndividualLearning
  }
)(TestandLearning);
