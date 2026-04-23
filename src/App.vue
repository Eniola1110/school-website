<script setup>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
</script>

<template>
      <Nav />
  <router-view />
  
</template>

<style>
*{
  padding: 0;
  margin: 0;
  box-shadow: 0;
}
:root{
        --primary: #6d28d9;
        --secondary: #a78bfa;
        --light-bg: #fafaf9;
        --dark-text: #111827;
        --white: #ffffff;
      }
body{
  background: var(--primary);
}
</style>
