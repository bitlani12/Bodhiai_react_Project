import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import {connect }from 'react-redux';
import compose from 'recompose/compose';
import Loading from '../Loading/Loading';
const styles = theme => ({
  root: {
    width: '100%',
    margin: "auto",
    maxWidth: 460,
    backgroundColor: theme.palette.background.paper,
  }, root2: {
    flexGrow: 1,
  },
});
class CompareDialogue extends React.Component {
  state = {
    open: this.props.open,
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { fullScreen } = this.props;
    return (
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.props.handleClose}
          aria-labelledby="responsive-dialog-title">
         <DialogTitle id="responsive-dialog-title">{<span style={{fontSize: 18}}>Comparison</span>}</DialogTitle>
             <Grid  container  >
              <Grid item xs={5} sm={5} lg={5} md={5} className="showmarks" style={{textAlign: "center"}}>
              {console.log(this.props.photo)}
              <img src={localStorage.getItem("photo")} className="roundedimg" height={80} width={80}/><div style={{fontSize: 16 , fontWeight: 600 , padding: 10}}><span >{localStorage.getItem("name")}</span></div>
              </Grid>
              <Grid item xs={2} sm={2} lg={2} md={2} className="showmarks" style={{textAlign: "center" , verticalAlign: "center" , }}>
           <div style={{ marginTop: "25%" , fontWeight: 600 , fontSize: 16}}>vs</div>
              </Grid>
              <Grid item xs={5} sm={5} lg={5} md={5} className="showmarks" style={{textAlign: "center"}}>
              {console.log(this.props.photo)}
              <img src={this.props.photo} className="roundedimg" height={80} width={80}/><div  style={{fontSize: 16 , fontWeight: 600 , padding: 10}}><span>{this.props.name}</span></div>
              </Grid>
              {console.log(this.props.load, "this is load")}
       
              {this.props.load === false ?   this.props.comparechallanges.subject_ranking.map((val)=> ( <Grid  container  >
                <Grid item xs={12} sm={12} lg={12} md={12} className="showmarks" style={{textAlign: "center" ,fontSize:"16px" , backgroundColor: "#616161" , padding: "5px" ,  color: "white" , fontFamily: "Roboto",  fontWeight: 400}}>
                <div>{val.subject}</div>
                </Grid>
                      <Grid item xs={5} sm={5} lg={5} md={5} className="showmarks" style={{textAlign: "center" ,}}>
                     
                              {/* four items to show after subject */}
                              <Grid  container  >
                                  <Grid item xs={6} sm={6} lg={6} md={6} className="showmarks" style={{textAlign: "center" , borderBottom: "solid #dcdcdc 1px" ,paddingTop: "5px" }}><div>{val.student1 != null ? <div>{val.student1.rank} </div> : "--"}</div><div>Rank</div></Grid>
                                  <Grid item xs={6} sm={6} lg={6} md={6}className="showmarks" style={{textAlign: "center" ,  borderBottom: "solid #dcdcdc 1px " , paddingTop: "5px"}}><div>{val.student1 != null ? <div>{val.student1.accuracy} </div> : "--"}</div><div>Accuracy</div></Grid>
                                  <Grid item xs={6} sm={6} lg={6} md={6} className="showmarks" style={{textAlign: "center" , paddingTop: "5px"}}> <div>{val.student1 != null ? <div>{val.student1.questionAttempted} </div> : "--"}</div><div>Attempted</div></Grid>
                                  <Grid item xs={6} sm={6} lg={6} md={6} className="showmarks" style={{textAlign: "center" , paddingTop: "5px"}}> <div>{val.student1 != null ? <div>{val.student1.myRight} </div> : "--"}</div><div>Right</div></Grid>
                              </Grid>
                              {/* ================================== */}
                      {/* {val.student1 === null ? "null " : <span> rank  {val.student1.rank} {val.student1.accuracy} {val.student1.questionAttempted}{val.student1.myRight} </span>} */}
                      </Grid>
                <Grid item xs={2} sm={2} lg={2} md={2} className="showmarks" style={{textAlign: "center" , }}></Grid>
                <Grid item xs={5} sm={5} lg={5} md={5} className="showmarks" style={{textAlign: "center" , }}>
                            {/* four items to show after subject */}
                              <Grid  container  >
                                  <Grid item xs={6} sm={6} lg={6} md={6} className="showmarks" style={{textAlign: "center" , borderBottom: "solid #dcdcdc 1px " ,paddingTop: "5px"}}><div>{val.student2 != null ? <div>{val.student2.rankank2} </div> : "--"}</div><div>Rank</div></Grid>
                                  <Grid item xs={6} sm={6} lg={6} md={6} className="showmarks" style={{textAlign: "center" , borderBottom: "solid #dcdcdc 1px " , paddingTop: "5px"}}><div>{val.student2 != null ? <div>{val.student2.accuracy2} </div> : "--"}</div><div>Accuracy</div></Grid>
                                  <Grid item xs={6} sm={6} lg={6} md={6} className="showmarks" style={{textAlign: "center" ,paddingTop: "5px"}}><div>{val.student2 != null ? <div>{val.student2.questionAttempted2} </div> : "--"}</div><div>Attempted</div></Grid>
                                  <Grid item xs={6} sm={6} lg={6} md={6} className="showmarks" style={{textAlign: "center" ,paddingTop: "5px"}}><div>{val.student2 != null ? <div>{val.student2.right2} </div> : "--"}</div><div>Right</div></Grid>
                              </Grid>
                                {/* ================================== */}
              {/* {val.student2 === null ? "null " : <span>   {val.student2.rank} {val.student2.accuracy} {val.student2.questionAttempted}{val.student2.myRight} </span>} */}
                </Grid>
                </Grid> )
                ) :   <Grid  container  >
                <Grid item xs={12} sm={12} lg={12} md={12} className="showmarks" style={{textAlign: "center"}}><Loading/> </Grid> </Grid>}
            
{/*          
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent> */}
          
                <Grid item xs={12} sm={12} lg={12} md={12} className="showmarks" >
                  <DialogActions>
                    {/* <Button onClick={this.props.handleClose} color="primary">
                      Disagree
                    </Button> */}
                    <Button  onClick={this.props.handleClose}  color="primary" autoFocus>
                   <h6> OK</h6>
                    </Button>
                  </DialogActions>
                </Grid>
        
          </Grid> 
        </Dialog>
      </div>
    );
  }
}
CompareDialogue.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};
const mapStateToProps=(state)=>{
  return{
    comparechallanges: state.progress.comparechallanges,
    load: state.progress.load
  }
  }
export default compose(  withStyles(styles) , connect(mapStateToProps  ,{ /*allchallenges , comparechallenge */}) , withMobileDialog() ) (CompareDialogue);
