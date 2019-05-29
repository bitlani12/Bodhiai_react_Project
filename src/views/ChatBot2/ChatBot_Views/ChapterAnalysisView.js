import React from "react";
import { Pie } from "react-chartjs-2";
class ChapterAnalysisView extends React.Component {
  data = {
    labels: [
      // 'Red',

      `Right`,
      `Wrong`,
      `Skipped`
    ],
    datasets: [
      {
        data: [
          this.props.data.data && this.props.data.data[0].totalRight,
          this.props.data.data && this.props.data.data[0].totalWrong,
          this.props.data.data && this.props.data.data[0].totalSkipped
        ],
        backgroundColor: [
          // '#FF6384',
          "#36A2EB",
          "#e44343",
          "#FFCE56"
        ],
        hoverBackgroundColor: [
          // '#FF6384',
          "#36A2EB",
          "#e44343",
          "#FFCE56"
        ]
      }
    ]
  };
  render() {
    return (
      <div>
        {this.props.data.data &&
          this.props.data.data.map((step, index) => (
            <div className="chartview">
              <div>
                <Pie data={this.data} className="chartview" />
              </div>
              <div className="messagebotinsidemessage">
                {/* {this.props.data.data[0].skippedPercent}  */}
                <div style={{ padding: 5, fontSize: 14 }}>
                  {" "}
                  <div style={{ fontSize: 16, fontWeight: "bold" }}>
                    {" "}
                    {this.props.data.data[0].totalAttempted}
                  </div>{" "}
                  <div>Attempted </div>{" "}
                </div>
                <div style={{ padding: 5, fontSize: 14 }}>
                  {" "}
                  <div style={{ fontSize: 16, fontWeight: "bold" }}>
                    {" "}
                    {this.props.data.data[0].totalRight}{" "}
                  </div>{" "}
                  <div> Right</div>{" "}
                </div>
                <div style={{ padding: 5, fontSize: 14 }}>
                  {" "}
                  <div style={{ fontSize: 16, fontWeight: "bold" }}>
                    {" "}
                    {this.props.data.data[0].totalSkipped}{" "}
                  </div>{" "}
                  <div>Skipped </div>{" "}
                </div>

                <div style={{ padding: 5, fontSize: 14 }}>
                  {" "}
                  <div style={{ fontSize: 16, fontWeight: "bold" }}>
                    {" "}
                    {this.props.data.data[0].totalWrong}{" "}
                  </div>{" "}
                  <div>Wrong </div>{" "}
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}
export default ChapterAnalysisView;
