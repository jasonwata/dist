exports.ids = [73,20];
exports.modules = {

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(26);

// EXTERNAL MODULE: ./mixins/layout-config.js
var layout_config = __webpack_require__(37);

// EXTERNAL MODULE: external "vue-luma"
var external_vue_luma_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Page.vue?vue&type=script&lang=js&
/* harmony default export */ var Pagevue_type_script_lang_js_ = ({mixins:[layout_config["a" /* default */],external_vue_luma_["routeToMixin"]],layout:function layout(_ref){var store=_ref.store,route=_ref.route;return route.params.layout?route.params.layout:store.getters.settings.layout.layout;},data:function data(){return{title:null};},computed:{breadcrumb:function breadcrumb(){return[{text:this.$t('Home'),to:this.routeTo(this.routes.home)},{text:this.$t(this.title),active:true}];},headerClass:function headerClass(){return null;},headerEffects:function headerEffects(){return'waterfall';},headerImage:function headerImage(){return null;},headerContentClass:function headerContentClass(){return null;},headerCondenses:function headerCondenses(){return false;},headerContentComponent:function headerContentComponent(){return null;},headerContentComponentProps:function headerContentComponentProps(){return null;},guest:function guest(){return false;},subLayout:function subLayout(){return false;},subLayoutHasScrollingRegion:function subLayoutHasScrollingRegion(){return true;},subLayoutDrawer:function subLayoutDrawer(){return false;},subLayoutDrawerId:function subLayoutDrawerId(){return'sub-layout-drawer';},subLayoutDrawerAlign:function subLayoutDrawerAlign(){return'end';}},created:function created(){this.emitOptions();},methods:{emitOptions:function emitOptions(){var _this=this;var options=['guest','subLayout','subLayoutHasScrollingRegion','subLayoutDrawerId','subLayoutDrawerAlign','subLayoutDrawer','headerClass','headerEffects','headerImage','headerContentClass','headerCondenses','headerContentComponent','headerContentComponentProps'];options.map(function(option){if(_this[option]!==undefined){_this.$root.$emit("luma::".concat(option),_this[option]);}});}},head:function head(){return{title:"".concat(this.$t(this.title)," - ").concat(this.$store.state.brand)};}});
// CONCATENATED MODULE: ./components/Page.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Pagevue_type_script_lang_js_ = (Pagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/Page.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Pagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7015871f"
  
)

/* harmony default export */ var Page = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_layout/home.vue?vue&type=template&id=7832cae6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('luma-home-page',{attrs:{"title":_vm.title,"container-class":_vm.containerClass,"local-page-header":_vm.localPageHeader,"header-image":_vm.headerImage,"blog-posts1":_vm.blogPosts1,"blog-posts2":_vm.blogPosts2}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_layout/home.vue?vue&type=template&id=7832cae6&

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(2);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "regenerator-runtime/runtime"
var runtime_ = __webpack_require__(21);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: ./components/Page.vue + 2 modules
var Page = __webpack_require__(220);

// EXTERNAL MODULE: external "vue-luma"
var external_vue_luma_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_layout/home.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var homevue_type_script_lang_js_ = ({components:{LumaHomePage:external_vue_luma_["LumaHomePage"]},extends:Page["a" /* default */],data:function data(){return{title:this.$t('Home')};},computed:{blogPosts1:function blogPosts1(){return[{image:"sketch",category:"Sketch",title:"Merge Duplicates Inconsistent Symbols",author_avatar:"/images/256_luke-porter-261779-unsplash.jpg",to:this.routes.blogPost},{image:"invision",category:"inVision",title:"Design Systems Essentials",author_avatar:"/images/256_michael-dam-258165-unsplash.jpg",to:this.routes.blogPost},{image:"photoshop",category:"Photoshop",title:"Semantic Logo Design",author_avatar:"/images/256_rsz_1andy-lee-642320-unsplash.jpg",to:this.routes.blogPost}];},blogPosts2:function blogPosts2(){return[{avatar:"/images/paths/invision_200x168.png",title:"Design Systems Essentials",views:35,tag:"inVision",date:"11 Nov, 2018 07:46 AM",avatarGroup:true,avatarCount:3,avatars:["/images/256_rsz_1andy-lee-642320-unsplash.jpg","/images/256_michael-dam-258165-unsplash.jpg","/images/256_luke-porter-261779-unsplash.jpg"],to:this.routes.blogPost}];},guest:function guest(){return true;},localPageHeader:function localPageHeader(){return this.$root.layoutName!=='fixed';},headerClass:function headerClass(){if(this.$root.layoutName==='fixed'){return'mdk-header--bg-dark bg-dark mb-0';}},headerEffects:function headerEffects(){if(this.$root.layoutName==='fixed'){return'parallax-background waterfall';}},headerImage:function headerImage(){if(this.$root.layoutName==='fixed'){return'/images/photodune-4161018-group-of-students-m.jpg';}},headerContentClass:function headerContentClass(){if(this.$root.layoutName==='fixed'){return'justify-content-center';}},headerCondenses:function headerCondenses(){return this.$root.layoutName==='fixed';},headerContentComponent:function headerContentComponent(){return external_vue_luma_["HomeHero"];}},asyncData:function asyncData(_ref){return asyncToGenerator_default()(/*#__PURE__*/regenerator_default.a.mark(function _callee(){var app;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:app=_ref.app;return _context.abrupt("return",{title:app.i18n.t('Home')});case 2:case"end":return _context.stop();}}},_callee);}))();}});
// CONCATENATED MODULE: ./pages/_layout/home.vue?vue&type=script&lang=js&
 /* harmony default export */ var _layout_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/_layout/home.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _layout_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0231a309"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./pages/_layout/home.vue + 4 modules
var home = __webpack_require__(221);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({extends:home["default"],layout:'fixed'});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/index.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "187a0044"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map