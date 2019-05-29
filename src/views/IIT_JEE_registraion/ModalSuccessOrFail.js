import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Loading from './../Loading/Loading';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText'
import {Table} from 'react-bootstrap'
function getModalStyle() {
  const top = 50 
  const left = 50 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
      },
      formControl: {
        marginTop: theme.spacing.unit * 2,
        minWidth: 120,
      },
      formControlLabel: {
        marginTop: theme.spacing.unit,
      },dialog:{
          padding: 0
      }
});

class SimpleModal extends React.Component {
  state = {
    open: this.props.openmodal, fullWidth: true,
    maxWidth: 'sm', width: window.innerWidth
  };
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
   handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleOpen = () => {
    this.setState({ open: this.props.openmodal });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.changestateofopenmodal()
  };

  render() {
    const { classes } = this.props;
    const isMobile = this.state.width <= 500;
    return (
      <div>
        {/* <Typography gutterBottom>Click to get the full Modal experience!</Typography>
        <Button onClick={this.handleOpen}>Open Modal</Button> */}
        <Dialog
         fullWidth={this.state.fullWidth}
         maxWidth={this.state.maxWidth}
          open={this.state.open}
          onClose={this.handleClose}
      className={classes.dialog}
          aria-labelledby="max-width-dialog-title">
          {console.log(this.props.loads , "this is load section to check")}
           {/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle> */}
          {this.props.loads ?  <Loading /> : this.props.register === false ? <DialogContent> 
           <DialogContentText className={classes.form} style={{marginTop: -25 , marginBottom: 10}}>
             <div style={{backgroundColor: "red" , fontSize: isMobile ? 15     : 18 , fontWeight: 600 , padding: 10 , color : "white" , }}>  Registration Error</div> 
               </DialogContentText>
               <DialogContentText>
                   <div style={{fontSize: 16 , fontWeight: 500 , textAlign: "center"  }}>This Username is Already Register </div>             
               </DialogContentText>
             
           <DialogContentText style={{textAlign: "center" , marginTop: 10}}>
       <Button onClick={this. handleClose}> <div style={{backgroundColor: "red" , color: "white" , fontSize: 16 , padding: "5px 20px 5px 20px" , borderRadius: "5px" , }}>OK</div></Button>
          </DialogContentText>
        

               </DialogContent>
               :   <DialogContent> 
           <DialogContentText className={classes.form} style={{marginTop: -25 , marginBottom: 10}}>
             <div style={{backgroundColor: "green" , fontSize: isMobile ? 15     : 18 , fontWeight: 600 , padding: 10 , color : "white" , }}>  Registration Successful</div> 
               </DialogContentText>
               <DialogContentText>
                   <div style={{fontSize: 16 , fontWeight: 500 , textAlign: "center"  }}>Your Exam date is 7 April 2019 </div>
                   <div style={{fontSize: 16 , fontWeight: 500 , textAlign: "center"  }}> <strong>  {this.props.shift === "morning" ? <span>Shift I (9:30am - 12:30pm)</span>: <span> Shift II  (2:30pm - 5:30pm )</span>} </strong>  </div>
               </DialogContentText>
               <DialogContentText  style={{ padding: 10,fontSize: 14 , textAlign: "center"}}>
    Login with below details <a href="http://bodhiaireact.s3-website.ap-south-1.amazonaws.com/#/login">Login</a></DialogContentText>
               <DialogContentText style={{textAlign: "center" ,}}>
               {isMobile ? <div style={{marginLeft: -3}}>
                <Table striped bordered hover style={{marginLeft: 1 , textAlign: "center"}} >
            <thead>
                <tr>
                <th style={{textAlign: "center"}} >Username</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <th  style={{textAlign: "center"}}>{this.props.username}</th>
             
                </tr>
                </tbody>

                <thead>
                <tr>
                <th style={{textAlign: "center"}} >Password</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <th  style={{textAlign: "center"}}>{this.props.password}</th>
                </tr>
                </tbody>
                </Table>
               </div>:
               <Table striped bordered hover style={{margin: 1 , textAlign: "center"}} >
                    <thead>
                        <tr>
                        <th style={{textAlign: "center"}} >Username</th>
                        <th  style={{textAlign: "center"}}>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th  style={{textAlign: "center"}}>{this.props.username}</th>
                        <th  style={{textAlign: "center"}}>{this.props.password}</th>
                        </tr>
                        </tbody>
                        </Table>}
                   </DialogContentText>
                   <DialogContent>
           <DialogContentText style={{textAlign: "center"}}>
<Button> <a style={{backgroundColor: "green" , color: "white" , fontSize: 16 , padding: "5px 20px 5px 20px" , borderRadius: "5px"}} href="http://www.bodhiai.in/">OK</a></Button>
          </DialogContentText>
          </DialogContent>
               </DialogContent>
            }
          </Dialog>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
//const SimpleModalWrapped = withStyles(styles)(SimpleModal);

//export default SimpleModalWrapped;
export default  withStyles(styles) (SimpleModal);