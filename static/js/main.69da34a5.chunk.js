(this.webpackJsonpexample17=this.webpackJsonpexample17||[]).push([[0],{11:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var i=a(1),c=a(3),r=a.n(c),n=a(18),s=a.n(n),o=(a(30),a(21)),l=a(12),d=a(4),j=a(19),b=a(20),p=a(23),h=a(22),u=(a(11),a(14)),O=a.n(u),m=(a(17),a.p+"static/media/logo.103b5fa1.svg"),x=function(){return Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("img",{src:m,className:"App-logo",alt:"logo"}),Object(i.jsx)("p",{children:"Practica #2 React + Firebase"})]})},v=a(38),f=function(e){return Object(i.jsx)("div",{className:"Form",children:Object(i.jsxs)("form",{onSubmit:e.enviar,children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"id",children:"Id"}),Object(i.jsx)("input",{type:"text",placeholder:"Ejm. 18211154",onChange:e.guardarCambios,value:e.ropa.id,name:"id",disabled:e.desactivado})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"genero",children:"Genero"}),Object(i.jsxs)("select",{name:"genero",value:e.ropa.genero,onChange:e.guardarCambios,children:[Object(i.jsx)("option",{value:"selecciona",children:"selecciona"}),Object(i.jsx)("option",{value:"Hombre",children:"Hombre"}),Object(i.jsx)("option",{value:"Mujer",children:"Mujer"})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"temporada",children:"Temporada"}),Object(i.jsxs)("select",{name:"temporada",value:e.ropa.temporada,onChange:e.guardarCambios,children:[Object(i.jsx)("option",{value:"selecciona",children:"selecciona"}),Object(i.jsx)("option",{value:"Primavera",children:"Primavera"}),Object(i.jsx)("option",{value:"Verano",children:"Verano"}),Object(i.jsx)("option",{value:"Otono\xf1o",children:"Oto\xf1o"}),Object(i.jsx)("option",{value:"Invierno",children:"Invierno"})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"talla",children:"Talla"}),Object(i.jsxs)("select",{name:"talla",value:e.ropa.talla,onChange:e.guardarCambios,children:[Object(i.jsx)("option",{value:"selecciona",children:"selecciona"}),Object(i.jsx)("option",{value:"S",children:"S"}),Object(i.jsx)("option",{value:"M",children:"M"}),Object(i.jsx)("option",{value:"L",children:"L"})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"descripcion",children:"Descripcion"}),Object(i.jsx)("input",{type:"text",placeholder:"Ej. Blusa Morada",onChange:e.guardarCambios,value:e.ropa.descripcion,name:"descripcion"})]}),Object(i.jsx)("button",{children:Object(i.jsx)(v.a,{children:"Enviar"})})]})})},g=a(37),C=function(e){return Object(i.jsx)("div",{className:"List",children:0===e.lista.length?Object(i.jsx)("p",{children:"No hay prendas registradas"}):Object(i.jsxs)(g.a,{striped:!0,bordered:!0,hover:!0,children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Id"}),Object(i.jsx)("th",{children:"Genero"}),Object(i.jsx)("th",{children:"Temporada"}),Object(i.jsx)("th",{children:"Talla"}),Object(i.jsx)("th",{children:"Descripcion"}),Object(i.jsx)("th",{}),Object(i.jsx)("th",{})]})}),Object(i.jsx)("tbody",{children:e.lista.map((function(t,a){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:t.id}),Object(i.jsx)("td",{children:t.genero}),Object(i.jsx)("td",{children:t.temporada}),Object(i.jsx)("td",{children:t.talla}),Object(i.jsx)("td",{children:t.descripcion}),Object(i.jsx)("td",{children:Object(i.jsx)(v.a,{onClick:function(){return e.eliminar(t.id)},variant:"danger",children:"Eliminar"})}),Object(i.jsx)("td",{children:Object(i.jsx)(v.a,{onClick:function(){return e.modificar(t.id)},variant:"success",children:"Modificar"})})]},a)}))})]})})},S=a(15),F=(a(32),S.a.apps.lenght?S.a.app():S.a.initializeApp({apiKey:"AIzaSyCtgwfcJ5dhGMBxx9fujETdBHiuN1zM6Sc",authDomain:"practica2reactfirebase.firebaseapp.com",databaseURL:"https://practica2reactfirebase.firebaseio.com",projectId:"practica2reactfirebase",storageBucket:"practica2reactfirebase.appspot.com",messagingSenderId:"806928644819",appId:"1:806928644819:web:8d97ed8714fff8c75c7226",measurementId:"G-KZ33PSSK68"})),I=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(j.a)(this,a),(e=t.call(this)).guardarCambios=function(t){e.setState(Object(d.a)(Object(d.a)({},e.state),{},{ropa:Object(d.a)(Object(d.a)({},e.state.ropa),{},Object(l.a)({},t.target.name,t.target.value))}))},e.eliminar=function(t){F.database().ref("Ropa/"+t).set(null).then((function(){O.a.fire({position:"center",icon:"error",title:"Eliminado",showConfirmButton:!1,timer:1500})}));var a=e.state.lista.filter((function(e){return e.id!==t}));e.setState(Object(d.a)(Object(d.a)({},e.state),{},{lista:a}))},e.modificar=function(t){var a=e.state.lista.find((function(e){return e.id===t}));e.setState(Object(d.a)(Object(d.a)({},e.state),{},{ropa:{id:a.id,genero:a.genero,temporada:a.temporada,talla:a.talla,descripcion:a.descripcion},desactivado:!0}))},e.enviar=function(t){t.preventDefault();var a=e.state.ropa,i=a.id,c=a.genero,r=a.temporada,n=a.talla,s=a.descripcion;if(0===i.length||0===s.length||"selecciona"===c||"selecciona"===r||"selecciona"===n)O.a.fire({position:"center",icon:"error",title:"Llena todos los campos",showConfirmButton:!1,timer:1500});else{F.database().ref("Ropa/"+i).update(e.state.ropa).then((function(){O.a.fire({position:"center",icon:"success",title:"Prenda agregada",showConfirmButton:!1,timer:1500})}));var l=e.state.lista;!0===e.state.desactivado&&(l=l.filter((function(e){return e.id!==i}))),e.setState(Object(d.a)(Object(d.a)({},e.state),{},{lista:[].concat(Object(o.a)(l),[e.state.ropa]),ropa:{id:"",genero:"",temporada:"",talla:"",descripcion:""},desactivado:!1}))}},e.state={ropa:{id:"",genero:"",temporada:"",talla:"",descripcion:""},lista:[],desactivado:!1},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;F.database().ref("Ropa").on("value",(function(t){var a=[];t.forEach((function(e){a.push({id:e.val().id,genero:e.val().genero,temporada:e.val().temporada,talla:e.val().talla,descripcion:e.val().descripcion})})),e.setState(Object(d.a)(Object(d.a)({},e.state),{},{lista:a}))}))}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(x,{}),Object(i.jsxs)("div",{className:"Containers",children:[Object(i.jsx)(f,{enviar:this.enviar,guardarCambios:this.guardarCambios,ropa:this.state.ropa,desactivado:this.state.desactivado}),Object(i.jsx)(C,{lista:this.state.lista,eliminar:this.eliminar,modificar:this.modificar})]})]})}}]),a}(c.Component),M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,39)).then((function(t){var a=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),i(e),c(e),r(e),n(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(I,{id:"app"})}),document.getElementById("root")),M()}},[[36,1,2]]]);
//# sourceMappingURL=main.69da34a5.chunk.js.map