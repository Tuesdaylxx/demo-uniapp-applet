(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-profile-profile"],{"07c1":function(t,i,n){var a=n("76b0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=n("4f06").default;e("2eacc542",a,!0,{sourceMap:!1,shadowMode:!1})},"6f9f":function(t,i,n){"use strict";n.r(i);var a=n("8174"),e=n("9c5c");for(var u in e)["default"].indexOf(u)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(u);n("ab69");var o,c=n("f0c5"),r=Object(c["a"])(e["default"],a["b"],a["c"],!1,null,"5164a9cc",null,!1,a["a"],o);i["default"]=r.exports},"76b0":function(t,i,n){var a=n("24fb");i=a(!1),i.push([t.i,".profile[data-v-5164a9cc]{position:fixed;top:40px;left:0;right:0;bottom:0;background-color:#f5f5f5;padding:20px}.uni-form-item[data-v-5164a9cc]{margin:10px 0}.uni-form-item .uni-input[data-v-5164a9cc]{background-color:#fff;padding:8px;color:#989898;font-size:12px}.uni-form-item .title[data-v-5164a9cc]{padding:20px 0}.submit[data-v-5164a9cc]{margin-top:40px;background-color:#8095ff;color:#fff}.reset[data-v-5164a9cc]{margin-top:15px;background-color:#ecf0f0}",""]),t.exports=i},8174:function(t,i,n){"use strict";var a;n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return u})),n.d(i,"a",(function(){return a}));var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"profile"},[n("v-uni-view",[n("v-uni-form",{on:{submit:function(i){arguments[0]=i=t.$handleEvent(i),t.formSubmit.apply(void 0,arguments)},reset:function(i){arguments[0]=i=t.$handleEvent(i),t.formReset.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("姓名")]),n("v-uni-input",{staticClass:"uni-input",attrs:{focus:!0,placeholder:"请输入姓名"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("性别")]),n("v-uni-radio-group",{attrs:{name:"radio"}},[n("v-uni-label",[n("v-uni-radio",{attrs:{value:"radio1"}}),n("v-uni-text",[t._v("男")])],1),n("v-uni-label",[n("v-uni-radio",{attrs:{value:"radio2"}}),n("v-uni-text",[t._v("女")])],1)],1)],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("爱好")]),n("v-uni-checkbox-group",{attrs:{name:"checkbox"}},[n("v-uni-label",[n("v-uni-checkbox",{attrs:{value:"checkbox1"}}),n("v-uni-text",[t._v("读书")])],1),n("v-uni-label",[n("v-uni-checkbox",{attrs:{value:"checkbox2"}}),n("v-uni-text",[t._v("写字")])],1)],1)],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("年龄")]),n("v-uni-slider",{attrs:{value:"50",name:"slider","show-value":!0}})],1),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{staticClass:"submit",attrs:{"form-type":"submit"}},[t._v("提交")]),n("v-uni-button",{staticClass:"reset",attrs:{type:"default","form-type":"reset"}},[t._v("重置")])],1)],1)],1)],1)},u=[]},"9c5c":function(t,i,n){"use strict";n.r(i);var a=n("fb1d"),e=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(u);i["default"]=e.a},ab69:function(t,i,n){"use strict";var a=n("07c1"),e=n.n(a);e.a},fb1d:function(t,i,n){"use strict";n("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("e9c4");var a={data:function(){return{}},methods:{formSubmit:function(t){console.log("form发生了submit事件，携带数据为："+JSON.stringify(t.detail.value));var i=t.detail.value;uni.showModal({content:"表单数据内容："+JSON.stringify(i),showCancel:!1})},formReset:function(t){console.log("清空数据")}}};i.default=a}}]);