(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{752:function(t,e,n){"use strict";n(29),n(32);var o=n(114),r=n(64),l={mixins:[o.a,r.Kb],layout:function(t){var e=t.store,n=t.route;return n.params.layout?n.params.layout:e.getters.settings.layout.layout},data:function(){return{title:null}},computed:{breadcrumb:function(){return[{text:this.$t("Home"),to:this.routeTo(this.routes.home)},{text:this.$t(this.title),active:!0}]},headerClass:function(){return null},headerEffects:function(){return"waterfall"},headerImage:function(){return null},headerContentClass:function(){return null},headerCondenses:function(){return!1},headerContentComponent:function(){return null},headerContentComponentProps:function(){return null},guest:function(){return!1},subLayout:function(){return!1},subLayoutHasScrollingRegion:function(){return!0},subLayoutDrawer:function(){return!1},subLayoutDrawerId:function(){return"sub-layout-drawer"},subLayoutDrawerAlign:function(){return"end"}},created:function(){this.emitOptions()},methods:{emitOptions:function(){var t=this;["guest","subLayout","subLayoutHasScrollingRegion","subLayoutDrawerId","subLayoutDrawerAlign","subLayoutDrawer","headerClass","headerEffects","headerImage","headerContentClass","headerCondenses","headerContentComponent","headerContentComponentProps"].map((function(option){void 0!==t[option]&&t.$root.$emit("luma::".concat(option),t[option])}))}},head:function(){return{title:"".concat(this.$t(this.title)," - ").concat(this.$store.state.brand)}}},c=n(63),component=Object(c.a)(l,void 0,void 0,!1,null,null,null);e.a=component.exports},759:function(t,e,n){"use strict";n.r(e);var o=n(22),r=n.n(o),l=(n(84),n(37)),c=n.n(l),h=n(752),d=n(64),m={components:{LumaBlogPage:d.o},extends:h.a,data:function(){return{title:this.$t("Blog")}},computed:{blogPosts1:function(){return[{image:"sketch",category:"Sketch",title:"Merge Duplicates Inconsistent Symbols",author_avatar:"/images/256_luke-porter-261779-unsplash.jpg",to:this.routes.blogPost},{image:"invision",category:"inVision",title:"Design Systems Essentials",author_avatar:"/images/256_michael-dam-258165-unsplash.jpg",to:this.routes.blogPost},{image:"photoshop",category:"Photoshop",title:"Semantic Logo Design",author_avatar:"/images/256_rsz_1andy-lee-642320-unsplash.jpg",to:this.routes.blogPost}]},blogPosts2:function(){return[{avatar:"/images/paths/photoshop_200x168.png",title:"Semantic Logo Design",views:78,tag:"Photoshop",date:"10 Nov, 2018 08:25 AM",avatarGroup:!0,avatarCount:2,avatars:["/images/256_joao-silas-636453-unsplash.jpg","/images/256_jeremy-banks-798787-unsplash.jpg","/images/256_daniel-gaffey-1060698-unsplash.jpg"],to:this.routes.blogPost},{avatar:"/images/paths/invision_200x168.png",title:"Design Systems Essentials",views:35,tag:"inVision",date:"11 Nov, 2018 07:46 AM",avatarGroup:!0,avatarCount:3,avatars:["/images/256_rsz_1andy-lee-642320-unsplash.jpg","/images/256_michael-dam-258165-unsplash.jpg","/images/256_luke-porter-261779-unsplash.jpg"],to:this.routes.blogPost},{avatar:"/images/paths/sketch_200x168.png",title:"Merge Duplicates Inconsistent Symbols & Styles",views:78,tag:"Sketch",date:"09 Nov, 2018 07:13 PM",avatarGroup:!0,avatarCount:1,avatars:["/images/256_rsz_1andy-lee-642320-unsplash.jpg","/images/256_michael-dam-258165-unsplash.jpg","/images/256_luke-porter-261779-unsplash.jpg"],to:this.routes.blogPost}]},guest:function(){return!0},localPageHeader:function(){return"fixed"!==this.$root.layoutName},headerClass:function(){return"fixed"===this.$root.layoutName?"mdk-header--bg-primary mb-0":"mb-0"},headerEffects:function(){if("fixed"===this.$root.layoutName)return"parallax-background waterfall"},headerImage:function(){return"/images/1280_work-station-straight-on-view.jpg"},headerContentComponentProps:function(){return{title:this.$t("Get Inspired"),subtitle:this.$t("Free resources and inspiration on hot topics with articles, talks, podcasts, developer resources and more."),cta:!1,link:!1,containerClass:this.containerClass}},headerCondenses:function(){return"fixed"===this.$root.layoutName},headerContentComponent:function(){return d.g}},asyncData:function(t){return c()(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,e.abrupt("return",{title:n.i18n.t("Blog")});case 2:case"end":return e.stop()}}),e)})))()}},f=n(63),component=Object(f.a)(m,(function(){var t=this.$createElement;return(this._self._c||t)("luma-blog-page",{attrs:{title:this.title,"container-class":this.containerClass,"local-page-header":this.localPageHeader,"header-content-component-props":this.headerContentComponentProps,"header-image":this.headerImage,"blog-posts1":this.blogPosts1,"blog-posts2":this.blogPosts2}})}),[],!1,null,null,null);e.default=component.exports}}]);