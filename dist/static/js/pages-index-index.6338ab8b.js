(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0d9b":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("ac1f");var n={data:function(){return{background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,placeholder:"开始输入..."}},methods:{onEditorReady:function(){var t=this;uni.createSelectorQuery().select("#editor").context((function(i){t.editorCtx=i.context})).exec()},undo:function(){this.editorCtx.undo()}}};i.default=n},"2eae":function(t,i,e){t.exports=e.p+"static/img/pink.8fd0e1dc.jpg"},"4ebb":function(t,i,e){"use strict";var n=e("c573"),a=e.n(n);a.a},"70de":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"wrap"},[n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"page-section swiper"},[n("v-uni-view",{staticClass:"page-section-spacing"},[n("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration}},[n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item uni-bg-red"},[n("v-uni-image",{attrs:{src:e("a18a")}})],1)],1),n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item uni-bg-green"},[n("v-uni-image",{attrs:{src:e("ebdb")}})],1)],1),n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item uni-bg-blue"},[n("v-uni-image",{attrs:{src:e("2eae")}})],1)],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"container"},[n("v-uni-editor",{staticClass:"ql-container",attrs:{id:"editor",placeholder:t.placeholder},on:{ready:function(i){arguments[0]=i=t.$handleEvent(i),t.onEditorReady.apply(void 0,arguments)}}}),n("v-uni-button",{attrs:{type:"warn"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.undo.apply(void 0,arguments)}}},[t._v("撤销")])],1)],1)},r=[]},8069:function(t,i,e){"use strict";e.r(i);var n=e("0d9b"),a=e.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},a18a:function(t,i,e){t.exports=e.p+"static/img/blue.7cd3df04.jpg"},c573:function(t,i,e){var n=e("d97a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("d7d08138",n,!0,{sourceMap:!1,shadowMode:!1})},d97a:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".wrap[data-v-f41d2a72]{position:fixed;top:40px;left:0;right:0;bottom:0;background-color:#f5f5f5}uni-image[data-v-f41d2a72]{width:100%}.container[data-v-f41d2a72]{margin:80px 15px 0;padding:15px;background-color:#fff;border-radius:15px}",""]),t.exports=i},ebdb:function(t,i,e){t.exports=e.p+"static/img/green.0cc40ba4.jpg"},f75a:function(t,i,e){"use strict";e.r(i);var n=e("70de"),a=e("8069");for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("4ebb");var o,c=e("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"f41d2a72",null,!1,n["a"],o);i["default"]=s.exports}}]);