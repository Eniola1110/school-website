<script setup>
import Footer from '@/components/Footer.vue';
</script>

<template>
        <section id="Home">

            <div class="banner">
                <p class="welcome">Welcome to Excellence</p>
                <h1>Ascend <span>School</span></h1>
                <p>"Inspiring Greatness"</p>
                <p>Empowering young minds through world-class education, innovation, and character development since 2005. </p>
                <RouterLink to="/Contact"><button>Call Us Now</button></RouterLink>
            </div>
            <section>
               <Footer/>
            </section>

        </section>
</template>

<style scoped>
     .welcome{
        background-color: transparent;
     }
</style>