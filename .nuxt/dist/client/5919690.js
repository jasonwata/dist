(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{732:function(t,e,n){"use strict";n(29),n(32);var r=n(113),o=n(64),l={mixins:[r.a,o.Kb],layout:function(t){var e=t.store,n=t.route;return n.params.layout?n.params.layout:e.getters.settings.layout.layout},data:function(){return{title:null}},computed:{breadcrumb:function(){return[{text:this.$t("Home"),to:this.routeTo(this.routes.home)},{text:this.$t(this.title),active:!0}]},headerClass:function(){return null},headerEffects:function(){return"waterfall"},headerImage:function(){return null},headerContentClass:function(){return null},headerCondenses:function(){return!1},headerContentComponent:function(){return null},headerContentComponentProps:function(){return null},guest:function(){return!1},subLayout:function(){return!1},subLayoutHasScrollingRegion:function(){return!0},subLayoutDrawer:function(){return!1},subLayoutDrawerId:function(){return"sub-layout-drawer"},subLayoutDrawerAlign:function(){return"end"}},created:function(){this.emitOptions()},methods:{emitOptions:function(){var t=this;["guest","subLayout","subLayoutHasScrollingRegion","subLayoutDrawerId","subLayoutDrawerAlign","subLayoutDrawer","headerClass","headerEffects","headerImage","headerContentClass","headerCondenses","headerContentComponent","headerContentComponentProps"].map((function(option){void 0!==t[option]&&t.$root.$emit("luma::".concat(option),t[option])}))}},head:function(){return{title:"".concat(this.$t(this.title)," - ").concat(this.$store.state.brand)}}},c=n(63),component=Object(c.a)(l,void 0,void 0,!1,null,null,null);e.a=component.exports},789:function(t,e,n){"use strict";n.r(e);var r=n(732),o={components:{LumaUiDrawerPage:n(64).ob},extends:r.a,data:function(){return{title:"Drawer"}}},l=n(63),component=Object(l.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("luma-ui-drawer-page",{attrs:{title:this.title,breadcrumb:this.breadcrumb,"container-class":this.containerClass,"layout-has-sticky-navbar":"fixed"===this.$root.layoutName||"sticky"===this.$root.layoutName}})}),[],!1,null,null,null);e.default=component.exports}}]);