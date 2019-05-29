import React, { Component } from "react";
import Grid from '@material-ui/core/Grid'
// import React from "react";
import './Card.css';
import user from './../../images/user.png'
const Icon = 12;


export const Cards = (props) => {
    let color = ''; 
    let icon;
    switch(props.title){
        case "Accuracy": color = "#F0669A"; icon = <i class="fonticon  pe-7s-timer "></i>; break;
        case "Skipped": color = "#4CA6FA";icon = <i class="fonticon pe-7s-right-arrow"></i>; break;
        case "Right": color = "#FF9831";icon = <i class="fonticon pe-7s-check"></i>; break;
        case "Wrong": color = "#1FC31F";icon = <i class="fonticon pe-7s-close-circle"></i>; break;
        default: color="red";
    }
    let style={
       backgroundImage:[`linear-gradient(to right, ${props.color1}, ${props.color2})`],
        // backgroundColor: color,
        marginRight: 10
    }
    return  (   <div class="card data" style={style}>
                    <div class="card-body">
                    <Grid  container >
                       <Grid item xs={6} sm={6} lg={6} md={6} className="showmarks" style={{textAlign: "center" , paddingTop: 10}} justify="center" align="center">
                           <h5 class="card-title  col-9">{props.value}</h5>
                       </Grid>
                       <Grid item xs={6} sm={6} lg={6} md={6} className="showmarks" style={{textAlign: "right" ,paddingTop: 15 }} justify="center" align="center">
                           <span class="col-3" >{icon}</span>
                       </Grid>
                       <Grid item xs={6} sm={6} lg={6} md={6} className="showmarks" style={{textAlign: "center" , }} justify="center" align="center">
                           <div class="row"><span class="col-6">{props.title}</span></div>
                       </Grid>
                       </Grid>
                        {/* <div class="row">
                        <h5 class="card-title  col-9">{props.value}</h5>
                        <span class="col-3"><img src={user} height={30} width={30}/></span>
                        </div>
                        <div class="row"><span class="col-6">{props.title}</span></div> */}
                    </div> 
                 </div>
            )
} 

export const Cardshowdata = (props) => {
    let values = [];
    if(props.arr[0]){
        values = props.arr[0];
    }else {
        values = 0;
    }
    return (
        <div>
         <Grid  container style={{maxWidth: 1400 , margin: "auto"}}>
                    <Grid item xs={12} sm={6} lg={3} md={3} className="showmarks" style={{textAlign: "center" , }} justify="center" align="center">
                       <Cards  title="Accuracy" color1 = "#4CA6FA" color2= "rgb(30, 104, 202)" value={props.arr[0]}/> 
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={3} className="showmarks" style={{textAlign: "center"}} justify="center" align="center">
                        <Cards   title="Skipped" color1 = "#FDD835" color2="#FBC02D" value={props.arr[1]}/> 
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={3} className="showmarks" style={{textAlign: "center"}} justify="center" align="center">
                       <Cards    title="Right" color1 = "#1FC31F" color2="#388E3C" value={props.arr[2]}/>  
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={3} className="showmarks" style={{textAlign: "center"}} justify="center" align="center">
                       <Cards title="Wrong" color1 = "#F44336" color2="#E53935"value={props.arr[3]}/> 
                    </Grid>
        
        </Grid>
      
        </div>
    )
}


