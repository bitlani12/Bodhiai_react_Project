import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import ChatBot2 from "../../../../ChatBot2/ChatBot2";

const styles = {
  appBar: {
    position: "relative",
    backgroundColor: "#fa8900",
    borderRadius: "10px 10px 20px 20px"
  },
  flex: {
    flex: 1
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ChatBot2Mobile extends React.Component {
  state = {
    open: this.props.openchat
  };
  componentDidMount() {
    console.log("this is working", this.props.openchat);
    this.setState({ open: this.props.openchat });
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    console.log("this is chatbot", this.props.openchat, this.state.open);
    return (
      <div>
        {/* <Button
          variant="outlined"
          color="primary"
          onClick={this.props.handlechatbot}
        >
          Open full-screen dialog
        </Button> */}
        <Dialog
          fullScreen
          open={this.props.openchat}
          onClose={this.props.handlechatbot}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              {/* <IconButton
                color="inherit"
                onClick={this.props.handlechatbot}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton> */}
              <Typography variant="h6" color="inherit" className={classes.flex}>
                BodhiAI
              </Typography>
              <Button color="inherit" onClick={this.props.handlechatbot}>
                <CloseIcon />
              </Button>
            </Toolbar>
          </AppBar>
          <ChatBot2 />
        </Dialog>
      </div>
    );
  }
}

ChatBot2Mobile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChatBot2Mobile);
