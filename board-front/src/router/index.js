// router/index.js 
import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(""),
    routes: [
        {
            path: "/",
            name: "main", component: () => import("../components/HelloWorld.vue"),
        },
        // {
        //     path: "/test",
        //     name: "test", component: () => import("../components/test.vue"),
        // },
    ],
});


export default router;
