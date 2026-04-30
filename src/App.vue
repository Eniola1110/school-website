<script setup>
import Nav from './components/Nav.vue'

</script>

<template>
      <Nav />
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&family=Miniver&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Outfit:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

html{
  scroll-behavior: smooth;
}
*{
  padding: 0;
  margin: 0;
}
:root{
        /* --primary: #6d28d9;
        --secondary: #a78bfa;
        --light-bg: #fafaf9;
        --dark-text: #111827;
        --white: #ffffff; */

        --primary: #38bdf8;
        --secondary: #a78bfa;
        --accent: #facc15;
        --green: #4ade80;
        --pink: #fb7185;
        --orange: #fb923c;
        --bg-light: #f9fafb;
        --white: #ffffff;
        --text-dark: #1f2937;
        --text-light: #6b7280;
        --gradient-main: linear-gradient(135deg, #38bdf8, #a78bfa);
        --gradient-warm: linear-gradient(135deg, #facc15, #fb923c);
      }
body{
  background: var(--primary);
  min-height: 200vh;
   font-family: "Poppins", sans-serif;
}
</style>
