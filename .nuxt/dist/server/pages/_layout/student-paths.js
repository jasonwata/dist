exports.ids = [41];
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

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_layout/student-paths.vue?vue&type=template&id=70b6ff8d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('luma-student-paths-page',{attrs:{"title":_vm.title,"breadcrumb":_vm.breadcrumb,"container-class":_vm.containerClass,"results-heading-sidebar-toggle":_vm.resultsHeadingSidebarToggle}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_layout/student-paths.vue?vue&type=template&id=70b6ff8d&

// EXTERNAL MODULE: ./components/Page.vue + 2 modules
var Page = __webpack_require__(220);

// EXTERNAL MODULE: external "vue-luma"
var external_vue_luma_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_layout/student-paths.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var student_pathsvue_type_script_lang_js_ = ({components:{LumaStudentPathsPage:external_vue_luma_["LumaStudentPathsPage"]},extends:Page["a" /* default */],data:function data(){return{title:this.$t('Paths')};},computed:{guest:function guest(){return true;},subLayout:function subLayout(){return this.$root.layoutName==='fixed';},subLayoutDrawer:function subLayoutDrawer(){return this.$root.layoutName==='fixed'?external_vue_luma_["LibrarySidebar"]:external_vue_luma_["LibraryDrawer"];},subLayoutDrawerId:function subLayoutDrawerId(){return'library-drawer';},resultsHeadingSidebarToggle:function resultsHeadingSidebarToggle(){return this.$root.layoutName==='fixed'?'mobile':true;}}});
// CONCATENATED MODULE: ./pages/_layout/student-paths.vue?vue&type=script&lang=js&
 /* harmony default export */ var _layout_student_pathsvue_type_script_lang_js_ = (student_pathsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/_layout/student-paths.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _layout_student_pathsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1e6ad6bc"
  
)

/* harmony default export */ var student_paths = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=student-paths.js.map