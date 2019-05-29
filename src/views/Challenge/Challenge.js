import React from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {allchallenges , comparechallenge} from './.././../store/actions/myprogress'
import {connect }from 'react-redux';
import compose from 'recompose/compose';
import Loading from '../Loading/Loading';
import './Challenge.css';
import CompareDialogue from './CompareDialogue'
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
class Challenge extends React.Component {
  state = {
    value: 0,open: false,currentimg: "" , currentname: ""
  };

  handleChange = (event, value) => {
    this.setState({ value  });
  };
  componentDidMount(){
      this.props.allchallenges();
  }
 
  handleClickOpen = (username , name , photo) => {
    this.setState({ open: true , openpopup: true , currentname: name , currentimg: photo });
    this.props.comparechallenge(username );
  };

  handleClose = () => {
    this.setState({ open: false ,openpopup: false});
  };
  render() {
    const { classes } = this.props;
    return (
        <div style={{backgroundColor: "white"}}>
      <div className={classes.root} style={{backgroundColor: "white"}}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label={<h5>Sent</h5>} />
          <Tab label={<h5>Recieved</h5>}/>
        </Tabs>
        {this.state.value === 0 && <Sent data ={this.props.dataallchallenge} fetch={this.props.fetch} classes={classes} handleClickOpen={this.handleClickOpen}/>  }
        {this.state.value === 1 &&  <Recieved data ={this.props.dataallchallenge} fetch={this.props.fetch} classes={classes} handleClickOpen={this.handleClickOpen}/>}
      </div>
      {this.state.openpopup ? <CompareDialogue  handleClickOpen={this.handleClickOpen} handleClose={this.handleClose} open={this.state.open} name={this.state.currentname} photo={this.state.currentimg}/> : ""}
      </div>
    );
  }
}

class Sent extends React.Component{
    render(){
   

        return(  <div >
          {this.props.fetch ? <div className={this.props.classes}>
          <List dense className={this.props.classes.root} style={{marginTop: 30}}>
         { this.props.data.to_challenges.length < 1 ? "Challenge List is Empty" : 
            this.props.data.to_challenges.map((val) =>
             
              <ListItem  button className="listmaterialui"  style={{paddingLeft: "20%" , borderBottom: "solid #efeaeaf5 1px" }} onClick={()=>this.props.handleClickOpen(val.username , val.to,val.photo)}>
            <ListItemAvatar >
              <Avatar
                alt={`Avatar n°${val.photo}`}
                src={`${val.photo}`}
              />
            </ListItemAvatar>
            <ListItemText primary={<span style={{fontSize: 18 , paddingLeft:"40%"}}> {val.to}</span>} />
            {/* <ListItemSecondaryAction>
              {/* <Checkbox
                onChange={this.handleToggle(value)}
                checked={this.state.checked.indexOf(value) !== -1}
              /> }
            </ListItemSecondaryAction> */}
          </ListItem>
           
            )} </List>
            </div> : 
          <Loading/>}
           </div>)
    }
}
class Recieved extends React.Component{
    render(){
        return(
          <div>
          {this.props.fetch ? <div className={this.props.classes}>
          {console.log(this.props.data , "this is all chalelenge")} 
          <List dense className={this.props.classes.root} style={{marginTop: 30}}>
            {this.props.data.from_challenges.map((val) =>
              <ListItem  button className="listmaterialui"  style={{paddingLeft: "20%"}} onClick={()=>this.props.handleClickOpen(val.username)}>
            <ListItemAvatar >
              <Avatar
                alt={`Avatar n°${val.photo}`}
                src={`${val.photo}`}
              />
            </ListItemAvatar>
            <ListItemText primary={<span style={{fontSize: 18 , paddingLeft:"40%"}}> {val.from}</span>} />
            {/* <ListItemSecondaryAction>
              {/* <Checkbox
                onChange={this.handleToggle(value)}
                checked={this.state.checked.indexOf(value) !== -1}
              /> }
            </ListItemSecondaryAction> */}
          </ListItem>
           
            )} </List>
            </div> : 
          <Loading/>}
           </div>
        )
    }
}
Challenge.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps=(state)=>{
return{
  dataallchallenge: state.progress.all_challenges,
  fetch: state.progress.fetcchallenges
}
}

export default compose(  withStyles(styles) , connect(mapStateToProps  ,{ allchallenges , comparechallenge}) ) (Challenge);