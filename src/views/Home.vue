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
            <!-- stats -->
            <div class="stats">
               <div>
                  <h3>20+</h3>
                  <p>Years of Excellence</p>
               </div>
               <div>
                  <h3>500+</h3>
                  <p>Students</p>
               </div>
               <div>
                  <h3>100+</h3>
                  <p>Qualified Staff</p>
               </div>
               <div>
                  <h3>95%</h3>
                  <p>Success Rate</p>
               </div>
            </div>
            <!-- programs -->
             <div class="section">
               <div class="programs">
                  <div class="program">Nursery</div>
                  <div class="program">Primary</div>
                  <div class="program">Secondary</div>
               </div>
               <RouterLink to="/program">
                  <button class="btn">View All Programs</button>
               </RouterLink>
             </div>
             <!-- why choose us -->
              <div class="section">
               <h2>Why Choose Us</h2>
               <ul>
                  <li>Qualified Teachers</li>
                  <li>Modern Learning Facilities</li>
                  <li>Safe Environments</li>
                  <li>Strong moral Values</li>
                  <li>Technology-Based Learning</li>
               </ul>
              </div>
              <!-- CTA -->
               <div class="cta">
                  <h2>Enroll Your Child Today</h2>
                  <RouterLink to="/admission">
                     <button class="btn primary">Apply Now</button>
                  </RouterLink>
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
   /* @keyframes slideInLeft{
      0%{
         transform: translateX(-100px);
      }
      100%{
         transform: translateX(0);
      }
   } */
    .banner{
        /* animation: slideInLeft 1s ease-out; */
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
        min-height: 60vh;
        align-items: center;
        justify-content: center;
     }
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
     .section{
      padding: 3rem 2rem;
      text-align: center;
     }
     .section h2{
      font-size: 2rem;
      margin-bottom: 1rem;
      color: var(--secondary);
     }
     .stats{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) ;
      gap: 2rem;
      padding: 3rem 2rem;
      color: var(--secondary);
      justify-content: space-between;
     }
     .stats h3{
      font-size: 3rem;
      color: var(--secondary);
     }
     .stats p{
      font-size: 1rem;
      color: var(--white);
     }
     /* mobile */
     @media (max-width: 768px){
      .banner{
         height: 60vh;
         padding: 2rem 1rem;
      }
      .welcome{
         width: fit-content;
         font-size: 0.7rem;
         padding: 0.4rem 1rem;
      }
      .banner h1{
         font-size: 2.5rem;
      }
      .great{
         font-size: 1.2rem;
      }
      .empower{
         font-size: 1rem;
      }
     .grid{
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 2rem 1rem;
     }
     .grid1{
      font-size: 4rem;
     }
     .grid2{
      font-size: 1rem;
      text-align: start;
      line-height: 1.6rem;
     }
     }

</style>