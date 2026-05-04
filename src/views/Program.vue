<script setup>
import Footer from '@/components/Footer.vue'
import program1 from '@/assets/happykid.png'
import program2 from '@/assets/storyimage.png'
const programs = [
  {
    name: 'Little Seedlings Nursery',
    level: 'Nursery Class',
    age: '12 months - 2 yrs',
    img: program1,
    desc: 'A warm, gentle introduction to the world beyond home. Our nursery provides a loving, safe space where babies and toddlers can explore, babble, and begin building their first friendships.',
    details: [
      { icon: 'fa-solid fa-baby', label: 'Age Group', value: '12 months - 2 years' },
      { icon: 'fa-solid fa-clock', label: 'Hours', value: '7:30 AM - 5:30 PM' },
      { icon: 'fa-solid fa-chalkboard-user', label: 'Ratio', value: '1:3 (Educator to Child)' },
      { icon: 'fa-solid fa-calendar-days', label: 'Days', value: 'Mon - Fri (flexible)' },
    ],
    highlights: ['Sensory play & exploration', 'Language & early communication', 'Music & movement', 'Safe outdoor play', 'Social-emotional foundations'],
  },
  {
    name: 'Sunflower Toddler Class',
    level: 'Toddler Program',
    age: '2 - 3 yrs',
    img: program2,
    desc: 'The toddler years are full of wonder and "why?" — and we embrace every question! Our Sunflower class builds independence, self-expression, and early learning skills through structured play.',
    details: [
      { icon: 'fa-solid fa-baby', label: 'Age Group', value: '2 - 3 years' },
      { icon: 'fa-solid fa-clock', label: 'Hours', value: '7:30 AM - 5:30 PM' },
      { icon: 'fa-solid fa-chalkboard-user', label: 'Ratio', value: '1:4 (Educator to Child)' },
      { icon: 'fa-solid fa-calendar-days', label: 'Days', value: 'Mon - Fri' },
    ],
    highlights: ['Creative arts & crafts', 'Early literacy & phonics', 'Number sense & counting', 'Emotional regulation', 'Social play & sharing', 'Outdoor nature exploration'],
  },
  {
    name: 'Rainbow Preschool',
    level: 'Preschool Program',
    age: '3 - 5 yrs',
    img: program1,
    desc: 'Our flagship preschool program prepares children for school in the most joyful, confident way possible. With a rich curriculum built on play, discovery, and creativity, children leave Rainbow Preschool ready, excited, and capable.',
    details: [
      { icon: 'fa-solid fa-baby', label: 'Age Group', value: '3 - 5 years' },
      { icon: 'fa-solid fa-clock', label: 'Hours', value: '7:30 AM - 5:30 PM' },
      { icon: 'fa-solid fa-chalkboard-user', label: 'Ratio', value: '1:6 (Educator to Child)' },
      { icon: 'fa-solid fa-calendar-days', label: 'Days', value: 'Mon - Fri' },
    ],
    highlights: ['School-readiness literacy', 'STEM & science labs', 'Art, drama & music', 'Second language introduction', 'Problem-solving & critical thinking', 'Leadership & confidence', 'Digital literacy basics'],
  },
]

const extras = [
  { icon: 'fa-solid fa-music', name: 'Music & Movement', desc: 'Weekly sessions with our resident music teacher — singing, rhythm, and dance.', bg: '#fff9c4' },
  { icon: 'fa-solid fa-leaf', name: 'Garden Club', desc: 'Children plant, tend, and harvest their own mini vegetable gardens.', bg: '#e8f5e9' },
  { icon: 'fa-solid fa-microscope', name: 'Little Scientists', desc: 'Fun, safe experiments that spark curiosity about the world around us.', bg: '#e3f2fd' },
  { icon: 'fa-solid fa-masks-theater', name: 'Drama & Storytelling', desc: 'Role play, puppet shows, and creative storytelling every week.', bg: '#fce4ec' },
  { icon: 'fa-solid fa-person-running', name: 'Sports & Fitness', desc: 'Structured gross motor play, mini-sports, and outdoor adventure time.', bg: '#f3e5f5' },
  { icon: 'fa-solid fa-kitchen-set', name: 'Junior Chefs', desc: 'Simple, safe cooking activities that build math, science, and life skills.', bg: '#fff3e0' },
]
</script>

<template>
  <div class="programs-page">
    <!-- Hero -->
    <section class="prog-hero">
      <div class="prog-hero-inner">
        <div class="badge">Our Programs</div>
        <h1>Learning That <span class="grad-text">Feels Like Play</span></h1>
        <p>Each program is carefully designed for your child's age and stage, blending structured learning with joyful exploration.</p>
      </div>
    </section>

    <!-- Programs Cards -->
    <section class="section">
      <div class="prog-cards">
        <div class="prog-full-card" v-for="p in programs" :key="p.name">
          <div class="prog-full-img">
            <img :src="p.img" :alt="p.name" />
          </div>
          <div class="prog-full-body">
            <div class="prog-header">
              <div>
                <span class="badge" :style="{background: p.color+'33', color: p.color}">{{ p.level }}</span>
                <h2>{{ p.name }}</h2>
              </div>
            </div>
            <p class="prog-desc">{{ p.desc }}</p>
            <div class="prog-details">
              <div class="detail-item" v-for="d in p.details" :key="d.label">
                <span class="detail-icon"><i :class="d.icon"></i></span>
                <div>
                  <strong>{{ d.label }}</strong>
                  <span>{{ d.value }}</span>
                </div>
              </div>
            </div>
            <div class="prog-highlights">
              <h4>What They Learn:</h4>
              <div class="highlights-grid">
                <div class="highlight-item" v-for="h in p.highlights" :key="h">
                  <span></span> {{ h }}
                </div>
              </div>
            </div>
            <router-link to="/admission" class="btn btn-primary" style="margin-top:24px;">
              Enroll in {{ p.name }} 
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Extra Activities -->
    <section class="extras-section">
      <div class="section">
        <div class="badge">Enrichment</div>
        <h2 class="section-title">Beyond the <span style="color:var(--coral)">Classroom</span></h2>
        <p class="section-subtitle">Our enrichment activities make every day magical and develop well-rounded little humans.</p>
        <div class="extras-grid">
          <div class="extra-card" v-for="e in extras" :key="e.name">
            <div class="extra-icon"><i :class="e.icon"></i></div>
            <h3>{{ e.name }}</h3>
            <p>{{ e.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="prog-cta">
      <div class="prog-cta-inner">
        <h2>Ready to Join?</h2>
        <p>Explore which program is the perfect fit for your child. Our team is here to help!</p>
        <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-top:28px;">
          <router-link to="/admission" class="btn btn-primary">Apply Now</router-link>
          <router-link to="/contact" class="btn btn-secondary">Book a School Tour</router-link>
        </div>
      </div>
    </section>
    <section>
      <Footer/>
    </section>
  </div>
</template>


<style scoped>
.prog-hero {
  background: linear-gradient(135deg, #e8f5e9, #e3f2fd, #fce4ec);
  padding: 90px 40px 0; 
  text-align: center; 
  overflow: hidden;
}
.prog-hero-inner { 
  max-width: 700px; 
  margin: 0 auto 60px; 
  animation: fadeInUp 0.7s ease; 
}
.prog-hero h1 { 
  font-family: var(--font-display); 
  font-size: clamp(2.2rem, 5vw, 3.5rem); 
  font-weight: 800; 
  color: var(--dark); 
  margin: 14px 0 18px; 
}
.grad-text { 
  background: linear-gradient(135deg, var(--sky-dark), var(--grass-dark)); 
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent; 
  background-clip: text; 
}
.prog-hero p { 
  font-size: 1.1rem; 
  color: #666; 
  line-height: 1.8; 
}

/* Program full cards */
.prog-cards {
   display: flex; 
   flex-direction: column; 
   gap: 70px; 
  }
.prog-full-card { 
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  gap: 60px; 
  align-items: center; 
}
.prog-full-img { 
  position: relative; 
  border-radius: 28px; 
  overflow: hidden; 
  box-shadow: var(--shadow-lg); 
}
.prog-full-img img { 
  width: 100%; 
  height: 380px; 
  object-fit: cover; 
  transition: transform 0.5s ease;
 }
.prog-full-card:hover .prog-full-img img { 
  transform: scale(1.05); 
}
.prog-header { 
  display: flex; 
  align-items: center; 
  gap: 14px; 
  margin-bottom: 16px; 
}

.prog-desc { 
  font-size: 0.95rem; 
  color: #666; 
  line-height: 1.9; 
  margin-bottom: 24px; 
}
.prog-details { 
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  gap: 14px; 
  margin-bottom: 24px;
 }
.detail-item { 
  display: flex; 
  align-items: center; 
  gap: 10px; 
  background: #f9f9f9; 
  border-radius: var(--radius-sm); 
  padding: 12px 14px; 
}
.detail-icon i { 
  font-size: 1.4rem; 
  color: var(--coral);
}
.detail-item strong { 
  display: block; 
  font-size: 0.78rem; 
  color: #999; 
  text-transform: uppercase; 
  letter-spacing: 0.5px; 
}
.detail-item span { 
  font-size: 0.9rem; 
  font-weight: 600; 
  color: var(--dark); 
}
.prog-highlights h4 { 
  font-family: var(--font-display); 
  font-size: 1rem; 
  font-weight: 700; 
  margin-bottom: 12px; 
  color: var(--dark); 
}
.highlights-grid { 
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  gap: 8px; 
}
.highlight-item { 
  display: flex; 
  align-items: center; 
  gap: 8px; 
  font-size: 0.88rem; 
  color: #555; 
}

/* EXTRAS */
.extras-section { 
  background: linear-gradient(135deg, #fff9c4, #e8f5e9); 
}
.extras-grid { 
  display: grid; 
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px; 
}
.extra-card {
  background: var(--bg, white); 
  border-radius: var(--radius);
  padding: 32px 24px; 
  text-align: center;
  box-shadow: var(--shadow); 
  transition: var(--transition);
  cursor: default;
}
.extra-card:hover { 
  transform: translateY(-10px) rotate(1deg); 
  box-shadow: var(--shadow-lg); }
.extra-icon { 
  font-size: 2.5rem; 
  margin-bottom: 12px; 
  color: var(--coral);
}
.extra-card h3 { 
  font-family: var(--font-display); 
  font-weight: 700; 
  font-size: 1.05rem; 
  color: var(--dark); 
  margin-bottom: 8px;
 }
.extra-card p { 
  font-size: 0.87rem; 
  color: #666; 
  line-height: 1.7; 
}


/* CTA */
.prog-cta {
  background: linear-gradient(135deg, var(--sky) 0%, var(--lavender-dark) 100%);
  padding: 80px 40px; 
  text-align: center;
}
.prog-cta-inner { 
  max-width: 600px; 
  margin: 0 auto; 
}
.prog-cta h2 { 
  font-family: var(--font-display); 
  font-size: 2.2rem; 
  font-weight: 800; 
  color: white; 
  margin-bottom: 12px; 
}
.prog-cta p { 
  color: rgba(255,255,255,0.85); 
  font-size: 1.05rem; 
}

@media (max-width: 900px) {
  .prog-full-card { 
    grid-template-columns: 1fr; 
  }
  .extras-grid {
   grid-template-columns: repeat(2, 1fr); 
  }
}
@media (max-width: 600px) {
  .extras-grid { 
    grid-template-columns: 1fr; 
  }
  .prog-details { 
    grid-template-columns: 1fr; 
  }
  .highlights-grid { 
    grid-template-columns: 1fr; 
  }
  .prog-hero { 
    padding: 60px 20px 0; 
  }
}
</style>
