// router/index.js 
import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(""),
    routes: [
        {
            path: "/",
            name: "main", component: () => import("../components/HelloWorld.vue"),
        },
        {
            path: "/menu1",
            name: "menu1", component: () => import("../components/menu/menu1.vue"),
        },
        {
            path: "/menu2",
            name: "menu2", component: () => import("../components/menu/menu2.vue"),
        },
        {
            path: "/menu3",
            name: "menu3", component: () => import("../components/menu/menu3.vue"),
        },
        {
            path: "/menu4",
            name: "menu4", component: () => import("../components/menu/menu4.vue"),
        },
        // {
        //     path: "/test",
        //     name: "test", component: () => import("../components/test.vue"),
        // },
    ],
});


export default router;
