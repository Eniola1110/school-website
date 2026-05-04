<script setup>
import Footer from '@/components/Footer.vue';
const milestones = [
  { year: '2016', title: 'Founded with 12 Kids', desc: 'Mrs. Thompson opens the doors of Sunshine Sprouts with one classroom and a heart full of hope.' },
  { year: '2018', title: 'New Building Opens', desc: 'Growing demand leads to our beautiful dedicated campus with outdoor gardens and 6 classrooms.' },
  { year: '2020', title: 'Best Preschool Award', desc: 'Recognized as the City\'s Best Preschool by the Early Childhood Education Board.' },
  { year: '2022', title: 'Diversity Program Launch', desc: 'Launched our cultural diversity curriculum, celebrating 20+ nationalities in our community.' },
  { year: '2024', title: 'Parent App Goes Live', desc: 'Launched our dedicated parent app for daily updates, real-time communication, and photo sharing.' },
  { year: '2026',  title: '250+ Children Enrolled', desc: 'Milestone year as we welcome our 250th child and expand with a new STEM learning lab.' },
]

const accreds = [
  { icon: 'fa-solid fa-medal', name: 'National ECE Accreditation', year: '2016 - Present' },
  { icon: 'fa-solid fa-star', name: 'Outstanding School Award', year: '2018, 2010, 2021' },
  { icon: 'fa-solid fa-leaf', name: 'Eco-Friendly School Cert.', year: '2018- Present' },
  { icon: 'fa-solid fa-lock', name: 'Child Safety Gold Standard', year: '2020 - Present' },
  { icon: 'fa-solid fa-graduation-cap', name: 'STEM Education Partner', year: '2022 – Present' },
  { icon: 'fa-solid fa-rainbow', name: 'Inclusive Education Badge', year: '2017 - Present' },
]
</script>
<template>
  <div class="about">
    <!-- Hero -->
    <section class="about-hero">
      <div class="about-hero-inner">
        <div class="badge">About Us</div>
        <h1>Where Every Child <span class="highlight-text">Truly Belongs</span></h1>
        <p>For over 10 years, Kell's School has been the heart of early childhood education — a place where love, learning, and laughter go hand in hand.</p>
      </div>
    </section>

    <!-- Story Section -->
    <section class="section story-section">
      <div class="story-grid">
        <div class="story-images">
          <img src="../assets/storyimage.png" alt="Our School" class="story-img-main" />
        </div>
        <div class="story-content">
          <div class="badge">Our Story</div>
          <h2 class="section-title" style="text-align:left;margin-bottom:16px;">Started With a <span style="color:var(--coral)">Dream</span></h2>
          <p>In 2016, our founder Mrs. Helen Thompson opened Kell's School with a simple dream: to create a preschool where every child felt seen, loved, and excited to learn.</p>
          <p style="margin-top:14px;">What started as a single classroom with 12 children has grown into a vibrant community of over 250 young learners, 30 dedicated educators, and hundreds of families who call us their second home.</p>
          <p style="margin-top:14px;">Today, we remain committed to that original dream — nurturing the whole child through play-based learning, creative exploration, and a warm, inclusive community.</p>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="mission-section">
      <div class="section">
        <div class="mv-grid">
          <div class="mv-card">
            <div class="mv-icon"><i class="fa-solid fa-bullseye"></i></div>
            <h3>Our Mission</h3>
            <p>To foster a safe, stimulating, and inclusive environment where every child can grow holistically — intellectually, emotionally, socially, and physically — through joyful, play-based learning.</p>
          </div>
          <div class="mv-card">
            <div class="mv-icon"><i class="fa-solid fa-star"></i></div>
            <h3>Our Vision</h3>
            <p>To be the most trusted and beloved early learning community, raising confident, compassionate, and curious children who are ready to shape a brighter tomorrow.</p>
          </div>
          <div class="mv-card">
            <div class="mv-icon"><i class="fa-solid fa-gem"></i></div>
            <h3>Our Values</h3>
            <p>Love, Respect, Curiosity, Inclusivity, and Fun. These five principles guide every interaction, every lesson, and every decision we make for your children.</p>
          </div>
        </div>
      </div>
    </section>

   
    <!-- Milestones -->
    <section class="milestones-section">
      <div class="section">
        <div class="badge"> Our Journey</div>
        <h2 class="section-title">15 Years of <span style="color:var(--sunny-dark)">Growing</span></h2>
        <div class="timeline">
          <div class="timeline-item" v-for="m in milestones" :key="m.year">
            <div class="timeline-card card">
              <span class="timeline-year">{{ m.year }}</span>
              <h3>{{ m.title }}</h3>
              <p>{{ m.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Accreditations -->
    <section class="accred-section">
      <div class="section">
        <div class="badge"> Accreditations</div>
        <h2 class="section-title">Certified & <span style="color:var(--grass-dark)">Award-Winning</span></h2>
        <div class="accred-grid">
          <div class="accred-card" v-for="a in accreds" :key="a.name">
            <div class="accred-icon"><i :class="a.icon"></i></div>
            <strong>{{ a.name }}</strong>
            <span>{{ a.year }}</span>
          </div>
        </div>
      </div>
    </section>
    <section>
      <Footer/>
    </section>
  </div>
</template>

<style scoped>
.about-hero {
  background: linear-gradient(135deg, #e8f5e9, #fff9c4, #ffe0f0);
  padding: 100px 40px 0;
  text-align: center;
  overflow: hidden;
}
.about-hero-inner { 
  max-width: 750px; 
  margin: 0 auto 60px; 
  animation: fadeInUp 0.7s ease both; 
}
.about-hero h1 {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: var(--dark);
  margin: 14px 0 18px;
}
.highlight-text {
  background: linear-gradient(135deg, var(--sky-dark), var(--lavender-dark));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.about-hero p { 
  font-size: 1.1rem; 
  color: #666; 
  line-height: 1.8; 
  max-width: 600px; 
  margin: 0 auto; 
}
/* STORY */
.story-section { 
  padding-top: 40px !important; 
}
.story-grid { 
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  gap: 60px; 
  align-items: center; 
}
.story-img-main { 
  width: 100%; 
  height: 380px; 
  object-fit: cover; 
  border-radius: 28px; 
  box-shadow: var(--shadow-lg); 
}
.story-content p { 
  color: #666; 
  line-height: 1.9; 
  font-size: 0.95rem; 
}
/* MISSION */
.mission-section { 
  background: linear-gradient(135deg, #e3f2fd, #e8f5e9); 
}
.mv-grid { 
  display: grid; 
  grid-template-columns: repeat(3, 1fr); 
  gap: 24px; 
}
.mv-card {
  background: white; 
  border-radius: var(--radius); 
  padding: 40px 28px;
  text-align: center; 
  box-shadow: var(--shadow);
  border-top: 5px solid  var(--coral);
  transition: var(--transition);
}
.mv-card:hover { 
  transform: translateY(-10px); 
  box-shadow: var(--shadow-lg); 
}
.mv-icon { 
  font-size: 2.5rem; 
  margin-bottom: 16px;
  color: var(--sky-dark);
 }
.mv-card h3 { 
  font-family: var(--font-display); 
  font-size: 1.2rem; 
  font-weight: 700; 
  margin-bottom: 12px; 
  color: var(--dark); 
}
.mv-card p { 
  font-size: 0.9rem; 
  color: #777; 
  line-height: 1.8; 
}

/* TIMELINE */
.milestones-section { 
  background: var(--cream); 
}
.timeline{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.timeline-card { 
  padding: 24px; 
  max-width: 380px; 
  height: 200px;
}
.timeline-year {
  font-family: var(--font-display); 
  font-weight: 800; 
  font-size: 1.4rem;
  color: var(--coral); 
  display: block; 
  margin-bottom: 4px;
}
.timeline-card h3 { 
  font-family: 
  var(--font-display); 
  font-size: 1.05rem; 
  font-weight: 700; 
  margin-bottom: 8px; 
}
.timeline-card p { 
  font-size: 0.88rem; 
  color: #777; 
  line-height: 1.7; 
}

/* ACCREDITATIONS */
.accred-section { 
  background: linear-gradient(135deg, #e8f5e9, #f9fbe7); 
}
.accred-grid { 
  display: grid; 
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px; 
}
.accred-card {
  background: white; 
  border-radius: var(--radius-sm);
  padding: 28px 24px; 
  text-align: center;
  box-shadow: var(--shadow); 
  transition: var(--transition);
}
.accred-card:hover { 
  transform: translateY(-6px) scale(1.03); 
  box-shadow: var(--shadow-lg); }
.accred-icon { 
  font-size: 2.2rem; 
  margin-bottom: 10px; 
  color: var(--coral);
}
.accred-card strong { 
  display: block; 
  font-family: var(--font-display); 
  font-size: 0.95rem; 
  color: var(--dark); 
  margin-bottom: 4px; 
}
.accred-card span { 
  font-size: 0.8rem; 
  color: #888; 
}

@media (max-width: 900px) {
  .story-grid {
    grid-template-columns: 1fr; 
  }
  .mv-grid { 
    grid-template-columns: 1fr; 
  }
  .timeline{ 
    grid-template-columns: 1fr;
  }
  .accred-grid { 
    grid-template-columns: repeat(2, 1fr); 
  }
}
@media (max-width: 600px) {
  .team-grid { 
    grid-template-columns: 1fr; 
  }
  .accred-grid { 
    grid-template-columns: 1fr; 
  }
  .about-hero { 
    padding: 60px 20px 0; 
  }
}
</style>


