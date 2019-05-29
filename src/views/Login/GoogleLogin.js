import React from 'react';
class GoogleLogin extends React.Component{
    // componentDidMount(){
    //     console.log('this mounted')
    //     gapi.my-signin2.render('g-signin2', {
    //         'scope': 'profile email',
    //         'width': 200,
    //         'height': 50,
    //         'longtitle': true,
    //         'theme': 'dark',
    //         'onsuccess': this.onSignIn,
    //     });
    // }
    //  onSuccess(googleUser) {
    //     console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    //   }
    // onFailure(error) {
    //     console.log(error);
    //   }
    // componentDidMount() {
    //     window.gapi.signin2.render(
    //       GOOGLE_BUTTON_ID,
    //       {
    //         width: 200,
    //         height: 50,
    //         onsuccess: this.onSuccess,
    //       },
    //     );
    //   }
      onSignIn = (googleUser) => {
        // Useful data for your client-side scripts:
        console.log("this is here ")
        var profile = googleUser.getBasicProfile();
       // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
      }
      onSuccess(googleUser) {
        const profile = googleUser.getBasicProfile();
        console.log("Name: " + profile.getName());
      }
    render(){
        return(
            <div>
                 <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
                {/* <div id={GOOGLE_BUTTON_ID}/> */}
            </div>
        )
    }
}
export default GoogleLogin;