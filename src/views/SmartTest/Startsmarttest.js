import React from 'react';
import{ connect }from 'react-redux';
import { fetchSmartTestData} from "../../store/actions/Onlinetest";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import {   Button } from "mdbreact";
import {NavLink } from "react-router-dom";
import Loading from '../Loading/Loading';
class Startsmarttest extends React.Component {
    constructor(props) {
      super(props);
      this.state = { visible: this.props.showmodal , animation:'slideDown'};
          }
          onstarttest = (testid) => {

          }
      render(){
        const weakAreas =this.props.data.weakAreas && this.props.data.weakAreas.length > 0 ? <div>
        <div  className="texttestcreatedweakareas">Test is created according to your weakAreas </div>
           {this.props.data.weakAreas.map((val , i ) => <div className="weakareasontest"><span className="badge">{i+1}</span> {val} </div>) } </div>:<div className="testnot">Test is not created</div>;
        const testid = this.props.data && this.props.data.test
        return(
          <div>
              <Rodal visible={this.props.showmodal} showCloseButton={false} animation={this.state.animation} closeMaskOnClick={true}>
              {this.props.fetched ? 
              <div >
                 
                    <div className="smarttestweakareas">  {weakAreas} </div>
                          <div className="btnstart">
                          <Button className="btn btn-danger btnmodal" onClick={this.props.onshowmodal}><i className="fa fa-times" aria-hidden="true" ></i></Button>
                        {weakAreas === true ?  "" :
                          <NavLink to={`/onlinetest/${testid}`}> <Button className="btn btn-success btnmodal" onClick= {() => this.onstarttest(testid) }>Start Test</Button>
                          </NavLink> }   
                          </div>
                          </div>
                          : <Loading/>}
                      </Rodal>
      </div>
    )
  }
  }
const mapStateToProps = state => {
    return {
      data: state.onlinetest.smarttest,
      fetched : state.onlinetest.fetchedsmarttest,
     
    };
  };
  
export default  connect(mapStateToProps  ,{fetchSmartTestData  }) (Startsmarttest);