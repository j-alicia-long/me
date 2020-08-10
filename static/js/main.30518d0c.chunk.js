(this["webpackJsonpmy-portfolio-app"]=this["webpackJsonpmy-portfolio-app"]||[]).push([[0],{59:function(e,a,t){e.exports=t(77)},65:function(e,a,t){},66:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(33),i=t.n(l),o=(t(64),t(65),t(7)),c=t(8),m=t(10),s=t(9),u=t(28),d=t(21),p=(t(66),t(27)),E=t(34),h={imagebaseurl:"https://j-alicia-long.github.io/me",name:"Jennifer Long",role:"Full-Stack Software Engineer",linkedinId:"j-alicia-long",skypeid:"Jenny246844",roleDescription:"I like dabbling in various aspects of frontend and\n                       backend development, especially learning about new\n                       technologies, building pet projects, or playing games\n                       in my free time.",socialLinks:[{name:"linkedin",url:"https://linkedin.com/in/j-alicia-long",iconName:"linkedin"},{name:"github",url:"https://github.com/j-alicia-long",iconName:"github-square"},{name:"facebook",url:"https://www.facebook.com/alicia.long.526875",iconName:"facebook-square"},{name:"twitter",url:"http://twitter.com/jalicialong",iconName:"twitter-square"}],aboutme:"I'm a third-year student at the University of Virginia, pursuing\n              my B.S. Computer Science degree.\n              I'm a self-taught Full Stack Software Engineer, familiar with\n              frameworks such as ReactJS, Django, PostgreSQL, Docker, and AWS\n              services. I\u2019m currently learning more about full-stack deployment\n              including container-orchestration with Kubernetes and CI/CD tools\n              like TravisCI and Jenkins.",aboutme2:"I\u2019m passionate about social equality and educational outreach.\n              Our lives are shaped by the support of the community around us,\n              and we all have a part to play in paving the future. Every\n              contribution makes an impact, no matter how small. I believe\n              that to be successful in life, one needs to strive to be\n              the best version of themselves and push towards their goals.",email:"rz5sc@virginia.edu",address:"Charlottesville, Virginia",website:"https://j-alicia-long.github.io/me",education:[{Name:"University of Virginia",Specialization:"B.S. Computer Science, Cognitive Science",StartDate:"Aug 2017",EndDate:"May 2021",Achievements:"Exec Board and Philanthropy Chair of Sigma Psi Zeta, Student Workers' Union, Asian Leaders Council, CMB Color Guard"},{Name:"Thomas Jefferson High School for Science & Technology",Specialization:"Computer Science, Chemistry",StartDate:"Sep 2013",EndDate:"Jun 2017",Achievements:"President of Tomorrow's Women in Science and Technology, Varsity Cheerleading, TJMC Color Guard"}],work:[{Name:"Capital One",Specialization:"Software Engineer Intern",StartDate:"Jun 2019",EndDate:"Aug 2019",Achievements:"Optimized issue triaging for the mobile features team\n                       by creating a custom crash notification system.\n                       Also developed a Fastlane plugin to lint the GitHub\n                       CODEOWNERS file to expedit merging pull requests.",tech:"AWS Lambda, Python, Fastlane, Ruby, RSpec"},{Name:"UVA Center for Leadership Simulation & Gaming",Specialization:"Undergraduate Research Assistant",StartDate:"Sep 2018",EndDate:"May 2019",Achievements:"Frontend feature developer for the Refugee Crisis\n                        Simulator, used to train over 1000 government\n                        representatives and policy students from 150+\n                        universities.",tech:"ReactJS, Javascript, Sass"},{Name:"Radiant Solutions",Specialization:"Technical Intern",StartDate:"May 2018",EndDate:"Aug 2018",Achievements:"Designed and prototyped a novel web-based geo-temporal\n                        radar data visualization tool, for MTI data analysts to\n                        construct intelligence reports.",tech:"ReactJS, Deck.gl, Spring Boot, REST API"}],skills:{topSkills:[{skillname:"Python/Django",iconName:["fab","python"]},{skillname:"ReactJS",iconName:["fab","react"]},{skillname:"Java",iconName:["fab","java"]},{skillname:"Docker",iconName:["fab","docker"]},{skillname:"PostgreSQL",iconName:["fas","database"]},{skillname:"AWS",iconName:["fab","aws"]}],subSkills:[{skillname:"Python/Django",iconName:["fab","python"]},{skillname:"ReactJS",iconName:["fab","react"]},{skillname:"Java",iconName:["fab","java"]},{skillname:"Docker",iconName:["fab","docker"]},{skillname:"PostgreSQL",iconName:["fas","database"]},{skillname:"AWS",iconName:["fab","aws"]}]},portfolio:[{name:"Motimeter",date:"January 2020",description:"A goal tracker that motivates users to set SMARTR goals\n                       and track progress via KPI dashboard, completion of\n                       incremental tasks, and daily email/text reminders",tech:"Django, PostgreSQL, Docker, AWS",link:"#",imgurl:"portfolio-3.jpg"},{name:"CourseStar",date:"November 2019",description:"A modern course management system designed for modern universities.",tech:"ReactJS, ExpressJS, NodeJS, PostgreSQL, Heroku",link:"https://github.com/j-alicia-long/Course-Star",imgurl:"CourseStar.png"},{name:"The Budgeteer",date:"June 2019",description:"An Amazon Alexa skill that tells you how much to spend on takeout.",tech:"Python, Amazon Alexa, AWS Lambda, DynamoDB",link:"#",imgurl:"Budgeteer.jpg"},{name:"My Virtual Closet",date:"May 2017",description:"An android app that manages the clothing in your closet.",tech:"Java, Android Studio, DarkSky API, Google Firebase, AWS S3",link:"#",imgurl:"VirtualCloset.png"},{name:"Evolve",date:"March 2016",description:"A mobile-friendly web app with a virtual, friendly AI AP Chemistry tutor. Inspired by my interest in AI and passion for Chemistry.",tech:"Java, MongoDB, HTML/CSS, Javascript",link:"https://devpost.com/software/evolve-d2i36",imgurl:"evolve.png"}]},f=t(79),g=t(84),b=t(86),v=t(83),k=t(24),y=t(35),S=t(49);t(31).b.add(S.a,y.b,y.a);var N={backgroundColor:"#343a40"},j=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={navExpanded:!1},n.setNavExpanded=n.setNavExpanded.bind(Object(E.a)(n)),n}return Object(c.a)(t,[{key:"setNavExpanded",value:function(e){this.setState({navExpanded:e})}},{key:"render",value:function(){return console.log(this.state.navExpanded),r.a.createElement(f.a,{className:"side-panel",style:N,xl:"3",md:"4",sm:"12"},r.a.createElement(g.a,{onToggle:this.setNavExpanded,expand:"md",sticky:"top",bg:"dark",variant:"dark"},r.a.createElement(p.Breakpoint,{small:!0,down:!0},r.a.createElement("div",{className:"panel-header-expanded"},r.a.createElement(g.a.Brand,{href:"/me"},h.name),r.a.createElement("h6",null,h.role))),r.a.createElement(g.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(g.a.Collapse,{className:"flex-column",id:"responsive-navbar-nav"},r.a.createElement(p.Breakpoint,{medium:!0,up:!0},r.a.createElement(b.a,{className:"text-center flex-column"},r.a.createElement(w,{name:h.name,role:h.role}),r.a.createElement(A,null),r.a.createElement(v.a.Divider,null),r.a.createElement(x,{resumeData:h}),r.a.createElement("div",{className:"social-links"},r.a.createElement(C,{links:h.socialLinks,justify:"mx-0"})))),r.a.createElement(p.Breakpoint,{small:!0,down:!0},r.a.createElement(b.a,{className:"flex-column"},r.a.createElement(A,null),r.a.createElement(v.a.Divider,null),r.a.createElement(x,{resumeData:h}),r.a.createElement(b.a,{className:"flex-row"},r.a.createElement(C,{links:h.socialLinks,justify:"mr-4"})))))))}}]),t}(n.Component),w=function(e){var a=e.name,t=e.role;return r.a.createElement("div",{className:"panel-header my-2"},r.a.createElement("div",{class:"image-cropper"},r.a.createElement("img",{src:"".concat("/me/images/","/profile.jpg"),alt:"avatar",class:"profile-img"})),r.a.createElement("div",null,r.a.createElement(g.a.Brand,{as:u.b,to:"/"},a),r.a.createElement("h6",null,t)))},A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a.Link,{as:u.b,to:"/"},"About"),r.a.createElement(b.a.Link,{href:"".concat("/me","/Jennifer Long - Resume.pdf"),target:"_blank",rel:"noopener noreferrer"},"Resume"),r.a.createElement(b.a.Link,{as:u.b,to:"/portfolio"},"Portfolio"))},x=function(e){var a=e.resumeData;return r.a.createElement("div",{className:"contact-info"},r.a.createElement(b.a.Link,{href:"#"},r.a.createElement(k.a,{icon:"envelope"})," ",a.email))},C=function(e){var a=e.links,t=e.justify;return r.a.createElement(r.a.Fragment,null,a.map((function(e,a){return r.a.createElement(b.a.Link,{className:t,href:e.url},r.a.createElement(k.a,{icon:["fab",e.iconName]}))})))},D=Object(d.f)(j),O=t(85),J=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Intro"},r.a.createElement(O.a,{controls:!1},r.a.createElement(O.a.Item,null,r.a.createElement("img",{className:"d-block w-100 tinted",src:"".concat("/me/images/","/cover.jpg"),alt:"Jumbotron"}),r.a.createElement(O.a.Caption,{className:"text-left"},r.a.createElement("h1",null,"Hi! ",r.a.createElement("br",null),"I'm Jennifer"),r.a.createElement("h5",{className:"my-4"},r.a.createElement("a",{className:"btn btn-dark btn-learn",href:"".concat("/me","/Jennifer Long - Resume.pdf"),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("strong",null,"VIEW CV "),r.a.createElement(k.a,{icon:["fa","download"]})))))))}}]),t}(n.Component),I=t(80),L=t(81),B=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.resumeData.aboutme;return r.a.createElement("div",{className:"About mb-4"},r.a.createElement(I.a,{fluid:!0},r.a.createElement(L.a,null,r.a.createElement("h3",null,"About Me"),r.a.createElement("p",null,e))))}}]),t}(n.Component),T=t(82),P=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.skills;return r.a.createElement(L.a,{className:"Skills my-4 text-center"},r.a.createElement("h2",null,r.a.createElement("strong",null,"Skills")),r.a.createElement(T.a,null,e.topSkills.map((function(e,a){return r.a.createElement(f.a,{className:"py-4",xl:"2",md:"4",sm:"6"},r.a.createElement(R,{skill:e}))}))))}}]),t}(n.Component),R=function(e){var a=e.skill;return r.a.createElement("a",{className:"skillcard"},r.a.createElement("h5",null,r.a.createElement(k.a,{icon:a.iconName})),r.a.createElement("h6",null,a.skillname))},M=P,W=t(87),z=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.resumeData,a=e.education,t=e.work;return r.a.createElement(L.a,{className:"Timeline p-4"},r.a.createElement("h2",{className:"text-center"},"Experience"),r.a.createElement(T.a,{className:"Experience mb-4"},t.map((function(e,a){return r.a.createElement(f.a,{className:"mb-4",xl:"4",lg:"6"},r.a.createElement(W.a,{className:"my-4",border:"light"},r.a.createElement(W.a.Header,null,e.StartDate," - ",e.EndDate),r.a.createElement(W.a.Body,null,r.a.createElement(W.a.Title,null,r.a.createElement("h4",null,e.Name)),r.a.createElement(W.a.Subtitle,null,r.a.createElement("h6",null,e.Specialization)),r.a.createElement(W.a.Text,{className:"mt-4"},e.Achievements)),r.a.createElement(W.a.Footer,null,e.tech)))}))),r.a.createElement("br",null),r.a.createElement("h2",{className:"text-center"},"Education"),r.a.createElement(T.a,{className:"Education mb-4"},a.map((function(e,a){return r.a.createElement(f.a,{sm:"6"},r.a.createElement(W.a,{className:"my-4",bg:"dark",border:"secondary",text:"white"},r.a.createElement(W.a.Header,null,e.StartDate," - ",e.EndDate),r.a.createElement(W.a.Body,null,r.a.createElement(W.a.Title,null,r.a.createElement("h4",null,e.Name)),r.a.createElement(W.a.Subtitle,null,r.a.createElement("h6",null,e.Specialization)),r.a.createElement(W.a.Text,{className:"mt-4"},e.Achievements))))}))))}}]),t}(n.Component),F=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Homepage"},r.a.createElement(J,null),r.a.createElement(B,{resumeData:h}),r.a.createElement(M,{skills:h.skills}),r.a.createElement(z,{resumeData:h}))}}]),t}(n.Component),V=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(L.a,{className:"Portfolio p-4 text-center"},r.a.createElement("h2",{className:"mt-4"},"Portfolio"),r.a.createElement(T.a,null,h.portfolio.map((function(e,a){return r.a.createElement(f.a,{lg:{span:8,offset:2}},r.a.createElement(W.a,{className:"m-4"},r.a.createElement(W.a.Img,{variant:"top",src:"/me/images/portfolio/"+e.imgurl}),r.a.createElement(W.a.Body,null,r.a.createElement(W.a.Title,null,r.a.createElement("a",{href:e.link},r.a.createElement("h4",null,e.name))),r.a.createElement(W.a.Subtitle,null,r.a.createElement("h6",null,e.date)),r.a.createElement(W.a.Text,null,e.description)),r.a.createElement(W.a.Footer,null,e.tech)),r.a.createElement("br",null))}))))}}]),t}(n.Component),H=function(){return r.a.createElement("footer",{className:"main-footer p-3"},r.a.createElement("div",{class:"copyright text-center"},"Built with <3 in ReactJS | ",r.a.createElement("strong",null,"Jennifer Long")," \xa9 2020"))},q=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{basename:"/"},r.a.createElement(p.BreakpointProvider,null,r.a.createElement(L.a,{className:"App",fluid:!0},r.a.createElement(T.a,{className:"flex-xl-nowrap"},r.a.createElement(D,null),r.a.createElement(f.a,{className:"p-0"},r.a.createElement("main",null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:F}),r.a.createElement(d.a,{path:"/portfolio",component:V})))))),r.a.createElement(H,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[59,1,2]]]);
//# sourceMappingURL=main.30518d0c.chunk.js.map