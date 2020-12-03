exports.ids = [46];
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

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_layout/student-take-course.vue?vue&type=template&id=7fb7fd14&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('luma-student-take-course-page',{attrs:{"title":_vm.title,"breadcrumb":_vm.breadcrumb,"container-class":_vm.containerClass}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_layout/student-take-course.vue?vue&type=template&id=7fb7fd14&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_layout/student-take-course.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var student_take_coursevue_type_script_lang_js_ = ({components:{LumaStudentTakeCoursePage:external_vue_luma_["LumaStudentTakeCoursePage"]},extends:Page["a" /* default */],data:function data(){return{title:this.$t('Take Course')};},computed:{headerClass:function headerClass(){return'mb-0';}},asyncData:function asyncData(_ref){return asyncToGenerator_default()(/*#__PURE__*/regenerator_default.a.mark(function _callee(){var app;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:app=_ref.app;return _context.abrupt("return",{title:app.i18n.t('Take Course')});case 2:case"end":return _context.stop();}}},_callee);}))();}});
// CONCATENATED MODULE: ./pages/_layout/student-take-course.vue?vue&type=script&lang=js&
 /* harmony default export */ var _layout_student_take_coursevue_type_script_lang_js_ = (student_take_coursevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/_layout/student-take-course.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _layout_student_take_coursevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7b5b5d55"
  
)

/* harmony default export */ var student_take_course = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=student-take-course.js.map