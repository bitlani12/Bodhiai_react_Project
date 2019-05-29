import React from 'react';
import './UserGuidance.css';
import Modal from 'react-responsive-modal';
import eye from './../../../../images/eye.PNG';
import Grid from '@material-ui/core/Grid';  
import subjectss from './../../../../images/subjectss.PNG'
;class UserGuidance extends React.Component{
    constructor(props) {
        super(props);
        this.state = { visible: true , animation:'slideDown' , showimage: false};
    }
    show() {
        this.setState({ visible: true });
    }
    hide() {
        this.setState({ visible: false });
    }
    render(){
        return(
            <div>
                   <Modal open={this.state.visible} closeOnOverlayClick={true} >
               <h5>   Some Guidelines </h5> 
                   <div >
                <div class="containerss">
  <div class="object">
    <img src="https://res.cloudinary.com/pamcy/image/upload/v1543992134/coding/sad_dog.jpg" alt="" class="object__img"/>
    {/* <div class="object__intro">
      <h1 class="object__intro-title">CSS Only Trick</h1>
      <p class="object__intro-text">The arrow change its body length while still always point to a certain position, even you resize the widow.</p>
    </div> */}
  </div>
  <Grid  container>
  <Grid item xs={12} sm={12} lg={12} md={12}>
 
  <img src={eye} height={20} width={20} style={{float: "right"}}/>
  <div class="arrowssss">
    <div class="arrow__body"></div>
  </div>
  </Grid>
  </Grid>
</div></div> <div  className="textforguidline"> <h6>You can See profile and Challenge </h6> </div>


 <Grid  container>
  <Grid item xs={12} sm={12} lg={12} md={12}  >
<img src={subjectss} height={60} width={60} style={{float: "right" , borderRadius: 10}}/>
  <div class="arrowssss">
    <div class="arrow__body2"></div>
  </div>
  <div  className="textforguidline"> <h6 >Click and Give Test According to SubjectWise </h6></div>

</Grid>
</Grid> 
</Modal>
            </div>
        )
    }
}
export default UserGuidance;