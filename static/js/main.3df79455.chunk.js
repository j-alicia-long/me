(this["webpackJsonpmy-portfolio-app"]=this["webpackJsonpmy-portfolio-app"]||[]).push([[0],{60:function(e,a,t){e.exports=t(78)},66:function(e,a,t){},67:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(34),i=t.n(r),o=(t(65),t(66),t(7)),c=t(8),m=t(10),s=t(9),u=t(11),p=t(46),d=t(21),h=(t(67),t(29)),E=t(35),f={imagebaseurl:"https://j-alicia-long.github.io/me",name:"Jennifer Long",role:"Full Stack Developer and Cloud Engineer",linkedinId:"j-alicia-long",skypeid:"Jenny246844",roleDescription:"I like dabbling in various aspects of frontend and backend development, especially learning about new technologies, building pet projects, or playing games in my free time.",socialLinks:[{name:"linkedin",url:"https://linkedin.com/in/j-alicia-long",iconName:"linkedin"},{name:"github",url:"https://github.com/j-alicia-long",iconName:"github-square"},{name:"facebook",url:"https://www.facebook.com/alicia.long.526875",iconName:"facebook-square"},{name:"twitter",url:"http://twitter.com/jalicialong",iconName:"twitter-square"}],aboutme:"I'm a third-year student at the Univerity of Virginia, pursuing my B.S. Computer Science degree. I'm a self taught Full Stack Software Engineer, currently diving deeper into Cloud Computing (AWS) and Machine Learning. I believe that to be successful in life, one needs to strive to to be the best version of themselves and push towards their goals.",email:"rz5sc@virginia.edu",address:"Charlottesville, Virginia",website:"https://j-alicia-long.github.io/me",education:[{Name:"University of Virginia",Specialization:"B.S. Computer Science, Cognitive Science",StartDate:"Aug 2017",EndDate:"May 2021",Achievements:"Exec Board and Philanthropy Chair of Sigma Psi Zeta, Student Workers' Union, Asian Leaders Council, CMB Color Guard"},{Name:"Thomas Jefferson High School for Science & Technology",Specialization:"Computer Science, Chemistry",StartDate:"Sep 2013",EndDate:"Jun 2017",Achievements:"President of Tomorrow's Women in Science and Technology, Varsity Cheerleading, TJMC Color Guard"}],work:[{Name:"Capital One",Specialization:"Software Engineer Intern",StartDate:"Jun 2019",EndDate:"Aug 2019",Achievements:"Optimized issue triaging for the mobile features team by creating a custom crash notification system. Also developed a Fastlane plugin to lint the GitHub CODEOWNERS file to expedit merging pull requests.",tech:"AWS Lambda, Python, Fastlane, Ruby, RSpec"},{Name:"UVA Center for Leadership Simulation & Gaming",Specialization:"Undergraduate Research Assistant",StartDate:"Sep 2018",EndDate:"May 2019",Achievements:"Frontend feature developer for the Refugee Crisis Simulator, used to train over 1000 Congressmen and policy students from over 150 universities.",tech:"ReactJS, Javascript, Sass"},{Name:"Radiant Solutions",Specialization:"Technical Intern",StartDate:"May 2018",EndDate:"Aug 2018",Achievements:"Designed and prototyped a novel web-based geo-temporal radar data visualization tool, for MTI data analysts to construct intelligence reports.",tech:"ReactJS, Deck.gl, Spring Boot, REST API"}],skillsDescription:"My top skills",skills:[{skillname:"Python",iconName:["fab","python"]},{skillname:"Java",iconName:["fab","java"]},{skillname:"Ruby",iconName:["fas","gem"]},{skillname:"PostgreSQL",iconName:["fas","database"]},{skillname:"AWS",iconName:["fab","aws"]},{skillname:"ReactJS",iconName:["fab","react"]}],portfolio:[{name:"Evolve",description:"A mobile-friendly web app with a virtual, friendly AI AP Chemistry tutor. Inspired by my interest in AI and passion for Chemistry.",tech:"Java, MongoDB, HTML/CSS, Javascript",link:"https://devpost.com/software/evolve-d2i36",imgurl:"images/portfolio/evolve.png"},{name:"My Virtual Closet",description:"An android app that manages the clothing in your closet.",tech:"Java, Android Studio, DarkSky API, Google Firebase, AWS S3",link:"#",imgurl:"images/portfolio/VirtualCloset.png"},{name:"The Budgeteer",description:"An Amazon Alexa skill that tells you how much to spend on takeout.",tech:"Python, Amazon Alexa, AWS Lambda, DynamoDB",link:"#",imgurl:"images/portfolio/Budgeteer.jpg"},{name:"CourseStar",description:"A new course management system designed for universities.",tech:"ReactJS, ExpressJS, NodeJS, PostgreSQL, Heroku",link:"https://github.com/j-alicia-long/Course-Star",imgurl:"images/portfolio/CourseStar.png"},{name:"TBD",description:"A new serverless project is in the works! Details to come.",tech:"AWS",link:"#",imgurl:"images/portfolio/portfolio-3.jpg"}]},g=t(80),b=t(85),v=t(87),k=t(84),y=t(26),S=t(25),j=t(45);t(32).b.add(j.a,S.c,S.b);var N={backgroundColor:"#343a40"},O=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(s.a)(a).call(this,e))).state={navExpanded:!1},t.setNavExpanded=t.setNavExpanded.bind(Object(E.a)(t)),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"setNavExpanded",value:function(e){this.setState({navExpanded:e})}},{key:"render",value:function(){return console.log(this.state.navExpanded),l.a.createElement(g.a,{className:"side-panel",style:N,xl:"3",md:"4",sm:"12"},l.a.createElement(b.a,{onToggle:this.setNavExpanded,expand:"md",sticky:"top",bg:"dark",variant:"dark"},l.a.createElement(h.Breakpoint,{small:!0,down:!0},l.a.createElement("div",{className:"panel-header-expanded"},l.a.createElement(b.a.Brand,{href:"/me"},f.name),l.a.createElement("h6",null,f.role))),l.a.createElement(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(b.a.Collapse,{className:"flex-column",id:"responsive-navbar-nav"},l.a.createElement(h.Breakpoint,{medium:!0,up:!0},l.a.createElement(v.a,{className:"text-center flex-column"},l.a.createElement(C,{name:f.name,role:f.role}),l.a.createElement(A,null),l.a.createElement(k.a.Divider,null),l.a.createElement(w,{resumeData:f}),l.a.createElement("div",{className:"social-links"},l.a.createElement(x,{links:f.socialLinks,justify:"mx-0"})))),l.a.createElement(h.Breakpoint,{small:!0,down:!0},l.a.createElement(v.a,{className:"flex-column"},l.a.createElement(A,null),l.a.createElement(k.a.Divider,null),l.a.createElement(w,{resumeData:f}),l.a.createElement(v.a,{className:"flex-row"},l.a.createElement(x,{links:f.socialLinks,justify:"mr-4"})))))))}}]),a}(n.Component),C=function(e){var a=e.name,t=e.role;return l.a.createElement("div",{className:"panel-header my-2"},l.a.createElement("div",{class:"image-cropper"},l.a.createElement("img",{src:"images/columns_square.jpg",alt:"avatar",class:"profile-img"})),l.a.createElement("div",null,l.a.createElement(b.a.Brand,{href:"/me"},a),l.a.createElement("h6",null,t)))},A=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a.Link,{href:"/me"},"About"),l.a.createElement(v.a.Link,{href:"Jennifer Long - Resume.pdf",target:"_blank",rel:"noopener noreferrer"},"Resume"),l.a.createElement(v.a.Link,{href:"/me/portfolio"},"Portfolio"))},w=function(e){var a=e.resumeData;return l.a.createElement("div",{className:"contact-info"},l.a.createElement(v.a.Link,{href:"#"},l.a.createElement(y.a,{icon:"envelope"})," ",a.email))},x=function(e){var a=e.links,t=e.justify;return l.a.createElement(l.a.Fragment,null,a.map((function(e,a){return l.a.createElement(v.a.Link,{className:t,href:e.url},l.a.createElement(y.a,{icon:["fab",e.iconName]}))})))},D=Object(d.f)(O),J=t(86),B=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"Intro"},l.a.createElement(J.a,null,l.a.createElement(J.a.Item,null,l.a.createElement("img",{className:"d-block w-100 tinted",src:"images/bubbles.jpg",alt:"Cover Photo"}),l.a.createElement(J.a.Caption,{className:"text-left"},l.a.createElement("h1",null,"Hi! ",l.a.createElement("br",null),"I'm Jennifer"),l.a.createElement("h5",{className:"my-4"},l.a.createElement("a",{className:"btn btn-dark btn-learn",href:"Jennifer Long - Resume.pdf",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("strong",null,"VIEW CV "),l.a.createElement(y.a,{icon:S.a})))))))}}]),a}(n.Component),L=t(81),T=t(82),I=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData.aboutme;return l.a.createElement("div",{className:"About mb-4"},l.a.createElement(L.a,{fluid:!0},l.a.createElement(T.a,null,l.a.createElement("h3",null,"About Me"),l.a.createElement("p",null,e))))}}]),a}(n.Component),P=t(83),R=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.skillList;return l.a.createElement("div",{className:"Skills my-4 text-center"},l.a.createElement("h2",null,l.a.createElement("strong",null,"Skills")),l.a.createElement(P.a,null,e.map((function(e,a){return l.a.createElement(g.a,{className:"p-2",xl:"2",md:"4",sm:"6",xs:"12"},l.a.createElement("a",{className:"skillcard"},l.a.createElement("h5",null,l.a.createElement(y.a,{icon:e.iconName})),l.a.createElement("h6",null,e.skillname)))}))))}}]),a}(n.Component),F=t(88),z=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData,a=e.education,t=e.work;return l.a.createElement("div",{className:"Timeline p-4"},l.a.createElement("h2",{className:"text-center"},l.a.createElement("strong",null,"Timeline")),t.map((function(e,a){return l.a.createElement(l.a.Fragment,null,l.a.createElement(F.a,{className:"my-4",border:"danger"},l.a.createElement(F.a.Header,null,e.StartDate," - ",e.EndDate),l.a.createElement(F.a.Body,null,l.a.createElement(F.a.Title,null,l.a.createElement("h4",null,e.Name)),l.a.createElement(F.a.Subtitle,null,l.a.createElement("h6",null,e.Specialization)),l.a.createElement(F.a.Text,{className:"mt-4"},e.Achievements)),l.a.createElement(F.a.Footer,null,e.tech)),l.a.createElement("h3",{className:"text-center"}," | "))})),a.map((function(e,a){return l.a.createElement(l.a.Fragment,null,l.a.createElement(F.a,{className:"my-4",bg:"dark",border:"danger",text:"white"},l.a.createElement(F.a.Header,null,e.StartDate," - ",e.EndDate),l.a.createElement(F.a.Body,null,l.a.createElement(F.a.Title,null,l.a.createElement("h4",null,e.Name)),l.a.createElement(F.a.Subtitle,null,l.a.createElement("h6",null,e.Specialization)),l.a.createElement(F.a.Text,{className:"mt-4"},e.Achievements))),l.a.createElement("h3",{className:"text-center"}," | "))})))}}]),a}(n.Component),M=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"Homepage"},l.a.createElement(B,null),l.a.createElement(I,{resumeData:f}),l.a.createElement(R,{skillList:f.skills}),l.a.createElement(z,{resumeData:f}))}}]),a}(n.Component),W=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"Portfolio p-4 text-center"},l.a.createElement("h2",null,l.a.createElement("strong",null,"Portfolio")),f.portfolio.map((function(e,a){return l.a.createElement(l.a.Fragment,null,l.a.createElement(F.a,{className:"m-4"},l.a.createElement(F.a.Img,{variant:"top",src:e.imgurl}),l.a.createElement(F.a.Body,null,l.a.createElement(F.a.Title,null,l.a.createElement("a",{href:e.link},l.a.createElement("h4",null,e.name))),l.a.createElement(F.a.Text,null,e.description),l.a.createElement(F.a.Footer,null,e.tech))),l.a.createElement("h2",{className:"m-4"}," -- "))})))}}]),a}(n.Component),V=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(p.a,{basename:"/me"},l.a.createElement(h.BreakpointProvider,null,l.a.createElement(T.a,{className:"App",fluid:!0},l.a.createElement(P.a,{className:"flex-xl-nowrap"},l.a.createElement(D,null),l.a.createElement(g.a,{className:"p-0"},l.a.createElement("main",null,l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:M}),l.a.createElement(d.a,{path:"/portfolio",component:W}))))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[60,1,2]]]);
//# sourceMappingURL=main.3df79455.chunk.js.map