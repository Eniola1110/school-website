<script setup>
import { RouterLink } from 'vue-router';
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
            <div class="links">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About Us</RouterLink>
            <RouterLink to="/program">Program</RouterLink>
            <RouterLink to="/admission">Admission</RouterLink>
            <RouterLink to="/testimonial">Testimonial</RouterLink>
            <RouterLink to="/contact">Contact Us</RouterLink>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    :root{
        --primary: #6d28d9;
        --secondary: #a78bfa;
        --light-bg: #fafaf9;
        --dark-text: #111827;
        --white: #ffffff;
    }
   .navbar{
    background: var(--secondary);
    display: flex;
    justify-content: space-between;
    position: sticky;
    padding: 1.2rem;
    font-family: "Open Sans", sans-serif;
   }
    
   .logo{
    display: flex;
    align-items: center;
    gap: 10px;
   }
   .logo img{
    width: 4rem;
    border-radius: 2rem;
   } 

   .logo a{
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--white);
    padding: 0 1rem;
    text-decoration: none;
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
    font-size: 1.3rem;
   }

   
</style>