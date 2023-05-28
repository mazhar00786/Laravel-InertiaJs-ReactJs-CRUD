"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[948],{4267:(e,r,n)=>{n.d(r,{Z:()=>i});var a=n(7294),s=n(1636),t=n(5893);const l=function(){var e=(0,s.qt)().props,r=e.auth,n=(e.isLoggedIn,e.isGuest,window.location.pathname);return(0,t.jsx)("nav",{className:"navbar navbar-expand-md navbar-light bg-white shadow-sm",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(s.ZQ,{className:"navbar-brand",href:"/",children:"Laravel"}),(0,t.jsxs)("div",{className:"collapse navbar-collapse",id:"collapsibleNavId",children:[(0,t.jsxs)("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0",children:[(0,t.jsx)("li",{className:"/"==n?"nav-item active":"nav-item",children:(0,t.jsxs)(s.ZQ,{className:"nav-link",href:route("home"),children:["Home ",(0,t.jsx)("span",{className:"sr-only"})]})}),(0,t.jsx)("li",{className:n==route("users.index")?"nav-item active":"nav-item",children:(0,t.jsx)(s.ZQ,{className:"nav-link",href:route("users.index"),children:"Users"})})]}),(0,t.jsx)("ul",{className:"navbar-nav me-auto"}),(0,t.jsxs)("ul",{className:"navbar-nav ms-auto",children:[r.isGuest&&(0,t.jsxs)(a.Fragment,{children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(s.ZQ,{className:"nav-link",href:route("login"),children:"Login"})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(s.ZQ,{className:"nav-link",href:route("register"),children:"Register"})})]}),r.user&&(0,t.jsxs)(a.Fragment,{children:[(0,t.jsxs)("li",{className:"nav-item dropdown",children:[(0,t.jsx)(s.ZQ,{id:"navbarDropdown",className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:r.user.name}),(0,t.jsx)("div",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"navbarDropdown",children:(0,t.jsx)(s.ZQ,{method:"post",className:"dropdown-item",href:route("logout"),as:"button",children:"Logout"})})]}),(0,t.jsxs)("li",{className:"nav-item dropdown",children:[(0,t.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Dropdown link"}),(0,t.jsxs)("ul",{className:"dropdown-menu",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"dropdown-item",href:"#",children:"Action"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"dropdown-item",href:"#",children:"Another action"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"dropdown-item",href:"#",children:"Something else here"})})]})]})]})]})]})]})})};const i=function(e){var r=e.title,n=e.children,s=e.create_url;return(0,a.useEffect)((function(){document.title=r})),(0,t.jsxs)(a.Fragment,{children:[(0,t.jsx)(l,{create:s}),(0,t.jsx)("main",{className:"container",children:n})]})}},3948:(e,r,n)=>{n.r(r),n.d(r,{default:()=>h});var a=n(7294),s=n(4267),t=n(9680),l=n(5893);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){d(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r,n){return(r=function(e){var r=function(e,r){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,r||"default");if("object"!==i(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===i(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function m(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,s,t,l,i=[],o=!0,c=!1;try{if(t=(n=n.call(e)).next,0===r){if(Object(n)!==n)return;o=!1}else for(;!(o=(a=t.call(n)).done)&&(i.push(a.value),i.length!==r);o=!0);}catch(e){c=!0,s=e}finally{try{if(!o&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw s}}return i}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return u(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,a=new Array(r);n<r;n++)a[n]=e[n];return a}const h=function(e){var r=e.errors,n=m((0,a.useState)({email:"",password:""}),2),i=n[0],o=n[1],u=function(e){e.persist();var r=e.target.id;o((function(n){return c(c({},n),{},d({},r,e.target.value))}))};return(0,l.jsx)(s.Z,{title:"Login Users",children:(0,l.jsx)("div",{className:"container mt-4",children:(0,l.jsx)("div",{className:"row justify-content-center",children:(0,l.jsx)("div",{className:"col-md-8",children:(0,l.jsxs)("div",{className:"card",children:[(0,l.jsx)("div",{className:"card-header",children:"Login"}),(0,l.jsx)("div",{className:"card-body",children:(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=new FormData;r.append("email",i.email),r.append("password",i.password),t.Inertia.post("/login",r)},children:[(0,l.jsxs)("div",{className:"row mb-3",children:[(0,l.jsx)("label",{htmlFor:"email",className:"col-md-4 col-form-label text-md-end",children:"Email Address"}),(0,l.jsxs)("div",{className:"col-md-6",children:[(0,l.jsx)("input",{id:"email",type:"email",className:"form-control",name:"email",value:i.email,onChange:u,required:!0,autoComplete:"email"}),r.email&&(0,l.jsx)("span",{className:"text-danger",role:"alert",children:r.email})]})]}),(0,l.jsxs)("div",{className:"row mb-3",children:[(0,l.jsx)("label",{htmlFor:"password",className:"col-md-4 col-form-label text-md-end",children:"Password"}),(0,l.jsxs)("div",{className:"col-md-6",children:[(0,l.jsx)("input",{id:"password",type:"password",className:"form-control {errors.password && 'is-invalid'}",name:"password",value:i.password,onChange:u,required:!0,autoComplete:"new-password"}),r.password&&(0,l.jsx)("span",{className:"text-danger",role:"alert",children:r.password})]})]}),(0,l.jsx)("div",{className:"row mb-3",children:(0,l.jsx)("div",{className:"col-md-6 offset-md-4",children:(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",name:"remember",id:"remember",checked:i.remember,onChange:function(e){return o("remember",e.target.checked)}}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"remember",children:"Remember Me"})]})})}),(0,l.jsx)("div",{className:"row mb-0",children:(0,l.jsx)("div",{className:"col-md-6 offset-md-4",children:(0,l.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"})})})]})})]})})})})})}}}]);