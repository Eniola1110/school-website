<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const isOpen = ref(false);
function closeMenu() {
    isOpen.value = false
}
</script>

<template>
    <nav class="navbar">
        <div class="nav-menu">

            <!-- nav-text -->
            <RouterLink to="/" class="logo">
              <div class="logo-text">
                <span class="logo-main">Kell's School</span>
                <span class="logo-subtitle">Preschool & Nursery</span>
              </div>
            </RouterLink>

            <!-- mobile Toggle -->
           <div class="menu-icon" @click="isOpen = !isOpen"><i class="fa fa-bars"   aria-hidden="true"></i>
            </div>
            <!-- nav-links -->

            <div class="links" :class="{ active: isOpen}">
            <RouterLink to="/" @click="closeMenu">Home</RouterLink>
            <RouterLink to="/about" @click="closeMenu">About Us</RouterLink>
            <RouterLink to="/program" @click="closeMenu">Program</RouterLink>
            <RouterLink to="/admission" @click="closeMenu">Admission</RouterLink>
            <RouterLink to="/contact" @click="closeMenu">Contact Us</RouterLink>
            </div>
        </div>
    </nav>
</template>

<style>
    .menu-icon{
        display: none;
    }
   .navbar{
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(255, 253, 244, 0.85);
    backdrop-filter: blur(16px);
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
    padding: 0 2rem ;
   }
   .nav-menu{
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
   }
   .logo{
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
   }
   .logo-text{
    display: flex;
    flex-direction: column;
    line-height: 1.1;
   }
   .logo-main{
    font-family: var(--font-display);
    font-size: 1.3rem;
    font-weight: 800;
    color: var(--coral);
   }
   .logo-sub{
    font-size: 0.68rem;
    font-weight: 600;
    color: var(--sky-dark);
    letter-spacing: 0.5px;
   }
   .links{
    display: flex;
    align-items: center;
    gap: 6px;
    list-style: none;
   }
   .links a{
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 8px 16px;
    border-radius: 50px;
    font-family: var(--font-display);
    font-size: 0.95rem;
    color: var(--dark);
    transition: all 0.25s ease;
    position: relative;
    }
   .links a:hover, .links a.router-link-active {
    background: rgba(255,107,107,0.1);
    color: var(--coral);
    }
   /* Mobile */
   @media (max-width: 768px){
    
    .menu-icon{
        display: block;
        cursor: pointer;
        color: var(--coral);
        font-size: 1.8rem;
        transition: 0.3s;
        }
    .links{
        position: absolute;
        top: 70px;
        right: 0;
        background: var(--white);
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