import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Characters from "../views/Characters.vue";
import CharacterInfo from "../views/CharacterInfo.vue";
import NotFound from "../views/NotFound.vue";

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/characters',
            name: 'characters',
            component: Characters
        },
        {
            path: '/character_info/:id',
            name: 'character_info',
            component: CharacterInfo,
            props: true
        },
        {
            path: '/:PathMatch(.*)',
            name: 'NotFound',
            component: NotFound
        }
    ]
})
