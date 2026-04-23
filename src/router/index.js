import { createRouter, createWebHistory } from "vue-router";
import About from "@/view/About.vue";
import Admission from "@/view/Admission.vue";
import Contact from "@/view/Contact.vue";
import Home from "@/view/Home.vue";
import Program from "@/view/Program.vue";
import Testimonial from "@/view/Testimonial.vue";

const routes = [
    {
        path: "/About",
        name: About,
        component: About,
    },
    {
        path: "/Admission",
        name: Admission,
        component: Admission,
    },
    {
        path: "/Contact",
        name: Contact,
        component: Contact,
    },
    {
        path: "/",
        name: Home,
        component: Home,
    },
    {
        path: "/Program",
        name: Program,
        component: Program,
    },
    {
        path: "/Testimonial",
        name: Testimonial,
        component: Testimonial,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router