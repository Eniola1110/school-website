import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/About.vue";
import Admission from "@/views/Admission.vue";
import Contact from "@/views/Contact.vue";
import Program from "@/views/Program.vue";
import Testimonial from "@/views/Testimonial.vue";
import Home from "@/views/Home.vue";

const routes = [
    {
        path: "/",
        name: 'Home',
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/admission",
        name: "Admission",
        component: Admission,
    },
    
    {
        path: "/program",
        name: "Program",
        component: Program,
    },
    {
        path: "/testimonial",
        name: "Testimonial",
        component: Testimonial,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
]

const router = createRouter({
    history: createWebHistory('school-website/'),
    routes,

    scrollBehavior(to, from, savedPosition){
        if (savedPosition){
            return savedPosition
        }
        else {
            return {top: 0}
            behavior: 'smooth'
        }
    }
})

export default router