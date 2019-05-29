import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {sidebarroutes_Shopping_List} from './../../Routes/sidebarroutes';
import {NavLink} from 'react-router-dom'
const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class TeacherPannelSidebar extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };


  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {sidebarroutes_Shopping_List.map((text, index) => (
            <NavLink to={`/subcategory/${text.name}`}> 
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
            </NavLink>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
    
        {/* <Button onClick={this.toggleDrawer('right', true)}>Open Right</Button>
        <Button onClick={this.toggleDrawer('top', true)}>Open Top</Button>
        <Button onClick={this.toggleDrawer('bottom', true)}>Open Bottom</Button>*/}
        
        <Drawer open={this.props.opendrawer} onClose={this.props.toggleDrawer()}> 
        <div style={{height: 30 , background: "blue" , color: "white" , padding: 15 , fontSize: 600 , fontSize: 16}}>Mukesh</div>
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.toggleDrawer()}
            onKeyDown={this.props.toggleDrawer()}
          >
            {sideList}
          </div>
        </Drawer>
        {/* <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >
            {fullList}
          </div>
        </Drawer>
        <Drawer
          anchor="bottom"
          open={this.state.bottom}
          onClose={this.toggleDrawer('bottom', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('bottom', false)}
            onKeyDown={this.toggleDrawer('bottom', false)}
          >
            {fullList}
          </div>
        </Drawer>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </Drawer> */}
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeacherPannelSidebar);