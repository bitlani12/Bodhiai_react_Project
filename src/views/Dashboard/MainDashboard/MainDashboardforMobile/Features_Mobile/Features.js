import React from "react";
import Grid from "@material-ui/core/Grid";
class Features extends React.Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            md={12}
            style={{ textAlign: "left" }}
            className="subjecttext"
            justify="center"
            align="left"
            style={{ backgroundColor: "#383e49" }}
          >
            Features
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Features;
