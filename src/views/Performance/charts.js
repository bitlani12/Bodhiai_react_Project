import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Panel } from "react-bootstrap";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { Bar, Bubble, HorizontalBar, Line, Pie } from "react-chartjs-2";
import { purple, blue, green } from "@material-ui/core/colors";
class Charts extends React.Component {
  state = {
    expanded: null,
    setcolor: 0
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  getcolor = setcolor => {
    let x;
    if (setcolor === 0) {
      x = "green";
      return x, this.setState({ setcolor: 1 });
    } else {
      x = "yellow";
      return x;
    }
  };
  render() {
    const data = this.props.data;
    const percentaverage = this.props.data && data.percentAverage; // done
    const my_percent = this.props.data && data.my_percent;
    const allMarks = this.props.data && data.allMarks;
    const totalpercentile = data.lessMarks + data.sameMarks + data.moreMarks;
    const yourpercentilemarkslower =
      this.props.data && (data.lessMarks * 100) / totalpercentile;
    const yourpercentilemarksequal =
      this.props.data && (data.sameMarks * 100) / totalpercentile;
    const yourpercentilemarkshigher =
      this.props.data && (data.moreMarks * 100) / totalpercentile;

    const skippedquestions = this.props.data && this.props.data.numberSkipped;
    const tt = this.props.data && this.props.data.tt;
    const YourPerformanceVsAveragePerformance = {
      labels: ["Your performace vs Average Performace"],
      datasets: [
        {
          label: ["Test Average"],
          data: [percentaverage],
          backgroundColor: "purple",
          hoverBackgroundColor: ["purple"]
        },
        {
          label: ["Your Score"],
          data: [my_percent],
          backgroundColor: "skyblue",
          hoverBackgroundColor: ["skyblue"]
        }
      ]
    };

    const YourPercentile = {
      labels: ["Lower", "Equal", "Higher"],
      datasets: [
        {
          data: [
            yourpercentilemarkslower,
            yourpercentilemarksequal,
            yourpercentilemarkshigher
          ],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
      ]
      // datasets: [{ data: yourpercentilemarkslower} , {data: yourpercentilemarksequal} , {data: yourpercentilemarkshigher} ]
      // datasets: [
      //   {
      //     label: 'Marks Lower Than You',
      //     fill: false,
      //     showLine: false,
      //     lineTension: 0.1,
      //     backgroundColor: 'red',
      //     borderColor: 'red',
      //     borderCapStyle: 'butt',
      //     borderDash: [],
      //     borderDashOffset: 0.0,
      //     borderJoinStyle: 'miter',
      //     pointBorderColor: 'red',
      //     pointBackgroundColor: '#fff',
      //     pointBorderWidth: 10,
      //     pointHoverRadius: 5,
      //     pointHoverBackgroundColor: 'red',
      //     pointHoverBorderColor: 'red',
      //     pointHoverBorderWidth: 2,
      //     pointRadius: 1,
      //     pointHitRadius: 10,
      //     data: yourpercentilemarkslower
      //   }, {
      //     label: 'Your Marks And Same Marks',
      //     fill: false,
      //     showLine: false,
      //     lineTension: 0.1,
      //     backgroundColor: 'rgba(75,30,192,0.4)',
      //     borderColor: 'rgba(75,30,192,1)',
      //     borderCapStyle: 'butt',
      //     borderDash: [],
      //     borderDashOffset: 0.0,
      //     borderJoinStyle: 'miter',
      //     pointBorderColor: 'rgba(75,30,192,1)',
      //     pointBackgroundColor: '#fff',
      //     pointBorderWidth: 10,
      //     pointHoverRadius: 5,
      //     pointHoverBackgroundColor: 'rgba(75,30,192,1)',
      //     pointHoverBorderColor: 'rgba(220,220,220,1)',
      //     pointHoverBorderWidth: 2,
      //     pointRadius: 1,
      //     pointHitRadius: 10,
      //     data: yourpercentilemarksequal
      //   },
      //   {
      //     label: 'Marks Higher Than You',
      //     fill: false,
      //     showLine: false,
      //     lineTension: 0.1,
      //     backgroundColor: 'green',
      //     borderColor: 'green',
      //     borderCapStyle: 'butt',
      //     borderDash: [],
      //     borderDashOffset: 0.0,
      //     borderJoinStyle: 'miter',
      //     pointBorderColor: 'green',
      //     pointBackgroundColor: '#fff',
      //     pointBorderWidth: 10,
      //     pointHoverRadius: 5,
      //     pointHoverBackgroundColor: 'green',
      //     pointHoverBorderColor: 'green',
      //     pointHoverBorderWidth: 2,
      //     pointRadius: 1,
      //     pointHitRadius: 10,
      //     data: yourpercentilemarkshigher
      //   }

      // ]
    };

    const notattemptedquestion = {
      datasets: [
        {
          label: ["Skipped"],
          data: [skippedquestions],
          backgroundColor: "#e6e108",
          hoverBackgroundColor: ["#e6e108"],
          borderColor: "#e6e108",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#e6e108",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 10,
          borderWidth: 4
        }
      ]
    };

    const timingpertopic = {
      datasets: [
        {
          label: ["Timing per Topic"],
          data: [tt],
          backgroundColor: "#69698b ",
          hoverBackgroundColor: ["#69698b "],
          borderColor: "E8C444",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,30,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 10,
          borderWidth: 4
        }
      ]
    };
    return (
      <div>
        {console.log(
          yourpercentilemarkslower,
          yourpercentilemarksequal,
          yourpercentilemarkshigher,
          "yes tthis is  martks data"
        )}
        {console.log(
          totalpercentile,
          yourpercentilemarkslower,
          yourpercentilemarksequal,
          yourpercentilemarkshigher,
          ((totalpercentile - data.lessMarks) / totalpercentile) * 100,
          "this is data in chart "
        )}
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            lg={6}
            md={6}
            className="showmarks"
            style={{ textAlign: "center" }}
            justify="center"
            align="center"
          >
            <Card
              padding={20}
              style={{ boxShadow: "2px 2px 2px 2px #e6e6e6 ", margin: 10 }}
            >
              <h2 style={{ fontSize: 26 }}>Your vs Average Performace</h2>
              <div>
                <Bar
                  data={YourPerformanceVsAveragePerformance}
                  width={2000}
                  height={300}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            beginAtZero: true
                          }
                        }
                      ]
                    }
                  }}
                />
              </div>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            lg={6}
            md={6}
            className="showmarks"
            style={{ textAlign: "center" }}
            justify="center"
            align="center"
          >
            <Card
              padding={20}
              style={{ boxShadow: "2px 2px 2px 2px #e6e6e6", margin: 10 }}
            >
              <h2 style={{ fontSize: 26 }}>Your percentile: </h2>
              <div>
                <Pie data={YourPercentile} width={2000} height={300} />
              </div>
            </Card>
          </Grid>
        </Grid>

        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            lg={6}
            md={6}
            className="showmarks"
            style={{ textAlign: "center" }}
            justify="center"
            align="center"
          >
            <Card
              padding={20}
              style={{ boxShadow: "2px 2px 2px 2px #e6e6e6", margin: 10 }}
            >
              <div>
                <h2 style={{ fontSize: 26 }}>Not-Attempted questions</h2>
                <div>
                  <HorizontalBar
                    data={notattemptedquestion}
                    width={2000}
                    height={300}
                    options={{
                      maintainAspectRatio: false,
                      scales: {
                        xAxes: [
                          {
                            ticks: {
                              beginAtZero: true
                            }
                          }
                        ]
                      }
                    }}
                  />
                </div>
              </div>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            lg={6}
            md={6}
            className="showmarks"
            style={{ textAlign: "center" }}
            justify="center"
            align="center"
          >
            <Card
              padding={20}
              style={{ boxShadow: "2px 2px 2px  2px #e6e6e6", margin: 10 }}
            >
              <h2 style={{ fontSize: 26 }}>Timing - per Topic</h2>

              <div>
                <HorizontalBar
                  data={timingpertopic}
                  width={2000}
                  height={300}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      xAxes: [
                        {
                          ticks: {
                            beginAtZero: true
                          }
                        }
                      ]
                    }
                  }}
                />
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Charts;
