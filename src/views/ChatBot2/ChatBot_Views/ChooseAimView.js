import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {
  get_current_view,
  add_user_click,
  save_chat
} from "./../../../store/actions/ChatbotAction";
import compose from "recompose/compose";
import { connect } from "react-redux";
class ChooseAimView extends React.Component {
  state = {
    subject1: 40,
    subject2: 40,
    subject3: 40,
    subject4: 40,
    subject5: 40,
    bottom: false,
    subject1name: "",
    subject2name: "",
    subject3name: "",
    subject4name: "",
    subject5name: "",
    clickquickreplybutton: {},
    senddata: {
      sentByMe: true,
      text: null,
      loading: false,
      viewType: "",
      clickable: false,
      data: null
    }
  };
  handleChange = (event, i, subjectname) => {
    console.log(event.target.value, i, subjectname);
    if (event.target.value > 39) {
      i === 0
        ? this.setState({
            subject1: event.target.value,
            subject1name: subjectname
          })
        : i === 1
        ? this.setState({
            subject2: event.target.value,
            subject2name: subjectname
          })
        : i === 2
        ? this.setState({
            subject3: event.target.value,
            subject3name: subjectname
          })
        : i === 3
        ? this.setState({
            subject4: event.target.value,
            subject4name: subjectname
          })
        : i === 4
        ? this.setState({
            subject5: event.target.value,
            subject5name: subjectname
          })
        : "";
    }
  };
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };
  setgoal = (length, viewtype) => {
    let goal;
    length === 3
      ? (goal = [
          [this.state.subject1, this.state.subject1name],
          [this.state.subject2, this.state.subject2name],
          [this.state.subject3, this.state.subject3name]
        ])
      : length === 4
      ? (goal = [
          [this.state.subject1, this.state.subject1name],
          [this.state.subject2, this.state.subject2name],
          [this.state.subject3, this.state.subject3name],
          [this.state.subject4, this.state.subject4name]
        ])
      : length === 5
      ? (goal = [
          [this.state.subject1, this.state.subject1name],
          [this.state.subject2, this.state.subject2name],
          [this.state.subject3, this.state.subject3name],
          [this.state.subject4, this.state.subject4name],
          [this.state.subject5, this.state.subject5name]
        ])
      : (goal = [
          [this.state.subject1, this.state.subject1name],
          [this.state.subject2, this.state.subject2name],
          [this.state.subject3, this.state.subject3name],
          [this.state.subject4, this.state.subject4name],
          [this.state.subject5, this.state.subject5name]
        ]);

    return (
      this.setState({ clickquickreplybutton: goal, disable: true }),
      this.dispatchaction(goal),
      this.props.get_current_view("none"),
      console.log(goal, "this is foal"),
      this.setState(
        prevState => ({
          senddata: {
            ...prevState.senddata,
            data: goal,
            viewType: viewtype
          }
        }),
        () => {
          this.props.save_chat(this.state.senddata),
            console.log(this.state.senddata, "senddata");
        }
      ),
      () => {
        console.log(this.state.senddata);
      }
    );
  };

  dispatchaction = reply => {
    this.props.add_user_click(reply, this.props.i);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className="taketestview">
          <button
            onClick={this.toggleDrawer("bottom", true)}
            className="chatbottaketestbtn"
          >
            Set Goals
          </button>
        </div>
        <Drawer
          anchor="bottom"
          open={this.state.bottom}
          onClose={this.toggleDrawer("bottom", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("right", false)}
            onKeyDown={this.toggleDrawer("right", false)}
          >
            <Grid container className="setgoalsbottom">
              {this.props.data.data.map((val, i) => {
                return (
                  <Grid item sm={6} xs={6} md={6} lg={6}>
                    <div style={{ textAlign: "center" }} className="aimboxview">
                      <img src={val.logo} height={70} />
                      <div>{val.name} </div>

                      {i === 0 &&
                        this.state.subject1name === "" &&
                        this.setState({ subject1name: val.name })}
                      {i === 0 && <div>Marks = {this.state.subject1} % </div>}
                      {i === 0 && (
                        <input
                          id="typeinp"
                          type="range"
                          min={0}
                          max="100"
                          value={this.state.subject1}
                          className="slider"
                          onChange={e => this.handleChange(e, i, val.name)}
                          name="volume"
                          step="0"
                          from="0"
                          to="100"
                        />
                      )}

                      {i === 1 &&
                        this.state.subject2name === "" &&
                        this.setState({ subject2name: val.name })}
                      {i === 1 && <div>Marks = {this.state.subject2} % </div>}
                      {i === 1 && (
                        <input
                          id="typeinp"
                          type="range"
                          min={0}
                          max="100"
                          value={this.state.subject2}
                          className="slider"
                          onChange={e => this.handleChange(e, i, val.name)}
                          name="volume"
                          step="0"
                          from="0"
                          to="100"
                        />
                      )}

                      {i === 2 &&
                        this.state.subject3name === "" &&
                        this.setState({ subject3name: val.name })}
                      {i === 2 && <div>Marks = {this.state.subject3} % </div>}
                      {i === 2 && (
                        <input
                          id="typeinp"
                          type="range"
                          min={0}
                          max="100"
                          value={this.state.subject3}
                          className="slider"
                          onChange={e => this.handleChange(e, i, val.name)}
                          name="volume"
                          step="0"
                          from="0"
                          to="100"
                        />
                      )}

                      {i === 3 &&
                        this.state.subject4name === "" &&
                        this.setState({ subject4name: val.name })}
                      {i === 3 && <div>Marks = {this.state.subject4} % </div>}
                      {i === 3 && (
                        <input
                          id="typeinp"
                          type="range"
                          min={0}
                          max="100"
                          value={this.state.subject4}
                          className="slider"
                          onChange={e => this.handleChange(e, i, val.name)}
                          name="volume"
                          step="0"
                          from="0"
                          to="100"
                        />
                      )}

                      {i === 4 &&
                        this.state.subject5name === "" &&
                        this.setState({ subject4name: val.name })}
                      {i === 4 && <div>Marks = {this.state.subject5} % </div>}
                      {i === 4 && (
                        <input
                          id="typeinp"
                          type="range"
                          min={0}
                          max="100"
                          value={this.state.subject5}
                          className="slider"
                          onChange={e => this.handleChange(e, i, val.name)}
                          name="volume"
                          step="0"
                          from="0"
                          to="100"
                        />
                      )}
                    </div>
                  </Grid>
                );
              })}
              <div className="setgoalbtndiv">
                <button
                  className="setgoalbtn"
                  onClick={() => {
                    this.setgoal(
                      this.props.data.data.length,
                      this.props.data.viewType
                    ),
                      this.toggleDrawer("bottom", false);
                  }}
                >
                  Set Goal
                </button>
              </div>
            </Grid>
          </div>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};
export default compose(
  connect(
    mapStateToProps,
    { get_current_view, save_chat, add_user_click }
  )
)(ChooseAimView);
// export default ChooseAimView;
