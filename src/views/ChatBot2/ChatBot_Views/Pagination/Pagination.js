import React from "react";
import PropTypes from "prop-types";
import PaginationDot from "./PaginationDot";

const styles = {
  root: {
    position: "relative",
    textAlign: "center",
    padding: 5

    // bottom: 8,
    // right: 8,
    // display: 'flex',
    // flexDirection: 'row',
  }
};

class Pagination extends React.Component {
  handleClick = (event, index) => {
    this.props.onChangeIndex(index);
  };
  render() {
    const { index, dots } = this.props;
    const children = [];
    <div>></div>;
    for (let i = 0; i < dots; i += 1) {
      children.push(
        //     <MobileStepper
        //     steps={maxSteps}
        //     position="static"
        //     variant="text"
        //     activeStep={i === index}
        //     nextButton={
        //       <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
        //         Next
        //         {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        //       </Button>
        //     }
        //     backButton={
        //       <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
        //         {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        //         Back
        //       </Button>
        //     }
        //   />
        <PaginationDot
          key={i}
          index={i}
          active={i === index}
          onClick={this.handleClick}
        />
      );
    }

    return <div style={styles.root}>{children}</div>;
  }
}

Pagination.propTypes = {
  dots: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onChangeIndex: PropTypes.func.isRequired
};

export default Pagination;
