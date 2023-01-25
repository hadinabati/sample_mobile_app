import {createRouter, createWebHistory} from '@ionic/vue-router';
import HomePage from "@/views/HomePage.vue";
import test2 from "@/views/test2.vue";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/next',
        component:  test2
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router