import Home from './components/Home.vue';
import Login from './components/auth/Login.vue';
import Test from './components/Test.vue';

export const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/test',
        component: Test
    }
]