import React from 'react';
import { fetchMainDashboardTestRank , fetchMainDashboardTestRankProfile , pagination_rank_onclickall , fetching_maindashboard_loadmore , fetching_maindashboard_loadmoreup} from "../../../../../store/actions/maindashboardaction";
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';  
// import './MainDashboardTestRank.css';
import ReactDOM from "react-dom";
import eye from './../../../../../images/eye.PNG'
import user from './../../../../../images/user.png'
import Card from '@material-ui/core/Card';
import MainDashboardTestRankSubject from './../../MainDashboardTestRankSubject';
import ShowProfile from './../../Profile/ShowProfile'
import { Button } from 'react-bootstrap';
import Loading from '../../../../Loading/Loading';
import _ from 'lodash';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios'
import { Directions } from 'material-ui-icons';
class MainDashboardTestRankMobile extends React.Component{
    constructor(props) {
        super(props);
        this.state = { items:[], index: 0 ,subject:"" ,  it: true , open: false , fetch: false , scrolluser : "" , showprofile: false , username : "" , value: '' , showItems: 3 , subjectlength : 0 , snackbar: false ,  Transition: null, rankindex: 0 , rankdirection: "next" ,  rankitems: [], hasMore: false,loadmoredownbuttononallrank: false, seeallbtn: false,
        loadingState: false ,itemss:[] ,};
        this._nodes = new Map();
       }

      displayItems() {
        var items = [];
        for (var i = 0; i < this.state.items; i++) {
          items.push(<li key={i}>Item {i}</li>);
        }
        return items;
      }

             handleShow = (i) => {
         
              console.log(i,'1111')
              this.setState({index: i, it: false});
              const node = this._nodes.get(i);
              console.log(this._nodes);
              if (node) {
              ReactDOM.findDOMNode(node).scrollIntoView({block: 'center', behavior: 'smooth'});
              }
              }
             close = () => {
                 this.setState({open : false , showprofile: false})
             }
             onclicksubject = (subject) => {
             this.setState({subject: subject , scrolluser: ""})
             console.log(subject , this.state.subject , "this is subject")
             this.props.fetchMainDashboardTestRank(subject )
             // this.state.rankindex , this.state.rankdirection
             }
             showsubject=()=>{
                 this.setState({open: true})
                 console.log(this.state.open)
             }
             showprofile=(username)=>{
                 this.setState({showprofile : true , username: username})
             this.props.fetchMainDashboardTestRankProfile(username , this.state.subject)
             }
             handleChangeOption = event => {
                 console.log(event.target.value  )
             this.setState({ value: event.target.value , showItems: 3 });
             this.onclicksubject(event.target.value)
             };
         handleshowall=()=>{
             console.log(this.state.subject)
            //  setTimeout(()=>{ return this.handleShow(this.state.scrolluser)} , 1000) 
             
             this.props.pagination_rank_onclickall(this.state.subject , this.state.rankindex , this.state.rankdirection).then(
             this.setState({
                showItems: this.props.data.subject_ranking , loadmoredownbuttononallrank: true
            },console.log(this.props.data.subject_ranking , "this is showitems")
            ),
             console.log(this.state.showItems , "this is showitems"))
             }
             isEmpty(obj){
                 return (Object.getOwnPropertyNames(obj).length === 0);
             }
             showsnackbar=( )=>{
                 console.log("this is snavckbar")
                 this.setState({snackbar: !this.state.snackbar})
             }
             handleCloseSnackBar=(props)=>{
                  this.setState({snackbar: false ,  })
                  this.TransitionDown()
              }
              onloadmoreranksup=(rank)=>{
                this.props.fetching_maindashboard_loadmoreup(this.state.subject , rank , "prev")
console.log(rank)
              }
              onloadmoreranks=(rank)=>{
                  this.setState({rankitems: ""})
                  this.props.fetching_maindashboard_loadmore(this.state.subject , rank , "next")
              }
             render(){
                this.state.subject != "" ? this.props.fetchedrank === false ?  this.props.fetchMainDashboardTestRank(this.state.subject) : "" : "";
                // this.setState({rankitems: ""})
                 let ranklastindex , rankstartindex
        
            return(
                <div>
               <Grid  container>
               {//this.props.data.subject_ranking && console.log(this.props.data.subject_ranking , "----------------------")
               } 
                                <Grid item xs={12} sm={6} lg={8} md={6}  style={{textAlign: "left"}} className="subjecttext" justify="center" align="left" style={{backgroundColor: "#383e49"}}>
                               Test Rank
                                </Grid>
                                <Grid item xs={9} sm={3} lg={2} md={3}  style={{textAlign: "left"}}   align="left" style={{height:"30" }}>
                              <div style={{width: "100%"}}> <MainDashboardTestRankSubject value={this.state.value} handleChangeOption={this.handleChangeOption} subjects={this.props.subjects} fetched={this.props.subjectfetched} onclicksubject={this.onclicksubject} /> </div> 
                                </Grid>
                                <Grid item xs={3} sm={3} lg={2} md={3}  style={{textAlign: "left"}}   align="left" style={{ height:"35px"}}>
                                <div className=" " style={{ color:"black" , backgroundColor: "#d8d8d8" , fontWeight: 600 , width: "100%" , padding:"7px 7px" , borderLeft: "solid black 1px"}} onClick={() =>{this.handleshowall()}}>See All</div>
                                </Grid>
                              {this.props.subjects.subjects && this.state.subject==="" ? this.setState({subject :this.props.subjects.subjects[0][0] }) : "" }
                                <Grid item xs={12} sm={12} lg={12} md={12}  style={{textAlign: "center"}} className="subjecttext" justify="center" align="center" style={{backgroundColor: "white" , height: 35}}>
                                {this.props.subjectfetched === false ?  <div><Loading /></div> : /*because of  this console it is working */console.log(_.isEmpty(this.props.data.subject_ranking)  ,"yes this is here for checking") + _.isEmpty(this.props.data.subject_ranking) ?  <div>No Record </div> : 
                           
                              this.props.load ?    <div><Loading /></div>:
                             
                               <div>             
                                   
                                 <div className="scrollbars tableFixHead" style={{backgroundColor: "white", overflowY:"auto" }}>
                               
                           <table className="ranktable table-hover mybox table-hover" style={{backgroundColor: "white" , }}>
                     
                                <thead className="tableborderbottom">
                                    <tr>
                                        <th style={{fontWeight: 600 , color: "black" , }}> <Grid   style={{textAlign: "center" , borderBottom: "solid #f3ececd1 2px", padding: 5}}  justify="center" align="center" >Rank    </Grid></th>
                                        <th style={{fontWeight: 600 , color: "black" , }}> <Grid   style={{textAlign: "center" , borderBottom: "solid #f3ececd1 2px" , padding: 5}}  justify="center" align="center" >Name    </Grid></th>
                                        <th style={{fontWeight: 600 , color: "black" , }}> <Grid   style={{textAlign: "center" , borderBottom: "solid #f3ececd1 2px" , padding: 5}}  justify="center" align="center" >Attempted    </Grid></th>
                                        <th style={{fontWeight: 600 , color: "black" , }}> <Grid   style={{textAlign: "center" , borderBottom: "solid #f3ececd1 2px" , padding: 5}}  justify="center" align="center" >Accuracy    </Grid></th>
                                        <th style={{fontWeight: 600 , color: "black" , }}> <Grid   style={{textAlign: "center" , borderBottom: "solid #f3ececd1 2px" , padding: 5}}  justify="center" align="center" >Profile    </Grid></th>
                                    </tr>
                                </thead>   
                                {// this is for load more up btn 

                                }
                               
                               
                               
                                    {_.isEmpty(this.props.data.subject_ranking)? <Grid  container > <Grid item xs={12} sm={12} lg={12} md={12} className="takeatleastonetestaccuracy" style={{textAlign: "center"}} justify="center" align="center">No Data Found !</Grid> </Grid>  : _.isEmpty(this.props.data.subject_ranking) === false ?   this.props.data.subject_ranking.map((val , i) =>
                               
                                 <tbody>
                                     {//
                                     }
                              {// this is for up load more buttton
                                  i===0 ?  <tr>
                                      { console.log(rankstartindex = val.rank)}
                                <td colspan="5" style={{textAlign: "center"}}>{this.props.data.subject_ranking && this.props.data.subject_ranking.length > 3 &&this.state.loadmoredownbuttononallrank ? <button className="loadmorebtn" onClick={()=>this.onloadmoreranksup(rankstartindex)}>Load more</button>: ""}</td>
                                </tr> : ""}
                            {/*    <tr style={{textAlign: "center"}}>
                                    <td>
                                    <div style={{backgroundColor: "blue" , textAlign: "center" }}>
                                    hii
                                    {
                                    }  
                                    </div>
                                    </td>
                                    </tr> */}
                                          
                                        
                                    <tr className={localStorage.getItem('username')===val.username ? "found" : "oftable"} key={i} /*ref={(element) => this._nodes.set(i, element)}*/  /*onScroll={}*/ ref="myscroll" style={{backgroundColor: ""}} >
                                         
                                        {localStorage.getItem('username')===val.username ? this.state.scrolluser === ""  ? this.setState({scrolluser: val.rank , it: false}) : "" : ""}
                                        <td>
                                        
                                            <span class="badge rankbadge"><span>{val.rank}</span></span>
                                        </td>
                                        <td class="project-title">
                                        <div style={{display: "inline-block" , }}>
                                        
                                     {val.photo === null || val.photo=== ""  || val.photo=== "null" ? <img src={user} className="rounded-circle" height={40} width={40} style={{backgroundColor: "gray"}}/> :  <img src={val.photo} className="rounded-circle" height={45} width={45} alt="no"/> }
                                          <a href="#" style={{fontWeight: 500 , color: "black" , }}>{val.name}</a>
                                            </div>
                                        </td>
                                            <td>
                                            <Grid   style={{textAlign: "center"}}  justify="center" align="center" >
                                               {val.questionAttempted}
                                               </Grid>
                                            </td>
                                        <td>
                                            <div>
                                            <div className="progress progres">
                                                <div className="progress-bar l-dark" role="progressbar" aria-valuenow={val.accuracy} aria-valuemin="0" aria-valuemax="100" style={{width: `${val.accuracy}%`}}></div>
                                            </div>
                                            <Grid   style={{textAlign: "center"}}  justify="center" align="center" className="acc">
                                            <small > {Math.round(val.accuracy * 100) / 100}%</small>
                                            </Grid>
                                            </div>
                                        </td>
                                       
                                        <td class="project-actions">
                                        <Grid   style={{textAlign: "center"}}  justify="center" align="center" style={{backgroundColor: "white" , padding:"5px" , margin: "0% 10% 0% 10%"}}>
                                           <img src={eye} className="eyeimg" onClick={()=>this.showprofile(val.username )}/>
                                           </Grid>
                                        </td>
                                        {console.log(this.props.data.subject_ranking.length - 1 === i  , i ,  "this is checking")}
                                    {  (this.props.data.subject_ranking.length - 1  === i  ? console.log(ranklastindex= val.rank)  : "")}
                                    </tr>
                               
                                  
                                    </tbody>
                                   
                                     ) : <Grid   style={{textAlign: "center"}}  justify="center" align="center" className="acc">No Record Found!</Grid>}     
                                      
                            </table> 
                            {this.props.data.subject_ranking && this.props.data.subject_ranking.length > 3 &&this.state.loadmoredownbuttononallrank ? <Grid   style={{textAlign: "center"}}  justify="center" align="center" className="acc"><button className="loadmorebtn" onClick={()=>this.onloadmoreranks(ranklastindex)}>Load more</button></Grid> : ""}
                            {/* <button>load more</button>  */}
                                    {this.props.subjects.subjects && this.state.it ?      <Callonce handleShow={this.handleShow} scrolluser={this.state.scrolluser} hi="hi"/> : "" }
                                    {this.state.showprofile ? <ShowProfile open={this.state.showprofile}   close={this.close}  username={this.state.username} showsnackbar={this.showsnackbar} TransitionDown={this.TransitionDown} />: ""}
                        </div> 
                        </div>   }
                     

                        </Grid>
                        </Grid>
                         <Snackbar
                                    anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                    }}
                                     
                                    open={this.state.snackbar}
                                    autoHideDuration={4000}
                                    onClose={this.showsnackbar}
                                    ContentProps={{
                                    'aria-describedby': 'message-id',
                                    }}
                                    message={<span id="message-id"><h5>Challenge Sent Successful </h5></span>}
                                    action={[
                                 <Button key="undo" color="secondary" size="small" onClick={this.showsnackbar}>
                                        View
                                     </Button>,
                                    <IconButton
                                        key="close"
                                        aria-label="Close"
                                        color="inherit"
                                        // className={classes.close}
                                        onClick={this.showsnackbar}
                                    >
                                        <CloseIcon />
                                    </IconButton>,
                                    ]}
                                /> 
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
      data: state.maindashboard.testrank,
      fetchedrank : state.maindashboard.fetchedrank,
      subjects: state.maindashboard.subjects,
      subjectfetched : state.maindashboard.fetched,
     load: state.maindashboard.load
    };
  };
  
  function Callonce(props  ) {
   // this.props.handleShow(scrolluser)
   return(
       console.log("hiiiiii"),
   ()=> props.handleShow(props.scrolluser)
   )
    
    }


  export default connect(mapStateToProps , { fetchMainDashboardTestRank , fetchMainDashboardTestRankProfile , pagination_rank_onclickall,fetching_maindashboard_loadmore , fetching_maindashboard_loadmoreup})(MainDashboardTestRankMobile);