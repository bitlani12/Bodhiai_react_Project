import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import logo2 from "./../../images/logo2.png";
import Grid from '@material-ui/core/Grid';
import './IIT_Registraion.css';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import {Tooltip , OverlayTrigger } from 'react-bootstrap';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import {iitjeeregistration} from './../../store/actions/authentication';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
//import Table from '@material-ui/core/Table';
import{Table}  from "react-bootstrap";
import Modal from '@material-ui/core/Modal';
import SimpleModal from './ModalSuccessOrFail'
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 1,
    display: "block",
    backgroundColor: "black"
  },
  main: {
      backgroundColor: "white",
    width: 'auto',
    // display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: "80%",
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: "white",
    },
  },
  paper: {
  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: "white",
    border:"solid gray 1px",
    textAlign: "center"
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    
    marginTop: theme.spacing.unit,
    
  },
  submit: {
    marginTop: theme.spacing.unit*3 ,
    color: "white",
    backgroundColor: "black",
    '&:hover':{
    backgroundColor: "black",
},
  },
  inpurfont:{
    fontSize:"16",
    color: "black"

  },
  switch:{
    color: "black",
  
  },
  colorSwitchBase: {
    color: "black",
    '&$colorChecked': {
      color: "#303f9f",
       '& + $colorBar': {
         backgroundColor: "#303f9f",
       },
    },
  },
  colorBar: {},
  colorChecked: {},
  table:{
    width: "70%",
    [theme.breakpoints.down('sm')]: {
      width: "60%",
    },
    [theme.breakpoints.up('md')]: {
      width: "60%",
    },
    [theme.breakpoints.up('lg')]: {
      width: "10%",
    },
  }
});

class  Iiitjeeregistration extends React.Component{
  constructor(props){
    super(props);
		this.state ={
      checkedA: false,checkedB: false, shifterror: false, name: "",mobile: "" , rollno : "" , mobilenumbererr: false , email: "" , emailerror : false , openmodal: false
    }
  }
  changestateofopenmodal=()=>{
this.setState({openmodal: false})
this.setState({mobile: "" , email: "" , rollno: "", switch: "" , name: "" , checkedA: false , checkedB: false})
  }
  alltest=()=>{
    this.state.checkedB === true ? /*this.props.fetchDashboardAllTestFilter("SubjectTest")*/ this.setState({shift: "evening"}) : this.state.checkedA === true ? /*this.props.fetchDashboardAllTestFilter("MockTest") */ this.setState({shift: "morning"}) :  this.state.checkedA === false && this.state.checkedB === false ? <h1>{this.state.shifterror}</h1> : ""
    }
  handleChangeA = name => event => {
    console.log(name , event.target.checked , "this is ")
    this.setState({ checkedA: !this.state.checkedA , checkedB: false } ,  ()=>{ this.alltest()});
    console.log(this.state.checkedB)
  };

   handleChangeB = name => event => {
    console.log(name , event.target.checked , "this is ")
    this.setState({ checkedB: !this.state.checkedB , checkedA: false } , ()=>{ this.alltest()})
    console.log(this.state.checkedB)
  };
  handleChangeNumber = event => {
    const mobile = (event.target.validity.valid) ? event.target.value : this.state.username;
    this.setState({ mobile });
}
  handleChangeText = event => {
   // const value = (event.target.validity.valid) ? event.target.value : "";
    this.setState({
      [event.target.name]: event.target.value
    });
  } 
   makeSearch =()=> {
  
    return false;
  }
  handlesubmit=(e) =>{
    e.preventDefault();

    setTimeout(() => {
        this.setState({emptyvalueerr : false ,passwordshort: false , mobilenumbererr : false , shifterror: false , emailerror: false})
    }, 2500);
    
    if(  this.state.name.length <= 0 || this.state.mobile.length <=  0 || this.state.email.length <=  0 )
    {return this.setState({emptyvalueerr: true})}
   else if(  this.state.mobile.length !== 10)
       {return console.log("yes this is working errr") ,this.setState({mobilenumbererr: true})}
     else if(this.state.checkedA === this.state.checkedB) {
     {return this.setState({shifterror : true})}
     }
     else if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) === false ){
return this.setState({emailerror: true})
     }
    // else if(this.state.password.length < 8) {
    //     {return  this.setState({passwordshort : true})}
    // }
    else{
        console.log("every thing is perfect", this.state.mobile , this.state.email , this.state.name ,  this.state.shift)
     this.props.iitjeeregistration(this.state.mobile , this.state.email , this.state.name ,  this.state.shift)
     this.setState({openmodal: true})
      //http://bodhiai.in/api/memberhsip/24_jan_registration/
      // this.setState({mobile: "" , email: "" , rollno: "", switch: "" , name: "" , checkedA: false , checkedB: false})
        }
}


  render(){

    let tooltip = (
      <Tooltip id="tooltip">
        <strong>Enter Text Only</strong>
      </Tooltip>
    );
    let tooltip2 = (
      <Tooltip id="tooltip">
        <strong>Enter Mobile Number</strong>
      </Tooltip>
    );
    let tooltip3 = (
      <Tooltip id="tooltip">
        <strong>Enter Your Roll No.</strong>
      </Tooltip>
    );
    let tooltip4 = (
      <Tooltip id="tooltip">
        <strong>Enter Varified Email</strong>
      </Tooltip>
    );
 const { classes } = this.props;
  return (
      <div style={{backgroundColor: "white" , height: "100%" ,  }}>
    <div className={classes.main} style={{backgroundColor: "white" , paddingTop: 100 }}>  
      <CssBaseline style={{backgroundColor: "white"}}/>
    
      <Paper className={classes.paper} style={{marginTop: 10}}>
      <Grid  container >
         <Grid item xs={12} sm={4} lg={4} md={4} style={{ backgroundColor: "black" , color: "white"}} >
         <div className="bodhiai">BODHI AI</div>
        <div className="titlerank"> Rank Prediction Calculator for IIT JEE MAINS Exam 2019 Students</div>
         <div className="alreadyaccount">
         <div  className="instructions" >Instructions-:</div>
         The exam will be conducted in online mode.
The question paper consists of 90 objective type of questions.
Paper has three sections (Physics, Chemistry, Mathematics), each section carries 30 questions.
Duration of the paper is 3 hours (180 Minutes). 
Subject-wise distribution of questions with marks is tabulated below:
<Paper className={classes.root}>
<div >
<Table style={{marginLeft: 0}} bordered>
  <thead>
    <tr>
      <th style={{color: "white" , fontWeight: 600 , fontSize: "14" , textAlign: "center" }}>Subjects</th>
      <th style={{color: "white" , fontWeight: 600 , fontSize: "14" ,textAlign: "center" }}>Maximum Questions</th>
      <th style={{color: "white" , fontWeight: 600 , fontSize: "14" ,textAlign: "center" }}>Maximum Marks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{color: "white" , fontWeight: 400 , fontSize: "13" ,  textAlign: "center" ,}}>Physics</td>
      <td style={{color: "white" , fontWeight: 400 , fontSize: "13" ,  textAlign: "center" ,}}>30</td>
      <td style={{color: "white" , fontWeight: 400 , fontSize: "13" ,  textAlign: "center" ,}}>120</td>
    </tr>
    <tr>
      <td style={{color: "white" , fontWeight: 400 , fontSize: "13" ,  textAlign: "center" ,}}>Mathematics</td>
      <td style={{color: "white" , fontWeight: 400 , fontSize: "13" ,  textAlign: "center" ,}}>30</td>
      <td style={{color: "white" , fontWeight: 400 , fontSize: "13" ,  textAlign: "center" ,}}>120</td>
    </tr>
    <tr>
      <td style={{color: "white" , fontWeight: 400 , fontSize: "13" ,  textAlign: "center" ,}}>Chemistry</td>
      <td style={{color: "white" , fontWeight: 400 , fontSize: "13" ,  textAlign: "center" ,}}>30</td>
      <td style={{color: "white" , fontWeight: 400 , fontSize: "13" ,  textAlign: "center" ,}}>120</td>
    </tr>
       <tr>
      <td style={{color: "white" , fontWeight: 600 , fontSize: "14" ,  textAlign: "center"}}>Total</td>
      <td style={{color: "white" , fontWeight: 600 , fontSize: "14" ,  textAlign: "center"}}>90 Questions</td>
      <td style={{color: "white" , fontWeight: 600 , fontSize: "14" ,  textAlign: "center"}}>360 marks</td>
    </tr>
</tbody>
</Table>
</div>
      
    </Paper>



         </div>
             </Grid>
         <Grid item xs={12} sm={8} lg={8} md={8} style={{textAlign: "center" , padding: 20 , marginTop: 80}} justify="center" align="center">
        <img src={logo2} width={90} height={85} style={{textAlign: "center"}}/>
        <Typography component="h1" variant="h5">

        </Typography>
        <form className={classes.form} >
        <OverlayTrigger placement="bottom" overlay={tooltip}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email"><span style={{fontSize: 16  , marginTop: "-15"}}>Name</span></InputLabel>
              <Input id="name" name="name" autoComplete="name"  type="text" className={classes.inpurfont} value={this.state.name} onChange={(e)=>{this.handleChangeText(e)}} />
          
            </FormControl>
        </OverlayTrigger>
        <OverlayTrigger placement="bottom" overlay={tooltip2}>
            <FormControl margin="normal" required fullWidth InputProps={{classes: { input: classes.inpurfont,},}}>
            <InputLabel htmlFor="email"><span style={{fontSize: 16  , marginTop: "-15"}}>Mobile</span></InputLabel>
              <Input id="mobile" name="mobile" autoComplete="Mobile" type="number" className={classes.inpurfont}  pattern="[0-9]*" value={this.state.mobile} onChange={(e)=>{this.handleChangeText(e)}} />
         
            </FormControl>
            
       </OverlayTrigger>
       {/* <OverlayTrigger placement="bottom" overlay={tooltip3}>
          <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email"><span style={{fontSize: 16  , marginTop: "-15"}}>Roll No.</span></InputLabel>
            <Input id="roll no" value="hii" name="rollno" autoComplete="Roll No."    className={classes.inpurfont} value={this.state.rollno} onChange={(e)=>{this.handleChangeText(e)}}/>
            {this.state.rollno}
          </FormControl>
      </OverlayTrigger> */}
      <OverlayTrigger placement="bottom" overlay={tooltip4}>
          <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email"><span style={{fontSize: 16 , marginTop: "-15"}}>Email</span></InputLabel>
            <Input id="email" name="email" autoComplete="email"   type="email" className={classes.inpurfont} value={this.state.email} onChange={(e)=>{this.handleChangeText(e)}}/>
          </FormControl>
      </OverlayTrigger>
          <Grid container style={{paddingTop: 10}} id="outlined"  
            label="Uncontrolled">
          
        <Grid item xs={12} sm={6} lg={6} md={6}  style={{textAlign: "center" , color: "white"}}    >
     
        
        <Switch
          // checked={this.state.checkedB}
           onClick={this.handleChangeA('checkedA')}
           value="checkedA"
           checked={this.state.checkedA}
           color="primary"
          classes={ { switchBase: classes.colorSwitchBase}}
        />
      <span style={{fontWeight: 500 , fontSize: 16 , color: `${this.state.checkedA? "#303f9f" : "#9f9f9f" }` }}>Shift I (9:30am - 12:30pm )</span>
      </Grid>
      <Grid item xs={12} sm={6} lg={6} md={6}  style={{textAlign: "center" , marginLeft: -2 }}   >
        <Switch
          // checked={this.state.checkedB}
           onClick={this.handleChangeB('checkedB')}
           value="checkedB"
           checked={this.state.checkedB}
           color="primary"
          classes={ { switchBase: classes.colorSwitchBase}}
        />
          <span style={{fontWeight: 500 , fontSize: 16 , color: `${this.state.checkedB? "#303f9f" : "#9f9f9f" }` }}>Shift II (2:30pm - 5:30pm )</span>
          </Grid>
        
          </Grid>
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
           
            fullWidth
            variant="contained"
            color="primary"
            onClick={(e)=>this.handlesubmit(e)}
            className={classes.submit}
          >
        <div style={{fontSize: 16}}>Register</div> 
          </Button>
        </form>
          {this.state.emptyvalueerr ? <h6 className="loginerror">Value is empty </h6> : ""}  
          {this.state.emptyvalueerr === false ? this.state.passwordnotmatcherr ?  <h6 className="loginerror"> Password and Conform match</h6>: "" : ""}
          {this.state.passwordshort ?  <h6 className="loginerror"> Password too Short</h6>: "" }
          {this.state.emptyvalueerr === false ? this.state.passwordnotmatcherr === false ? this.state.passwordshort === false ? this.state.usernameexisterr ?  <h6 className="loginerror"> Password and Conform match</h6>: "" : "" : "": ""}
          {this.state.mobilenumbererr ? <h6 className="loginerror">Mobile Number Should Be 10 Digit</h6> : ""}
          {this.state.shifterror ? <h6>Select Your Suitable Shift</h6> : ""}
          {this.state.emailerror ? <h6>Enter valid Email</h6>: "" }
      </Grid>
      </Grid>
      </Paper>
     {this.state.openmodal ? <SimpleModal openmodal={this.state.openmodal} what="hii" register={this.props.register} loads={this.props.load} changestateofopenmodal={this.changestateofopenmodal} username={this.state.email} password={this.state.mobile} shift={this.state.shift}/> : ""} 
    </div>
    </div>
  );
}}


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

Iiitjeeregistration.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => {
  return {
    load: state.authenticate.load,
    register : state.authenticate.register
    // data: state.onlinetest.onlinetestdata,
    // fetched : state.onlinetest.fetchedonlinetest,
    // redirect: state.onlinetest.redirect
  };
};

//export default withStyles(styles)(Iiitjeeregistration);
export default compose(  withStyles(styles) , connect(mapStateToProps  ,{iitjeeregistration}) ) (Iiitjeeregistration);