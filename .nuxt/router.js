import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5b6ef169 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _a1f2a9e8 = () => interopDefault(import('../pages/_layout/billing.vue' /* webpackChunkName: "pages/_layout/billing" */))
const _399e8353 = () => interopDefault(import('../pages/_layout/billing-history.vue' /* webpackChunkName: "pages/_layout/billing-history" */))
const _1d7c2528 = () => interopDefault(import('../pages/_layout/billing-invoice.vue' /* webpackChunkName: "pages/_layout/billing-invoice" */))
const _6e5a7076 = () => interopDefault(import('../pages/_layout/billing-payment.vue' /* webpackChunkName: "pages/_layout/billing-payment" */))
const _929d964a = () => interopDefault(import('../pages/_layout/billing-upgrade.vue' /* webpackChunkName: "pages/_layout/billing-upgrade" */))
const _0c341061 = () => interopDefault(import('../pages/_layout/blog.vue' /* webpackChunkName: "pages/_layout/blog" */))
const _44c8563c = () => interopDefault(import('../pages/_layout/blog-post.vue' /* webpackChunkName: "pages/_layout/blog-post" */))
const _da198dae = () => interopDefault(import('../pages/_layout/change-password.vue' /* webpackChunkName: "pages/_layout/change-password" */))
const _12812ca7 = () => interopDefault(import('../pages/_layout/discussion.vue' /* webpackChunkName: "pages/_layout/discussion" */))
const _4150095c = () => interopDefault(import('../pages/_layout/discussions.vue' /* webpackChunkName: "pages/_layout/discussions" */))
const _491cfef0 = () => interopDefault(import('../pages/_layout/discussions-ask.vue' /* webpackChunkName: "pages/_layout/discussions-ask" */))
const _1a43d729 = () => interopDefault(import('../pages/_layout/edit-account.vue' /* webpackChunkName: "pages/_layout/edit-account" */))
const _3892a5c4 = () => interopDefault(import('../pages/_layout/edit-account-notifications.vue' /* webpackChunkName: "pages/_layout/edit-account-notifications" */))
const _c76755f6 = () => interopDefault(import('../pages/_layout/edit-account-profile.vue' /* webpackChunkName: "pages/_layout/edit-account-profile" */))
const _5e22f2a7 = () => interopDefault(import('../pages/_layout/faq.vue' /* webpackChunkName: "pages/_layout/faq" */))
const _d1d746d4 = () => interopDefault(import('../pages/_layout/forgot-password.vue' /* webpackChunkName: "pages/_layout/forgot-password" */))
const _80eaa51c = () => interopDefault(import('../pages/_layout/help-center.vue' /* webpackChunkName: "pages/_layout/help-center" */))
const _16a7ef1e = () => interopDefault(import('../pages/_layout/home.vue' /* webpackChunkName: "pages/_layout/home" */))
const _04781807 = () => interopDefault(import('../pages/_layout/instructor-courses.vue' /* webpackChunkName: "pages/_layout/instructor-courses" */))
const _f41b01ba = () => interopDefault(import('../pages/_layout/instructor-dashboard.vue' /* webpackChunkName: "pages/_layout/instructor-dashboard" */))
const _03fc2bea = () => interopDefault(import('../pages/_layout/instructor-earnings.vue' /* webpackChunkName: "pages/_layout/instructor-earnings" */))
const _43d6eb0d = () => interopDefault(import('../pages/_layout/instructor-edit-course.vue' /* webpackChunkName: "pages/_layout/instructor-edit-course" */))
const _5f7b2ec7 = () => interopDefault(import('../pages/_layout/instructor-edit-quiz.vue' /* webpackChunkName: "pages/_layout/instructor-edit-quiz" */))
const _12f71d78 = () => interopDefault(import('../pages/_layout/instructor-profile.vue' /* webpackChunkName: "pages/_layout/instructor-profile" */))
const _be5b51fc = () => interopDefault(import('../pages/_layout/instructor-quizzes.vue' /* webpackChunkName: "pages/_layout/instructor-quizzes" */))
const _70444f04 = () => interopDefault(import('../pages/_layout/instructor-statement.vue' /* webpackChunkName: "pages/_layout/instructor-statement" */))
const _478a498c = () => interopDefault(import('../pages/_layout/login.vue' /* webpackChunkName: "pages/_layout/login" */))
const _3dac118b = () => interopDefault(import('../pages/_layout/messages.vue' /* webpackChunkName: "pages/_layout/messages" */))
const _06658ad7 = () => interopDefault(import('../pages/_layout/pricing.vue' /* webpackChunkName: "pages/_layout/pricing" */))
const _110b0dd2 = () => interopDefault(import('../pages/_layout/signup.vue' /* webpackChunkName: "pages/_layout/signup" */))
const _25c9c328 = () => interopDefault(import('../pages/_layout/student-course.vue' /* webpackChunkName: "pages/_layout/student-course" */))
const _8c175f92 = () => interopDefault(import('../pages/_layout/student-courses.vue' /* webpackChunkName: "pages/_layout/student-courses" */))
const _657d295a = () => interopDefault(import('../pages/_layout/student-dashboard.vue' /* webpackChunkName: "pages/_layout/student-dashboard" */))
const _17d31509 = () => interopDefault(import('../pages/_layout/student-lesson.vue' /* webpackChunkName: "pages/_layout/student-lesson" */))
const _26860468 = () => interopDefault(import('../pages/_layout/student-my-courses.vue' /* webpackChunkName: "pages/_layout/student-my-courses" */))
const _fc59c6c4 = () => interopDefault(import('../pages/_layout/student-my-paths.vue' /* webpackChunkName: "pages/_layout/student-my-paths" */))
const _7a3f793a = () => interopDefault(import('../pages/_layout/student-my-quizzes.vue' /* webpackChunkName: "pages/_layout/student-my-quizzes" */))
const _3c8c87b6 = () => interopDefault(import('../pages/_layout/student-path.vue' /* webpackChunkName: "pages/_layout/student-path" */))
const _58b0102d = () => interopDefault(import('../pages/_layout/student-paths.vue' /* webpackChunkName: "pages/_layout/student-paths" */))
const _6f1954b0 = () => interopDefault(import('../pages/_layout/student-profile.vue' /* webpackChunkName: "pages/_layout/student-profile" */))
const _be883dd8 = () => interopDefault(import('../pages/_layout/student-quiz-result.vue' /* webpackChunkName: "pages/_layout/student-quiz-result" */))
const _5b5da562 = () => interopDefault(import('../pages/_layout/student-skill-assessment.vue' /* webpackChunkName: "pages/_layout/student-skill-assessment" */))
const _84bf48ac = () => interopDefault(import('../pages/_layout/student-skill-result.vue' /* webpackChunkName: "pages/_layout/student-skill-result" */))
const _0a0a76c0 = () => interopDefault(import('../pages/_layout/student-take-course.vue' /* webpackChunkName: "pages/_layout/student-take-course" */))
const _25b2bb3d = () => interopDefault(import('../pages/_layout/student-take-lesson.vue' /* webpackChunkName: "pages/_layout/student-take-lesson" */))
const _62de511a = () => interopDefault(import('../pages/_layout/student-take-quiz.vue' /* webpackChunkName: "pages/_layout/student-take-quiz" */))
const _f4bd12e0 = () => interopDefault(import('../pages/_layout/teachers.vue' /* webpackChunkName: "pages/_layout/teachers" */))
const _6b41fbc1 = () => interopDefault(import('../pages/_layout/ui-alerts.vue' /* webpackChunkName: "pages/_layout/ui-alerts" */))
const _cc1d0600 = () => interopDefault(import('../pages/_layout/ui-app-layout.vue' /* webpackChunkName: "pages/_layout/ui-app-layout" */))
const _40882cfa = () => interopDefault(import('../pages/_layout/ui-avatar.vue' /* webpackChunkName: "pages/_layout/ui-avatar" */))
const _029fdc29 = () => interopDefault(import('../pages/_layout/ui-cards.vue' /* webpackChunkName: "pages/_layout/ui-cards" */))
const _3d1aea74 = () => interopDefault(import('../pages/_layout/ui-chart-area.vue' /* webpackChunkName: "pages/_layout/ui-chart-area" */))
const _51570eea = () => interopDefault(import('../pages/_layout/ui-chart-bar.vue' /* webpackChunkName: "pages/_layout/ui-chart-bar" */))
const _75589f3b = () => interopDefault(import('../pages/_layout/ui-chart-doughnut.vue' /* webpackChunkName: "pages/_layout/ui-chart-doughnut" */))
const _e8c942a6 = () => interopDefault(import('../pages/_layout/ui-chart-line.vue' /* webpackChunkName: "pages/_layout/ui-chart-line" */))
const _0e2d809d = () => interopDefault(import('../pages/_layout/ui-chart-radar.vue' /* webpackChunkName: "pages/_layout/ui-chart-radar" */))
const _110c951b = () => interopDefault(import('../pages/_layout/ui-drawer.vue' /* webpackChunkName: "pages/_layout/ui-drawer" */))
const _13c148cc = () => interopDefault(import('../pages/_layout/ui-drawer-layout.vue' /* webpackChunkName: "pages/_layout/ui-drawer-layout" */))
const _226e914d = () => interopDefault(import('../pages/_layout/ui-fixed-layout.vue' /* webpackChunkName: "pages/_layout/ui-fixed-layout" */))
const _0079082e = () => interopDefault(import('../pages/_layout/ui-form-image-group.vue' /* webpackChunkName: "pages/_layout/ui-form-image-group" */))
const _7d193af5 = () => interopDefault(import('../pages/_layout/ui-forms.vue' /* webpackChunkName: "pages/_layout/ui-forms" */))
const _6da250b7 = () => interopDefault(import('../pages/_layout/ui-header.vue' /* webpackChunkName: "pages/_layout/ui-header" */))
const _1e8a85b0 = () => interopDefault(import('../pages/_layout/ui-header-layout.vue' /* webpackChunkName: "pages/_layout/ui-header-layout" */))
const _834ad740 = () => interopDefault(import('../pages/_layout/ui-icons.vue' /* webpackChunkName: "pages/_layout/ui-icons" */))
const _2aad9bad = () => interopDefault(import('../pages/_layout/ui-input-group-merge.vue' /* webpackChunkName: "pages/_layout/ui-input-group-merge" */))
const _3e6362ac = () => interopDefault(import('../pages/_layout/ui-perfect-scrollbar.vue' /* webpackChunkName: "pages/_layout/ui-perfect-scrollbar" */))
const _2b8fafbc = () => interopDefault(import('../pages/_layout/ui-sidebar.vue' /* webpackChunkName: "pages/_layout/ui-sidebar" */))
const _7e14174c = () => interopDefault(import('../pages/_layout/ui-sidebar-menu.vue' /* webpackChunkName: "pages/_layout/ui-sidebar-menu" */))
const _19b23474 = () => interopDefault(import('../pages/_layout/ui-syntax-highlight.vue' /* webpackChunkName: "pages/_layout/ui-syntax-highlight" */))
const _79a1c4b0 = () => interopDefault(import('../pages/_layout/ui-tabs.vue' /* webpackChunkName: "pages/_layout/ui-tabs" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/ro",
    component: _5b6ef169,
    name: "index___ro"
  }, {
    path: "/ro/:layout/billing",
    component: _a1f2a9e8,
    name: "layout-billing___ro"
  }, {
    path: "/ro/:layout/billing-history",
    component: _399e8353,
    name: "layout-billing-history___ro"
  }, {
    path: "/ro/:layout/billing-invoice",
    component: _1d7c2528,
    name: "layout-billing-invoice___ro"
  }, {
    path: "/ro/:layout/billing-payment",
    component: _6e5a7076,
    name: "layout-billing-payment___ro"
  }, {
    path: "/ro/:layout/billing-upgrade",
    component: _929d964a,
    name: "layout-billing-upgrade___ro"
  }, {
    path: "/ro/:layout/blog",
    component: _0c341061,
    name: "layout-blog___ro"
  }, {
    path: "/ro/:layout/blog-post",
    component: _44c8563c,
    name: "layout-blog-post___ro"
  }, {
    path: "/ro/:layout/change-password",
    component: _da198dae,
    name: "layout-change-password___ro"
  }, {
    path: "/ro/:layout/discussion",
    component: _12812ca7,
    name: "layout-discussion___ro"
  }, {
    path: "/ro/:layout/discussions",
    component: _4150095c,
    name: "layout-discussions___ro"
  }, {
    path: "/ro/:layout/discussions-ask",
    component: _491cfef0,
    name: "layout-discussions-ask___ro"
  }, {
    path: "/ro/:layout/edit-account",
    component: _1a43d729,
    name: "layout-edit-account___ro"
  }, {
    path: "/ro/:layout/edit-account-notifications",
    component: _3892a5c4,
    name: "layout-edit-account-notifications___ro"
  }, {
    path: "/ro/:layout/edit-account-profile",
    component: _c76755f6,
    name: "layout-edit-account-profile___ro"
  }, {
    path: "/ro/:layout/faq",
    component: _5e22f2a7,
    name: "layout-faq___ro"
  }, {
    path: "/ro/:layout/forgot-password",
    component: _d1d746d4,
    name: "layout-forgot-password___ro"
  }, {
    path: "/ro/:layout/help-center",
    component: _80eaa51c,
    name: "layout-help-center___ro"
  }, {
    path: "/ro/:layout/home",
    component: _16a7ef1e,
    name: "layout-home___ro"
  }, {
    path: "/ro/:layout/instructor-courses",
    component: _04781807,
    name: "layout-instructor-courses___ro"
  }, {
    path: "/ro/:layout/instructor-dashboard",
    component: _f41b01ba,
    name: "layout-instructor-dashboard___ro"
  }, {
    path: "/ro/:layout/instructor-earnings",
    component: _03fc2bea,
    name: "layout-instructor-earnings___ro"
  }, {
    path: "/ro/:layout/instructor-edit-course",
    component: _43d6eb0d,
    name: "layout-instructor-edit-course___ro"
  }, {
    path: "/ro/:layout/instructor-edit-quiz",
    component: _5f7b2ec7,
    name: "layout-instructor-edit-quiz___ro"
  }, {
    path: "/ro/:layout/instructor-profile",
    component: _12f71d78,
    name: "layout-instructor-profile___ro"
  }, {
    path: "/ro/:layout/instructor-quizzes",
    component: _be5b51fc,
    name: "layout-instructor-quizzes___ro"
  }, {
    path: "/ro/:layout/instructor-statement",
    component: _70444f04,
    name: "layout-instructor-statement___ro"
  }, {
    path: "/ro/:layout/login",
    component: _478a498c,
    name: "layout-login___ro"
  }, {
    path: "/ro/:layout/messages",
    component: _3dac118b,
    name: "layout-messages___ro"
  }, {
    path: "/ro/:layout/pricing",
    component: _06658ad7,
    name: "layout-pricing___ro"
  }, {
    path: "/ro/:layout/signup",
    component: _110b0dd2,
    name: "layout-signup___ro"
  }, {
    path: "/ro/:layout/student-course",
    component: _25c9c328,
    name: "layout-student-course___ro"
  }, {
    path: "/ro/:layout/student-courses",
    component: _8c175f92,
    name: "layout-student-courses___ro"
  }, {
    path: "/ro/:layout/student-dashboard",
    component: _657d295a,
    name: "layout-student-dashboard___ro"
  }, {
    path: "/ro/:layout/student-lesson",
    component: _17d31509,
    name: "layout-student-lesson___ro"
  }, {
    path: "/ro/:layout/student-my-courses",
    component: _26860468,
    name: "layout-student-my-courses___ro"
  }, {
    path: "/ro/:layout/student-my-paths",
    component: _fc59c6c4,
    name: "layout-student-my-paths___ro"
  }, {
    path: "/ro/:layout/student-my-quizzes",
    component: _7a3f793a,
    name: "layout-student-my-quizzes___ro"
  }, {
    path: "/ro/:layout/student-path",
    component: _3c8c87b6,
    name: "layout-student-path___ro"
  }, {
    path: "/ro/:layout/student-paths",
    component: _58b0102d,
    name: "layout-student-paths___ro"
  }, {
    path: "/ro/:layout/student-profile",
    component: _6f1954b0,
    name: "layout-student-profile___ro"
  }, {
    path: "/ro/:layout/student-quiz-result",
    component: _be883dd8,
    name: "layout-student-quiz-result___ro"
  }, {
    path: "/ro/:layout/student-skill-assessment",
    component: _5b5da562,
    name: "layout-student-skill-assessment___ro"
  }, {
    path: "/ro/:layout/student-skill-result",
    component: _84bf48ac,
    name: "layout-student-skill-result___ro"
  }, {
    path: "/ro/:layout/student-take-course",
    component: _0a0a76c0,
    name: "layout-student-take-course___ro"
  }, {
    path: "/ro/:layout/student-take-lesson",
    component: _25b2bb3d,
    name: "layout-student-take-lesson___ro"
  }, {
    path: "/ro/:layout/student-take-quiz",
    component: _62de511a,
    name: "layout-student-take-quiz___ro"
  }, {
    path: "/ro/:layout/teachers",
    component: _f4bd12e0,
    name: "layout-teachers___ro"
  }, {
    path: "/ro/:layout/ui-alerts",
    component: _6b41fbc1,
    name: "layout-ui-alerts___ro"
  }, {
    path: "/ro/:layout/ui-app-layout",
    component: _cc1d0600,
    name: "layout-ui-app-layout___ro"
  }, {
    path: "/ro/:layout/ui-avatar",
    component: _40882cfa,
    name: "layout-ui-avatar___ro"
  }, {
    path: "/ro/:layout/ui-cards",
    component: _029fdc29,
    name: "layout-ui-cards___ro"
  }, {
    path: "/ro/:layout/ui-chart-area",
    component: _3d1aea74,
    name: "layout-ui-chart-area___ro"
  }, {
    path: "/ro/:layout/ui-chart-bar",
    component: _51570eea,
    name: "layout-ui-chart-bar___ro"
  }, {
    path: "/ro/:layout/ui-chart-doughnut",
    component: _75589f3b,
    name: "layout-ui-chart-doughnut___ro"
  }, {
    path: "/ro/:layout/ui-chart-line",
    component: _e8c942a6,
    name: "layout-ui-chart-line___ro"
  }, {
    path: "/ro/:layout/ui-chart-radar",
    component: _0e2d809d,
    name: "layout-ui-chart-radar___ro"
  }, {
    path: "/ro/:layout/ui-drawer",
    component: _110c951b,
    name: "layout-ui-drawer___ro"
  }, {
    path: "/ro/:layout/ui-drawer-layout",
    component: _13c148cc,
    name: "layout-ui-drawer-layout___ro"
  }, {
    path: "/ro/:layout/ui-fixed-layout",
    component: _226e914d,
    name: "layout-ui-fixed-layout___ro"
  }, {
    path: "/ro/:layout/ui-form-image-group",
    component: _0079082e,
    name: "layout-ui-form-image-group___ro"
  }, {
    path: "/ro/:layout/ui-forms",
    component: _7d193af5,
    name: "layout-ui-forms___ro"
  }, {
    path: "/ro/:layout/ui-header",
    component: _6da250b7,
    name: "layout-ui-header___ro"
  }, {
    path: "/ro/:layout/ui-header-layout",
    component: _1e8a85b0,
    name: "layout-ui-header-layout___ro"
  }, {
    path: "/ro/:layout/ui-icons",
    component: _834ad740,
    name: "layout-ui-icons___ro"
  }, {
    path: "/ro/:layout/ui-input-group-merge",
    component: _2aad9bad,
    name: "layout-ui-input-group-merge___ro"
  }, {
    path: "/ro/:layout/ui-perfect-scrollbar",
    component: _3e6362ac,
    name: "layout-ui-perfect-scrollbar___ro"
  }, {
    path: "/ro/:layout/ui-sidebar",
    component: _2b8fafbc,
    name: "layout-ui-sidebar___ro"
  }, {
    path: "/ro/:layout/ui-sidebar-menu",
    component: _7e14174c,
    name: "layout-ui-sidebar-menu___ro"
  }, {
    path: "/ro/:layout/ui-syntax-highlight",
    component: _19b23474,
    name: "layout-ui-syntax-highlight___ro"
  }, {
    path: "/ro/:layout/ui-tabs",
    component: _79a1c4b0,
    name: "layout-ui-tabs___ro"
  }, {
    path: "/",
    component: _5b6ef169,
    name: "index___en"
  }, {
    path: "/:layout/billing",
    component: _a1f2a9e8,
    name: "layout-billing___en"
  }, {
    path: "/:layout/billing-history",
    component: _399e8353,
    name: "layout-billing-history___en"
  }, {
    path: "/:layout/billing-invoice",
    component: _1d7c2528,
    name: "layout-billing-invoice___en"
  }, {
    path: "/:layout/billing-payment",
    component: _6e5a7076,
    name: "layout-billing-payment___en"
  }, {
    path: "/:layout/billing-upgrade",
    component: _929d964a,
    name: "layout-billing-upgrade___en"
  }, {
    path: "/:layout/blog",
    component: _0c341061,
    name: "layout-blog___en"
  }, {
    path: "/:layout/blog-post",
    component: _44c8563c,
    name: "layout-blog-post___en"
  }, {
    path: "/:layout/change-password",
    component: _da198dae,
    name: "layout-change-password___en"
  }, {
    path: "/:layout/discussion",
    component: _12812ca7,
    name: "layout-discussion___en"
  }, {
    path: "/:layout/discussions",
    component: _4150095c,
    name: "layout-discussions___en"
  }, {
    path: "/:layout/discussions-ask",
    component: _491cfef0,
    name: "layout-discussions-ask___en"
  }, {
    path: "/:layout/edit-account",
    component: _1a43d729,
    name: "layout-edit-account___en"
  }, {
    path: "/:layout/edit-account-notifications",
    component: _3892a5c4,
    name: "layout-edit-account-notifications___en"
  }, {
    path: "/:layout/edit-account-profile",
    component: _c76755f6,
    name: "layout-edit-account-profile___en"
  }, {
    path: "/:layout/faq",
    component: _5e22f2a7,
    name: "layout-faq___en"
  }, {
    path: "/:layout/forgot-password",
    component: _d1d746d4,
    name: "layout-forgot-password___en"
  }, {
    path: "/:layout/help-center",
    component: _80eaa51c,
    name: "layout-help-center___en"
  }, {
    path: "/:layout/home",
    component: _16a7ef1e,
    name: "layout-home___en"
  }, {
    path: "/:layout/instructor-courses",
    component: _04781807,
    name: "layout-instructor-courses___en"
  }, {
    path: "/:layout/instructor-dashboard",
    component: _f41b01ba,
    name: "layout-instructor-dashboard___en"
  }, {
    path: "/:layout/instructor-earnings",
    component: _03fc2bea,
    name: "layout-instructor-earnings___en"
  }, {
    path: "/:layout/instructor-edit-course",
    component: _43d6eb0d,
    name: "layout-instructor-edit-course___en"
  }, {
    path: "/:layout/instructor-edit-quiz",
    component: _5f7b2ec7,
    name: "layout-instructor-edit-quiz___en"
  }, {
    path: "/:layout/instructor-profile",
    component: _12f71d78,
    name: "layout-instructor-profile___en"
  }, {
    path: "/:layout/instructor-quizzes",
    component: _be5b51fc,
    name: "layout-instructor-quizzes___en"
  }, {
    path: "/:layout/instructor-statement",
    component: _70444f04,
    name: "layout-instructor-statement___en"
  }, {
    path: "/:layout/login",
    component: _478a498c,
    name: "layout-login___en"
  }, {
    path: "/:layout/messages",
    component: _3dac118b,
    name: "layout-messages___en"
  }, {
    path: "/:layout/pricing",
    component: _06658ad7,
    name: "layout-pricing___en"
  }, {
    path: "/:layout/signup",
    component: _110b0dd2,
    name: "layout-signup___en"
  }, {
    path: "/:layout/student-course",
    component: _25c9c328,
    name: "layout-student-course___en"
  }, {
    path: "/:layout/student-courses",
    component: _8c175f92,
    name: "layout-student-courses___en"
  }, {
    path: "/:layout/student-dashboard",
    component: _657d295a,
    name: "layout-student-dashboard___en"
  }, {
    path: "/:layout/student-lesson",
    component: _17d31509,
    name: "layout-student-lesson___en"
  }, {
    path: "/:layout/student-my-courses",
    component: _26860468,
    name: "layout-student-my-courses___en"
  }, {
    path: "/:layout/student-my-paths",
    component: _fc59c6c4,
    name: "layout-student-my-paths___en"
  }, {
    path: "/:layout/student-my-quizzes",
    component: _7a3f793a,
    name: "layout-student-my-quizzes___en"
  }, {
    path: "/:layout/student-path",
    component: _3c8c87b6,
    name: "layout-student-path___en"
  }, {
    path: "/:layout/student-paths",
    component: _58b0102d,
    name: "layout-student-paths___en"
  }, {
    path: "/:layout/student-profile",
    component: _6f1954b0,
    name: "layout-student-profile___en"
  }, {
    path: "/:layout/student-quiz-result",
    component: _be883dd8,
    name: "layout-student-quiz-result___en"
  }, {
    path: "/:layout/student-skill-assessment",
    component: _5b5da562,
    name: "layout-student-skill-assessment___en"
  }, {
    path: "/:layout/student-skill-result",
    component: _84bf48ac,
    name: "layout-student-skill-result___en"
  }, {
    path: "/:layout/student-take-course",
    component: _0a0a76c0,
    name: "layout-student-take-course___en"
  }, {
    path: "/:layout/student-take-lesson",
    component: _25b2bb3d,
    name: "layout-student-take-lesson___en"
  }, {
    path: "/:layout/student-take-quiz",
    component: _62de511a,
    name: "layout-student-take-quiz___en"
  }, {
    path: "/:layout/teachers",
    component: _f4bd12e0,
    name: "layout-teachers___en"
  }, {
    path: "/:layout/ui-alerts",
    component: _6b41fbc1,
    name: "layout-ui-alerts___en"
  }, {
    path: "/:layout/ui-app-layout",
    component: _cc1d0600,
    name: "layout-ui-app-layout___en"
  }, {
    path: "/:layout/ui-avatar",
    component: _40882cfa,
    name: "layout-ui-avatar___en"
  }, {
    path: "/:layout/ui-cards",
    component: _029fdc29,
    name: "layout-ui-cards___en"
  }, {
    path: "/:layout/ui-chart-area",
    component: _3d1aea74,
    name: "layout-ui-chart-area___en"
  }, {
    path: "/:layout/ui-chart-bar",
    component: _51570eea,
    name: "layout-ui-chart-bar___en"
  }, {
    path: "/:layout/ui-chart-doughnut",
    component: _75589f3b,
    name: "layout-ui-chart-doughnut___en"
  }, {
    path: "/:layout/ui-chart-line",
    component: _e8c942a6,
    name: "layout-ui-chart-line___en"
  }, {
    path: "/:layout/ui-chart-radar",
    component: _0e2d809d,
    name: "layout-ui-chart-radar___en"
  }, {
    path: "/:layout/ui-drawer",
    component: _110c951b,
    name: "layout-ui-drawer___en"
  }, {
    path: "/:layout/ui-drawer-layout",
    component: _13c148cc,
    name: "layout-ui-drawer-layout___en"
  }, {
    path: "/:layout/ui-fixed-layout",
    component: _226e914d,
    name: "layout-ui-fixed-layout___en"
  }, {
    path: "/:layout/ui-form-image-group",
    component: _0079082e,
    name: "layout-ui-form-image-group___en"
  }, {
    path: "/:layout/ui-forms",
    component: _7d193af5,
    name: "layout-ui-forms___en"
  }, {
    path: "/:layout/ui-header",
    component: _6da250b7,
    name: "layout-ui-header___en"
  }, {
    path: "/:layout/ui-header-layout",
    component: _1e8a85b0,
    name: "layout-ui-header-layout___en"
  }, {
    path: "/:layout/ui-icons",
    component: _834ad740,
    name: "layout-ui-icons___en"
  }, {
    path: "/:layout/ui-input-group-merge",
    component: _2aad9bad,
    name: "layout-ui-input-group-merge___en"
  }, {
    path: "/:layout/ui-perfect-scrollbar",
    component: _3e6362ac,
    name: "layout-ui-perfect-scrollbar___en"
  }, {
    path: "/:layout/ui-sidebar",
    component: _2b8fafbc,
    name: "layout-ui-sidebar___en"
  }, {
    path: "/:layout/ui-sidebar-menu",
    component: _7e14174c,
    name: "layout-ui-sidebar-menu___en"
  }, {
    path: "/:layout/ui-syntax-highlight",
    component: _19b23474,
    name: "layout-ui-syntax-highlight___en"
  }, {
    path: "/:layout/ui-tabs",
    component: _79a1c4b0,
    name: "layout-ui-tabs___en"
  }],

  fallback: false
}

export function createRouter () {
  const router = new Router(routerOptions)
  const resolve = router.resolve.bind(router)

  // encodeURI(decodeURI()) ~> support both encoded and non-encoded urls
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = encodeURI(decodeURI(to))
    }
    return resolve(to, current, append)
  }

  return router
}
