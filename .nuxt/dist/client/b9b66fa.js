(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{732:function(t,n,e){"use strict";e(29),e(32);var r=e(113),o=e(64),l={mixins:[r.a,o.Kb],layout:function(t){var n=t.store,e=t.route;return e.params.layout?e.params.layout:n.getters.settings.layout.layout},data:function(){return{title:null}},computed:{breadcrumb:function(){return[{text:this.$t("Home"),to:this.routeTo(this.routes.home)},{text:this.$t(this.title),active:!0}]},headerClass:function(){return null},headerEffects:function(){return"waterfall"},headerImage:function(){return null},headerContentClass:function(){return null},headerCondenses:function(){return!1},headerContentComponent:function(){return null},headerContentComponentProps:function(){return null},guest:function(){return!1},subLayout:function(){return!1},subLayoutHasScrollingRegion:function(){return!0},subLayoutDrawer:function(){return!1},subLayoutDrawerId:function(){return"sub-layout-drawer"},subLayoutDrawerAlign:function(){return"end"}},created:function(){this.emitOptions()},methods:{emitOptions:function(){var t=this;["guest","subLayout","subLayoutHasScrollingRegion","subLayoutDrawerId","subLayoutDrawerAlign","subLayoutDrawer","headerClass","headerEffects","headerImage","headerContentClass","headerCondenses","headerContentComponent","headerContentComponentProps"].map((function(option){void 0!==t[option]&&t.$root.$emit("luma::".concat(option),t[option])}))}},head:function(){return{title:"".concat(this.$t(this.title)," - ").concat(this.$store.state.brand)}}},c=e(63),component=Object(c.a)(l,void 0,void 0,!1,null,null,null);n.a=component.exports},762:function(t,n,e){"use strict";e.r(n);var r=e(732),o={components:{LumaSignupPage:e(64).M},extends:r.a,layout:"blank",data:function(){return{title:"Sign Up"}}},l=e(63),component=Object(l.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("luma-signup-page",{attrs:{title:this.title}})}),[],!1,null,null,null);n.default=component.exports}}]);