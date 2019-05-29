import React from "react";
import { fetchSmartTestSubjectData } from "../../store/actions/Onlinetest";
import { connect } from "react-redux";
import SmartTestSubjects from "./SmartTestSubjects";
import "./smarttest.css";
class SmartTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchSmartTestSubjectData();
  }
  getsubject = subject => {
    console.log(subject);
  };

  render(props) {
    return (
      <React.Fragment>
        <div>
          <SmartTestSubjects getsubject={this.getsubject} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetched: state.progress.fetcheddate
  };
};

export default connect(
  mapStateToProps,
  { fetchSmartTestSubjectData }
)(SmartTest);
