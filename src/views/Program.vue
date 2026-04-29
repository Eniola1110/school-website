<script setup>
import Footer from '@/components/Footer.vue';

const programs = [
   {id: 1, name: "Nursery Education",
   desc: "Strong foundation in literacy,    numeracy, and critical thinking for ages 4-11, while nurturing creativity in a supportive environment.",
   icon: "fa fa-book"
   },
   {id: 2, name: "Primary Education",
      desc: "Building on foundational knowledge with a focus on academic growth, creativity, and problem-solving skills.",
      icon: "fa fa-book"
   },
   {id: 3, name: "Secondary Education",
      desc: "Advanced academic training that develops critical thinking and prepares students for higher education and future careers.",
      icon: "fa fa-book"
   },
   {id: 4, name: "Science and Technology",
      desc: "State-of-the-art laboratories and hands-on STEM programs designed to develop critical thinking, problem-solving, and innovation.",
      icon: "fa fa-thermometer-quarter" 
   },
   {id: 5, name: "Arts & Creative",
      desc: "A vibrant creative program that includes music, drama, visual arts, and creative writing. We encourage self-expression, imagination, and confidence.",
      icon: "fa fa-creative-commons"
    },
    {id: 6, name: "Languages & Humanities",
      desc: "Comprehensive language and humanities education that promotes communication, cultural awareness, and global understanding.",
      icon: "fa fa-globe"
    },
    {id: 7, name: "ICT & Coding",
      desc: "Early exposure to technology through computer science, coding, and robotics. Students build digital skills, logical thinking, and creativity, preparing them for the fast-evolving technological world.",
      icon: "fa fa-terminal"
    },
    {id: 8, name: "Sports & Athletics",
      desc: "Well-structured sports and fitness programs that promote physical health, teamwork, discipline, and leadership.",
      icon: "fa fa-trophy"
    },
]
</script>

<template>

       <section id="programs">
        <h1>Our Featured Programs</h1>
        <p class="title">We offer world-class education that nurtures academic excellence, character development and lifelong learning in a supportive and innovative environment. </p>
        <div class="programs">
        <div class="program" v-for="program in programs" :key="program.id">
            <i :class="program.icon"></i>
            <h3>{{ program.name }}</h3>
            <p>{{ program.desc }}</p>
        </div>
        </div>
       </section>
       <section class="facilities">
        <h2>Our Facilities</h2>
        <p>We provide modern learning facilities including well-equipped science laboratories, a rich and up-to-date library, ICT centers and comfortable classrooms. Our environment is designed to support effective learning, creativity and students well-being. </p>
       </section>
       <section class="teaching">
        <h2>Our Teaching Methods</h2>
        <p>Our teaching approach combines academic excellence with practical learning. We use interactive lessons, group activities, and technology-based instruction to engage students actively. Our goal is to develop critical thinking, creativity, and problem-solving skills in every learner.
       </p>
       </section>
       <section class="cta-section">
        <h2>Start Your Child's Journey Today</h2>
        <p>
        Give your child the opportunity to learn, grow, and succeed in a supportive and inspiring environment.
         </p>
  
       <RouterLink to="/admission">
       <button class="btn primary">Apply Now</button>
       </RouterLink>
      </section>
    <section>
        <Footer/>
    </section>
</template>

<style scoped>
 #programs{
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
#programs h1{
    color: var(--secondary);
    padding-top: 2rem;
    text-align: center;
    font-size: 2.5rem;
}
#programs .title{
    color: var(--white);
    text-align: center;
    margin-top: 1rem;
    font-size: 1.1rem;
}
.programs{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background: var(--secondary);
    margin-top:1rem ;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
}
.program{
    margin: 1rem;
    background: var(--primary);
    text-align: start;
    width: 20rem;
    height: 13rem;
    border-radius: 2rem;
    padding: 2rem;
    color: var(--secondary);
    cursor: pointer;
    transition: 1s;
}
.program:hover{
    background: var(--white);
}
.program h3{
    font-size: 2rem;
    padding-bottom: 1rem;
}
.program i{
    font-size: 1.5rem;
    padding-top: 0.5rem;
}
.program p{
    text-align: start;
    font-size: 1rem;
    margin-bottom: 4rem;
}
.facilities,
.teaching {
  padding: 3rem 2rem;
  text-align: center;
}

/* HEADINGS */
.facilities h2,
.teaching h2 {
  font-size: 2rem;
  color: var(--secondary);
  margin-bottom: 1rem;
}

/* PARAGRAPH */
.facilities p,
.teaching p {
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.1rem;
  color: var(--primary);
  line-height: 1.8;
}

/* DIFFERENT BACKGROUNDS FOR CONTRAST */
.facilities {
  background: var(--white);
}

.teaching {
  background: #f5f3ff; /* soft purple background */
}

/* CTA SECTION */
.cta-section {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: var(--white);
  text-align: center;
  padding: 3rem 2rem;
  border-radius: 1rem;
  margin: 2rem;
}

.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

/* BUTTON */
.btn.primary {
  background: var(--white);
  color: var(--primary);
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: 0.3s ease;
}

.btn.primary:hover {
  background: transparent;
  color: var(--white);
  border: 1px solid var(--white);
}
@media (max-width: 768px){
    .programs{
        grid-template-columns: repeat(1, 1fr);
    }
}
@media (min-width:769px) and (max-width: 1240px){
    .programs{
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>