import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import starttest from './../../../../images/starttest.png';
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import logo from './../../../../images/logo.png' 
import './DialogueForIitJeeExam.css'
import Clock from './Clock';
const styles = {
    dialog: {
      overflowY: "scroll",
      overflowX: "hidden",
      display: "flex"
    },
    paper: {
      overflow: "hidden",
      margin: "auto",
      maxHeight: "none"
    },
   
  };
  
 class DialogueForIitJeeExam extends React.Component {
  state = {
    open: true,
    days: "",
    hours: "",
    min: "",
    sec: "",
    deadline: '',
    width: window.innerWidth,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
componentDidMount(){
localStorage.getItem("batch") === "24janmorning" ? this.setState({deadline: "April, 7, 2019 , 09:30:00"}) : this.setState({deadline: "April, 7, 2019 , 14:30:00 "})
window.addEventListener('resize', this.handleWindowSizeChange);
}

   handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  render() {
    const { classes } = this.props;
    const isMobile = this.state.width <= 500;
    return (
      <div>
        
        <Dialog
          open={this.state.open}
        //   onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          style={{backgroundColor: "transparent"}}
         
        >
        <div style={{ background: "", height: 30 }}  />
        <DialogTitle id="simple-dialog-title"></DialogTitle>
        <div style={{}} className="dialoguehead">
          {/* <DialogTitle id="form-dialog-title">Subscribe</DialogTitle> */}
          <DialogContent >
            <DialogContentText style={{textAlign: "center" ,  }}>
            {isMobile === false &&  <div style={{fontSize: 24 , fontWeight: 800 , marginBottom: 10 , color: "white" , zIndex: 1}}> Welcome You In BodhiAI</div>}
            <img src={logo} height={100} width={100} className="starttestimg"/>
            </DialogContentText>
            {/* <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            /> */}
          </DialogContent>
          </div>
          <DialogContentText style={{textAlign: "center" , fontSize: 18 , fontWeight: 500 , padding: 10}}>
                Your Exam For IIT-JEE will be held on  7 April 
            </DialogContentText>
            <div style={{fontWeight: 800 , fontSize: 20 , textAlign: "center"}}>Time Remaining {this.state.days}</div>
                 <Clock deadline={ this.state.deadline }/>
        <DialogTitle id="simple-dialog-title"></DialogTitle>
          {/* <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions> */}
        </Dialog>
      </div>
    );
  }
}
DialogueForIitJeeExam.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default  (DialogueForIitJeeExam);
