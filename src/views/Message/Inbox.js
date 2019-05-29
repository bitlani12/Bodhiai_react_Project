import React from 'react';
import {messageinbox} from './../../store/actions/messageaction'
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import Loading from '../Loading/Loading';
import {connect} from 'react-redux'
class Inbox extends React.Component{
    componentDidMount(){
        this.props.messageinbox()
    }
    render(){
        return(
            <Grid  container  >
                {this.props.fetched === false ? _.isEmpty(this.props.data.subject_ranking) === true ?  <Grid item xs={12} sm={12} lg={12} md={12} className="showmarks" style={{textAlign: "center"}}><h5>No Message For You</h5> </Grid> : "some announcement for You"  : <Loading/>}
                </Grid>    
        )
    }
}
const mapStateToProps = state => {
    return {
      data: state.message.announcements,
      fetched : state.message.load
    };
  };
export default connect(mapStateToProps,{ messageinbox/*getstudentprofile*/ })(Inbox);