(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{752:function(t,n,e){"use strict";e(29),e(32);var r=e(114),o=e(64),c={mixins:[r.a,o.Kb],layout:function(t){var n=t.store,e=t.route;return e.params.layout?e.params.layout:n.getters.settings.layout.layout},data:function(){return{title:null}},computed:{breadcrumb:function(){return[{text:this.$t("Home"),to:this.routeTo(this.routes.home)},{text:this.$t(this.title),active:!0}]},headerClass:function(){return null},headerEffects:function(){return"waterfall"},headerImage:function(){return null},headerContentClass:function(){return null},headerCondenses:function(){return!1},headerContentComponent:function(){return null},headerContentComponentProps:function(){return null},guest:function(){return!1},subLayout:function(){return!1},subLayoutHasScrollingRegion:function(){return!0},subLayoutDrawer:function(){return!1},subLayoutDrawerId:function(){return"sub-layout-drawer"},subLayoutDrawerAlign:function(){return"end"}},created:function(){this.emitOptions()},methods:{emitOptions:function(){var t=this;["guest","subLayout","subLayoutHasScrollingRegion","subLayoutDrawerId","subLayoutDrawerAlign","subLayoutDrawer","headerClass","headerEffects","headerImage","headerContentClass","headerCondenses","headerContentComponent","headerContentComponentProps"].map((function(option){void 0!==t[option]&&t.$root.$emit("luma::".concat(option),t[option])}))}},head:function(){return{title:"".concat(this.$t(this.title)," - ").concat(this.$store.state.brand)}}},l=e(63),component=Object(l.a)(c,void 0,void 0,!1,null,null,null);n.a=component.exports},772:function(t,n,e){"use strict";e.r(n);var r=e(22),o=e.n(r),c=(e(84),e(37)),l=e.n(c),d=e(752),h={components:{LumaInstructorDashboardPage:e(64).C},extends:d.a,asyncData:function(t){return l()(o.a.mark((function n(){var e;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.app,n.abrupt("return",{title:e.i18n.t("Dashboard")});case 2:case"end":return n.stop()}}),n)})))()}},f=e(63),component=Object(f.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("luma-instructor-dashboard-page",{attrs:{title:this.title,breadcrumb:this.breadcrumb,"container-class":this.containerClass}})}),[],!1,null,null,null);n.default=component.exports}}]);