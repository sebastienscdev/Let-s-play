import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Next from './components/Next.vue';

export const routes= [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/le-concept',
        name: 'concept',
        component: Next,
    },
    {
        path: '/information',
        name: 'contact',
        component: Next,
    }
];

export default new VueRouter({routes});