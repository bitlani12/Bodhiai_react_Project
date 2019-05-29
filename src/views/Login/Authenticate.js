import React from 'react';
export default function (ComposedComponent){
    class Authenticate extends React.Component{
        render(){
            return (
                <ComposedComponent {...this.props}/>
            )
        }
    }
}