import React from 'react';
import { connect } from 'react-redux';
import {LogoutUser} from './../../store/actions/authentication'
import Login from '../Login/Login';
import { Route, Switch, Redirect } from "react-router-dom";
class Logout extends React.Component{
     
    componentDidMount(){
        const token = localStorage.getItem("Token");
        this.props.LogoutUser(token);
    }

    render(){

        return(
            <div>
<Redirect path={this.props.location.pathname} to="/login" Component={Login} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
 
    };
  };
  
export default connect( mapStateToProps, {LogoutUser})(Logout);