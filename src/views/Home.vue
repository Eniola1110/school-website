<script setup>
import Footer from '@/components/Footer.vue';
</script>

<template>
        <section id="home">
            <div class="banner">
                <p class="welcome"><i class="fa fa-graduation-cap" aria-hidden="true"></i>Welcome to Excellence</p>
                <h1>Ascend <span>School</span></h1>
                <p class="great">"Inspiring Greatness"</p>
                <p class="empower">Empowering young minds through world-class education,<br> innovation, and character development since 2005. </p>
                <RouterLink to="/Contact"><button class="btn"><i class="fa fa-phone" aria-hidden="true"></i>
                Call Us Now</button></RouterLink>
            </div>
            <div class="bridge">
               <!-- <img src="../assets/wave.png" alt="" class="wave-shape"> -->
                <div class="grid">
                  <div class="grid1">
                     <p>Quality And Excellence</p>
                  </div>
                  <div class="grid2">
                     <p>We are passionately devoted to the progress of humanity, achieved through high-quality education, dedicated service, and unwavering commitment. <br>
Our primary focus lies in illuminating the path forward, while nourishing our endeavors with love. In this era of heightened awareness, we firmly believe that a comprehensive education holds the key to overcoming life's myriad challenges. With the radiance of our knowledge and the warmth of our                    compassion, we aspire to attain nothing less than the very best.
                      </p>
                  </div>
                </div>
            </div>
            <section>
               <Footer/>
            </section>

        </section>
</template>

<style scoped>
   #home{
      font-family: "Open Sans", sans-serif;
   }
   @keyframes slideInLeft{
      0%{
         transform: translateX(-100px);
      }
      100%{
         transform: translateX(0);
      }
   }
    .banner{
        animation: slideInLeft 1s ease-out;
        padding: 2rem;
        height:70vh;
        position: relative;
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
        color: var(--white);
     }
     .welcome i{
        padding-right: 1rem;
     }

     .banner h1{
        padding-top: 2rem;
        font-size: 5rem;
        color: var(--secondary);
     }
     .banner span{
        color: var(--white);
     }
     .great{
        font-size: 1.8rem ;
        color: rgb(228, 218, 218);
        font-weight: bold;
     }
     .empower{
        color: rgb(253, 241, 241);
        font-size: 1.5rem;
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
     .bridge{
        text-align: center;
        background: linear-gradient(to right,  rgba(186, 132, 214, 0.8)90%,rgba(0,0,0,0)100%),
        url(../assets/brige.png);
        background-size: cover;
        background-repeat: no-repeat;
        height: 60vh;
        align-items: center;
        justify-content: center;
     }
     /* .wave-shape{
      position: absolute;
      bottom: 1rem;
      left: 0;
      width: 100%;
      height: 1.5rem;
      display: block;
      z-index: 1;
      
     }
      */
     .grid{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
      padding: 5rem 4rem;
     }
     .grid1{
      font-size: 4rem;
      font-weight: bold;
      text-align: center;
      color: var(--primary);
     }
     .grid2{
      font-size: 1rem;
      text-align: start;
      color: var(--white);
      line-height: 2rem;
     }
</style>