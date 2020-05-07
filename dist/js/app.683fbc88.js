(function(t){function e(e){for(var n,i,o=e[0],u=e[1],c=e[2],p=0,d=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},s=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},1:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},"56d7":function(t,e,r){"use strict";r.r(e);r("4de4"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("vault-header"),r("router-view")],1)},s=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("nav",{staticClass:"navbar navbar-expand-lg"},[r("div",{staticClass:"collapse navbar-collapse h2"},[r("ul",{staticClass:"nav mr-auto"},[r("li",{staticClass:"navbar-nav mr-5"},[r("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"}}},[t._v("Vault")])],1),r("li",{staticClass:"navbar-nav h2"},[r("router-link",{staticClass:"nav-link",attrs:{to:{name:"ProvideSignature"}}},[t._v("Provide")])],1)]),r("form",{staticClass:"navbar-nav"},[r("router-link",{staticClass:"nav-link",attrs:{to:{name:"About"}}},[t._v("About")])],1)])])])},o=[],u={name:"VaultHeader"},c=u,l=r("2877"),p=Object(l["a"])(c,i,o,!1,null,null,null),d=p.exports,v={name:"App",components:{VaultHeader:d}},h=v,f=Object(l["a"])(h,a,s,!1,null,null,null),g=f.exports,m=r("05c2"),b=r("8c4f"),x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mt-5"},[r("beat-loader",{staticClass:"text-center",attrs:{loading:t.isLoading,color:"#428bca",size:50,margin:"6px"}}),t.isLoading?t._e():r("signature-table",{attrs:{signatures:t.signatures}})],1)},y=[],_=(r("d3b7"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"table table-striped text-center"},[t._m(0),r("tbody",t._l(t.signatures,(function(e){return r("tr",{key:e.sig,staticClass:"text-primary"},[r("td",[r("router-link",{attrs:{to:{name:"SignatureDetail",params:{sig:e.sig}}}},[t._v(t._s(t._f("shortAddress")(e.sig)))])],1),r("td",[r("a",{attrs:{href:"https://etherscan.io/address/"+e.token721}},[t._v(t._s(t._f("shortAddress")(e.token721)))])]),r("td",[t._v(t._s(t._f("toFormatId")(e.tokenId)))]),r("td",[r("a",{attrs:{href:"https://etherscan.io/address/"+e.token20}},[t._v(t._s(t._f("shortAddress")(e.token20)))])]),r("td",[t._v(t._s(t._f("toFormatPrice")(e.price)))]),r("td",[t._v(t._s(t._f("toDate")(e.expiry)))])])})),0)])}),w=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",{staticClass:"text-primary"},[r("th",{attrs:{scope:"col"}},[r("span",[t._v("Signatures")])]),r("th",{attrs:{scope:"col"}},[t._v("Token 721")]),r("th",{attrs:{scope:"col"}},[t._v("Token ID")]),r("th",{attrs:{scope:"col"}},[t._v("Token 20")]),r("th",{attrs:{scope:"col"}},[t._v("Price")]),r("th",{attrs:{scope:"col"}},[t._v("expiry")])])])}],k={name:"SignatureTable",props:{signatures:{type:Array,default:function(){return[]}}}},S=k,C=Object(l["a"])(S,_,w,!1,null,null,null),P=C.exports,O=(r("96cf"),r("1da1")),A=r("bc3a"),j=r.n(A),E="0xF6F8e3C079f8F71BE39a9046DDad5F9E591d2e74",I="https://signature-vault.herokuapp.com/";function $(){return T.apply(this,arguments)}function T(){return T=Object(O["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get(I+"signatures/");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),T.apply(this,arguments)}function N(t){return D.apply(this,arguments)}function D(){return D=Object(O["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(I+"signature/"+e),t.prev=1,t.next=4,j.a.get(I+"signature/"+e);case 4:return r=t.sent,t.abrupt("return",JSON.parse(r.data));case 8:t.prev=8,t.t0=t["catch"](1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),D.apply(this,arguments)}function F(t){return H.apply(this,arguments)}function H(){return H=Object(O["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:j.a.post(I+"addSignature/",e).then((function(t){console.log(t)})).catch((function(t){console.log(t)}));case 1:case"end":return t.stop()}}),t)}))),H.apply(this,arguments)}var L={atomicErc721LoanAddress:E,getSignatures:$,getSignature:N,saveSignature:F},R={name:"Home",components:{SignatureTable:P},data:function(){return{isLoading:!1,signatures:[]}},created:function(){var t=this;this.isLoading=!0,L.getSignatures().then((function(e){return t.signatures=e})).finally((function(){return t.isLoading=!1}))}},B=R,M=Object(l["a"])(B,x,y,!1,null,null,null),V=M.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Signature Vault BETA")]),r("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ullam, maiores nihil reiciendis laudantium iure cum id architecto aperiam atque tempore voluptates eius rerum placeat rem amet tempora possimus. Temporibus? ")])])}],q={},z=Object(l["a"])(q,J,W,!1,null,null,null),U=z.exports,Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mt-5"},[r("beat-loader",{staticClass:"text-center",attrs:{loading:t.isLoading,color:"#428bca",size:50,margin:"6px"}}),t.isLoading?t._e():r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"}),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"py-1 pr-8 text-primary"},[t._v(" Signature: "+t._s(t._f("shortAddress")(t.signature.sig))+" ")]),r("div",{staticClass:"py-1 pr-8 text-primary"},[r("a",{attrs:{href:"https://etherscan.io/address/"+t.signature.contract}},[t._v(" Contract: "+t._s(t._f("shortAddress")(t.signature.contract))+" ")])]),r("div",{staticClass:"py-1 pr-8 text-primary"},[r("a",{attrs:{href:"https://etherscan.io/address/"+t.signature.token721}},[t._v(" Token 721: "+t._s(t._f("shortAddress")(t.signature.token721))+" ")])]),r("div",{staticClass:"py-1 pr-8 text-primary"},[t._v(" Token ID: "+t._s(t.signature.tokenId)+" ")]),r("div",{staticClass:"py-1 pr-8 text-primary"},[r("a",{attrs:{href:"https://etherscan.io/address/"+t.signature.token20}},[t._v(" Token 20: "+t._s(t._f("shortAddress")(t.signature.token20))+" ")])]),r("div",{staticClass:"py-1 pr-8 text-primary"},[t._v(" Price: "+t._s(t._f("toFormatPrice")(t.signature.price))+" ")]),r("div",{staticClass:"py-1 pr-8 text-primary"},[t._v(" Expiry: "+t._s(t._f("toDate")(t.signature.expiry))+" ")]),r("div",{staticClass:"py-1 pr-8 text-primary"},[t._v(" Loan Hash: "+t._s(t._f("shortAddress")(t.signature.loanHash))+" ")]),r("div",{staticClass:"py-1 pr-8 text-primary"},[r("a",{attrs:{href:"https://etherscan.io/address/"+t.signature.owner}},[t._v(" Owner: "+t._s(t._f("shortAddress")(t.signature.owner))+" ")])])])])])],1)},Y=[],G={name:"SignatureDetail",data:function(){return{isLoading:!1,signature:{}}},created:function(){this.getSignature()},methods:{getSignature:function(){var t=this;this.isLoading=!0;var e=this.$route.params.sig;L.getSignature(e).then((function(e){return t.signature=e})).finally((function(){return t.isLoading=!1}))}}},K=G,X=Object(l["a"])(K,Q,Y,!1,null,null,null),Z=X.exports,tt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mt-5"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"}),r("div",{staticClass:"col-sm-4"},[r("form",{staticClass:"review-form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("div",{staticClass:"mb-2"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.optionSelected,expression:"optionSelected"}],staticClass:"bg-white px-2 py-2 rounded",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.optionSelected=e.target.multiple?r:r[0]},function(e){return t.onSelect(e)}]}},t._l(t.options,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0)]),t._l(t.inputs,(function(e,n){return r("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"i.show"}],key:n,staticClass:"py-1 pr-8"},["checkbox"===e.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"i.value"}],class:null==e.valid?"rounded py-1 px-3":e.valid?"rounded py-1 px-3 text-success":"rounded py-1 px-3 text-danger",attrs:{id:e.items,placeholder:e.text,type:"checkbox"},domProps:{checked:Array.isArray(e.value)?t._i(e.value,null)>-1:e.value},on:{change:[function(r){var n=e.value,a=r.target,s=!!a.checked;if(Array.isArray(n)){var i=null,o=t._i(n,i);a.checked?o<0&&t.$set(e,"value",n.concat([i])):o>-1&&t.$set(e,"value",n.slice(0,o).concat(n.slice(o+1)))}else t.$set(e,"value",s)},function(r){return t.onInputChange(r,e)}]}}):"radio"===e.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"i.value"}],class:null==e.valid?"rounded py-1 px-3":e.valid?"rounded py-1 px-3 text-success":"rounded py-1 px-3 text-danger",attrs:{id:e.items,placeholder:e.text,type:"radio"},domProps:{checked:t._q(e.value,null)},on:{change:[function(r){return t.$set(e,"value",null)},function(r){return t.onInputChange(r,e)}]}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"i.value"}],class:null==e.valid?"rounded py-1 px-3":e.valid?"rounded py-1 px-3 text-success":"rounded py-1 px-3 text-danger",attrs:{id:e.items,placeholder:e.text,type:e.type},domProps:{value:e.value},on:{change:function(r){return t.onInputChange(r,e)},input:function(r){r.target.composing||t.$set(e,"value",r.target.value)}}})])})),r("standard-button",{staticClass:"mt-3",attrs:{type:"submit",title:t.buttonName}})],2)])])])},et=[],rt=(r("4160"),r("b64b"),r("159b"),r("6314")),nt=r.n(rt),at=function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=null,!window.ethereum){t.next=15;break}return e=new nt.a(window.ethereum),t.prev=3,t.next=6,window.ethereum.enable();case 6:t.next=12;break;case 8:throw t.prev=8,t.t0=t["catch"](3),e=null,new Error("denied");case 12:return t.abrupt("return",e);case 15:if(!window.web3){t.next=18;break}return e=new nt.a(window.web3.currentProvider),t.abrupt("return",e);case 18:throw new Error("MetaMask missing");case 19:case"end":return t.stop()}}),t,null,[[3,8]])})));return function(){return t.apply(this,arguments)}}(),st=function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.eth.getAccounts((function(t,e){return e}));case 2:return r=t.sent,t.abrupt("return",e.utils.toChecksumAddress(r[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),it={instanceWeb3:at,getUser:st},ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.onClick}},[t._v(" "+t._s(t.title)+" ")])},ut=[],ct={name:"StandardButton",props:{title:{type:String,default:function(){return""}}},methods:{onClick:function(){this.$emit("click"+this.title)}}},lt=ct,pt=Object(l["a"])(lt,ot,ut,!1,null,null,null),dt=pt.exports,vt={name:"ProvideSignature",components:{StandardButton:dt},data:function(){return{web3:void 0,user:void 0,optionSelected:"",options:["Sign Transaction and Provide","Provide a Signature"],buttonName:"Sign & Provide",inputs:{sig:{type:"signature",text:"Signature",valid:null},token721:{type:"address",text:"Token721",valid:null},tokenId:{type:"hex32",text:"TokenId",valid:null},token20:{type:"address",text:"Token20",valid:null},price:{type:"hex32",text:"Price",valid:null},expiry:{type:"hex32",text:"Expiry",valid:null}}}},created:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,it.instanceWeb3();case 2:return t.web3=e.sent,e.next=5,it.getUser(t.web3);case 5:t.user=e.sent,t.onSelect({target:{value:t.options[0]}});case 7:case"end":return e.stop()}}),e)})))()},methods:{onInputChange:function(t,e){if(""!==t.target.value){switch(e.type){case"signature":e.valid=132===t.target.value.length&&this.web3.utils.isHexStrict(t.target.value);break;case"address":try{t.target.value=this.web3.utils.toChecksumAddress(t.target.value),e.valid=!0}catch(r){e.valid=!1}break;case"hex32":e.valid=!0;break}e.valid||window.alert("Invalid data")}else e.valid=null},onSelect:function(t){var e=this;switch(Object.keys(this.inputs).forEach((function(t){return e.inputs[t].show=!0})),this.optionSelected=t.target.value,t.target.value){case this.options[0]:this.inputs.sig.show=!1,this.buttonName="Sign & Provide";break;case this.options[1]:this.buttonName="Provide";break}},onSubmit:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r={};try{r.contract=L.atomicErc721LoanAddress,r.token721=t.inputs.token721.value,r.tokenId=t.web3.utils.toHex(t.inputs.tokenId.value),r.token20=t.inputs.token20.value,r.price=t.web3.utils.toHex(t.inputs.price.value),r.expiry=t.web3.utils.toHex(t.inputs.expiry.value),r.loanHash=t.web3.utils.soliditySha3({t:"address",v:r.contract},{t:"address",v:r.token721},{t:"uint256",v:r.tokenId},{t:"address",v:r.token20},{t:"uint256",v:r.price},{t:"uint256",v:r.expiry})}catch(n){window.alert("Invalid data")}e.t0=t.optionSelected,e.next=e.t0===t.options[0]?5:e.t0===t.options[1]?9:11;break;case 5:return e.next=7,t.web3.eth.sign(r.loanHash,t.user);case 7:return r.sig=e.sent,e.abrupt("break",11);case 9:return r.sig=t.inputs.sig.value,e.abrupt("break",11);case 11:if(r.owner=t.web3.eth.accounts.recover(r.loanHash,r.sig),r.owner!==t.user){e.next=17;break}return e.next=15,L.saveSignature(r);case 15:e.next=18;break;case 17:window.alert("Ownership error");case 18:case"end":return e.stop()}}),e)})))()}}},ht=vt,ft=Object(l["a"])(ht,tt,et,!1,null,null,null),gt=ft.exports,mt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("error")]),r("router-link",{attrs:{to:"/"}},[t._v("Volver a la página de Inicio")])],1)},bt=[],xt={},yt=Object(l["a"])(xt,mt,bt,!1,null,null,null),_t=yt.exports;n["a"].use(b["a"]);var wt=new b["a"]({mode:"history",routes:[{path:"/",name:"Home",component:V},{path:"/about",name:"About",component:U},{path:"/signature-detail/:sig",name:"SignatureDetail",component:Z},{path:"/provide-signature",name:"ProvideSignature",component:gt},{path:"*",name:"Error",component:_t}]}),kt=(r("a15b"),r("fb6a"),r("a9e3"),r("b680"),r("25f0"),r("38cf"),r("1131")),St=r.n(kt),Ct=function(t){return t?t.slice(0,8)+"..."+t.slice(-6):"$ 0"},Pt=function(t){return t?(t/=100,"".concat(Number(t).toFixed(2)," %")):"0%"},Ot=18;function At(t){for(var e=0,r=t.length;r>=0;r--)"0"===t[r]&&e++;return t.slice(0,t.length-e)}var jt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(t=St.a.toBN(t).toString(),t.length<=e)return t;if(t.length<=Ot){var r="0".repeat(Ot-t.length);return t=t.slice(0,e-r.length),"0."+r+At(t)}var n=t.slice(0,t.length-Ot),a="."+At(t.slice(n.length,e+n.length));return"."!=a?n+a+" ":n+" "},Et=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ETH",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;if(t=St.a.toBN(t).toString(),t.length<=r)return t+" WEI";if(t.length<=Ot){var n="0".repeat(Ot-t.length);return t=t.slice(0,r-n.length),e&&(e=" "+e),"0."+n+At(t)+e}var a=t.slice(0,t.length-Ot),s="."+At(t.slice(a.length,r+a.length));return"."!=s?a+s+" "+e:a+" "+e};function It(t){function e(t){return t<10?"0"+t:t}var r=new Date(t);return[e(r.getDate()),e(r.getMonth()+1),r.getFullYear()].join("/")}var $t=function(t){return St.a.toBN(t).gt(St.a.toBN("4294967296"))?"> "+It(4294967296e3):It(1e3*St.a.toBN(t).toNumber())},Tt={toShortAddress:Ct,toBasePorcent:Pt,toFormatId:jt,toFormatPrice:Et,toDate:$t};r("4989"),r("ab8b");n["a"].use(m["VueSpinners"]),n["a"].filter("shortAddress",Tt.toShortAddress),n["a"].filter("basePorcent",Tt.toBasePorcent),n["a"].filter("toFormatId",Tt.toFormatId),n["a"].filter("toFormatPrice",Tt.toFormatPrice),n["a"].filter("toDate",Tt.toDate),n["a"].config.productionTip=!1,new n["a"]({router:wt,render:function(t){return t(g)}}).$mount("#app")}});
//# sourceMappingURL=app.683fbc88.js.map