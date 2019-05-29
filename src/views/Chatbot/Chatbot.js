// import ChatBot from 'react-simple-chatbot';
//  import React from 'react';
//  import { ThemeProvider } from 'styled-components';
//  import logo from './../../images/logo.png'
//  import axios from 'axios'
// import MessageView from './ChatBotVue/MessageVue';
// import SelectSubjectView from './ChatBotVue/SelectSubjectView';
//  const theme = {
//     background: '#ffffff',
//     fontFamily: 'Helvetica Neue',
//     headerBgColor: '#383e49',
//     headerFontColor: '#fff',
//     headerFontSize: '15px',
//     botBubbleColor: '#ffffff',
//     botFontColor: '#383e49',
//     userBubbleColor: '#383e49',
//     userFontColor: '#ffffff',
//   };

//   const apiUrl = ' https://www.bodhiai.in/api/chatbox/getChat/';
//   const apiUrl2 = "https://www.bodhiai.in/api/chatbox/";
//   const apiUr3 = "" 
// const token =   localStorage.getItem("Token");
// const AuthString = `Token ${token}`
  
// const steps = [
//     {
//         id: '0',
//          message: `Hey ${localStorage.getItem("name")} I am your Chatbot`,
//         component: <Vue1 />,
//         // waitAction: true,
//       },
//       // {
//       //   id: '2',
//       //   options: [
//       //     { value: 1, label: 'Ok', trigger: '4' },
//       //     { value: 2, label: 'More', trigger: '3' },
//       //   //   { value: 3, label: 'Number 3', trigger: '3' },
//       //   ],
//       // },
//       // {
//       //   id: '3',
//       //   message: 'Want to Talk More',
//       //   trigger: '2',
//       // },
//       // {
//       //   id: '4',
//       //   message: 'Awesome! You are a telepath!',
//       //   end: true,
//       // },
// ];
 
// class Chatbot extends React.Component{
//   state={
//     prechat : [],
//     welcomemessage:"",
//     current: "testView"
//   }
//   // componentDidMount(){
//   //   // this is previos messages
//   //   axios.get(apiUrl , {headers : { 'Authorization': AuthString } })
//   //   .then(response => {
//   //     this.setState({prechat: response.data.chatHistory }) 
//   //     response.data.chatHistory === null ? 

//   //      axios.post(apiUrl2 , {user_reply : "null"} ,{headers : { 'Authorization': AuthString } } ) 
//   //      .then(response => {
//   //       this.setState({welcomemessage: response.data.message }) })
//   //       : ""
//   //   })
//   //   .catch(error => {
//   //     console.log(error.message);
//   //   });

//   // }
//   current=(val)=>{
//     console.log(val)
//     this.setState({current: val})
//   }
//     render(){
//       let current = ""
//         return(
//             <ThemeProvider theme={theme}>
//  <ChatBot steps= {steps
//   /* {[
 
//         {id: '1',
//         component: <Vue1 prechat={this.state.prechat} welcomemessage={this.state.welcomemessage} botAvatar={logo} current={current} />,
//         options: [
//          {trigger: "messageviewoptions"}
//  ]
//         // trigger: "messageviewoptions",
//        },
     
//        {id: "messageviewoptions" , 
//        options: [
//          { value: 1, label: 'Cancel', trigger: '1' },
//           { value: 2, label: 'Start', trigger: '1' }],
//           // component : 
//         },

//         {id: "selectsubjectmarksoptions" , options: [
//           { value: 1, label: 'Cancel', trigger: '1' },
//            { value: 2, label: 'Start', trigger: '1' } ]
//         },

//         {id: "testView" , options: [
//           { value: 1, label: 'Cancel', trigger: '1' },
//            { value: 2, label: 'Start Test', trigger: '1' } ]
//         }
// ]}*/
// } floating={true} botAvatar={logo} hideInput={true} hideSubmitButton={true} placeholder="" speechSynthesis={{ enable: true, lang: 'en' }}/> 
// </ThemeProvider>
//         )
//     }
// }

// class Vue1 extends React.Component{
//   state={
//     prechat : [],
//     welcomemessage:"",
    
//   }
//   componentDidMount(){
//     axios.get(apiUrl , {headers : { 'Authorization': AuthString } })
//     .then(response => {
//       this.setState({prechat: response.data.chatHistory })
//       response.data.chatHistory === null ? 
//        axios.post(apiUrl2 , {user_reply : "none"} ,{headers : { 'Authorization': AuthString } } ) 
//        .then(response => {
//         this.setState({welcomemessage: response.data.message }) })
//         : ""
//     })
//     .catch(error => {
//       console.log(error.message);
//     });
//   }
//   componentWillMount(){
   
//     // const self = this;
//     // const { steps } = this.props;
//     // const search = steps.search.value;
//     // const endpoint = encodeURI('https://dbpedia.org');
//     // const query = encodeURI(`
//     //   select * where {
//     //   ?x rdfs:label "${search}"@en .
//     //   ?x rdfs:comment ?comment .
//     //   FILTER (lang(?comment) = 'en')
//     //   } LIMIT 100
//     // `);
//   }
//   render(){
//     return(
//       <div>
//         <img  height="60" width="60" src={logo}/>
//         {console.log(this.state.prechat , "prechat")}
//   {this.state.prechat === null ?  <div style={{marginTop: 10}}> {this.state.welcomemessage} </div>  : 
//   this.state.prechat.map((val)=> <div style={{marginTop: 10}}>
//   {/* {val.length - 1 && this.props.current(val.viewType)} */}
//   {val.viewType === "messageView" ?   <MessageView text={val.text} /> : ""}
//   {val.viewType === "selectSubject" ? <SelectSubjectView text={val.text}/> : ""}
//   {val.viewType === "testView" ? <SelectSubjectView text={val.text}/> : ""}
//   {/* <div>{val.viewType}</div> */}
//    {/* {val.text} */}
//    </div>)} 
//       </div>
//     )
//   }
// }
// export default Chatbot;
