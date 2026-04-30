<script setup>
import Footer from '@/components/Footer.vue';
import img1 from '@/assets/bridge.png'
import Img2 from '@/assets/brige.png'

const visions = [
  {id: 1, 
   name: "Our Vision", 
   para: "Our vision is to be forefront in the private education sector and to nurture the children to become all they can be, through quality all-round education, from nursery to secondary level.",
   image: img1,
  },
  {id: 2, 
  name: "Our Mission", 
  para: "We are dedicated to the general advancement of humanity, through quality education, dedicated service and total commitment. With our light and love the best is our lot.",
  image: Img2,
  },
  {id: 3, 
   name: "Our Promise", 
   para: "Every child receives personalized attention, world-class resources, and opportunities to discover their unique greatness",
   image: img1,
  },
  ]
  const policies = [
  {title: "policy1",
   name: "School Policy", 
   para: "The School Policy serves as a guiding document that outlines the rules, regulations and expectations for students, staff and parents within all school premises, including nursery, primary and secondary schools. This comprehensive Policy provides clarity and consistency in matters pertaining to academic performance, behaviour, attendance, health and safety, discipline and school culture. The Policy is designed to create a positive and conducive learning environment that fosters the holistic development of students.",
  },
  {title: "policy2",
   name: "Child Protection Policy", 
   para: "The Child Protection Policy is a omprehensive framework designed to ensure the safety, well-being and protection of children within all school premises, including nursery, primary and secondary schools. This policy outlines the guidelines, procedures and responsibilities that the institution, staff, parents and students must adhere to in order to create a secure and nurturing environment for all children.",
  },
]
</script>
<template>
    <section id="about">
      <div class="container">
        <header>
        <h1>ABOUT US</h1>
        <P>For over a decade, we have been shaping the leaders of tomorrow through excellence in education, character building and innovation.</P>
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
          <div class="card" v-for="vision in visions" :key="vision.id">
            <img :src="vision.image" />
            <h2>{{ vision.name }}</h2>
            <p>{{ vision.para }}</p>
          </div>
        </div>
        <div class="codes">
          <h2>CODES & POLICIES</h2>
          <div class="policy" v-for="policy in policies" :key="policy.title">
            <h1 class="grid1">{{ policy.name }}</h1>
            <p class="grid2">{{ policy.para }}</p>
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
  animation: slideInLeft 1s ease-out;
  /* font-family: "Open Sans", sans-serif; */
  margin-top: 3rem;
}
   @keyframes slideInLeft{
      0%{
         transform: translateX(-100px);
      }
      100%{
         transform: translateX(0);
      }
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
  max-width: 700px;
  margin: auto;
}
.values{
  background: var(--white);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin-top: 2rem;
  min-height: 40vh;
  border-radius: 1rem;
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
.policy{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  padding: 2rem;
  background:var(--secondary) ;
  margin-top: 1rem;
  align-items: center;
}
.policy .grid1{
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: var(--primary);
}
.policy .grid2{
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
  .policy{
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>