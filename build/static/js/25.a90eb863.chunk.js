webpackJsonp([25],{1148:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(0),i=a.n(o),c=a(228),m=a(52),u=a(145),d=(a.n(u),a(103)),p=a.n(d),h=a(223),g=(a.n(h),a(440)),f=a.n(g),E=a(441),b=a.n(E),v=a(442),w=a.n(v),y=a(400),N=a.n(y),k=a(220),C=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),S=function(e){function t(e){r(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleChangeNumber=function(e){console.log(e.target.value);var t=e.target.validity.valid?e.target.value:a.state.username;a.setState({username:t})},a.handleChangeName=function(e){console.log(e.target.value);var t=e.target.validity.valid?e.target.value:a.state.firstname;a.setState({firstname:t})},a.handleChange=function(e){console.log(e.target.value),a.setState(n({},e.target.name,e.target.value))},a.handleSubmit=function(e){return e.preventDefault(),setTimeout(function(){a.setState({emptyvalueerr:!1,passwordnotmatcherr:!1,passwordshort:!1,mobilenumbererr:!1})},2500),a.state.username.length<=0||a.state.firstname.length<=0||a.state.password.length<=0?a.setState({emptyvalueerr:!0}):10!==a.state.username.length?(console.log("yes this is working errr"),a.setState({mobilenumbererr:!0})):a.state.password!==a.state.conformpassword?a.setState({passwordnotmatcherr:!0}):a.state.password.length<8?a.setState({passwordshort:!0}):(console.log("every thing is perfect",a.state.username,a.state.firstname,a.state.password),a.props.UserRegistration(a.state.username,a.state.password,a.state.firstname,a.state.code),a.setState({username:"",password:""}),void 0)},a.state={username:"",firstname:"",password:"",mobilenumbererr:!1,conformpassword:"",usernameexisterr:a.props.usernameexist,code:"bodhiai",passwordshort:!1,emptyvalueerr:!1,passwordnotmatcherr:!1,isLoading:!1},a.handleChange=a.handleChange.bind(a),a.handleSubmit=a.handleSubmit.bind(a),a}return l(t,e),C(t,[{key:"validateForm",value:function(){}},{key:"render",value:function(){var e=i.a.createElement(k.i,{id:"tooltip"},i.a.createElement("strong",null,"Enter 10 Digit Numbers Only")),t=i.a.createElement(k.i,{id:"tooltip"},i.a.createElement("strong",null,"Enter Text Only"));return i.a.createElement("div",{className:"authentication"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:" content-center"},i.a.createElement("div",{className:"row clearfix"},i.a.createElement(p.a,{container:!0,spacing:54},i.a.createElement(p.a,{item:!0,xs:12,sm:6,lg:6,md:6,className:"showmarks",style:{textAlign:"left"},justify:"center",align:"center"},i.a.createElement("div",{className:""},i.a.createElement("div",{className:"company_detail"},i.a.createElement("div",{className:"logoin"},i.a.createElement("h4",{className:"logo"},i.a.createElement("img",{src:N.a,alt:"Logo",height:150,width:150,style:{marginTop:40,alignItems:"center"}}),i.a.createElement("strong",null,"BodhiAI")," ")),i.a.createElement("h3",null,"Welcome to ",i.a.createElement("strong",null,"BODHIAI")),i.a.createElement("p",null,"Access your online test , score performance report, weakness , study materials and recent updates like a Game. Get the ultimate simulated experience of the actual test with complete strength and weakness analysis."),i.a.createElement("div",{className:"footer"},i.a.createElement("ul",{className:"social_link list-unstyled"},i.a.createElement("li",null,i.a.createElement("a",{href:"#",title:"LinkedIn"},i.a.createElement("i",{className:"zmdi zmdi-linkedin",style:{padding:10}},i.a.createElement("img",{src:f.a})))),i.a.createElement("li",null,i.a.createElement("a",{href:"#",title:"Facebook"},i.a.createElement("i",{className:"zmdi zmdi-facebook",style:{padding:10}},i.a.createElement("img",{src:b.a})))),i.a.createElement("li",null,i.a.createElement("a",{href:"#",title:"Twitter"},i.a.createElement("i",{className:"zmdi zmdi-twitter",style:{padding:10}},i.a.createElement("img",{src:w.a})))),i.a.createElement("li",null,i.a.createElement("a",{href:"#",title:"Google plus"},i.a.createElement("i",{className:"zmdi zmdi-google-plus",style:{padding:10}},i.a.createElement("img",{src:f.a}))))),i.a.createElement("hr",null),i.a.createElement("ul",{className:"list-unstyled"},i.a.createElement("li",null,i.a.createElement("a",{href:"#",target:"_blank",style:{padding:10}},"Contact Us")),i.a.createElement("li",null,i.a.createElement("a",{href:"#",target:"_blank",style:{padding:10}},"About Us")),i.a.createElement("li",null,i.a.createElement("a",{href:"http://www.bodhiai.in",target:"_blank",style:{padding:10}},"Website"))))))),i.a.createElement(p.a,{item:!0,xs:12,sm:5,lg:5,md:5,className:"showmarks",style:{textAlign:"center"},justify:"center",align:"center"},i.a.createElement("div",{className:" cardlogin"},i.a.createElement("div",{className:"card-plain "},i.a.createElement("div",{className:"header"},i.a.createElement("h5",null,"SIGNUP"),i.a.createElement("hr",null)),i.a.createElement("form",{className:"form"},i.a.createElement(k.f,{placement:"left",overlay:e},i.a.createElement("div",{className:"input-group"},i.a.createElement("input",{type:"text",className:"form-control btn-round",placeholder:"Mobile Number",value:this.state.username,name:"username",pattern:"[0-9]*",onChange:this.handleChangeNumber}),i.a.createElement("span",{className:"input-group-addon btn-round"},i.a.createElement("i",{className:"pe-7s-users"})))),i.a.createElement(k.f,{placement:"left",overlay:t},i.a.createElement("div",{className:"input-group"},i.a.createElement("input",{type:"text",placeholder:"First Name",name:"firstname",className:"form-control btn-round",pattern:"[A-Za-z]*",value:this.state.firstname,onChange:this.handleChangeName}),i.a.createElement("span",{className:"input-group-addon btn-round"},i.a.createElement("i",{className:"pe-7s-add-user",style:{padding:-20}})))),i.a.createElement("div",{className:"input-group "},i.a.createElement("input",{type:"password",className:"form-control btn-round",placeholder:"Password",name:"password",value:this.state.password,onChange:this.handleChange}),i.a.createElement("span",{className:"input-group-addon btn-round"},i.a.createElement("i",{className:"pe-7s-unlock"}))),i.a.createElement("div",{className:"input-group"},i.a.createElement("input",{type:"password",placeholder:"Password Confirmation",name:"conformpassword",className:"form-control btn-round",value:this.state.conformpassword,onChange:this.handleChange}),i.a.createElement("span",{className:"input-group-addon btn-round"},i.a.createElement("i",{className:"pe-7s-unlock",style:{padding:-20}})))),i.a.createElement("div",{className:"footer"},i.a.createElement("a",{className:"btn btn-warning btn-round btn-block btns",onClick:this.handleSubmit}," ",this.props.load?i.a.createElement("div",null," Loading..."):i.a.createElement("div",null,"SIGNUP")),i.a.createElement("a",{href:"/login",className:"btn btn-warning btn-simple btn-round btn-block"},"LOGIN")),i.a.createElement("a",{href:"/forgotpassword",className:"link"},"Forgot Password?"))),this.state.emptyvalueerr?i.a.createElement("h6",{className:"loginerror"},"Value is empty "):"",!1===this.state.emptyvalueerr&&this.state.passwordnotmatcherr?i.a.createElement("h6",{className:"loginerror"}," ","Password and Conform match"):"",this.state.passwordshort?i.a.createElement("h6",{className:"loginerror"}," Password too Short"):"",!1===this.state.emptyvalueerr&&!1===this.state.passwordnotmatcherr&&!1===this.state.passwordshort&&this.state.usernameexisterr?i.a.createElement("h6",{className:"loginerror"}," ","Password and Conform match"):"",this.state.mobilenumbererr?i.a.createElement("h6",{className:"loginerror"},"Mobile Number Should Be 10 Digit"):""),console.log(this.props.load,"this is load"))))),i.a.createElement("div",{id:"particles-js"}))}}]),t}(o.Component),x=function(e){return{error:e.authenticate.error,fetched:e.dashboard.fetcheddd,load:e.authenticate.load,usernameexist:e.authenticate.usernameexist}};t.default=Object(m.b)(x,{UserRegistration:c.c})(S)}});
//# sourceMappingURL=25.a90eb863.chunk.js.map