<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isOpen = ref(false);
function closeMenu() {
    isOpen.value = false
}
</script>

<template>
    <nav>
        <div class="navbar">
            <div class="logo">
                <img src="../assets/ascendlogo.png" alt="">
                <RouterLink to="/">
                    Ascend School
                </RouterLink>
            </div>
            <div class="menu-icon" @click="isOpen = !isOpen"><i class="fa fa-bars" aria-hidden="true"></i>
           </div>
            <div class="links" :class="{ active: isOpen}">
            <RouterLink to="/" @click="closeMenu">Home</RouterLink>
            <RouterLink to="/about" @click="closeMenu">About Us</RouterLink>
            <RouterLink to="/program" @click="closeMenu">Program</RouterLink>
            <RouterLink to="/admission" @click="closeMenu">Admission</RouterLink>
            <RouterLink to="/testimonial" @click="closeMenu">Testimonial</RouterLink>
            <RouterLink to="/contact" @click="closeMenu">Contact Us</RouterLink>
            </div>
        </div>
    </nav>
</template>

<style>
    .menu-icon{
        display: none;
    }
    nav{
        position: sticky;
        top: 0;
        z-index: 1000;
    }
   .navbar{
    background: var(--gradient-main);
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    font-family: "Open Sans", sans-serif;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid var(--accent);
   }
   .logo{
    display: flex;
    align-items: center;
    gap: 10px;
   }
   .logo img{
    width: 4rem;
   } 

   .logo a{
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--white);
    padding: 0 1rem;
    text-decoration: none;
   }
   .logo a:hover{
    color: var(--accent);
    transform: translateY(-2px);
   }
   .links{
    display: flex;
    gap: 3rem;
    align-items: center;
   }
   .links a {
    color: var(--white);
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;
    position: relative;
    transition: all 0.3s ease;
   }
   .links a:hover {
    color: var(--accent);
    transform: translateY(-2px);
   }
   .link a.router-link-exact-active{
    color: var(--accent);
   }
   /* Mobile */
   @media (max-width: 768px){
    .menu-icon{
        display: block;
        cursor: pointer;
        color: var(--white);
        font-size: 1.8rem;
        transition: 0.3s;
        }
        .menu-icon:hover{
            transform: scale(1.1);
        }
    .navbar{
        padding: 0.5rem;
    }
    .links{
        position: absolute;
        top: 70px;
        right: 0;
        background: var(--gradient-main);
        flex-direction: column;
        width: 100%;
        text-align: center;
        padding: 1rem 0;
        gap: 1.5rem;
        display: none;
    }
    .links.active{
        display: flex;
    }
   }

   @media (min-width: 769px) and (max-width: 1130px){
    .links{
        gap: 2rem;
    }
    .links a {
    font-size: 0.7rem;
   }
   }
   
</style>