<script setup>
import Footer from '@/components/Footer.vue'
import program1 from '@/assets/program1.png'
import program2 from '@/assets/program2.png'
import program3 from '@/assets/program3.png'

const stats = [
  { num: '250+', label: 'Happy Kids' },
  { num: '15+', label: 'Years of Joy' },
  { num: '30+', label: 'Trained Educators' },
  { num: '98%', label: 'Parent Satisfaction' },
]

const whys = [
  { icon: 'fa-solid fa-child', title: 'Safe Environment', desc: 'CCTV-monitored, child-proof spaces with certified safety standards for total peace of mind.', bg: '#fff3e0' },
  { icon: 'fa-solid fa-graduation-cap', title: 'Qualified Teachers', desc: 'All educators are certified in early childhood education with years of nurturing experience.', bg: '#e8f5e9' },
  { icon: 'fa-solid fa-palette', title: 'Creative Curriculum', desc: 'Play-based learning that ignites imagination, critical thinking, and a love for discovery.', bg: '#fce4ec' },
  { icon: 'fa-solid fa-bowl-food', title: 'Healthy Meals', desc: 'Freshly prepared, nutritious, and delicious meals crafted by our in-house nutritionist.', bg: '#e3f2fd' },
  { icon: 'fa-solid fa-globe', title: 'Diverse Community', desc: 'We celebrate every culture and background, building empathy and global awareness early.', bg: '#f3e5f5' },
  { icon: 'fa-solid fa-mobile-screen', title: 'Parent Updates', desc: 'Daily photo updates, reports, and communication through our dedicated parent app.', bg: '#e0f7fa' },
]

const programs = [
  {
    name: 'Nursery', age: '1-2 yrs', icon: 'fa-solid fa-rocket',
    img: program1,
    desc: 'Gentle introduction to social play, sensory exploration, and early language development.',
    color: '#FFD93D',
  },
  {
    name: 'Toddler Class', age: '2-3 yrs', icon: 'fa-solid fa-puzzle-piece',
    img: program2,
    desc: 'Building independence, creativity, and social skills through guided play and storytelling.',
    color: '#4ECDC4',
  },
  {
    name: 'Preschool', age: '3-5 yrs', icon: 'fa-solid fa-child',
    img: program3,
    desc: 'School-readiness program with literacy, numeracy, science, arts, and emotional learning.',
    color: '#FF6B6B',
  },
]

const galleryImgs = [
  { src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&q=80', alt: 'Art & Craft Time' },
  { src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&q=80', alt: 'Outdoor Play' },
  { src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80', alt: 'Story Time' },
  { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80', alt: 'Music & Dance' },
  { src: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=400&q=80', alt: 'Learning Together' },
  { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80', alt: 'Playful Reading' },
]

const testimonials = [
  { avatar: '👩', name: 'Sarah M.', child: 'Lily (4 yrs)', text: 'My daughter absolutely loves going to school every morning! The teachers are so warm and attentive. Best decision we ever made.' },
  { avatar: '👨', name: 'James K.', child: 'Noah (3 yrs)', text: 'From day one, Noah has blossomed into a confident, curious little boy. The curriculum is amazing and the staff truly care.' },
  { avatar: '👩', name: 'Priya L.', child: 'Mia (5 yrs)', text: 'We were worried about transition to big school but Sunshine Sprouts prepared Mia beautifully. She was so ready!' },
]

</script>

<template>
   <!-- HERO SECTION -->
   <section class="hero">
   <div class="hero-inner">
      <div class="hero-text">
         <div class="badge">Enrolment Open 2025!</div>
         <h1 class="hero-title">
            Where Little Stars 
            <span class="highlight">Shine Bright!</span>
         </h1>
         <p class="hero-desc">A magical world of learning, laughter and love. We nurture every child's curiosity, creativity and confidence from Day 1.</p>
         <div class="hero-actions">
            <router-link to="/admission" class="btn btn-primary">
              <i class="fas fa-star"></i> Enroll Now
            </router-link>
            <router-link to="/programs" class="btn  btn-outline">
              <i class="fas fa-play-circle"></i> Our Programs
            </router-link>
         </div>
         <div class="hero-stats">
            <div class="stat" v-for="s in stats" :key="s.label">
              <span class="stat-num">{{ s.num }}</span>
              <span class="stat-label">{{ s.label }}</span>
            </div>
         </div>
      </div>
      <div class="hero-visual">
         <div class="hero-img">
            <img src="../assets/happykid.png" alt="">
         </div>
      </div>
   </div>
   </section>

   <!-- WHY US -->
   <section class="why-section">
      <div class="section">
        <div class="badge">Why Choose Us?</div>
        <h2 class="section-title">A Place Called <span style="color:var(--coral)">Home</span></h2>
        <p class="section-subtitle">Everything we do is for the happiness, safety, and growth of your little ones.</p>

         <div class="why-grid">
          <div class="why-card" v-for="w in whys" :key="w.title">
             <i :class="w.icon" :style="{background: w.bg}"></i>
            <h3>{{ w.title }}</h3>
            <p>{{ w.desc }}</p>
          </div>
         </div>
      </div>
   </section>     
   <!-- PROGRAM PROGRAM-->
    <section class="programs-preview-section">
      <div class="section">
        <div class="badge"> Our Programs</div>
        <h2 class="section-title">Learning That <span style="color:var(--sky-dark)">Feels Like Play</span></h2>
        <p class="section-subtitle">Age-appropriate curricula designed to spark wonder and build strong foundations.</p>

        <div class="programs-grid">
          <div class="prog-card card" v-for="p in programs" :key="p.name">
            <div class="prog-img-wrap">
              <img :src="p.img" :alt="p.name" class="prog-img" />
              <div class="prog-badge">{{ p.age }}</div>
            </div>
            <div class="prog-body">
              <i :class="p.icon"></i>
              <h3>{{ p.name }}</h3>
              <p>{{ p.desc }}</p>
              <router-link to="/programs" class="btn btn-secondary" style="margin-top:12px;font-size:0.9rem;padding:10px 22px;">Learn More</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
            <section>
               <Footer/>
            </section>

</template>

<style scoped>
/* HERO */

.hero {
  background: linear-gradient(135deg, #fff9e6 0%, #ffe8e8 40%, #e8f8f5 100%);
  padding: 60px 40px 100px;
  overflow: hidden;
}
.hero-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 2;
}
.hero-text { 
   animation: fadeInUp 0.8s ease both; 
}
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  font-weight: 800;
  color: var(--dark);
  line-height: 1.15;
  margin: 12px 0 18px;
}
.highlight {
  background: linear-gradient(135deg, var(--coral), var(--sunny));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
}
.hero-desc { 
   font-size: 1.1rem; 
   color: #666; 
   line-height: 1.8; 
   margin-bottom: 30px; 
}
.hero-actions { 
   display: flex; 
   gap: 14px; 
   flex-wrap: wrap; 
   margin-bottom: 40px; 
}
.hero-stats { 
   display: flex; 
   gap: 28px; 
   flex-wrap: wrap; 
}
.stat { 
   display: flex; 
   flex-direction: column; 
}
.stat-num {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--coral);
  line-height: 1;
}
.stat-label { 
   font-size: 0.78rem; 
   color: #888; 
   font-weight: 600; 
   text-transform: uppercase; 
   letter-spacing: 0.5px; 
}
.hero-visual{
   animation: fadeInUp 0.9s 0.2s ease both;
}
.hero-img{
  overflow: visible;
}
.hero-img img{
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 32px;
  box-shadow: var(--shadow-lg);
}

/* WHY SECTION */
.why-section { 
   background: linear-gradient(135deg, #fff3e0, #fce4ec); 
}
.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.why-card {
  background: white;
  border-radius: var(--radius);
  padding: 32px 24px;
  text-align: center;
  box-shadow: var(--shadow);
  transition: var(--transition);
  cursor: default;
}
.why-card:hover {
  transform: translateY(-10px) rotate(-1deg) scale(1.02);
  box-shadow: var(--shadow-lg);
}
.why-card i {
  width: 70px; 
  height: 70px;
  border-radius: 50%;
  display: grid; place-items: center;
  font-size: 2rem;
  margin: 0 auto 16px;
}
.why-card h3 { 
   font-family: var(--font-display); 
   font-size: 1.1rem; 
   font-weight: 700; 
   margin-bottom: 8px; 
   color: var(--dark); 
}
.why-card p { 
   font-size: 0.88rem; 
   color: #777; 
   line-height: 1.7; 
}

/* PROGRAM SECTION */
.programs-preview-section { 
   background: var(--cream); 
}
.programs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.prog-card { 
   position: relative; 
}
.prog-img-wrap { 
   position: relative; 
   height: 200px; 
   overflow: hidden; 
}
.prog-img { 
   width: 100%; 
   height: 100%; 
   object-fit: cover; 
   transition: transform 0.5s ease; 
}
.prog-card:hover .prog-img { 
   transform: scale(1.08); 
}
.prog-badge {
  position: absolute; top: 14px; right: 14px;
  background: white;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.8rem;
  padding: 4px 12px;
  border-radius: 50px;
  color: var(--dark);
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
}
.prog-body { 
   padding: 24px; 
}
.prog-body i { 
   font-size: 2rem; 
   margin-bottom: 8px; 
}
.prog-body h3 { 
   font-family: var(--font-display); 
   font-size: 1.2rem; 
   font-weight: 700; 
   margin-bottom: 8px; 
   color: var(--dark); 
}
.prog-body p { 
   font-size: 0.88rem; 
   color: #777; 
   line-height: 1.7; 
}
.prog-body::before {
  content: '';
  display: block;
  height: 4px;
  background: var(--card-color, var(--coral));
  margin: -24px -24px 20px;
  border-radius: 0;
}
@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; }
  .hero-visual { display: none; }
  .why-grid { grid-template-columns: repeat(2, 1fr); }
  .programs-grid { grid-template-columns: 1fr 1fr; }
  .testimonials-grid { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .hero { padding: 40px 20px 60px; }
  .why-grid { grid-template-columns: 1fr; }
  .programs-grid { grid-template-columns: 1fr; }
}
</style>