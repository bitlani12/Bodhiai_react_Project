import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  fetchmaindashboardindividualprofile,
  ChallengeUser
} from "./../../../../store/actions/maindashboardaction";
import { connect } from "react-redux";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { Button } from "mdbreact";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import "./showprofile.css";
import Loading from "./../../../Loading/Loading";
import user from "./../../../../images/user.png";
import Slide from "@material-ui/core/Slide";
function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

class ShowProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: this.props.open, animation: "zoom" };
  }

  individualprofile = () => {
    console.log("hiii", this.props.username);
    this.props.fetchmaindashboardindividualprofile(this.props.username);
  };

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
    this.setState({ open: true });
  }

  componentDidMount() {}
  challengeuserontest = () => {
    this.props.ChallengeUser(this.props.username);
    this.props.showsnackbar();
  };
  render() {
    var style = {};
    const photo = this.props.data && this.props.data.photo;
    const name = this.props.data && this.props.data.name;
    const right = this.props.data && this.props.data.right;
    const attempted = this.props.data && this.props.data.attempted;
    const accuracy = this.props.data && this.props.data.accuracy;
    return (
      /* <Modal open={this.props.open} showCloseIcon={false} center closeOnOverlayClick={true} >
            <div>
            
            <div>
           <div className=" justify-content-center align-items-center modaltopic">{this.props.data.subject}</div>
            {/* { <p>{this.props.topics.map((topics)=> <li className="text te">{topics}</li>) }</p> } }
             <button className="modalok" onClick={this.props.close}>Ok</button>
            </div>
         
             </div>
            </Modal>  */

      <Rodal
        visible={this.props.open}
        onClose={() => this.props.close()}
        animation={this.state.animation}
        closeMaskOnClick={true}
        style={{ height: "200vh" }}
      >
        {console.log(this.props.loadprofile, "this is loader")}
        <div className="showprofilerodal">
          {this.props.loadprofile === false ? (
            <div style={{ padding: 0 }}>
              <div>
                <div width={100}>
                  <div>
                    <p class="para">
                      {
                        //this.props.data &&  photo === "" ? <div>hii</div>:<img src={photo} height={150} width={150} className="rounded-circle"/>
                      }
                      {/* {photo === null || photo=== "" ? <img src={photo} className="rounded-circle" height={150} width={150} style={{backgroundColor: "gray"}}  onerror="this.style.display='none'"/> :  <img src={photo} className="rounded-circle"  height={150} width={150} /> } */}
                      {photo === null || photo === "" || photo === "null" ? (
                        <img
                          src={user}
                          className="rounded-circle"
                          height={150}
                          width={150}
                          style={{ backgroundColor: "gray" }}
                          onerror="this.style.display='none'"
                        />
                      ) : (
                        <img
                          src={photo}
                          className="rounded-circle"
                          height={150}
                          width={150}
                          style={{ backgroundColor: "gray" }}
                          onerror="this.style.display='none'"
                        />
                      )}
                      <h4 className="username">{name}</h4>
                    </p>
                  </div>
                  <div class="card-block">
                    <Card className="profilecard">
                      <h6 class="white-text">
                        <span className="profileflex">
                          Attempted<h6 className="shownumber">{attempted}</h6>
                        </span>
                        <span className="profileflex">
                          Right<h6 className="shownumber2">{right}</h6>
                        </span>
                        <span className="profileflex">
                          Accuracy
                          <h6 className="shownumber">
                            {Math.round(accuracy * 100) / 100}%
                          </h6>
                        </span>
                      </h6>
                    </Card>
                  </div>
                </div>
              </div>
              <Card />
            </div>
          ) : (
            <div>
              <Loading />
            </div>
          )}
        </div>
        {/* { <div className="btnstart" style={{textAlign: "center"}}>
            <NavLink to={`/individualprofile`}>
                        <Button className="btn  btnmodal onlyclosebutton"  onClick={()=>{this.props.close , this.individualprofile()} }><span>View Profile</span></Button>
                        </NavLink>
                     <div style={{display: "none"}}>  <Button className="btn btn-success " onClick={()=>{this.props.close , this.individualprofile} } style={{border: "solid gray 1px" }}></Button> </div> 
                       
                        </div>  } */}
        <Grid container style={{ paddingBottom: 40, textAlign: "center" }}>
          <Grid
            item
            xs={6}
            sm={6}
            lg={6}
            md={6}
            style={{ backgroundColor: "white" }}
          >
            <NavLink to={`/individualprofile`}>
              <Button
                className="btn  btnmodal onlyclosebutton"
                onClick={() => {
                  this.props.close, this.individualprofile();
                }}
              >
                <span>View Profile</span>
              </Button>
            </NavLink>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            lg={6}
            md={6}
            style={{ backgroundColor: "white" }}
          >
            <Button
              className="btn  btnmodal onlyclosebutton"
              onClick={() => {
                this.props.close(), this.challengeuserontest(TransitionDown);
              }}
            >
              <span>Challenge</span>
            </Button>
          </Grid>
        </Grid>
      </Rodal>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.maindashboard.profile,
    loadprofile: state.maindashboard.loadprofile
  };
};

export default connect(
  mapStateToProps,
  { fetchmaindashboardindividualprofile, ChallengeUser }
)(ShowProfile);
