import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Program from "@/views/Program.vue";
import Admission from "@/views/Admission.vue";
import Contact from "@/views/Contact.vue";


const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/program", component: Program },
    { path: "/admission", component: Admission },
    { path: "/contact", component: Contact },
]

const router = createRouter({
    history: createWebHistory('school-website/'),
    routes,
    scrollBehavior() {
    return { top: 0 }
  }
})

export default router