import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/new_note",
        name: "NewNote",
        component: () =>
            import("../views/NewNote.vue"),
    },
    {
        path: "/note/:ts",
        name: "Note",
        component: () =>
            import("../views/Note.vue"),
        props: true,
    },
];

const router = new VueRouter({
    mode: "history",
    base: '/notes_mngr/',
    routes,
});

export default router;