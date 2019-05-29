import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Announcements from './Announcements'
import Feedback from './Feedback';
import Inbox from './Inbox';
function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    width: '100%',
    margin: "auto",
    // maxWidth: 460,
    backgroundColor: theme.palette.background.paper,
  },
});

class Message extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
       <div className={classes.root} style={{backgroundColor: "white"}}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth">
            <Tab label={<h5>Announcements</h5>} />
            <Tab label={<h5>Feedback</h5>}/>
            <Tab label={<h5>Inbox</h5>}/>
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
            <TabContainer dir={theme.direction}>{  <Announcements   dir={theme.direction} data ={this.props.dataallchallenge} fetch={this.props.fetch} classes={classes} handleClickOpen={this.handleClickOpen}/>  }</TabContainer>
            <TabContainer dir={theme.direction}> { <Feedback   dir={theme.direction} data ={this.props.dataallchallenge} fetch={this.props.fetch} classes={classes} handleClickOpen={this.handleClickOpen}/>  }   </TabContainer>
            <TabContainer dir={theme.direction}>{ <Inbox   dir={theme.direction} data ={this.props.dataallchallenge} fetch={this.props.fetch} classes={classes} handleClickOpen={this.handleClickOpen}/>  } </TabContainer>
          {/* <TabContainer>Item One</TabContainer>
          <TabContainer dir={theme.direction}>Item Two</TabContainer>
          <TabContainer dir={theme.direction}>Item Three</TabContainer> */}
        </SwipeableViews>
       </div>
        {/* <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label={<h5>Sent</h5>} />
          <Tab label={<h5>Recieved</h5>}/>
        </Tabs> */}
      </div>
    );
  }
}

Message.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Message);