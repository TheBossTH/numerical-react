(this["webpackJsonpnumerical-react"]=this["webpackJsonpnumerical-react"]||[]).push([[0],{219:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(25),s=c.n(r),j=(c(98),c(224)),l=c.p+"static/media/Itsuki.4ffec2bc.gif",o=c(0),i=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)(j.a,{className:"mt-5 p-4 rounded bg-light text-center",children:[Object(o.jsx)("h2",{children:"Itsuki is No.1 Waifu"}),Object(o.jsx)("br",{}),Object(o.jsx)("img",{src:l,alt:"Itsuki",className:"rounded img-fluid"})]})})},b=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(i,{})})},d=c(11),h=c.n(d),O=c(17),x=c(6),u=c(10),p=c(229),m=c(89),f=c(30).default,g=function(){var e=Object(n.useState)({username:"",password:""}),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(u.a)(r,2),l=s[0],i=s[1],b=Object(n.useState)(!1),d=Object(u.a)(b,2),g=d[0],v=d[1];return Object(n.useEffect)((function(){console.log("Mount Component")}),[]),Object(n.useEffect)((function(){console.log("useEffect : username Change")}),[c.username,c.password]),Object(o.jsx)("div",{children:Object(o.jsxs)(j.a,{className:"mt-5 p-4 rounded bg-light",children:[Object(o.jsxs)(p.a,{children:[Object(o.jsxs)(p.a.Group,{controlId:"Username",children:[Object(o.jsx)(p.a.Label,{children:"Username"}),Object(o.jsx)(p.a.Control,{type:"text",placeholder:"Enter Username",onChange:function(e){a(Object(x.a)(Object(x.a)({},c),{},{username:e.target.value}))}})]}),Object(o.jsxs)(p.a.Group,{controlId:"Password",children:[Object(o.jsx)(p.a.Label,{children:"Password"}),Object(o.jsx)(p.a.Control,{type:"password",placeholder:"Enter Password",onChange:function(e){a(Object(x.a)(Object(x.a)({},c),{},{password:e.target.value}))}})]}),Object(o.jsx)(m.a,{disabled:g,onClick:Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,f.post("http://localhost:8080/api/v1/users/login",c);case 3:t=e.sent,console.log(t.config.data),200===t.status&&v(!1);case 6:case"end":return e.stop()}}),e)}))),children:"Login"})]}),Object(o.jsx)("hr",{}),Object(o.jsx)(m.a,{variant:"outline-secondary",onClick:function(){i(!l)},children:"Click Me"}),": ",l.toString(),Object(o.jsx)("br",{}),l&&Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Username :"})," ",c.username,Object(o.jsx)("br",{}),Object(o.jsx)("h1",{children:"Password :"})," ",c.password]}),Object(o.jsx)("br",{})]})})},v=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(g,{})})},C=c(9),E=function(){var e=Object(C.f)(),t=e.name,c=e.nickname;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{children:["Name : ",t]}),Object(o.jsxs)("h1",{children:["Nickname : ",c]})]})},I=function(){var e=Object(n.useState)({numconter:0}),t=Object(u.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){console.log("Mount Component")}),[]),Object(o.jsx)("div",{children:Object(o.jsxs)(j.a,{className:"mt-5 p-4 rounded bg-light",children:[c.numconter>20?Object(o.jsx)("h1",{className:"text-danger",children:c.numconter}):c.numconter<0?Object(o.jsx)("h1",{className:"text-success",children:c.numconter}):Object(o.jsx)("h1",{children:c.numconter}),Object(o.jsx)(m.a,{variant:"danger",onClick:function(){a(Object(x.a)(Object(x.a)({},c),{},{numconter:c.numconter-1}))},children:"YAMETE! Senpai(-)"}),Object(o.jsx)(m.a,{variant:"success",className:"ml-2",onClick:function(){a(Object(x.a)(Object(x.a)({},c),{},{numconter:c.numconter+1}))},children:"Notice Me Senpai(+)"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("h2",{children:"Count > 20 = Red"}),Object(o.jsx)("h2",{children:"Count < 0 = Green"})]})})},L=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(I,{})})},X=c(91),y=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)(j.a,{className:"mt-5 p-4 rounded bg-light",children:[Object(o.jsx)("h1",{children:"Graph"}),Object(o.jsx)("p",{children:"This is a Graph"}),Object(o.jsxs)(p.a,{children:[Object(o.jsxs)(p.a.Group,{controlId:"WaifuName",children:[Object(o.jsx)(p.a.Label,{children:"Add Waifu"}),Object(o.jsx)(p.a.Control,{type:"text",placeholder:"Enter Waiful Name"})]}),Object(o.jsx)(p.a.Group,{controlId:"WaifulPoint",children:Object(o.jsx)(p.a.Control,{type:"number",placeholder:"Enter Waiful Point"})}),Object(o.jsx)(m.a,{variant:"primary",type:"submit",children:"Add"})]}),Object(o.jsx)(X.Line,{data:{labels:["Ichika","Nino","Miku","Yotsuba","Itsuki"],datasets:[{label:"# of Waifu Point",data:[10,15,18,8,20],fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]},options:{title:{display:!0,text:"Waifu Chart"},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})})},G=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(y,{})})},k=c(225),N=c(88),S=c(226),w=c(30).default,P=function(){var e=Object(n.useState)({xl:0,xr:0,error:1e-5}),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(u.a)(r,2),l=s[0],i=s[1];return Object(o.jsx)("div",{children:Object(o.jsxs)(j.a,{className:"mt-5 p-4 rounded bg-light",children:[Object(o.jsx)("h2",{children:"Bisection Method"}),Object(o.jsxs)(p.a,{children:[Object(o.jsxs)(p.a.Group,{as:k.a,controlId:"Equation",children:[Object(o.jsx)(p.a.Label,{column:!0,sm:"2",children:"Equation :"}),Object(o.jsx)(N.a,{sm:"10",children:Object(o.jsx)(p.a.Control,{plaintext:!0,readOnly:!0,defaultValue:"(x^4)-13"})})]}),Object(o.jsxs)(p.a.Group,{as:k.a,controlId:"XL",children:[Object(o.jsx)(p.a.Label,{column:!0,sm:"2",children:"XL :"}),Object(o.jsx)(N.a,{sm:"10",children:Object(o.jsx)(p.a.Control,{type:"number",placeholder:"XL",onChange:function(e){a(Object(x.a)(Object(x.a)({},c),{},{xl:parseFloat(e.target.value)}))}})})]}),Object(o.jsxs)(p.a.Group,{as:k.a,controlId:"XR",children:[Object(o.jsx)(p.a.Label,{column:!0,sm:"2",children:"XR :"}),Object(o.jsx)(N.a,{sm:"10",children:Object(o.jsx)(p.a.Control,{type:"number",placeholder:"XR",onChange:function(e){a(Object(x.a)(Object(x.a)({},c),{},{xr:parseFloat(e.target.value)}))}})})]}),Object(o.jsxs)(p.a.Group,{as:k.a,controlId:"Error",children:[Object(o.jsx)(p.a.Label,{column:!0,sm:"2",children:"Error :"}),Object(o.jsx)(N.a,{sm:"10",children:Object(o.jsx)(p.a.Control,{type:"number",placeholder:"Error",onChange:function(e){a(Object(x.a)(Object(x.a)({},c),{},{error:parseFloat(e.target.value)}))}})})]}),Object(o.jsx)(p.a.Group,{as:k.a,children:Object(o.jsx)(N.a,{sm:{span:10,offset:2},children:Object(o.jsx)(m.a,{type:"button",onClick:Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.post("http://localhost:8080/api/v1/root/bisection",c);case 2:t=e.sent,console.log(t),i(JSON.parse(t.request.response).data);case 5:case"end":return e.stop()}}),e)}))),children:"Calculate"})})}),null!==l&&Object(o.jsxs)(S.a,{striped:!0,bordered:!0,hover:!0,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Iteration"}),Object(o.jsx)("th",{children:"XL"}),Object(o.jsx)("th",{children:"XR"}),Object(o.jsx)("th",{children:"XM"}),Object(o.jsx)("th",{children:"ER"})]})}),Object(o.jsx)("tbody",{children:l.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.iteration}),Object(o.jsx)("td",{children:e.xl}),Object(o.jsx)("td",{children:e.xr}),Object(o.jsx)("td",{children:e.xm}),Object(o.jsx)("td",{children:e.er})]},e.iteration)}))})]})]})]})})},q=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(P,{})})},F=c(30).default,M=function(){var e=Object(n.useState)({xl:0,xr:0,error:1e-5}),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(u.a)(r,2),l=s[0],i=s[1];return Object(o.jsx)("div",{children:Object(o.jsxs)(j.a,{className:"mt-5 p-4 rounded bg-light",children:[Object(o.jsx)("h2",{children:"False-Position Method"}),Object(o.jsxs)(p.a,{children:[Object(o.jsxs)(p.a.Group,{as:k.a,controlId:"Equation",children:[Object(o.jsx)(p.a.Label,{column:!0,sm:"2",children:"Equation :"}),Object(o.jsx)(N.a,{sm:"10",children:Object(o.jsx)(p.a.Control,{plaintext:!0,readOnly:!0,defaultValue:"(x^4)-13"})})]}),Object(o.jsxs)(p.a.Group,{as:k.a,controlId:"XL",children:[Object(o.jsx)(p.a.Label,{column:!0,sm:"2",children:"XL :"}),Object(o.jsx)(N.a,{sm:"10",children:Object(o.jsx)(p.a.Control,{type:"number",placeholder:"XL",onChange:function(e){a(Object(x.a)(Object(x.a)({},c),{},{xl:parseFloat(e.target.value)}))}})})]}),Object(o.jsxs)(p.a.Group,{as:k.a,controlId:"XR",children:[Object(o.jsx)(p.a.Label,{column:!0,sm:"2",children:"XR :"}),Object(o.jsx)(N.a,{sm:"10",children:Object(o.jsx)(p.a.Control,{type:"number",placeholder:"XR",onChange:function(e){a(Object(x.a)(Object(x.a)({},c),{},{xr:parseFloat(e.target.value)}))}})})]}),Object(o.jsxs)(p.a.Group,{as:k.a,controlId:"Error",children:[Object(o.jsx)(p.a.Label,{column:!0,sm:"2",children:"Error :"}),Object(o.jsx)(N.a,{sm:"10",children:Object(o.jsx)(p.a.Control,{type:"number",placeholder:"Error",onChange:function(e){a(Object(x.a)(Object(x.a)({},c),{},{error:parseFloat(e.target.value)}))}})})]}),Object(o.jsx)(p.a.Group,{as:k.a,children:Object(o.jsx)(N.a,{sm:{span:10,offset:2},children:Object(o.jsx)(m.a,{type:"button",onClick:Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.post("http://localhost:8080/api/v1/root/falseposition",c);case 2:t=e.sent,console.log(t),i(JSON.parse(t.request.response).data);case 5:case"end":return e.stop()}}),e)}))),children:"Calculate"})})}),null!==l&&Object(o.jsxs)(S.a,{striped:!0,bordered:!0,hover:!0,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Iteration"}),Object(o.jsx)("th",{children:"XL"}),Object(o.jsx)("th",{children:"XR"}),Object(o.jsx)("th",{children:"X1"}),Object(o.jsx)("th",{children:"ER"})]})}),Object(o.jsx)("tbody",{children:l.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.iteration}),Object(o.jsx)("td",{children:e.xl}),Object(o.jsx)("td",{children:e.xr}),Object(o.jsx)("td",{children:e.x1}),Object(o.jsx)("td",{children:e.er})]},e.iteration)}))})]})]})]})})},R=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(M,{})})},A=c(30).default,B=function(){var e=Object(n.useState)({x:0,error:1e-5}),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(u.a)(r,2),l=s[0],i=s[1];return Object(o.jsx)("div",{children:Object(o.jsxs)(j.a,{className:"mt-5 p-4 rounded bg-light",children:[Object(o.jsx)("h2",{children:"One-Point Method"}),Object(o.jsxs)(p.a,{children:[Object(o.jsxs)(p.a.Group,{as:k.a,controlId:"Equation",children:[Object(o.jsx)(p.a.Label,{column:!0,sm:"2",children:"Equation :"}),Object(o.jsx)(N.a,{sm:"10",children:Object(o.jsx)(p.a.Control,{plaintext:!0,readOnly:!0,defaultValue:"(x^4)-13"})})]}),Object(o.jsxs)(p.a.Group,{as:k.a,controlId:"XL",children:[Object(o.jsx)(p.a.Label,{column:!0,sm:"2",children:"X Start :"}),Object(o.jsx)(N.a,{sm:"10",children:Object(o.jsx)(p.a.Control,{type:"number",placeholder:"X Start",onChange:function(e){a(Object(x.a)(Object(x.a)({},c),{},{x:parseFloat(e.target.value)}))}})})]}),Object(o.jsxs)(p.a.Group,{as:k.a,controlId:"Error",children:[Object(o.jsx)(p.a.Label,{column:!0,sm:"2",children:"Error :"}),Object(o.jsx)(N.a,{sm:"10",children:Object(o.jsx)(p.a.Control,{type:"number",placeholder:"Error",onChange:function(e){a(Object(x.a)(Object(x.a)({},c),{},{error:parseFloat(e.target.value)}))}})})]}),Object(o.jsx)(p.a.Group,{as:k.a,children:Object(o.jsx)(N.a,{sm:{span:10,offset:2},children:Object(o.jsx)(m.a,{type:"button",onClick:Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.post("http://localhost:8080/api/v1/root/onepoint",c);case 2:t=e.sent,console.log(t),i(JSON.parse(t.request.response).data);case 5:case"end":return e.stop()}}),e)}))),children:"Calculate"})})}),null!==l&&Object(o.jsxs)(S.a,{striped:!0,bordered:!0,hover:!0,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Iteration"}),Object(o.jsx)("th",{children:"X"}),Object(o.jsx)("th",{children:"Xi"}),Object(o.jsx)("th",{children:"ER"})]})}),Object(o.jsx)("tbody",{children:l.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.iteration}),Object(o.jsx)("td",{children:e.x}),Object(o.jsx)("td",{children:e.xi}),Object(o.jsx)("td",{children:e.er})]},e.iteration)}))})]})]})]})})},J=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(B,{})})},W=c(30).default,T=function(){var e=Object(n.useState)({x:0,error:1e-5}),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(u.a)(r,2),l=s[0],i=s[1];return Object(o.jsx)("div",{children:Object(o.jsxs)(j.a,{className:"mt-5 p-4 rounded bg-light",children:[Object(o.jsx)("h2",{children:"Newton-Raphson Method"}),Object(o.jsxs)(p.a,{children:[Object(o.jsxs)(p.a.Group,{as:k.a,controlId:"Equation",children:[Object(o.jsx)(p.a.Label,{column:!0,sm:"2",children:"Equation :"}),Object(o.jsx)(N.a,{sm:"10",children:Object(o.jsx)(p.a.Control,{plaintext:!0,readOnly:!0,defaultValue:"(x^4)-13"})})]}),Object(o.jsxs)(p.a.Group,{as:k.a,controlId:"XL",children:[Object(o.jsx)(p.a.Label,{column:!0,sm:"2",children:"X Start :"}),Object(o.jsx)(N.a,{sm:"10",children:Object(o.jsx)(p.a.Control,{type:"number",placeholder:"X Start",onChange:function(e){a(Object(x.a)(Object(x.a)({},c),{},{x:parseFloat(e.target.value)}))}})})]}),Object(o.jsxs)(p.a.Group,{as:k.a,controlId:"Error",children:[Object(o.jsx)(p.a.Label,{column:!0,sm:"2",children:"Error :"}),Object(o.jsx)(N.a,{sm:"10",children:Object(o.jsx)(p.a.Control,{type:"number",placeholder:"Error",onChange:function(e){a(Object(x.a)(Object(x.a)({},c),{},{error:parseFloat(e.target.value)}))}})})]}),Object(o.jsx)(p.a.Group,{as:k.a,children:Object(o.jsx)(N.a,{sm:{span:10,offset:2},children:Object(o.jsx)(m.a,{type:"button",onClick:Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.post("http://localhost:8080/api/v1/root/newtonraphson",c);case 2:t=e.sent,console.log(t),i(JSON.parse(t.request.response).data);case 5:case"end":return e.stop()}}),e)}))),children:"Calculate"})})}),null!==l&&Object(o.jsxs)(S.a,{striped:!0,bordered:!0,hover:!0,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Iteration"}),Object(o.jsx)("th",{children:"Xi"}),Object(o.jsx)("th",{children:"FX"}),Object(o.jsx)("th",{children:"diff(FX)"}),Object(o.jsx)("th",{children:"ER"})]})}),Object(o.jsx)("tbody",{children:l.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.iteration}),Object(o.jsx)("td",{children:e.xi}),Object(o.jsx)("td",{children:e.fx}),Object(o.jsx)("td",{children:e.diffx}),Object(o.jsx)("td",{children:e.er})]},e.iteration)}))})]})]})]})})},V=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(T,{})})},U=c(30).default,D=function(){var e=Object(n.useState)({x:0,error:1e-5}),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(u.a)(r,2),l=s[0],i=s[1];return Object(o.jsx)("div",{children:Object(o.jsxs)(j.a,{className:"mt-5 p-4 rounded bg-light",children:[Object(o.jsx)("h2",{children:"Secant Method"}),Object(o.jsxs)(p.a,{children:[Object(o.jsxs)(p.a.Group,{as:k.a,controlId:"Equation",children:[Object(o.jsx)(p.a.Label,{column:!0,sm:"2",children:"Equation :"}),Object(o.jsx)(N.a,{sm:"10",children:Object(o.jsx)(p.a.Control,{plaintext:!0,readOnly:!0,defaultValue:"(x^4)-13"})})]}),Object(o.jsxs)(p.a.Group,{as:k.a,controlId:"XL",children:[Object(o.jsx)(p.a.Label,{column:!0,sm:"2",children:"X0 :"}),Object(o.jsx)(N.a,{sm:"10",children:Object(o.jsx)(p.a.Control,{type:"number",placeholder:"X0",onChange:function(e){a(Object(x.a)(Object(x.a)({},c),{},{x0:parseFloat(e.target.value)}))}})})]}),Object(o.jsxs)(p.a.Group,{as:k.a,controlId:"XL",children:[Object(o.jsx)(p.a.Label,{column:!0,sm:"2",children:"X1 :"}),Object(o.jsx)(N.a,{sm:"10",children:Object(o.jsx)(p.a.Control,{type:"number",placeholder:"X1",onChange:function(e){a(Object(x.a)(Object(x.a)({},c),{},{x1:parseFloat(e.target.value)}))}})})]}),Object(o.jsxs)(p.a.Group,{as:k.a,controlId:"Error",children:[Object(o.jsx)(p.a.Label,{column:!0,sm:"2",children:"Error :"}),Object(o.jsx)(N.a,{sm:"10",children:Object(o.jsx)(p.a.Control,{type:"number",placeholder:"Error",onChange:function(e){a(Object(x.a)(Object(x.a)({},c),{},{error:parseFloat(e.target.value)}))}})})]}),Object(o.jsx)(p.a.Group,{as:k.a,children:Object(o.jsx)(N.a,{sm:{span:10,offset:2},children:Object(o.jsx)(m.a,{type:"button",onClick:Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.post("http://localhost:8080/api/v1/root/secant",c);case 2:t=e.sent,console.log(t),i(JSON.parse(t.request.response).data);case 5:case"end":return e.stop()}}),e)}))),children:"Calculate"})})}),null!==l&&Object(o.jsxs)(S.a,{striped:!0,bordered:!0,hover:!0,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Iteration"}),Object(o.jsx)("th",{children:"X0"}),Object(o.jsx)("th",{children:"X1"}),Object(o.jsx)("th",{children:"FX0"}),Object(o.jsx)("th",{children:"FX1"}),Object(o.jsx)("th",{children:"DeltaX"}),Object(o.jsx)("th",{children:"Xi"}),Object(o.jsx)("th",{children:"ER"})]})}),Object(o.jsx)("tbody",{children:l.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.iteration}),Object(o.jsx)("td",{children:e.x0}),Object(o.jsx)("td",{children:e.x1}),Object(o.jsx)("td",{children:e.fx0}),Object(o.jsx)("td",{children:e.fx1}),Object(o.jsx)("td",{children:e.deltax}),Object(o.jsx)("td",{children:e.xi}),Object(o.jsx)("td",{children:e.er})]},e.iteration)}))})]})]})]})})},Y=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(D,{})})},H=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)(j.a,{className:"mt-5 p-4 rounded bg-light",children:[Object(o.jsx)("h2",{children:"Cramer's rule"}),Object(o.jsxs)(p.a,{children:[Object(o.jsxs)(p.a.Group,{as:k.a,controlId:"Equation",children:[Object(o.jsx)(p.a.Label,{column:!0,sm:"2",children:"Equation :"}),Object(o.jsx)(N.a,{sm:"10",children:Object(o.jsx)(p.a.Control,{plaintext:!0,readOnly:!0,defaultValue:"(x^4)-13"})})]}),Object(o.jsxs)(p.a.Group,{as:k.a,controlId:"XL",children:[Object(o.jsx)(p.a.Label,{column:!0,sm:"2",children:"XL :"}),Object(o.jsx)(N.a,{sm:"10",children:Object(o.jsx)(p.a.Control,{type:"number",placeholder:"XL"})})]}),Object(o.jsxs)(p.a.Group,{as:k.a,controlId:"XR",children:[Object(o.jsx)(p.a.Label,{column:!0,sm:"2",children:"XR :"}),Object(o.jsx)(N.a,{sm:"10",children:Object(o.jsx)(p.a.Control,{type:"number",placeholder:"XR"})})]}),Object(o.jsxs)(p.a.Group,{as:k.a,controlId:"Error",children:[Object(o.jsx)(p.a.Label,{column:!0,sm:"2",children:"Error :"}),Object(o.jsx)(N.a,{sm:"10",children:Object(o.jsx)(p.a.Control,{type:"number",placeholder:"Error(optional)"})})]}),Object(o.jsx)(p.a.Group,{as:k.a,children:Object(o.jsx)(N.a,{sm:{span:10,offset:2},children:Object(o.jsx)(m.a,{type:"submit",children:"Calculate"})})})]})]})})},Q=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(H,{})})},Z=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(P,{}),Object(o.jsx)(M,{}),Object(o.jsx)(B,{}),Object(o.jsx)(T,{}),Object(o.jsx)(D,{})]})},_=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(P,{}),Object(o.jsx)(M,{}),Object(o.jsx)(B,{}),Object(o.jsx)(T,{}),Object(o.jsx)(D,{})]})},z=c(8),K=c(228),$=c(230),ee=c(227),te=c.p+"static/media/icon.ff6bcf56.png",ce=function(){return Object(o.jsxs)(K.a,{bg:"dark",expand:"lg",variant:"dark",sticky:"top",children:[Object(o.jsx)(z.c,{to:"/",className:"nav-link",children:Object(o.jsx)(K.a.Brand,{children:Object(o.jsx)("img",{src:te,width:"30",height:"30",className:"d-inline-block align-top",alt:"React Bootstrap logo"})})}),Object(o.jsx)(K.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(o.jsxs)(K.a.Collapse,{id:"basic-navbar-nav",children:[Object(o.jsxs)($.a,{className:"mr-auto",children:[Object(o.jsxs)(ee.a,{title:"Roots of Equations",id:"collasible-nav-dropdown",children:[Object(o.jsx)(ee.a.Item,{as:z.b,to:"/Bisection",children:"Bisection Method"}),Object(o.jsx)(ee.a.Item,{as:z.b,to:"/FalsePosition",children:"False-Position Method"}),Object(o.jsx)(ee.a.Item,{as:z.b,to:"/OnePoint",children:"One-Point Iteration Method"}),Object(o.jsx)(ee.a.Item,{as:z.b,to:"/NewtonRaphson",children:"Newton-Raphson Method"}),Object(o.jsx)(ee.a.Item,{as:z.b,to:"/Secant",children:"Secant Method"})]}),Object(o.jsxs)(ee.a,{title:"Linear Algebraic Equations",id:"collasible-nav-dropdown",children:[Object(o.jsx)(ee.a.Item,{as:z.b,to:"/Cramer",children:"Cramer's rule"}),Object(o.jsx)(ee.a.Item,{as:z.b,to:"/LinearAlgebraicEquationsPage",children:"Gauss-Elimination Method"}),Object(o.jsx)(ee.a.Item,{as:z.b,to:"/LinearAlgebraicEquationsPage",children:"Gauss-Jordan Method"}),Object(o.jsx)(ee.a.Item,{as:z.b,to:"/LinearAlgebraicEquationsPage",children:"LU decomposition Method"}),Object(o.jsx)(ee.a.Divider,{}),Object(o.jsx)(ee.a.Item,{as:z.b,to:"/LinearAlgebraicEquationsPage",children:"Jacobi Iteration Method"}),Object(o.jsx)(ee.a.Item,{as:z.b,to:"/LinearAlgebraicEquationsPage",children:"Gauss-seidel"}),Object(o.jsx)(ee.a.Item,{as:z.b,to:"/LinearAlgebraicEquationsPage",children:"Conjugate Gradient Method"})]}),Object(o.jsxs)(ee.a,{title:"Interpolation and Extrapolation",id:"collasible-nav-dropdown",children:[Object(o.jsx)(ee.a.Item,{as:z.b,to:"/InterpolationandExtrapolationPage",children:"Linear"}),Object(o.jsx)(ee.a.Item,{as:z.b,to:"/InterpolationandExtrapolationPage",children:"Quadratic"}),Object(o.jsx)(ee.a.Item,{as:z.b,to:"/InterpolationandExtrapolationPage",children:"Polynomial"})]}),Object(o.jsx)(z.c,{to:"/assignments",className:"nav-link",children:"Assignments"}),Object(o.jsx)(z.c,{to:"/counter",className:"nav-link",children:"Counter(not Strike)"}),Object(o.jsx)(z.c,{to:"/graph",className:"nav-link",children:"Graph"})]}),Object(o.jsx)(p.a,{inline:!0,children:Object(o.jsx)(m.a,{variant:"outline-info",href:"https://github.com/TheBossTH/numerical-react",target:"_blank",children:"Github"})})]})]})};var ne=function(){return Object(o.jsxs)(z.a,{children:[Object(o.jsx)(ce,{}),Object(o.jsxs)(C.c,{children:[Object(o.jsx)(C.a,{exact:!0,path:"/",children:Object(o.jsx)(b,{})}),Object(o.jsx)(C.a,{path:"/Bisection",children:Object(o.jsx)(q,{})}),Object(o.jsx)(C.a,{path:"/FalsePosition",children:Object(o.jsx)(R,{})}),Object(o.jsx)(C.a,{path:"/OnePoint",children:Object(o.jsx)(J,{})}),Object(o.jsx)(C.a,{path:"/NewtonRaphson",children:Object(o.jsx)(V,{})}),Object(o.jsx)(C.a,{path:"/Secant",children:Object(o.jsx)(Y,{})}),Object(o.jsx)(C.a,{path:"/Cramer",children:Object(o.jsx)(Q,{})}),Object(o.jsx)(C.a,{path:"/LinearAlgebraicEquationsPage",children:Object(o.jsx)(Z,{})}),Object(o.jsx)(C.a,{path:"/InterpolationandExtrapolationPage",children:Object(o.jsx)(_,{})}),Object(o.jsx)(C.a,{path:"/assignments",children:Object(o.jsx)(v,{})}),Object(o.jsx)(C.a,{path:"/counter",children:Object(o.jsx)(L,{})}),Object(o.jsx)(C.a,{path:"/graph",children:Object(o.jsx)(G,{})}),Object(o.jsx)(C.a,{path:"/:name/:nickname",children:Object(o.jsx)(E,{})})]})]})},ae=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,231)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};c(218);s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(ne,{})}),document.getElementById("root")),ae()},98:function(e,t,c){}},[[219,1,2]]]);
//# sourceMappingURL=main.f946ef6d.chunk.js.map