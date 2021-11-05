// Require Vue
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import router from './router.js'
import App from './App.vue'

// Register Vue Components
Vue.component('head-darker', require('./components/Header.vue').default);
Vue.component('navigation', require('./components/Nav.vue').default);
Vue.component('playgolf', require('./components/PlayGolf.vue').default);
Vue.component('content-card', require('./components/Content.vue').default);
Vue.component('App', require('./App.vue').default);

// Initialize Vue
const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
  })