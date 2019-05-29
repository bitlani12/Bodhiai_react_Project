import React from "react";
import { fetchrecommendations } from "../../store/actions/myprogress";
import { connect } from "react-redux";
import Loading from "./../Loading/Loading";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import "./Recommendation.css";
class Recommendations extends React.Component {
  componentDidMount() {
    this.props.fetchrecommendations();
  }
  render() {
    return (
      <Grid container style={{ backgroundColor: "white" }}>
        {this.props.fetched ? (
          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            md={12}
            style={{ textAlign: "center", margin: 10 }}
            justify="center"
            align="center"
          >
            {this.props.data.recommendations.map(val => {
              return (
                <div
                  style={{ border: "solid #e4dcdc 1px", margin: 20 }}
                  className="demo-gallery"
                >
                  <Grid
                    container
                    style={{ marginBottom: 10 }}
                    className="lightgallery"
                  >
                    <Grid
                      item
                      xs={6}
                      sm={6}
                      lg={6}
                      md={6}
                      style={{
                        textAlign: "center",
                        fontWeight: 800,
                        padding: 10,
                        borderBottom: "solid #ece4e4 1px"
                      }}
                      justify="center"
                      align="center"
                      className="vidsubject"
                    >
                      Subject: {val.subject}
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sm={6}
                      lg={6}
                      md={6}
                      style={{
                        textAlign: "center",
                        fontWeight: 800,
                        padding: 10,
                        borderBottom: "solid #ece4e4 1px"
                      }}
                      justify="center"
                      align="center"
                      className="vidsubject"
                    >
                      Chapter: {val.chapter}
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sm={12}
                      lg={12}
                      md={12}
                      style={{
                        textAlign: "center",
                        fontWeight: 800,
                        padding: 5
                      }}
                      justify="center"
                      align="center"
                      className="video-wrap"
                    >
                      <iframe
                        height="100%"
                        width="100%"
                        src={`https://www.youtube.com/embed/${val.link}`}
                        frameborder="1"
                        allowfullscreen="allowfullscreen"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    style={{ borderBottom: "solid black 1px", padding: 10 }}
                  >
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      lg={12}
                      md={12}
                      style={{ textAlign: "center", fontWeight: 800 }}
                      justify="center"
                      align="center"
                      className="vidtitle"
                    >
                      {val.title}
                    </Grid>
                  </Grid>
                </div>
              );
            })}
          </Grid>
        ) : (
          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            md={12}
            style={{ textAlign: "center" }}
            justify="center"
            align="center"
          >
            <Loading />{" "}
          </Grid>
        )}
      </Grid>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.progress.recommendation,
    fetched: state.progress.fetchrecommendations
  };
};

export default connect(
  mapStateToProps,
  { fetchrecommendations }
)(Recommendations);
