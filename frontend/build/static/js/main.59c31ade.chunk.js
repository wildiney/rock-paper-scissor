(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),l=(n(9),n(1)),s=(n(10),function(e){return r.a.createElement("header",null,r.a.createElement("h1",null,e.appName))}),i=function(e){return r.a.createElement("section",{id:"resultado"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"score"},"Pontos: ",e.score),r.a.createElement("div",{className:"result"},null!==e.result?r.a.createElement("img",{alt:e.result,src:"/apps/jokenpo/assets/images/".concat(e.result,".png")}):""),r.a.createElement("div",{className:"winner"},e.winner)))},u=function(e){return r.a.createElement("section",{id:"opcoes"},r.a.createElement("ul",null,e.options.map((function(t,n){return r.a.createElement("li",{className:e.selected===t?"border":"no-border"},r.a.createElement("button",{key:n,className:t,onClick:function(n){return function(t,n){e.click(t.target,n)}(n,t)},value:t}))}))))};var m=function(){var e=["Rock","Paper","Scissors"],t=["WIN","DRAW","LOOSE"],n=Object(a.useState)({userChoice:null,systemChoice:null,result:null,score:0}),o=Object(l.a)(n,2),c=o[0],m=o[1],d=Object(a.useState)(),p=Object(l.a)(d,2),h=p[0],E=p[1],f=function(){var t=Math.floor(3*Math.random());return e[t]};return r.a.createElement("div",{className:"App"},r.a.createElement(s,{appName:"Jokenpo v.01"}),r.a.createElement("main",null,r.a.createElement(i,{choose:c.userChoice,result:c.systemChoice,winner:c.result,score:c.score}),r.a.createElement(u,{options:e,selected:h,click:function(n,a){E(a);var r=c.score,o=f(),l=n.value,s=null;l===o?s=t[1]:l===e[0]&&o===e[1]?s=t[2]:l===e[0]&&o===e[2]||l===e[1]&&o===e[0]?(s=t[0],r+=10):l===e[1]&&o===e[2]||l===e[2]&&o===e[0]?s=t[2]:l===e[2]&&o===e[1]&&(s=t[0],r+=10),console.log(l),m({userChoice:l,systemChoice:o,result:s,score:r})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.59c31ade.chunk.js.map