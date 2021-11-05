import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 * import font-awesome
 */

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faSpinner, faSearch)
Vue.component('font-awesome-icon', FontAwesomeIcon)

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = require('jquery');
require('bootstrap');

// Register Vue Components
Vue.component('head-darker', require('./components/Header.vue').default);
Vue.component('navigation', require('./components/Nav.vue').default);
Vue.component('content-card', require('./components/Content.vue').default);
Vue.component('next', require('./components/Next.vue').default);
Vue.component('home', require('./components/Home.vue').default);
Vue.component('playgolf', require('./components/PlayGolf.vue').default);
Vue.component('App', require('./App.vue').default);

Vue.use(VueRouter)
import router from './router.js'
import App from './App.vue'

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})