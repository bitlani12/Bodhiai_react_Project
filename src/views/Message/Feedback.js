import React from 'react';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose'
import { black } from 'material-ui/styles/colors';
import Button from '@material-ui/core/Button';
import { white } from 'material-ui/styles/colors';
import {submitfeedback} from './../../store/actions/messageaction'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
const styles = (theme) => ({
    appBar: {
      position: 'relative',
      backgroundColor: "#1b1b1b"
    },
    flex: {
      flex: 1,
    },
    header:{
      backgroundColor: "black"
    },
    inpurfont:{
      fontSize:"16",
      color: "black"
  
    },
    font:{
      fontSize: "15",
    color: "black"
    },
    menu:{
     fontSize:10
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 180,
    height: 100,
  color: "black",
  width:"80%"
    },
    button: {
      color: "white",
      fontSize: 18,
    backgroundColor: "black",
    '&:hover': {
      backgroundColor: "#1b1b1be6",
    }}
  });

class Feedback extends React.Component{
 constructor(props){
   super(props);
   this.state={
     message: "" ,  snackbar: false , 
   }
 }
 onsubmit=()=>{
   console.log(this.state.message)
    this.props.submitfeedback("BodhiAI" , this.state.message )
    this.setState({message: "" , snackbar: true})
 }
 onchange=(e)=>{
 this.setState({message: e.target.value})
 console.log(e.target.value)
 }
 showsnackbar=( )=>{
  console.log( this.state.snackbar , "this is snackbar working")
  console.log("this is snavckbar")
  // this.setState({snackbar: true})
}
handleCloseSnackBar=(props)=>{
  this.setState({snackbar: false ,  })
  this.TransitionDown()

}
    render(){
        const {classes} = this.props
        return(
          <div>
           
            <Grid  container>
        
                <Grid item xs={12} sm={12} lg={12} md={12} className="showmarks" style={{textAlign: "center"}}>
                <TextField
                fullWidth
                   disabled
                id="standard-name"
                label={<span className={classes.font} style={{fontSize:24 }}>To.</span>}
                className={classes.textField}
              //   placeholder={`${this.props.data.phone === null ? this.state.phoneadd : this.props.data.phone /*this.props.data.phone*/}`}
                value="BodhiAI"
                helperText={<h6><span style={{fontSize: 10}}>Message Send to BodhiAI</span></h6>}
              //   onChange={this.handleChange('phone')}
                margin="normal"
                InputProps={{
                  classes: {
                    input: classes.inpurfont,
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ margin: 8  }}
              />  </Grid>
         <Grid item xs={12} sm={12} lg={12} md={12} className="showmarks" style={{textAlign: "center"}}>
         <TextField
          fullWidth
          id="standard-multiline-static"
          label={<span className={classes.font} style={{fontSize:22 }}>Message</span>}
          multiline
          rows="3"
          onChange={ (e)=>this.onchange(e)}
          value={this.state.message}
          helperText={<h6><span style={{fontSize: 10}}>Type Your Message </span></h6>}
          className={classes.textField}
          margin="normal"
          InputProps={{
            classes: {
              input: classes.inpurfont,
            },
          }}
        />
        </Grid>
        <Grid item xs={12} sm={12} lg={12} md={12} className="showmarks" style={{textAlign: "center"}}>
        <Button
        variant="contained" 
        color="primary"
        className={ classes.button}
        onClick={()=>{this.onsubmit() }}>
        SUBMIT
      </Button>
      <Grid item xs={12} sm={12} lg={12} md={12} className="showmarks" style={{textAlign: "center"}}>
      <Snackbar
                                    anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                    }}
                                   
                                    open={this.state.snackbar}
                                    autoHideDuration={4000}
                                    onClose={this.showsnackbar}
                                    ContentProps={{
                                    'aria-describedby': 'message-id',
                                    }}
                                    message={<span id="message-id"><h5>Message Sent Successful </h5></span>}
                                    action={[
                                 <Button key="undo" color="secondary" size="small" onClick={this.showsnackbar}>
                                        View
                                     </Button>,
                                    <IconButton
                                        key="close"
                                        aria-label="Close"
                                        color="inherit"
                                        // className={classes.close}
                                        onClick={this.showsnackbar}
                                    >
                                        <CloseIcon />
                                    </IconButton>,
                                    ]}
                                    /> 
                                    </Grid>
        </Grid>
  
            </Grid>  
            
            </div>
            
        )
    }
}
const mapStateToProps = state => {
    return {
      // data: state.message.announcements,
      // fetched : state.message.load
    };
  };
  export default compose(  withStyles(styles) , connect( mapStateToProps, { submitfeedback/*changeprofileofuser*/}) ) (Feedback);