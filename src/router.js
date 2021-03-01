import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home';
import RouterTest from './views/RouterTest';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/Mini_Shopping_Template_Vue', component: Home },
        { path: '/routertest', component: RouterTest },
    ],
});

export default router;
