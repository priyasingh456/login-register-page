import Vue from 'vue';
import Router from 'vue-router';
import RegisterPage from '../components/RegisterPage.vue';
import LoginPage from '../components/LoginPage.vue';
import HomePage from '../components/HomePage.vue';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'home-page',
            path: '/',
            component: HomePage
        },
        {
            name: 'sign-up',
            path: '/register',
            component: RegisterPage
        },
        {
            name: 'login-page',
            path: '/login',
            component: LoginPage
        }
    ]
});

export default router