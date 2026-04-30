<script setup>
import Footer from '@/components/Footer.vue'
import img1 from '@/assets/bridge.png'
import img2 from '@/assets/brige.png'
const programs = [
  {
    id: 1,
    name: "Nursery Education",
    icon: "fa fa-book",
    img: img1,
    desc: "A fun and safe start to learning through play, creativity, and early literacy skills."
  },
  {
    id: 2,
    name: "Primary Education",
    icon: "fa fa-book",
    img: img2,
    desc: "Building strong academic foundations with interactive and engaging lessons."
  },
  {
    id: 3,
    name: "Secondary Education",
    icon: "fa fa-book",
    img: img1,
    desc: "Preparing students for higher education and future success with advanced learning."
  }
]
const stats = [
   {id: 1, 
      h3: "20+",
      p: "Years of Excellence"
   },
      {id: 2, 
      h3: "1500+",
      p: "Students Enrolled"
   },
      {id: 3, 
      h3: "100+",
      p: "Qualified Staff"
   },
      {id: 4, 
      h3: "95%",
      p: "Success Rate"
   }
]
const cards = [
   {id: 1, 
    icon: "fa fa-chalkboard-teacher",
    h3: "Qualified Teachers",
    p: "Experienced and caring educators guiding every child."
   },
   {id: 2, 
    icon: "fa fa-school",
    h3: "Modern Facilities",
    p: "Well-equipped classrooms for effective learning."
   },
   {id: 3, 
    icon: "fa fa-shield-alt",
    h3: "Safe Environment",
    p: "A secure and friendly place for children to grow."
   },
   {id: 4, 
    icon: "fa fa-star",
    h3: "Strong Values",
    p: "We build character and discipline alongside academics."
   },
   {id: 5, 
    icon: "fa fa-laptop",
    h3: "Tech Learning",
    p: "Preparing students for the digital future."
   },
   {id: 6, 
    icon: "fa fa-school",
    h3: "Modern Facilities",
    p: "Well-equipped classrooms for effective learning."
   }
]
</script>

<template>
        <section id="home">
            <div class="banner">
                <div class="banner-text">
                   <p class="welcome"><i class="fa fa-graduation-cap" aria-hidden="true"></i>Welcome to Ascend</p>

                   <h1>Learning Made <span>Fun</span></h1>
                   <p class="great">Where Every Child Shines</p>
                   <p class="empower">
                     We help children grow, explore and succed in a fun and safe environment.
                   </p>

                   <RouterLink to="/Contact"><button class="btn"><i class="fa fa-phone" aria-hidden="true"></i>
                  Contact Us</button></RouterLink>
                </div>

                <div class="banner-image">
                  <img src="../assets/banner-image.jpg" alt="">
                </div>
            </div>
            <div class="bridge">
                <div class="grid">
                  <div class="grid-image">
                     <img src="../assets/learning.png" alt="">
                  </div>
                  <div class="grid-text">
                     <h2>Learning with joy</h2>
                     <p>At Ascend School, we create a fun and engaging environment where children grow academically, socially and creativity. </p>

                     <div class="features">
                        <p><i class="fa fa-book"></i>Interactive Learning</p>
                        <p><i class="fa fa-paint-brush"></i>Creative Activities</p>
                        <p><i class="fa fa-chalkboard-teacher"></i>Caring Teachers</p>
                     </div>
                  </div>
                </div>
            </div>
            <!-- stats -->
             <div class="stats">
               <div class="stat" v-for="stat in stats" :key="stat.id">  
                  <i class="fa fa-users"></i>
                  <h3>{{ stat.h3 }}</h3>
                  <p>{{ stat.p }}</p>
               </div>
             </div>
            <!--  programs -->
             <div class="section">
             <h2>Our Programs</h2>

             <div class="programs-grid">
             <div class="program-card" v-for="program in programs" :key="program.id">
 
              <div class="img-box">
                <img :src="program.img" alt="">
              </div>

               <div class="program-content">
               <i :class="program.icon"></i>
               <h3>{{ program.name }}</h3>
               <p>{{ program.desc }}</p>
               </div>

              </div>
              </div>
             <div class="program-btn">
             <RouterLink to="/program">
             <button class="btn">View All Programs</button>
             </RouterLink>
             </div>
            </div>

             <!-- why choose us -->
            <div class="section-choose">
              <h2>Why Choose Us</h2>

             <div class="why-grid">
              <div class="why-card" v-for="card in cards" :key="card.id">
               <i :class="card.icon"></i>
               <h3>{{ card.h3 }}</h3>
               <p>{{ card.p }}</p>
              </div>
             </div>
           </div>
              <!-- CTA -->
               <div class="cta">
                  <div class="cta-content">
                     <h2>Enroll Your Child Today</h2>
                     <p>Give your child the best start in life with quality education, caring teachers, and a fun learning environment.</p>

                     <router-link to="/admission">
                        <button class="btn cta-btn">Apply Now</button>
                     </router-link>
                  </div>
               </div>
            <section>
               <Footer/>
            </section>

        </section>
</template>

<style scoped>
html{
   scroll-behavior: smooth;
}
   #home{
      animation: slideInLeft 1s ease-out;
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
        min-height:80vh;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-content: space-between;
        background: var(--gradient-main);
        color: var(--white);
    }
    .banner-image img{
      width: 500px;
      border-radius: 2rem;
      margin-left: 2rem;
      margin-top: 1rem;
      cursor: pointer;
      transition: 0.5s;
    }
    .banner-image img:hover{
      transform: scale(1.05);
    }
     .welcome{
        padding: 0.3rem 0.5rem;
        font-size: 0.8rem;
        background: var(--accent);
        color: var(--text-dark);
        width: fit-content;
        border-radius: 2rem;
        font-weight: bold;
     }
     .welcome i{
        padding-right: 0.9rem;
     }

     .banner h1{
        padding-top: 2rem;
        font-size: 4rem;
        color: var(--accent);
     }
     .banner span{
        color: var(--text-dark);
     }
     .great{
        font-size: 1.8rem ;
        color: var(--text-dark);
        font-weight: bold;
     }
     .empower{
        color: rgb(253, 241, 241);
        font-size: 1.5rem;
        padding-top: 1rem;
     }
     .btn{
         padding: 0.8rem 2rem;
         margin-top: 1.5rem;
         border: none;
         background: var(--accent);
         color: var(--text-dark);
         font-size: 1rem;
         border-radius: 2rem;
         font-weight: bold;
         transition: 0.3s ease;
         cursor: pointer;
         text-align: center;
     }
     .btn:hover{
      background: var(--text-dark);
      color: var(--white);
      transform: scale(1.05);
     }
     .bridge{
        background: var(--pink);
        padding: 5rem 4rem;
     }
     .grid{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
      align-items: center;
     }
     .grid-image img{
      width: 100%;
      border-radius: 1.5rem;
      cursor: pointer;
     }
     .grid-image img:hover{
     transform: scale(1.03);
     transition: 0.3s ease;
   }
    .grid-text{
      background: var(--p);
    }
     .grid-text h2{
      font-size: 2.5rem;
      color: var(--white);
      margin-bottom: 1rem;
     }
     .grid-text p{
      font-size: 1.5rem;
      color: var(--text-dark);
      margin-bottom: 1rem;
     }
     .features p{
      background: var(--green);
      padding: 0.7rem 1rem;
      margin: 0.5rem 0;
      border-radius: 10px;
      font-size: 1.3rem;
      box-shadow: 0 3px 10px rgba(0,0,0,0.05);
     }
     .features i{
       font-size: 2.5rem;
       padding-right: 2rem;
       color: var(--text-dark);
     }
     .stats{
      background: var(--gradient-main);
      text-align: center;
      padding: 3rem 1rem;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
     }
     .stat{
      background: var(--white);
      margin: 1rem;
      padding: 1.5rem;
      border-radius: 1.5rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
     }
     .stat:hover{
      transform: translateY(-5px);
     }
     .stat i{
      font-size: 2rem;
      color: var(--pink);
     }
     .stat h3{
      font-size: 3rem;
      color: var(--primary);
     }
     .stat p{
      font-size: 1rem;
      color: var(--white);
     }
     .section{
      background: var(--pink);
      padding: 2rem;
      /* text-align: center; */
     }
     .program-btn{
      margin-top: 2rem;
      display: flex;
      justify-content: center;
     }
     .section h2{
      text-align: center;
      color: var(--text-light);
      font-size: 2.5rem;
     }
     .programs-grid{
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     gap: 2rem;
     margin-top: 2rem;
     }

/* CARD STYLE */
    .program-card{
    background: var(--primary);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 6px 15px rgba(0,0,0,0.06);
    transition: 0.3s ease;
    }

   .program-card:hover{
    transform: translateY(-8px);
   }

/* IMAGE */
   .img-box img{
   width: 100%;
   height: 180px;
   object-fit: cover;
  }

/* CONTENT */
  .program-content{
   padding: 1rem;
   text-align: left;
   }

  .program-content i{
   font-size: 3rem;
   color: var(--text-dark);
   }

   .program-content h3{
    color: var(--text-dark);
    margin: 0.5rem 0;
    font-size: 2rem;
    }

   .program-content p{
    color: var(--text-light);
    font-size: 1.1rem;
    line-height: 1.4rem;
    }
     .section-choose{
      background: var(--gradient-warm);
      padding: 2rem;
     }
     .section-choose h2{
      font-size: 2rem;
      color: var(--text-dark);
      text-align: center;
     }
     .why-grid{
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     gap: 2rem;
     margin-top: 2rem;
     }
    .why-card{
     background: var(--green);
     padding: 2rem 1.5rem;
     border-radius: 20px;
     text-align: center;
     box-shadow: 0 5px 15px rgba(0,0,0,0.05);
     transition: 0.3s ease;
     }

    .why-card:hover{
    transform: translateY(-8px);
    }

    .why-card i{
    font-size: 4rem;
    margin-bottom: 1rem;
    color: var(--text-dark);
    }

    .why-card h3{
    color: var(--secondary);
    margin-bottom: 0.5rem;
    font-size: 2rem;
    }

    .why-card p{
    color: var(--white);
    font-size: 1.2rem;
    cursor: pointer;
    }
    .cta{
      background: var(--gradient-main);
      color: var(--white);
      padding: 4rem 2rem;
      margin-top: 3rem;
      text-align: center;
      border-radius: 2rem;
      overflow: hidden;
    }
     .cta h2{
      font-size: 2.5rem;
      margin-bottom: 1rem;
     }
     .cta p{
      font-size: 1.2rem;
      margin-bottom: 2rem;
      color: var(--text-dark);
     }
     /* mobile */
     @media (max-width: 768px){
      .banner{
         grid-template-columns: repeat(1,1fr);
         min-height: 80vh;
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
      .banner-image img{
         width: 400px;
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
     .stats{
      grid-template-columns: repeat(2, 1fr);
     }
     .why-grid{
     grid-template-columns: 1fr;
     }
     .programs-grid{
      grid-template-columns: repeat(1, 1fr);
     }
     }

</style>