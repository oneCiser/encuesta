(this.webpackJsonpencuestas=this.webpackJsonpencuestas||[]).push([[0],{18:function(e,t,a){e.exports=a(29)},24:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(10),l=a.n(r),c=a(12),o=a(4),s=a(0),u=a.n(s),i=a(13),m=a.n(i);a(24),a(14);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=a(45),d=a(44);function g(){var e=u.a.useState(5),t=Object(o.a)(e,2),a=t[0],r=t[1],s=u.a.useState(0),i=Object(o.a)(s,2),m=i[0],g=i[1],v=u.a.useState({check:!1,name:null}),b=Object(o.a)(v,2),f=b[0],h=b[1],w=u.a.useState(null),k=Object(o.a)(w,2),y=k[0],x=k[1],E=u.a.useState(null),N=Object(o.a)(E,2),j=N[0],O=N[1],S=u.a.useState({value:null,ind:-1,start:null}),C=Object(o.a)(S,2),T=C[0],W=C[1],D=u.a.useState({encuesta:null,nombre:"",value:[]}),z=Object(o.a)(D,2),I=z[0],J=z[1],B=function(e){console.log("change checked"),h({check:e.target.checked,name:e.target.name})},q=function(){var e=Object(c.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Id pregunta: "+T.ind),console.log("Numero preguntas: "+j.preguntas.length),console.log(f),m>0&&null!==f.name&&T.ind<j.preguntas.length&&((t=I.value).push({pregunta:T.value.pregunta,respuesta:f.name,tiempo:((new Date).getTime()-T.start)/1e3}),J({encuesta:I.encuesta,nombre:I.nombre,value:t})),!(m>0&&null!==f.name&&T.ind+1<j.preguntas.length)){e.next=11;break}W({value:j.preguntas[T.ind+1],ind:T.ind+1,start:(new Date).getTime()}),h({check:!1,name:null}),r(5),console.log("cambiar pregunta"),e.next=32;break;case 11:if(T.ind+1!==j.preguntas.length){e.next=15;break}W({value:{pregunta:"Has finalizado, ahora solo queda enviarlo "},ind:T.ind+1,start:(new Date).getTime()}),e.next=32;break;case 15:if(0!==m){e.next=20;break}W({value:T.value,ind:T.ind,start:(new Date).getTime()}),g(1),e.next=32;break;case 20:if(e.prev=20,2==m){e.next=28;break}return console.log("encuesta guardada"),e.next=25,fetch("https://encuestapsicologia.herokuapp.com/save/send",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(I)});case 25:e.sent,g(2),W({value:{pregunta:"Encuesta guardada"}});case 28:e.next=32;break;case 30:e.prev=30,e.t0=e.catch(20);case 32:x(!y);case 33:case"end":return e.stop()}}),e,null,[[20,30]])})));return function(){return e.apply(this,arguments)}}();return u.a.useEffect((function(){if(null==j&&(console.log("fethc"),fetch("https://encuestapsicologia.herokuapp.com/encuesta/1").then((function(e){return e.json()})).then((function(e){console.log(e),J({encuesta:e.nombre,value:[],nombre:""}),W({value:e.preguntas[0],ind:0,start:(new Date).getTime()}),O(e)})).catch((function(e){return console.log(e)}))),0==a&&h({check:!1,name:"error"}),"error"===f.name&&1==m&&q(),1==m){var e=setInterval((function(){r((function(e){return e-1}))}),1e3);return function(){return clearInterval(e)}}}),[y,a]),u.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexWrap:"wrap"}},u.a.createElement(p.a,{className:"container"},1==m&&u.a.createElement(d.a,null,u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row justify-content-center"},u.a.createElement("div",{className:"col d-flex justify-content-center text-center"},u.a.createElement("p",{className:"text-center border border-success w-25 rounded"},a))))),u.a.createElement(d.a,null,0===m&&u.a.createElement("div",{className:"form-group",style:{display:"flex",flexWrap:"wrap"}},u.a.createElement("label",null,"Digite el nombre"),u.a.createElement("input",{type:"text",className:"form-control",id:"nombreText",placeholder:"Nombre",onChange:function(e){console.log("change text"),J({nombre:e.target.value,encuesta:I.encuesta,value:[]})}})),u.a.createElement("div",{className:"row text-center",style:{overflowWrap:"break-word",justifyContent:"center"}},u.a.createElement("div",null,u.a.createElement("h1",{className:"my-2 text-center",style:{overflowWrap:"break-word",justifyContent:"center",fontSize:"4vw"}},m>0&&null!=T.value&&T.value.pregunta))),u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row"},m>0&&null!=T.value&&null!=T.value.opciones&&T.value.opciones.map((function(e,t){return u.a.createElement("div",{key:t,className:"col text-center border border-primary rounded",style:{fontSize:"3vw",margin:"9px",overflowWrap:"break-word"}},e)}))),u.a.createElement("div",{className:"row"},m>0&&null!=T.value&&null!=T.value.respuestas&&T.value.respuestas.map((function(e,t){var a,r=e.respuesta===f.name,l=r?"green":"blue";return u.a.createElement("div",{key:t,className:"col text-center  w-100",style:{paddingTop:"9px"}},u.a.createElement("button",(a={type:"button",className:"btn btn-block",style:{backgroundColor:l,fontSize:"2vw",overflowWrap:"break-word"},name:e.respuesta,checked:r,onClick:B},Object(n.a)(a,"className","btn btn-primary btn-block"),Object(n.a)(a,"data-toggle","button"),Object(n.a)(a,"aria-pressed","false"),Object(n.a)(a,"autoComplete","off"),a),e.respuesta))}))),u.a.createElement("div",{className:"w-100 p-3  text-center"},u.a.createElement("button",{type:"button",className:"btn btn-primary w-100",name:"siguiente",disabled:2==m||0==I.nombre.slice().length||null==f.name&&1==m,style:{fontSize:"2.5vw"},onClick:q},"Siguiente"))))))}m.a.render(u.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.0387b7e4.chunk.js.map