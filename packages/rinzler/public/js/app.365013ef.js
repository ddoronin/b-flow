(function(t){function e(e){for(var n,c,i=e[0],a=e[1],l=e[2],b=0,u=[];b<i.length;b++)c=i[b],r[c]&&u.push(r[c][0]),r[c]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);d&&d(e);while(u.length)u.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,i=1;i<o.length;i++){var a=o[i];0!==r[a]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},r={app:0},s=[];function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=a;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("cd49")},"013b":function(t,e,o){},3169:function(t,e,o){},4678:function(t,e,o){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=s(t);return o(e)}function s(t){var e=n[t];if(!(e+1)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return e}r.keys=function(){return Object.keys(n)},r.resolve=s,t.exports=r,r.id="4678"},"520b":function(t,e,o){},"5c0b":function(t,e,o){"use strict";var n=o("5e27"),r=o.n(n);r.a},"5e27":function(t,e,o){},"64ad":function(t,e,o){},"68a3":function(t,e,o){"use strict";var n=o("64ad"),r=o.n(n);r.a},7505:function(t,e,o){"use strict";var n=o("013b"),r=o.n(n);r.a},a4ba:function(t,e,o){},b4ce:function(t,e,o){"use strict";var n=o("520b"),r=o.n(n);r.a},b985:function(t,e,o){"use strict";var n=o("3169"),r=o.n(n);r.a},c41d:function(t,e,o){"use strict";var n=o("a4ba"),r=o.n(n);r.a},cd49:function(t,e,o){"use strict";o.r(e);var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},s=[],c=(o("5c0b"),o("2877")),i={},a=Object(c["a"])(i,r,s,!1,null,null,null);a.options.__file="App.vue";var l=a.exports,d=o("8c4f"),b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("DBList",{attrs:{list:t.dblist,active:t.db}},[o("template",{attrs:{"v-if":t.db},slot:t.db},[o("Collections",{attrs:{db:t.db,collection:t.collection}})],1)],2)},u=[],f=o("9ab4"),p=o("65d9"),j=o.n(p),v=o("4bb5"),m=o("60a3"),h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-tabs",{attrs:{activeKey:t.active},on:{change:t.select}},t._l(t.list,function(e){return o("a-tab-pane",{key:e.name,attrs:{tab:e.name}},[t._t(e.name)],2)}))},y=[],g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"db",class:{empty:t.isEmpty}},[o("div",{staticClass:"name"},[t._v(t._s(t.name))]),o("div",{staticClass:"size"},[t._v(t._s(t.size))])])},_=[],O=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return f["c"](e,t),f["b"]([Object(m["a"])(String)],e.prototype,"name",void 0),f["b"]([Object(m["a"])(Number)],e.prototype,"size",void 0),f["b"]([Object(m["a"])(Boolean)],e.prototype,"isEmpty",void 0),e=f["b"]([j.a],e),e}(n["default"]),w=O,k=w,z=(o("7505"),Object(c["a"])(k,g,_,!1,null,"fd7043b0",null));z.options.__file="DB.vue";var C=z.exports,E=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return f["c"](e,t),e.prototype.select=function(t){dt.push({path:"/"+t})},f["b"]([Object(m["a"])()],e.prototype,"list",void 0),f["b"]([Object(m["a"])()],e.prototype,"active",void 0),e=f["b"]([j()({components:{DB:C}})],e),e}(n["default"]),x=E,D=x,T=(o("b4ce"),Object(c["a"])(D,h,y,!1,null,"26358d3e",null));T.options.__file="DBList.vue";var S=T.exports,P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{key:t.db,staticClass:"collections"},[o("Cols",{key:t.db,attrs:{db:t.db,collection:t.collection,collections:t.getCollections(t.db)}},[o("template",{attrs:{"v-if":t.collection},slot:t.db+t.collection},[o("Terminal",{attrs:{db:t.db,collection:t.collection}})],1)],2)],1)},$=[],N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-tabs",{key:t.db,style:{"min-height":"600px"},attrs:{activeKey:t.collection,tabPosition:"left"},on:{change:t.choose}},t._l(t.collections,function(e){return o("a-tab-pane",{key:e,attrs:{tab:e}},[t._t(t.db+t.collection)],2)}))},A=[],B=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return f["c"](e,t),e.prototype.choose=function(t){dt.push({path:"/"+this.db+"/"+t})},f["b"]([Object(m["a"])()],e.prototype,"db",void 0),f["b"]([Object(m["a"])()],e.prototype,"collection",void 0),f["b"]([Object(m["a"])()],e.prototype,"collections",void 0),e=f["b"]([j()({components:{}})],e),e}(n["default"]),L=B,M=L,G=(o("68a3"),Object(c["a"])(M,N,A,!1,null,"8d86832c",null));G.options.__file="Collections.vue";var I=G.exports,U=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"terminal"},[o("vue-json-pretty",{style:{fontSize:"small"},attrs:{data:t.getTop10({db:t.db,collection:t.collection})}})],1)},F=[],J=o("d538"),q=o.n(J),K=Object(v["a"])("terminal"),V=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return f["c"](e,t),e.prototype.mounted=function(){this.top10({db:this.db,collection:this.collection})},f["b"]([Object(m["a"])()],e.prototype,"db",void 0),f["b"]([Object(m["a"])()],e.prototype,"collection",void 0),f["b"]([K.Action("top10")],e.prototype,"top10",void 0),f["b"]([K.Getter("getTop10")],e.prototype,"getTop10",void 0),e=f["b"]([j()({components:{VueJsonPretty:q.a}})],e),e}(n["default"]),H=V,Q=H,R=(o("c41d"),Object(c["a"])(Q,U,F,!1,null,null,null));R.options.__file="Terminal.vue";var W=R.exports,X=Object(v["a"])("collections"),Y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return f["c"](e,t),e.prototype.mounted=function(){this.refresh(this.db)},f["b"]([Object(m["a"])()],e.prototype,"db",void 0),f["b"]([Object(m["a"])()],e.prototype,"collection",void 0),f["b"]([X.Getter("collections")],e.prototype,"getCollections",void 0),f["b"]([X.Action("refresh")],e.prototype,"refresh",void 0),e=f["b"]([j()({components:{Cols:I,Terminal:W}})],e),e}(n["default"]),Z=Y,tt=Z,et=Object(c["a"])(tt,P,$,!1,null,null,null);et.options.__file="Collections.vue";var ot=et.exports,nt=Object(v["a"])("databases"),rt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return f["c"](e,t),e.prototype.mounted=function(){this.refresh()},f["b"]([Object(m["a"])()],e.prototype,"db",void 0),f["b"]([Object(m["a"])()],e.prototype,"collection",void 0),f["b"]([nt.State("list")],e.prototype,"dblist",void 0),f["b"]([nt.Action("refresh")],e.prototype,"refresh",void 0),e=f["b"]([j()({components:{DBList:S,Collections:ot}})],e),e}(n["default"]),st=rt,ct=st,it=(o("b985"),Object(c["a"])(ct,b,u,!1,null,null,null));it.options.__file="Dashboard.vue";var at=it.exports;n["default"].use(d["a"]);var lt,dt=new d["a"]({routes:[{path:"/:db?/:collection?",name:"dashboard",component:at,props:function(t){return{db:t.params.db,collection:t.params.collection}}}]}),bt=o("2f62");(function(t){t["PENDING"]="PENDING",t["SUCCEEDED"]="SUCCEEDED",t["FAILED"]="FAILED"})(lt||(lt={}));var ut=[],ft={state:ut,getters:{},actions:{dbs:function(t,e){console.log("action for ",e)},push:function(t,e){t.commit("newCommand",e)}},mutations:{newCommand:function(t,e){t.push(e)}}},pt=o("35c1"),jt=o("0a03"),vt=o("11c1"),mt=function(){function t(){var t=this;this.id=Object(vt["v4"])(),this.type="db_list",this.write=function(){return jt["Codec"].create(e).write(t)}}var e;return e=t,f["b"]([pt["str"]],t.prototype,"id",void 0),f["b"]([pt["str"]],t.prototype,"type",void 0),t=e=f["b"]([pt["proto"]],t),t}(),ht=function(){function t(){}var e;return e=t,t.read=function(t){return jt["Codec"].create(e).read(t)},f["b"]([pt["str"]],t.prototype,"id",void 0),f["b"]([pt["bson"]],t.prototype,"list",void 0),t=e=f["b"]([pt["proto"]],t),t}(),yt=function(){function t(){}var e;return e=t,t.read=function(t){return jt["Codec"].create(e).read(t)},f["b"]([pt["str"]],t.prototype,"id",void 0),t=e=f["b"]([pt["proto"]],t),t}(),gt=o("0f68"),_t=Object(gt["a"])({url:"ws://localhost:8080",binaryType:"arraybuffer",serializer:function(t){return t},deserializer:function(t){return t}}),Ot=_t,wt=o("5670"),kt={list:[]},zt={namespaced:!0,state:kt,getters:{},actions:{refresh:function(t){if(!(t.state.list&&t.state.list.length>0)){var e=new mt;Ot.next(e.write()),Ot.pipe(Object(wt["a"])(function(t){var o=t.data;return yt.read(o).id===e.id})).subscribe(function(e){var o=e.data;return t.commit("refresh",ht.read(o).list)})}}},mutations:{refresh:function(t,e){t.list=e}}},Ct=function(){function t(){var t=this;this.id=Object(vt["v4"])(),this.type="db_collections",this.write=function(){return jt["Codec"].create(e).write(t)}}var e;return e=t,f["b"]([pt["str"]],t.prototype,"id",void 0),f["b"]([pt["str"]],t.prototype,"type",void 0),f["b"]([pt["str"]],t.prototype,"db",void 0),t=e=f["b"]([pt["proto"]],t),t}(),Et=function(){function t(){}var e;return e=t,t.read=function(t){return jt["Codec"].create(e).read(t)},f["b"]([pt["str"]],t.prototype,"id",void 0),f["b"]([pt["bson"]],t.prototype,"list",void 0),t=e=f["b"]([pt["proto"]],t),t}(),xt=o("3fab"),Dt={items:{}},Tt={namespaced:!0,state:Dt,actions:{refresh:function(t,e){var o=t.state.items[e];if(!(o&&o.length>0)){var n=new Ct;n.db=e,Ot.pipe(Object(wt["a"])(function(t){var e=t.data;return yt.read(e).id===n.id})).pipe(Object(xt["a"])()).subscribe(function(o){var n=o.data;return t.commit("refresh",{db:e,cols:Et.read(n).list})}),Ot.next(n.write())}}},mutations:{refresh:function(t,e){var o;t.items=f["a"]({},t.items,(o={},o[e.db]=e.cols,o))}},getters:{collections:function(t){return function(e){return t.items[e]}}}},St=function(){function t(){var t=this;this.id=Object(vt["v4"])(),this.type="db_find",this.write=function(){return jt["Codec"].create(e).write(t)}}var e;return e=t,f["b"]([pt["str"]],t.prototype,"id",void 0),f["b"]([pt["str"]],t.prototype,"type",void 0),f["b"]([pt["str"]],t.prototype,"db",void 0),f["b"]([pt["str"]],t.prototype,"collection",void 0),f["b"]([pt["bson"]],t.prototype,"find",void 0),f["b"]([pt["bson"]],t.prototype,"options",void 0),t=e=f["b"]([pt["proto"]],t),t}(),Pt=function(){function t(){}var e;return e=t,t.read=function(t){return jt["Codec"].create(e).read(t)},f["b"]([pt["str"]],t.prototype,"id",void 0),f["b"]([pt["bson"]],t.prototype,"data",void 0),t=e=f["b"]([pt["proto"]],t),t}(),$t={cols:{}},Nt={namespaced:!0,state:$t,actions:{top10:function(t,e){var o=e.db,n=e.collection,r=$t.cols[o+"."+n];if(!(r&&r.top10&&r.top10.length>0)){t.commit("refresh",{db:o,collection:n});var s=new St;s.db=o,s.collection=n,s.find={},s.options={limit:10},Ot.next(s.write()),Ot.pipe(Object(wt["a"])(function(t){var e=t.data;return yt.read(e).id===s.id})).subscribe(function(e){var r=e.data;return t.commit("append",{db:o,collection:n,item:Pt.read(r).data})})}}},mutations:{refresh:function(t,e){var o;t.cols=f["a"]({},t.cols,(o={},o[e.db+"."+e.collection]={top10:[]},o))},append:function(t,e){var o;console.log(e.item);var n=t.cols[e.db+"."+e.collection];t.cols=f["a"]({},t.cols,(o={},o[e.db+"."+e.collection]=f["a"]({},n,{top10:n.top10.concat([e.item])}),o))}},getters:{getTop10:function(t){return function(e){var o=t.cols[e.db+"."+e.collection];return console.log("get",e.db,e.collection,o),(o||{}).top10}}}};n["default"].use(bt["a"]);var At=new bt["a"].Store({modules:{commands:ft,databases:zt,collections:Tt,terminal:Nt},strict:!0}),Bt=(o("202f"),o("24b4")),Lt=o.n(Bt);n["default"].config.productionTip=!1,n["default"].use(Lt.a),new n["default"]({router:dt,store:At,render:function(t){return t(l)}}).$mount("#app")}});
//# sourceMappingURL=app.365013ef.js.map