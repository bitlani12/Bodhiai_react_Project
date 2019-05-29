import React from 'react';
import { fetchMyProgressData} from "../../store/actions/myprogress";
import { connect } from 'react-redux';

class SelectDate extends React.Component  {
    constructor(props){
        super(props);
        this.state = { 
          optionshow:false
          
         };
      }
      render(){
          return(
              <div>hii</div>
          )
      }
    }

    
const mapStateToProps = state => {
    return {
      data: state.progress.progress,
      fetched : state.onlinetest.fetchedonlinetest
    };
  };
  
  export default compose(  withStyles(styles) , connect(mapStateToProps  ,{fetchMyProgressData}) ) (SelectDate);