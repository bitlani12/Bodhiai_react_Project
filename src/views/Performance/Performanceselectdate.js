import React from 'react';
import { fetchMyProgressData} from "../../store/actions/myprogress";
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
class SelectDate extends React.Component  {
    constructor(props){
        super(props);
        this.state = { 
            isOpen: false,
            value:""
         };
      }
      toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
      onvalue = (val) => {
          this.setState({value : val})
          console.log(this.state.value)
      }
      render(props){
          return(
              <div>
                {this.props.date && this.props.date.test_details.length === 0 ? <h1>You Didn't Given Any Test In This Subject</h1>: 
            <select value={this.state.selectValue} onChange={(e) => this.props.dateselected(e)} className="dropdowndate">
            <option value="notselected" disabled selected >-- Select Date --</option>
            {this.props.fetched ?   this.props.date.test_details.map((val ) => <option  value={val[0]}  >{val[1]} </option>) :  "LOading..."}
           </select>}
              </div>
          )
      }
    }

 
const mapStateToProps = state => {
    return {
    fetched : state.progress.fetcheddate,
    
    };
  };
  
  export default  connect(mapStateToProps  ,{fetchMyProgressData}) (SelectDate);