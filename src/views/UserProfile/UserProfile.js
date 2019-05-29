import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import compose from "recompose/compose";
import { connect } from "react-redux";
import user from "./../../images/user.png";
import "./UserProfile.css";
//import Grid from '@material-ui/core/Grid';
//import TextField from '@material-ui/core/TextField';
//import MenuItem from '@material-ui/core/MenuItem';
import { changeprofileofuser } from "./../../store/actions/sidebaraction";
import Loadable from "react-loadable";

const Loads = ({ isLoading, error }) => {
  return <div />;
};
const MenuItem = Loadable({
  loader: () => import("@material-ui/core/MenuItem"),
  loading: Loads
});
const TextField = Loadable({
  loader: () => import("@material-ui/core/TextField"),
  loading: Loads
});
const Grid = Loadable({
  loader: () => import("@material-ui/core/Grid"),
  loading: Loads
});
const styles = theme => ({
  appBar: {
    position: "relative",
    backgroundColor: "#1b1b1b"
  },
  flex: {
    flex: 1
  },
  header: {
    backgroundColor: "black"
  },
  inpurfont: {
    fontSize: "14"
  },
  font: {
    fontSize: "15",
    color: "#e0823c"
  },
  menu: {
    fontSize: 10
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 180,
    height: 100
  }
});

function Transition(props) {
  return <Slide direction="left" {...props} />;
}

class UserProfile extends React.Component {
  state = {
    open: true,
    file: this.props.data.photo_url,
    imagePreviewUrl: "",
    name: "Cat in the Hat",
    phone: this.props.data.phone,
    email: this.props.data.email,
    testmobile: "3549520462",
    course: this.props.data.course,
    language: this.props.data.language,
    phoneadd: "Add Mobile No.",
    emailadd: "Add Email",
    photourl: this.props.data.photo_url
  };
  componentDidMount() {}
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log("handle uploading-", this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    console.log(event.target.value, name);
  };
  changeprofile = e => {
    e.preventDefault();
    // let file = {
    //   uri: this.state.file,
    // }
    // let options = {
    //   keyPrefix: "desktopprofile/",
    //   bucket: "reactprofiles",
    //   region: "ap-south-1",
    //   accessKey: this.props.data.accessKey,
    //   secretKey: this.props.data.secretKey,
    //   successActionStatus: 201
    // }
    // RNS3.put(file, options).then(response => {

    //   if (response.status !== 201)
    //     throw new Error("Failed to upload image to S3");
    //   console.log(response.body);
    //   console.log( response.location)
    //   this.props.changeprofileofuser( this.props.data.fullName , this.state.photourl , this.state.phone , this.state.email , this.state.course , this.state.language , )
    /**
     * {
     *   postResponse: {
     *     bucket: "your-bucket",
     *     etag : "9f620878e06d28774406017480a59fd4",
     *     key: "uploads/image.png",
     *     location: "https://your-bucket.s3.amazonaws.com/uploads%2Fimage.png"
     *   }
     * }
     */
    //});
    // const config = {
    //   bucketName: 'reactprofiles',
    //   dirName: 'desktopprofile/', /* optional */
    //   region: 'ap-south-1',
    //   accessKeyId: this.props.data.accessKey,
    //   secretAccessKey: this.props.data.secretKey,

    // }
    // uploadFile(this.state. imagePreviewUrl, config)
    // .then(data => this.setState({photourl: data.location }) )
    // .catch(err => console.error(err)).then(  this.props.changeprofileofuser( this.props.data.fullName , this.state.photourl , this.state.phone , this.state.email , this.state.course , this.state.language , ))
    // console.log(this.state.phone , this.state.email , this.state.course , this.state.language)
    // // TODO: do something with -> this.state.file
    console.log("handle uploading-", this.state.file);
  };
  render() {
    const courses = [
      {
        value: "SSC",
        label: "SSC"
      },
      {
        value: "NEET",
        label: "NEET"
      },
      {
        value: "Railways",
        label: "Railways"
      },
      {
        value: "IIT",
        label: "IIT"
      }
    ];
    const language = [
      {
        value: "English",
        label: "English"
      },
      {
        value: "Hindi",
        label: "Hindi"
      }
    ];
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (
        <div
          id="imagePreview"
          style={{ backgroundImage: "url(" + imagePreviewUrl + ")" }}
        />
      );
    } else {
      $imagePreview =
        this.props.data.photo_url === null ||
        this.props.data.photo_url === "" ? (
          <div
            id="imagePreview"
            style={{ backgroundImage: "url(" + user + ")" }}
          />
        ) : (
          <img
            src={this.props.data.photo_url}
            height={80}
            width={80}
            className="sidebarprofileimg"
          />
        );
    }
    const { classes } = this.props;

    return (
      <div>
        <Button variant="outlined" onClick={this.handleClickOpen}>
          Your Profile
        </Button>
        <Dialog
          fullScreen
          open={this.props.open}
          onClose={this.props.profile}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={this.props.profile}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                <h5>BodhiAI</h5>
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                <h5 onClick={this.changeprofile}> save </h5>
              </Button>
            </Toolbar>
          </AppBar>

          <div className="avatar-upload">
            <div className="avatar-edit">
              <input
                type="file"
                id="imageUpload"
                accept=".png, .jpg, .jpeg"
                onChange={e => this._handleImageChange(e)}
              />
              <label for="imageUpload" />
            </div>
            <div className="avatar-preview">
              {/* <div id="imagePreview" style={{backgroundImage: url(user//i.pravatar.cc/500?img=7
            )}}> 
            </div>*/}
              {$imagePreview}
              <div
                id="imagePreview"
                style={{
                  backgroundImage: "url(" + $imagePreview + ")" //i.pravatar.cc/500?img=7
                }}
              >
                <div style={{ textAlign: "center" }} />
              </div>
            </div>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                lg={12}
                md={12}
                style={{ textAlign: "center", backgroundColor: "white" }}
                justify="center"
                align="center"
              >
                <div
                  style={{
                    textAlign: "center",
                    marginTop: 15,
                    fontWeight: 800,
                    fontSize: 24
                  }}
                >
                  {" "}
                  {this.props.data.fullName}{" "}
                </div>
                {/* <ListItemText className={classes.fonts} style={{fontSize: 80 , textAlign: "center"}} primary={this.props.data.fullName} /> */}
              </Grid>
            </Grid>
          </div>

          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              lg={6}
              md={6}
              style={{ textAlign: "center", backgroundColor: "white" }}
              justify="center"
              align="center"
            >
              <TextField
                id="standard-name"
                label={
                  <span className={classes.font} style={{ fontSize: 24 }}>
                    Mobile No.
                  </span>
                }
                className={classes.textField}
                placeholder={`${
                  this.props.data.phone === null
                    ? this.state.phoneadd
                    : this.props.data.phone /*this.props.data.phone*/
                }`}
                value={this.state.phone}
                helperText={
                  <h6>
                    <span style={{ fontSize: 10 }}>Change Mobile No.</span>
                  </h6>
                }
                onChange={this.handleChange("phone")}
                margin="normal"
                InputProps={{
                  classes: {
                    input: classes.inpurfont
                  }
                }}
                InputLabelProps={{
                  shrink: true
                }}
                style={{ margin: 8 }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={6}
              md={6}
              style={{
                backgroundColor: "white",
                backgroundColor: "white",
                textAlign: "center"
              }}
              justify="center"
              align="center"
            >
              <TextField
                id="standard-name"
                label={
                  <span className={classes.font} style={{ fontSize: 24 }}>
                    Email
                  </span>
                }
                className={classes.textField}
                placeholder={`${
                  /*this.props.data.email*/ this.props.data.email === null
                    ? this.state.emailadd
                    : this.props.data.email
                }`}
                value={this.state.email}
                onChange={this.handleChange("email")}
                margin="normal"
                helperText={
                  <h6>
                    <span style={{ fontSize: 10 }}>Change Email</span>
                  </h6>
                }
                InputProps={{
                  classes: {
                    input: classes.inpurfont
                  }
                }}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              lg={6}
              md={6}
              style={{ textAlign: "center", backgroundColor: "white" }}
              justify="center"
              align="center"
            >
              <TextField
                id="standard-select-currency"
                select
                InputProps={{
                  classes: {
                    input: classes.font
                  }
                }}
                label={
                  <span className={classes.font} style={{ fontSize: 24 }}>
                    Select Course{" "}
                  </span>
                }
                className={classes.textField}
                value={this.state.course}
                onChange={this.handleChange("course")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                InputProps={{
                  classes: {
                    input: classes.inpurfont
                  }
                }}
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
                helperText={
                  <h6>
                    <span style={{ fontSize: 10 }}>Change Course</span>
                  </h6>
                }
                margin="normal"
              >
                {courses.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              lg={6}
              md={6}
              style={{
                backgroundColor: "white",
                backgroundColor: "white",
                textAlign: "center"
              }}
              justify="center"
              align="center"
            >
              <TextField
                id="standard-select-currency"
                select
                InputProps={{
                  classes: {
                    input: classes.font
                  }
                }}
                label={
                  <span
                    className={classes.font}
                    style={{ fontSize: 24, marginBottom: 10 }}
                  >
                    Select Language
                  </span>
                }
                className={classes.textField}
                value={this.state.language}
                onChange={this.handleChange("language")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                variant="outlined"
                InputProps={{
                  classes: {
                    input: classes.inpurfont
                  }
                }}
                helperText={
                  <h6>
                    <span style={{ fontSize: 10 }}>Change Language</span>
                  </h6>
                }
                margin="normal"
              >
                {language.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <List>
            {/* <ListItem button>
            
 <ListItemText className={classes.font} style={{fontSize: 24}}/>  Name
  <ListItemText className={classes.font} style={{fontSize: 24}}/> hii
            </ListItem> */}
            {/* <Divider />
            <ListItem button>
              <ListItemText primary="Default notification ringtone" secondary="Tethys" />
            </ListItem> */}
          </List>
        </Dialog>
      </div>
    );
  }
}

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    data: state.sidebar.sidebarprofile,
    fetched: state.sidebar.fetch
  };
};

//export default withStyles(styles)(UserProfile);
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { changeprofileofuser }
  )
)(UserProfile);
