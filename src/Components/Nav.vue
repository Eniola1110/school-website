<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <div class="container">
            <div>
                <img src="" alt=""><a href="#Home">Ascend School Hub</a>
            </div>
            <div>
            <RouterLink to="Home">Home</RouterLink>
            <RouterLink to="/About">About Us</RouterLink>
            <RouterLink to="/Program">Program</RouterLink>
            <RouterLink to="/Admission">Admission</RouterLink>
            <RouterLink to="/Testimonial">Testimonial</RouterLink>
            <RouterLink to="/Contact">Contact Us</RouterLink>
            </div>
        </div>
    </nav>
</template>

<style scoped>

</style>