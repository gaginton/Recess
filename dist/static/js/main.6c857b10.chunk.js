(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{229:function(e,t,a){e.exports=a(446)},234:function(e,t,a){},446:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(49),i=a.n(l),c=(a(234),a(25)),s=a(26),m=a(28),o=a(27),u=a(29),d=a(8),h=a(42),p=a(10),E=Object(p.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("ul",{className:"right furtherRight"},r.a.createElement("li",null,r.a.createElement(d.c,{to:"/create"},"New Game")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/",className:"btn btn-floating pink lighten-1"},e.profile.initials)))}),f=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(d.c,{to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/signin"},"Login")))},g=Object(p.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(E,{profile:a}):r.a.createElement(f,null);return r.a.createElement("nav",{className:"nav-wrapper black darken-3 mr-auto",fixed:"top"},r.a.createElement("div",{className:"container"},r.a.createElement(d.b,{to:"/",className:"brand-logo"},"Recess"),n))}),b=a(43),N=a.n(b),v=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title text-darken-3 bold"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user," "),r.a.createElement("span",{className:"grey-text text-darken-3"},e.content),r.a.createElement("div",{className:"grey-text small-text note-date"},N()(e.time.toDate()).fromNow()))})))))},y=a(18),w=function(e){var t=e.game;return r.a.createElement("div",{className:"card z-depth-0 game-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("div",{className:"card-title bold"},t.title.substring(0,32)),r.a.createElement("div",null,"@",t.location.substring(0,32)),r.a.createElement("div",null,"Start: ",N()(t.dateTime.toDate()).calendar()),r.a.createElement("div",{className:"grey-text small-text"},"Host: ",t.authorFirstName," ",t.authorLastName," ")))},C=a(221),O=a.n(C),j=function(){return r.a.createElement("div",{className:"card z-depth-0 list-container opacity"},r.a.createElement("div",{className:"filler"}),r.a.createElement(O.a,{height:100,width:100,className:"mar-auto"},r.a.createElement("img",{src:"http://clipart-library.com/images/6iy5nBAMT.png",alt:""})))},x=function(e){var t=e.games,a=new Date;return r.a.createElement("div",{className:"game-list section"},r.a.createElement("div",{className:"white-text"},"Available Games"),t&&t.filter(function(e){return a<=e.dateTime.toDate()}).map(function(e){return console.log(e),r.a.createElement(d.b,{to:"/game/"+e.id,key:e.id},r.a.createElement("div",{className:"row pad-0"},r.a.createElement("div",{className:"col s3 m3 pad-0"},r.a.createElement(j,null)),r.a.createElement("div",{className:"col s9 m9 opacity pad-0"},r.a.createElement(w,{game:Object(y.a)({},e,{id:e.id})}))))}),r.a.createElement("div",{className:"white-text"},"Previous Games"),t&&t.filter(function(e){return a>=e.dateTime.toDate()}).map(function(e){return r.a.createElement(d.b,{to:"/game/"+e.id,key:e.id},r.a.createElement("div",{className:"row pad-0"},r.a.createElement("div",{className:"col s3 m3 pad-0"},r.a.createElement(j,null)),r.a.createElement("div",{className:"col s9 m9 opacity pad-0"},r.a.createElement(w,{game:Object(y.a)({},e,{id:e.id})}))))}))},S=a(30),F=a(17),R=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.games,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 opacity"},r.a.createElement(x,{games:t})),r.a.createElement("div",{className:"col s12 opacity"},r.a.createElement(v,{notifications:n})))):r.a.createElement(h.a,{to:"/signin"})}}]),t}(n.Component),A=Object(F.d)(Object(p.b)(function(e){return{games:e.firestore.ordered.games,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications,messages:e.firestore.ordered.chatroom}}),Object(S.firestoreConnect)([{collection:"games",orderBy:["dateTime","asc"]},{collection:"notifications",limit:20,orderBy:["time","desc"]}]))(R),k=Object(F.d)(Object(p.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.games;return{game:n?n[a]:null,auth:e.firebase.auth}},function(e){return{joinGame:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),l=a().firebase.profile,i="".concat(l.firstName," ").concat(l.lastName),c=e.players;console.log("game ",e.dateTime.toDate());for(var s=0;s<c.length;s++){if(c[s]===i)return;if(""===c[s]){c[s]=i,e.players=c;break}}var m=window.location.pathname.split("/")[window.location.pathname.split("/").length-1];r.collection("games").doc(m).update(Object(y.a)({},e)).then(function(){t({type:"JOINED_GAME",game:e})}).catch(function(e){t({type:"JOIN_GAME_ERROR",err:e})})}}(t))},leaveGame:function(t){return e(function(e){return function(t,a,n){n.getFirebase;for(var r=(0,n.getFirestore)(),l=a().firebase.profile,i="".concat(l.firstName," ").concat(l.lastName),c=e.players,s=0;s<c.length;s++)if(c[s]===i){c.splice(s,1),c.push(""),e.players=c;break}var m=window.location.pathname.split("/")[window.location.pathname.split("/").length-1];r.collection("games").doc(m).update(Object(y.a)({},e)).then(function(){t({type:"LEFT_GAME",game:e})}).catch(function(e){t({type:"LEFT_GAME_ERROR",err:e})})}}(t))}}}),Object(S.firestoreConnect)([{collection:"games"}]))(function(e){var t=e.game;if(!e.auth.uid)return r.a.createElement(h.a,{to:"/signin"});if(t){var a=t.players?r.a.createElement("p",null,"Current players:"," ",t.players.filter(function(e){return e.replace(/(\r\n|\n|\r)/gm,"")}).join(", ")," "):null,n=t.maxLength?r.a.createElement("p",null,"Max game length: ",t.maxLength," minutes"):null,l=t.equipment?r.a.createElement("p",null,"Players must bring: ",t.equipment):null,i=t.minPlayers?t.minPlayers:1,c=t.maxPlayers?t.maxPlayers:80;return r.a.createElement("div",{className:"container section"},r.a.createElement("div",{className:"game-details card z-depth-0 opacity"},r.a.createElement("div",{className:"card-cont ent"},r.a.createElement("div",{className:"card-title bold"},t.title),r.a.createElement("div",{className:"card-title"},t.location," || ",N()(t.dateTime.toDate()).calendar()),r.a.createElement("p",null,t.content),r.a.createElement("p",null,"Total # of Players: ",i," - ",c," "),a," ",n," ",l),r.a.createElement("div",{className:"gameActionButtonContainer"},r.a.createElement("span",{className:"input-field"},r.a.createElement("button",{className:"btn blue z-depth-0",onClick:function(){return e.joinGame(t)}},"JOIN")),r.a.createElement("span",{className:"input-field leaveGameButton"},r.a.createElement("button",{className:"btn blue z-depth-0",onClick:function(){return e.leaveGame(t)}},"LEAVE"))),r.a.createElement("div",{className:"spotim container"},r.a.createElement("div",{className:"bold"},"Comments Powered by Spot.IM"),r.a.createElement("div",{"data-spotim-module":"recirculation","data-spot-id":"sp_nmNmWmFj"}),r.a.createElement("script",{async:!0,src:"https://recirculation.spot.im/spot/sp_nmNmWmFj"}),r.a.createElement("script",{async:!0,src:"https://launcher.spot.im/spot/sp_nmNmWmFj","data-spotim-module":"spotim-launcher","data-post-url":window.location.href,"data-article-tags":"Game","data-post-id":window.location.pathname.split("/")[window.location.pathname.split("/").length-1]})),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by: ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,N()(t.createdAt.toDate()).calendar()))))}return r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading Game..."))}),P=a(35),G=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(P.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(h.a,{to:"/"}):r.a.createElement("div",{className:"container opacity"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),T=Object(p.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a}}})(G),D=a(92),I=(a(209),a(397),a(225)),_=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",confirmPass:"",firstName:"",lastName:"",bday:"",phoneNo:""},a.handleChange=function(e){a.setState(Object(P.a)({},e.target.id,e.target.value))},a.handleDateChange=function(e){a.setState({bday:e})},a.handleSubmit=function(e){e.preventDefault(),""!==a.state.email&&""!==a.state.password&&""!==a.state.firstName&&""!==a.state.lastName&&""!==a.state.bday&&a.state.password===a.state.confirmPass&&a.props.signUp(a.state)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.authError;return t.auth.uid?r.a.createElement(h.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"small-text"},"During the current testing period, there is no authentication of values.",r.a.createElement("br",null),"You must remember email and password to log back in.",r.a.createElement("br",null),"If you would like to receive notifications, use your real email and phone number."),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange}))),r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange}))),r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("div",{className:"input-field"},r.a.createElement(I.a,{placeholder:"Enter phone number",value:this.state.phone,onChange:function(t){return e.setState({phone:t})}})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange}))),r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"confirmPass"},"Confirm Password"),r.a.createElement("input",{type:"password",id:"confirmPass",onChange:this.handleChange})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("div",{className:"input-field"},r.a.createElement(D.a,{selected:this.state.bday,onChange:this.handleDateChange,maxDate:new Date,placeholderText:"Birthday",showMonthDropdown:!0,showYearDropdown:!0})))),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null))))}}]),t}(n.Component),L=Object(p.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,l=n.getFirestore,i=r(),c=l();i.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return c.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,bday:e.bday,initials:e.firstName[0]+e.lastName[0]})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}}(t))}}})(_),M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:"",location:"",address:"",dateTime:"",minPlayers:1,maxPlayers:80,noTeams:1,maxLength:"",minAge:"",players:[],equipment:"",isCoop:"",category:""},a.handleChange=function(e){a.setState(Object(P.a)({},e.target.id,e.target.value))},a.handleDateChange=function(e){a.setState({dateTime:e})},a.handleSubmit=function(e){if(e.preventDefault(),""===a.state.title||""===a.state.content||""===a.state.location||""===a.state.dateTime)return a.gameError="Mandatory fields missing!";a.props.createGame(a.state),a.props.history.push("/")},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h4",{className:"bold"},"Create Public Game"),r.a.createElement("div",{className:"grey-text text-darken-3"},"* Title, description, location and start date/time are neccessary fields. ",r.a.createElement("br",null),"All other fields may be left blank, if not applicable."),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"* Game Title (Ex: Football, Tag, DnD, Beer Pong)"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"* Game Description (Ex: Full court, Shirts vs Skins, Beginners Welcome, 10 cup)"),r.a.createElement("textarea",{className:"materialize-textarea",id:"content",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"location"},"* Location (Ex: Central Park, XBox Live, Mobile)"),r.a.createElement("input",{type:"text",id:"location",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"address"},"Address"),r.a.createElement("input",{type:"text",id:"address",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement(D.a,{selected:this.state.dateTime?new Date(this.state.dateTime):null,onChange:this.handleDateChange,minDate:new Date,placeholderText:"* Start Date and Time",showTimeInput:!0,timeInputLabel:"Time:",dateFormat:"MM/dd/yyyy h:mm aa"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("div",{className:"grey-text text-darken-3"},"Team and Roster Layout"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"minPlayers"},"Minimum Players"),r.a.createElement("input",{type:"number",id:"minPlayers",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"maxPlayers"},"Maximum Players"),r.a.createElement("input",{type:"number",id:"maxPlayers",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"noTeams"},"Number of Teams"),r.a.createElement("input",{type:"number",id:"noTeams",onChange:this.handleChange}))),r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("div",{className:"grey-text text-darken-3"},"Additional Fields ",r.a.createElement("br",null)),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"maxLength"},"Maximum Length of Game (Minutes)"),r.a.createElement("input",{type:"number",id:"maxLength",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"minAge"},"Minimum Age of Players"),r.a.createElement("input",{type:"number",id:"minAge",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"equipment"},"Please bring to game (Equipment, fees, etc.)"),r.a.createElement("input",{type:"text",id:"equipment",onChange:this.handleChange})))),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create"),r.a.createElement("div",{className:"red-text center"},null)))):r.a.createElement(h.a,{to:"/signin"})}}]),t}(n.Component),U=Object(p.b)(function(e){return{auth:e.firebase.auth}},function(e){return{createGame:function(t){return e(function(e){return function(t,a,n){n.getFirebase;for(var r=(0,n.getFirestore)(),l=a().firebase.profile,i=a().firebase.auth,c=["".concat(l.firstName," ").concat(l.lastName)];c.length<e.maxPlayers;)c.push("");r.collection("games").add(Object(y.a)({},e,{authorFirstName:l.firstName,authorLastName:l.lastName,authorId:i,createdAt:new Date,players:c})).then(function(){t({type:"CREATE_GAME",game:e})}).catch(function(e){t({type:"CREATE_GAME_ERROR",err:e})})}}(t))}}})(M),B=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:A}),r.a.createElement(h.b,{path:"/game/:id",component:k}),r.a.createElement(h.b,{path:"/signin",component:T}),r.a.createElement(h.b,{path:"/signup",component:L}),r.a.createElement(h.b,{path:"/create",component:U}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z={authError:null},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(y.a)({},e,{authError:"Login Failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(y.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(y.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(y.a)({},e,{authError:t.err.message});default:return e}},J={games:[{id:"1",title:"Basketball",content:"shirts vs skins"},{id:"2",title:"Football",content:"6 vs 6"},{id:"3",title:"Tag",content:"League rules"},{id:"4",title:"Beer Pong",content:"21 Must have ID"},{id:"5",title:"Hide n Seek",content:"One vs All"}]},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J;switch((arguments.length>1?arguments[1]:void 0).type){case"CREATE_GAME":case"CREATE_GAME_ERROR":case"JOINED_GAME":case"JOIN_GAME_ERROR":default:return e}},H={chatroom:[{id:"1",message:"Hello World!"}]},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H;switch((arguments.length>1?arguments[1]:void 0).type){case"CREATE_MESSAGE":case"CREATE_MESSAGE_ERROR":default:return e}},Q=a(64),K=Object(F.c)({auth:W,game:q,message:Y,firestore:Q.firestoreReducer,firebase:S.firebaseReducer}),V=a(227),X=a(94),$=a.n(X);a(439),a(444);$.a.initializeApp({apiKey:"AIzaSyDwYcwvbMrmw1QLwjdjku0PMzUxECiCHQ0",authDomain:"recess-8a9b6.firebaseapp.com",databaseURL:"https://recess-8a9b6.firebaseio.com",projectId:"recess-8a9b6",storageBucket:"recess-8a9b6.appspot.com",messagingSenderId:"636940712309"}),$.a.firestore().settings({timestampsInSnapshots:!0});var Z=$.a,ee=Object(F.e)(K,Object(F.d)(Object(F.a)(V.a.withExtraArgument({getFirebase:S.getFirebase,getFirestore:Q.getFirestore})),Object(Q.reduxFirestore)(Z),Object(S.reactReduxFirebase)(Z,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));ee.firebaseAuthIsReady.then(function(){i.a.render(r.a.createElement(p.a,{store:ee},r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[229,1,2]]]);
//# sourceMappingURL=main.6c857b10.chunk.js.map