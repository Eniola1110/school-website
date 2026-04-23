<script setup>
import Footer from '@/components/Footer.vue';
</script>

<template>
        <section id="home">
            <div class="banner">
                <p class="welcome"><i class="fa fa-graduation-cap" aria-hidden="true"></i>Welcome to Excellence</p>
                <h1>Ascend <span>School</span></h1>
                <p class="great">"Inspiring Greatness"</p>
                <p class="empower">Empowering young minds through world-class education, innovation, and character development since 2005. </p>
                <RouterLink to="/Contact"><button class="btn"><i class="fa fa-phone" aria-hidden="true"></i>
                Call Us Now</button></RouterLink>
            </div>
            <section>
               <Footer/>
            </section>

        </section>
</template>

<style scoped>
    .banner{
        padding: 2rem;
        font-family: "Open Sans", sans-serif;
    }
     .welcome{
        background-color: rgb(134, 134, 206);
        width: 20%;
        text-align: center;
        padding: 0.3rem 0.2rem;
        border: 0.1rem solid rgb(151, 151, 247);
        border-radius: 2rem;
        font-weight: bold;
        font-size: 0.8rem;
     }
     .welcome i{
        padding-right: 1rem;
     }

     .banner h1{
        padding-top: 2rem;
        font-size: 4rem;
        color: var(--secondary);
     }
     .banner span{
        color: var(--white);
     }
     .great{
        font-size: 1.5rem ;
        color: rgb(228, 218, 218);
        font-weight: bold;
     }
     .empower{
        color: rgb(253, 241, 241);
        font-size: 1rem;
        padding-top: 1rem;
     }
     .btn{
        padding: 1rem 3rem;
        margin-top: 2rem;
        border: 1px solid  rgb(151, 151, 247);
        color: var(--secondary);
        font-size: 1rem;
        border-radius: 1rem;
     }
</style>