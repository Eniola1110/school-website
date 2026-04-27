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
                     Our primary focus lies in illuminating the path forward, while nourishing our endeavors with love. In this era of heightened awareness, we firmly believe that a comprehensive education holds the key to overcoming life's myriad challenges. With the radiance of our knowledge and the warmth of our compassion, we aspire to attain nothing less than the very best.
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
                  <h3>1500+</h3>
                  <p>Students Enrolled</p>
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
               <h2>Programs</h2>
               <div class="programs">
                  <div class="program-card">
                     <i class="fa fa-book" aria-hidden="true"></i>
                     <h3>Nursery Education</h3>
                     <p>Strong foundation in literacy, numeracy, and critical thinking for ages 4-11, while nurturing creativity in a supportive environment.
                     </p>
                  </div>
                  <div class="program-card">
                     <i class="fa fa-book" aria-hidden="true"></i>
                     <h3>Primary Education</h3>
                     <p>Building on foundational knowledge with a focus on academic growth, creativity, and problem-solving skills.</p>
                  </div>
                  <div class="program-card">
                     <i class="fa fa-book" aria-hidden="true"></i>
                     <h3>Secondary Education</h3>
                     <p>Advanced academic training that develops critical thinking and prepares students for higher education and future careers.</p>
                  </div>
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
      animation: slideInLeft 1s ease-out;
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
        font-size: 1.2rem;
        border-radius: 1rem;
        font-weight: bold;
        transition: 1s ease-in-out;
     }
     .btn:hover{
      background: transparent;
      color: var(--white);
      cursor: pointer;
     }
     .bridge{
        text-align: center;
        /* background: linear-gradient(to right,  rgba(141, 29, 185, 0.1)50%,rgba(39, 6, 224, 0)60%),
        url(../assets/bridge.png); */
        /* background-size: cover; */
        /* background-repeat: no-repeat; */
        background: var(--white);
        min-height: 60vh;
        align-items: center;
        justify-content: center;
     }
     .grid{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
      padding: 5rem 4rem;
      align-items: center;
     }
     .grid1{
      font-size: 4rem;
      font-weight: bold;
      text-align: center;
      color: var(--secondary);
     }
     .grid2{
      font-size: 1.2rem;
      text-align: start;
      color: var(--primary);
      line-height: 2rem;
     }
     .section{
      padding: 2rem 1rem;
      text-align: center;
     }
     .section h2{
      font-size: 2rem;
      margin-bottom: 1rem;
      color: var(--secondary);
      text-align: center;
     }
     .stats{
      display: grid;
      background: var(--secondary);
      grid-template-columns: repeat(4, 1fr) ;
      text-align: center;
      padding: 2rem;
     }
     .stats h3{
      font-size: 3rem;
      color: var(--primary);
     }
     .stats p{
      font-size: 1rem;
      color: var(--white);
     }
     .programs{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
     }
     .program-card{
      background: var(--white);
      margin: 1rem;      
      padding: 1rem 3rem;
      text-align: start;
      border-radius: 1rem;
      border: 1px solid var(--secondary);
      transition: 1s ease-in;
     }
     .program-card:hover{
      background: var(--primary);
      cursor: pointer;
     }
     .program-card i{
      font-size: 2rem;
      color: var(--secondary);
      padding-bottom: 0.5rem;
     }
     .program-card h3{
      color: var(--secondary);
      padding-bottom: 0.8rem;
      font-weight: bold;
      font-size: 1.5rem;
     }
     .program-card p{
      color: var(--secondary);
     }
     .section ul{
      padding: 0;
      margin: 0;
      list-style: none;
     }
     .section li{
      margin: 1rem;
      font-size: 1.5rem;
      background: var(--secondary);
      margin: 1.5rem 0;
      padding: 1.5rem 2rem;
      border-left: 5px solid var(--white);
      border-right: 5px solid var(--white);
      border-radius: 1rem;
      font-weight: bold;
      color: var(--primary);
     }
     .cta {
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      color: var(--white);
      padding: 1rem 2rem;
      text-align: center;
      border-radius: 1rem;
      margin-top: 1rem;
      }
    .cta h2 {
      font-size: 2rem;
      margin-bottom: 20px;
      font-weight: bold;
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
      .btn{
         width: 100%;
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
     .stats{
      grid-template-columns: repeat(2, 1fr);
     }
     .programs{
      grid-template-columns: repeat(1, 1fr);
     }
     }

</style>