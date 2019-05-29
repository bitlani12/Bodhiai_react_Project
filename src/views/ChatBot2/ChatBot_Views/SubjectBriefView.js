import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import LinearProgress from '@material-ui/core/LinearProgress';
import Pagination from './Pagination/Pagination';
const AutoPlaySwipeableViews = SwipeableViews
const styles = {
  root: {
    padding: '10px 40px 10px 10px',
    backgroundColor: "white",
    borderTop: "solid #e4e4e4 3px",
    borderLeft: "solid #e4e4e4 3px",
    borderBottom: "solid #e4e4e4 3px"
  },
  slideContainer: {
    padding: '0 0px',
  },
  slide: {
    // paddingRight: 4,
    marginRight: 10,
    // paddingLeft:4,
    minHeight: 100,
    color: '#fff',
    // backgroundColor: "#d6d6d6",
    borderRadius:10
    // height:200
  },
  slide1: {
    // backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
  img: {
    // height: 400,
    display: 'block',
    overflow: 'hidden',
    width: '100%',
  },
}

class SubjectBriefView extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = this.props.product && this.props.product.all_images.length;
    let productimage =this.props.product && this.props.product.all_images
    const useStyles = {
      root: {
       // flexGrow: 1,
       barColorPrimary: {
        backgroundColor: '#00695c',
      },
      },
    };
    return (
      <div  style={{}}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
          style={styles.root} slideStyle={styles.slideContainer}
         > 
         {this.props.data.data.map((val)=> (
            <div key={val} style={Object.assign({}, styles.slide, styles.slide1)}> 
           <div className="subjectbriefsubject">{val.subject}</div> 
            <div className="subjectbriefviewdata">
            { val.chapters.map((vale)=> {
              return  <div> 
                   <div style={{color: "black" , marginBottom: 5}}>{vale.name} </div>
                   <div style={{marginBottom: 10}}>
                  <div className="questionssolvedbrief"> {vale.solved}/{vale.overall_questions} </div>
                      <div>
                      <ColorLinearProgress variant="determinate" value={vale.solved} />
                     </div>
                </div>
                </div> 
                })}
              </div>
              
             </div>
             
          ))}
       
        </AutoPlaySwipeableViews>
        <Pagination dots={this.props.data.data.length} index={activeStep} onChangeIndex={this.handleStepChange} />
        <div style={{textAlign: "center" , marginTop: -5}}>{"<"}----- Swipe -----></div> 
      </div>

    );
  }
}

SubjectBriefView.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true }) (SubjectBriefView)

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: '#b5bfbe',
  },
  barColorPrimary: {
    backgroundColor: '#070c0c',
  },
})(LinearProgress);