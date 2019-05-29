import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';

// import ListItemText from '@material-ui/core/ListItemText';
// import ListItem from '@material-ui/core/ListItem';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import HorizontalLinearStepper from './Stepper'
const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class SelectSubject extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
          <AppBar className={classes.appBar} style={{backgroundColor: "white" , color: "black"}}>
            <Toolbar>
             BodhiAI
              {/* <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">  
              </IconButton> */}
              <Typography variant="h6" color="inherit" className={classes.flex}>
              </Typography>
              <button color="inherit" onClick={this.handleClose}>
              </button>
            </Toolbar>
          </AppBar>
          {/* <List>
            <ListItem button>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Default notification ringtone" secondary="Tethys" />
            </ListItem>
          </List> */}
       < HorizontalLinearStepper/>
      </div>
    );
  }
}

SelectSubject.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectSubject);