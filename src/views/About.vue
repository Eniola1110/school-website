<script setup>
import Footer from '@/components/Footer.vue';
</script>
<template>
    <section id="about">
      <div class="container">
        <header>
        <h1>ABOUT US</h1>
        <P>For over a decades, we have been shaping the leaders of tomorrow through excellence in education, character building and innovation.</P>
        </header>
        <div class="values">
          <h2>Core Values</h2>
          <ul>
            <li>Discipline</li>
            <li>Integrity</li>
            <li>Professionalism</li>
            <li>Love</li>
            <li>Excellence</li>
          </ul>
        </div>
        <div class="vision">
          <div class="card">
            <img src="../assets/bridge.png" alt="">
            <h2>Our Vision</h2>
            <p>Our vision is to be forefront in the prvate education sector and to nurture the children to become all they can be, through quality all-round education, from nursery to secondary level.</p>
          </div>
          <div class="card">
            <img src="../assets/brige.png" alt="">
            <h2>Our Mission</h2>
            <p>We are dedicated o the general advancement of humanity, through quality education, dedicated service and total commitment. With our light and love the best is our lot.</p>
          </div>
          <div class="card">
            <img src="../assets/bridge.png" alt="">
            <h2>Our Promise</h2>
            <p>Every child receives personalized attention, world-class resources, and opportunities to discover their unique greatness.</p>
          </div>
        </div>
        <div class="codes">
          <h2>CODES & POLICIES</h2>
          <div class="policy school-policy">
            <h1 class="grid1">School Policy</h1>
            <p class="grid2">The School Policy serves as a guiding document that outlines the rules, regulations and expectations for students, staff and parents within all school premises, including nursery, primary and secondary schools. This comprehensive Policy provides clarity and consistency in matters pertaining to academic performance, behaviour, attendance, health and safety, discipline and school culture. The Policy is designed to create a positive and conducive learning environment that fosters the holistic development of students.</p>
          </div>
          <div class="policy child-policy">
            <h1 class="grid1">Child Protection Policy</h1>
            <p class="grid2">The Child Protection Policy is a omprehensive framework designed to ensure the safety, well-being and protection of children within all school premises, including nursery, primary and secondary schools. This policy outlines the guidelines, procedures and responsibilities that the institution, staff, parents and students must adhere to in order to create a secure and nuturing environment for all children.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <Footer />
    </section>
</template>

<style scoped>
#about{
  font-family: "Open Sans", sans-serif;
  margin-top: 3rem;
}
header{
  text-align: center;
}
header h1{
  font-size: 4rem;
  color: var(--secondary);
  margin-bottom: 1rem;
}
header p{
  color: var(--white);
  font-size: 1rem;
}
.values{
  background: var(--white);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin-top: 2rem;
  min-height: 40vh;
}
.values h2{
  font-weight: bold;
  color: var(--secondary);
  font-size: 3.5rem;
  text-align: center;
}
.values li{
  list-style: none;
  color: var(--primary);
  font-size: 1.2rem;
}
.vision{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 3rem;
  gap: 3rem;
  padding: 1rem 2rem;
}
.card{
  background: var(--white);
  text-align: center;
  padding: 2rem 0;
  border-radius: 2rem;
  padding-top: 0;
  cursor: pointer;
}
.card img{
  width: 100%;
  border-radius: 2rem;
}
.card h2{
  font-size: 2rem;
  color: var(--secondary);
  margin-bottom: 0.5rem;
  font-weight: bold;
}
.card p{
  color: var(--primary);
  padding: 0 0.5rem;
}
.codes h2{
  text-align: center;
  font-size: 3rem;
  color: var(--secondary);
  margin-top: 2rem;
}
.school-policy{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  padding: 2rem;
  background:var(--secondary) ;
  margin-top: 1rem;
  align-items: center;
}
.school-policy .grid1{
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: var(--primary);
}
.school-policy .grid2{
  color: var(--white);
  font-size: 1.1rem;
}
.child-policy{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  padding: 2rem;
  margin-top: 1rem;
  align-items: center;
}
.child-policy .grid1{
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: var(--secondary);
}
.child-policy .grid2{
  color: var(--white);
  font-size: 1.1rem;
}
@media (max-width: 768px){
  .values{
    grid-template-columns: repeat(1, 1fr);
    padding: 1rem 2rem;
  }
  .values h2{
    text-align: start;
    font-size:3rem;
  }
  .vision{
    grid-template-columns: repeat(1, 1fr);
  }
  .school-policy{
    grid-template-columns: repeat(1, 1fr);
  }
  .child-policy{
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>