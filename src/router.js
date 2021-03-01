import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home';
import RouterTest from './views/RouterTest';
import Context_Menu_Original from './views/Components/01_Context_Menu/Context_Menu_Original';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        // Default
        { path: '/', component: Home },
        { path: '/my_component', component: Home },
        { path: '/routertest', component: RouterTest },
        // Components
        { path: '/context_menu_original', component: Context_Menu_Original },
    ],
});

export default router;
