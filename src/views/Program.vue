<script setup>
const programs = [
  {
    name: 'Little Seedlings Nursery',
    level: 'Nursery Class',
    age: '12 months - 2 yrs',
    icon: '🍼',
    img: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=700&q=80',
    color: '#FFD93D',
    desc: 'A warm, gentle introduction to the world beyond home. Our nursery provides a loving, safe space where babies and toddlers can explore, babble, and begin building their first friendships.',
    details: [
      { icon: '👶', label: 'Age Group', value: '12 months – 2 years' },
      { icon: '🕰️', label: 'Hours', value: '7:30 AM – 5:30 PM' },
      { icon: '👩‍🏫', label: 'Ratio', value: '1:3 (Educator to Child)' },
      { icon: '📅', label: 'Days', value: 'Mon – Fri (flexible)' },
    ],
    highlights: ['Sensory play & exploration', 'Language & early communication', 'Music & movement', 'Safe outdoor play', 'Social-emotional foundations'],
  },
  {
    name: 'Sunflower Toddler Class',
    level: 'Toddler Program',
    age: '2 - 3 yrs',
    icon: '🌻',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    color: '#4ECDC4',
    desc: 'The toddler years are full of wonder and "why?" — and we embrace every question! Our Sunflower class builds independence, self-expression, and early learning skills through structured play.',
    details: [
      { icon: '👦', label: 'Age Group', value: '2 – 3 years' },
      { icon: '🕰️', label: 'Hours', value: '7:30 AM – 5:30 PM' },
      { icon: '👩‍🏫', label: 'Ratio', value: '1:4 (Educator to Child)' },
      { icon: '📅', label: 'Days', value: 'Mon – Fri' },
    ],
    highlights: ['Creative arts & crafts', 'Early literacy & phonics', 'Number sense & counting', 'Emotional regulation', 'Social play & sharing', 'Outdoor nature exploration'],
  },
  {
    name: 'Rainbow Preschool',
    level: 'Preschool Program',
    age: '3 - 5 yrs',
    icon: '🌈',
    img: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=700&q=80',
    color: '#FF6B6B',
    desc: 'Our flagship preschool program prepares children for school in the most joyful, confident way possible. With a rich curriculum built on play, discovery, and creativity, children leave Rainbow Preschool ready, excited, and capable.',
    details: [
      { icon: '🧒', label: 'Age Group', value: '3 – 5 years' },
      { icon: '🕰️', label: 'Hours', value: '7:30 AM – 5:30 PM' },
      { icon: '👩‍🏫', label: 'Ratio', value: '1:6 (Educator to Child)' },
      { icon: '📅', label: 'Days', value: 'Mon – Fri' },
    ],
    highlights: ['School-readiness literacy', 'STEM & science labs', 'Art, drama & music', 'Second language introduction', 'Problem-solving & critical thinking', 'Leadership & confidence', 'Digital literacy basics'],
  },
]

const extras = [
  { icon: '🎵', name: 'Music & Movement', desc: 'Weekly sessions with our resident music teacher — singing, rhythm, and dance.', bg: '#fff9c4' },
  { icon: '🌿', name: 'Garden Club', desc: 'Children plant, tend, and harvest their own mini vegetable gardens.', bg: '#e8f5e9' },
  { icon: '🔬', name: 'Little Scientists', desc: 'Fun, safe experiments that spark curiosity about the world around us.', bg: '#e3f2fd' },
  { icon: '🎭', name: 'Drama & Storytelling', desc: 'Role play, puppet shows, and creative storytelling every week.', bg: '#fce4ec' },
  { icon: '🏃', name: 'Sports & Fitness', desc: 'Structured gross motor play, mini-sports, and outdoor adventure time.', bg: '#f3e5f5' },
  { icon: '👨‍🍳', name: 'Junior Chefs', desc: 'Simple, safe cooking activities that build math, science, and life skills.', bg: '#fff3e0' },
]

const schedule = [
  { time: '7:30 AM', icon: '🌅', activity: 'Welcome & Free Play', desc: 'Arrive, settle in, and start the day with choice play' },
  { time: '9:00 AM', icon: '🎵', activity: 'Morning Circle', desc: 'Songs, calendar, weather, and group sharing time' },
  { time: '9:30 AM', icon: '📚', activity: 'Learning Activities', desc: 'Structured literacy, numeracy, or themed learning' },
  { time: '10:30 AM', icon: '🍎', activity: 'Morning Snack', desc: 'Healthy, nutritious snacks with friends' },
  { time: '11:00 AM', icon: '🎨', activity: 'Creative Play', desc: 'Art, crafts, music, drama, or STEM exploration' },
  { time: '12:00 PM', icon: '🥗', activity: 'Lunch Time', desc: 'Freshly prepared warm nutritious lunch' },
  { time: '12:45 PM', icon: '😴', activity: 'Rest & Quiet Time', desc: 'Nap or quiet reading for younger children' },
  { time: '2:30 PM', icon: '🌳', activity: 'Outdoor Play', desc: 'Garden, playground, and nature exploration' },
  { time: '3:30 PM', icon: '🍌', activity: 'Afternoon Snack', desc: 'Fruit and healthy afternoon treats' },
  { time: '4:00 PM', icon: '🎲', activity: 'Free Choice & Pick Up', desc: 'Winding down, child-led play, and homeward bound' },
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
        <div class="prog-full-card" v-for="(p, i) in programs" :key="p.name" :class="{reverse: i%2!==0}">
          <div class="prog-full-img">
            <img :src="p.img" :alt="p.name" />
            <div class="prog-age-tag" :style="{background: p.color}">{{ p.age }}</div>
          </div>
          <div class="prog-full-body">
            <div class="prog-header">
              <span class="prog-emoji">{{ p.icon }}</span>
              <div>
                <span class="badge" :style="{background: p.color+'33', color: p.color}">{{ p.level }}</span>
                <h2>{{ p.name }}</h2>
              </div>
            </div>
            <p class="prog-desc">{{ p.desc }}</p>
            <div class="prog-details">
              <div class="detail-item" v-for="d in p.details" :key="d.label">
                <span class="detail-icon">{{ d.icon }}</span>
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
                  <span>✓</span> {{ h }}
                </div>
              </div>
            </div>
            <router-link to="/admission" class="btn btn-primary" style="margin-top:24px;">
              Enroll in {{ p.name }} →
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Extra Activities -->
    <section class="extras-section">
      <div class="section">
        <div class="badge">🌈 Enrichment</div>
        <h2 class="section-title">Beyond the <span style="color:var(--coral)">Classroom</span></h2>
        <p class="section-subtitle">Our enrichment activities make every day magical and develop well-rounded little humans.</p>
        <div class="extras-grid">
          <div class="extra-card" v-for="e in extras" :key="e.name" :style="{'--bg': e.bg}">
            <div class="extra-icon">{{ e.icon }}</div>
            <h3>{{ e.name }}</h3>
            <p>{{ e.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Daily Schedule -->
    <section class="schedule-section">
      <div class="section">
        <div class="badge">📅 A Day in the Life</div>
        <h2 class="section-title">Joyful, <span style="color:var(--sky-dark)">Structured Days</span></h2>
        <p class="section-subtitle">Every day is thoughtfully planned to balance learning, play, meals, and rest.</p>
        <div class="schedule-grid">
          <div class="schedule-item" v-for="(item, i) in schedule" :key="item.time" :style="{animationDelay: i*0.1+'s'}">
            <div class="schedule-time">{{ item.time }}</div>
            <div class="schedule-line"></div>
            <div class="schedule-body">
              <div class="schedule-icon">{{ item.icon }}</div>
              <div>
                <strong>{{ item.activity }}</strong>
                <span>{{ item.desc }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="prog-cta">
      <div class="prog-cta-inner">
        <h2>🎒 Ready to Join?</h2>
        <p>Explore which program is the perfect fit for your child. Our team is here to help!</p>
        <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-top:28px;">
          <router-link to="/admission" class="btn btn-primary">Apply Now</router-link>
          <router-link to="/contact" class="btn btn-secondary">Book a School Tour</router-link>
        </div>
      </div>
    </section>
  </div>
</template>


<style scoped>
.prog-hero {
  background: linear-gradient(135deg, #e8f5e9, #e3f2fd, #fce4ec);
  padding: 90px 40px 0; text-align: center; position: relative; overflow: hidden;
}
.prog-hero-inner { max-width: 700px; margin: 0 auto 60px; animation: fadeInUp 0.7s ease; }
.prog-hero h1 { font-family: var(--font-display); font-size: clamp(2.2rem, 5vw, 3.5rem); font-weight: 800; color: var(--dark); margin: 14px 0 18px; }
.grad-text { background: linear-gradient(135deg, var(--sky-dark), var(--grass-dark)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.prog-hero p { font-size: 1.1rem; color: #666; line-height: 1.8; }
.prog-hero-wave svg { height: 80px; display: block; width: 100%; }

/* Program full cards */
.prog-cards { display: flex; flex-direction: column; gap: 70px; }
.prog-full-card { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.prog-full-card.reverse { direction: rtl; }
.prog-full-card.reverse > * { direction: ltr; }
.prog-full-img { position: relative; border-radius: 28px; overflow: hidden; box-shadow: var(--shadow-lg); }
.prog-full-img img { width: 100%; height: 380px; object-fit: cover; transition: transform 0.5s ease; }
.prog-full-card:hover .prog-full-img img { transform: scale(1.05); }
.prog-age-tag {
  position: absolute; top: 16px; right: 16px;
  font-family: var(--font-display); font-weight: 700;
  padding: 6px 14px; border-radius: 50px; font-size: 0.85rem;
  color: var(--dark); box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
.prog-header { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
.prog-emoji { font-size: 2.8rem; animation: bounce 2.5s ease-in-out infinite; }
.prog-header h2 { font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; color: var(--dark); }
.prog-desc { font-size: 0.95rem; color: #666; line-height: 1.9; margin-bottom: 24px; }
.prog-details { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 24px; }
.detail-item { display: flex; align-items: center; gap: 10px; background: #f9f9f9; border-radius: var(--radius-sm); padding: 12px 14px; }
.detail-icon { font-size: 1.4rem; }
.detail-item strong { display: block; font-size: 0.78rem; color: #999; text-transform: uppercase; letter-spacing: 0.5px; }
.detail-item span { font-size: 0.9rem; font-weight: 600; color: var(--dark); }
.prog-highlights h4 { font-family: var(--font-display); font-size: 1rem; font-weight: 700; margin-bottom: 12px; color: var(--dark); }
.highlights-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.highlight-item { display: flex; align-items: center; gap: 8px; font-size: 0.88rem; color: #555; }
.highlight-item span { color: var(--grass-dark); font-weight: 700; }

/* EXTRAS */
.extras-section { background: linear-gradient(135deg, #fff9c4, #e8f5e9); }
.extras-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.extra-card {
  background: var(--bg, white); border-radius: var(--radius);
  padding: 32px 24px; text-align: center;
  box-shadow: var(--shadow); transition: var(--transition);
  cursor: default;
}
.extra-card:hover { transform: translateY(-10px) rotate(1deg); box-shadow: var(--shadow-lg); }
.extra-icon { font-size: 2.5rem; margin-bottom: 12px; }
.extra-card h3 { font-family: var(--font-display); font-weight: 700; font-size: 1.05rem; color: var(--dark); margin-bottom: 8px; }
.extra-card p { font-size: 0.87rem; color: #666; line-height: 1.7; }

/* SCHEDULE */
.schedule-section { background: white; }
.schedule-grid { display: flex; flex-direction: column; gap: 0; max-width: 800px; margin: 0 auto; }
.schedule-item { display: grid; grid-template-columns: 100px 40px 1fr; align-items: center; gap: 0; animation: fadeInUp 0.5s ease both; }
.schedule-time { font-family: var(--font-display); font-weight: 700; font-size: 0.95rem; color: var(--coral); text-align: right; padding-right: 16px; }
.schedule-line { display: flex; flex-direction: column; align-items: center; }
.schedule-line::before { content: ''; width: 14px; height: 14px; border-radius: 50%; background: var(--sunny); border: 3px solid var(--coral); flex-shrink: 0; }
.schedule-line::after { content: ''; width: 2px; height: 100%; background: linear-gradient(to bottom, var(--coral), var(--sky)); }
.schedule-item:last-child .schedule-line::after { display: none; }
.schedule-body {
  display: flex; align-items: center; gap: 14px;
  background: #f9f9f9; border-radius: var(--radius-sm);
  padding: 14px 18px; margin: 6px 0 6px 16px;
  transition: var(--transition);
}
.schedule-body:hover { background: #fff3e0; transform: translateX(4px); }
.schedule-icon { font-size: 1.6rem; flex-shrink: 0; }
.schedule-body strong { display: block; font-family: var(--font-display); font-size: 0.95rem; color: var(--dark); }
.schedule-body span { font-size: 0.82rem; color: #888; }

/* CTA */
.prog-cta {
  background: linear-gradient(135deg, var(--sky) 0%, var(--lavender-dark) 100%);
  padding: 80px 40px; text-align: center;
}
.prog-cta-inner { max-width: 600px; margin: 0 auto; }
.prog-cta h2 { font-family: var(--font-display); font-size: 2.2rem; font-weight: 800; color: white; margin-bottom: 12px; }
.prog-cta p { color: rgba(255,255,255,0.85); font-size: 1.05rem; }

@media (max-width: 900px) {
  .prog-full-card { grid-template-columns: 1fr; direction: ltr; }
  .prog-full-card.reverse { direction: ltr; }
  .extras-grid { grid-template-columns: repeat(2, 1fr); }
  .schedule-item { grid-template-columns: 80px 30px 1fr; }
}
@media (max-width: 600px) {
  .extras-grid { grid-template-columns: 1fr; }
  .prog-details { grid-template-columns: 1fr; }
  .highlights-grid { grid-template-columns: 1fr; }
  .prog-hero { padding: 60px 20px 0; }
}
</style>
