// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'

import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'

//import css
import 'vue-beauty/package/style/vue-beauty.min.css'

//import components
import vueBeauty from 'vue-beauty'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import Index from 'components/index/index'
import Charts from 'components/charts/charts'
import Css3h5 from 'components/css3h5/css3h5'
import Project from 'components/project/project'
import About from 'components/about/about'

const routes = [
  {path: '/index', component: Index},
  {path: '/charts', component: Charts},
  {path: '/css3h5', component: Css3h5},
  {path: '/project', component: Project},
  {path: '/about', component: About}
]

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'http://project.lazy-minus-your-intelligence.com:3030'

Vue.use(VueMaterial)
Vue.use(VueBlu)
Vue.use(vueBeauty)
Vue.use(ElementUI)

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: {App}
}).$mount('#app')

router.push('/index')
