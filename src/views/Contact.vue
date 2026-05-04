<script setup>
import { ref, reactive, computed } from 'vue'
import Footer from '@/components/Footer.vue'
const sent = ref(false)
const cform = reactive({ name: '', email: '', phone: '', subject: '', message: '', tour: false })
const cValid = computed(() => cform.name && cform.email && cform.subject && cform.message)
function resetForm() {
    sent.value = false
    Object.assign(cform, {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    tour: false
  })
}
function sendMsg() {
    if (cValid.value) {
        sent.value = true
    }
}

const contactCards = [
  {
    icon: 'fa-solid fa-phone', label: 'Call Us', bg: '#e3f2fd',
    lines: '+1 (800) 123-4567',
    action: 'Call Now'
  },
  {
    icon: 'fa-solid fa-envelope', label: 'Email Us',
    lines: 'hello@kellschool.com',
    action: 'Send Email'
  },
  {
    icon: 'fa-solid fa-location-dot', label: 'Visit Us',
    lines: '13, Estaport Avenue, Sholuyi, Gbagada, Lagos',
    action: 'Get Directions'
  },
  {
    icon: 'fa-solid fa-clock', label: 'Open Hours',
    lines: 'Mon - Fri: 7:30 AM - 5:30 PM',
    action: null,
  },
]
</script>

<template>
<div class="contact-page">
    <!-- Hero -->
    <section class="contact-hero">
      <div class="contact-hero-inner">
        <div class="badge"> Get in Touch</div>
        <h1>We'd <span class="contact-highlight">Love to Hear</span> From You!</h1>
        <p>Whether you have questions, want to book a tour, or just want to say hello — our friendly team is always here.</p>
      </div>
    </section>

    <!-- Contact Cards -->
    <section class="section">
      <div class="contact-cards">
        <div class="contact-card" v-for="c in contactCards" :key="c.label">
          <div class="contact-card-icon"><i :class="c.icon"></i></div>
          <h3>{{ c.label }}</h3>
          <p>{{ c.lines }}</p>
          <a v-if="c.action" class="contact-link">{{ c.action }}</a>
        </div>
      </div>
    </section>

          <!-- Contact Form -->
          <div class="contact-form-side">
            <div class="badge"> Send a Message</div>
            <div class="contact-form" v-if="!sent">
              <div class="form-group">
                <label>Your Name </label>
                <input v-model="cform.name" type="text" placeholder="Full name" />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>Email </label>
                  <input v-model="cform.email" type="email" placeholder="you@email.com" />
                </div>
                <div class="form-group">
                  <label>Phone</label>
                  <input v-model="cform.phone" type="tel" placeholder="Optional" />
                </div>
              </div>
              <div class="form-group">
                <label>Subject </label>
                <select v-model="cform.subject">
                  <option value="">What's this about?</option>
                  <option>General Enquiry</option>
                  <option>Book a School Tour</option>
                  <option>Enrollment Question</option>
                  <option>Fees & Funding</option>
                  <option>Something Else</option>
                </select>
              </div>
              <div class="form-group">
                <label>Your Message *</label>
                <textarea v-model="cform.message" rows="5" placeholder="Write your message here..."></textarea>
              </div>
              <div class="form-row" style="align-items:center">
                <div class="form-group" style="margin:0">
                  <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
                    <input type="checkbox" v-model="cform.tour" style="accent-color:var(--coral);" />
                    I'd like to book a school tour
                  </label>
                </div>
              </div>
              <button class="btn btn-primary submit-btn" @click="sendMsg" :disabled="!cValid" style="margin-top:20px;">
                <i class="fas fa-paper-plane"></i> Send Message
              </button>
            </div>
            <div class="sent-msg" v-else>
              <div class="sent-icon"></div>
              <h3>Message Sent!</h3>
              <p>Thank you <strong>{{ cform.name }}</strong>! We'll get back to you at <strong>{{ cform.email }}</strong> very soon.</p>
              <button class="btn btn-outline" @click="resetForm" style="margin-top:20px;">Send Another Message</button>
            </div>
          </div>
    <section>
        <Footer/>
    </section>
</div>
</template>

<style scoped>
.contact-hero {
  background: linear-gradient(135deg, #e3f2fd, #fce4ec, #e8f5e9);
  padding: 90px 40px 0; 
  text-align: center; 
  overflow: hidden;
}
.contact-hero-inner { 
    max-width: 750px; 
    margin: 0 auto 60px; animation: fadeInUp 0.7s ease; 
}
.contact-hero h1 { 
    font-family: var(--font-display); 
    font-size: clamp(2.2rem, 5vw, 3.5rem); 
    font-weight: 800;
     color: var(--dark); 
     margin: 14px 0 18px; 
    }
.contact-highlight { 
    background: linear-gradient(135deg, var(--sky-dark), var(--lavender-dark)); 
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
    background-clip: text; 
}
.contact-hero p { 
    font-size: 1.1rem; 
    color: #666; 
    line-height: 1.8; 
}
/* Contact Cards */
.contact-cards { 
    display: grid; grid-template-columns: repeat(4, 1fr); 
    gap: 20px; 
}
.contact-card {
  background:var(--lavender-dark); 
  border-radius: var(--radius); 
  padding: 28px 24px;
  text-align: center; 
  box-shadow: var(--shadow); 
  transition: var(--transition);
}
.contact-card:hover { 
    transform: translateY(-8px); 
    box-shadow: var(--shadow-lg); 
}
.contact-card-icon { 
    width: 64px; 
    height: 64px; 
    border-radius: 50%; 
    display: grid; 
    place-items: center; 
    font-size: 2rem; 
    margin: 0 auto 14px;
    color: var(--coral);
}
.contact-card h3 { 
    font-family: var(--font-display); 
    font-weight: 700; 
    color: var(--dark); 
    margin-bottom: 8px; 
}
.contact-card p { 
    font-size: 0.88rem; 
    color: var(--white);
    line-height: 1.6; 
    margin-bottom: 4px; 
}
.contact-link {
  display: inline-block; 
  margin-top: 12px;
  color: var(--coral); 
  font-weight: 700; 
  font-size: 0.88rem;
  transition: all 0.2s;
}
.contact-link:hover { 
    color: var(--coral-dark); 
    transform: translateX(3px); 
}

/* Contact form */
.contact-form { 
    background: white; 
    border-radius: var(--radius); 
    padding: 36px; 
    box-shadow: var(--shadow-lg); 
    width: 500px;
    justify-content: center;
    margin: 20px auto;
}
.form-group { 
    display: flex; 
    flex-direction: column; 
    gap: 6px; 
    margin-bottom: 14px; 
}
.form-group label { 
    font-weight: 700; 
    font-size: 1rem; 
    color: var(--dark); 
}
.form-group input, .form-group select, .form-group textarea {
  border: 2px solid #e0e0e0; 
  border-radius: var(--radius-sm);
  padding: 12px 16px; 
  cursor: pointer;
  font-family: var(--font-body); 
  font-size: 0.9rem; color: var(--dark);
  outline: none; transition: border-color 0.25s; background: #fafafa;
}
.form-group input:focus, .form-group select:focus, .form-group textarea:focus {
  border-color: var(--coral); 
  background: white; 
  box-shadow: 0 0 0 3px rgba(255,107,107,0.12);
}
.submit-btn { 
    width: 100%; 
    justify-content: center; 
}
.submit-btn:disabled { 
    opacity: 0.5; 
    cursor: not-allowed; 
    transform: none !important; 
}
.sent-msg { 
    background: white; 
    border-radius: var(--radius); 
    padding: 60px 36px; 
    box-shadow: var(--shadow-lg); 
    text-align: center; 
    animation: pop 0.5s ease; 
}
.sent-msg h3 { 
    font-family: var(--font-display); 
    font-size: 1.8rem; 
    font-weight: 800; 
    margin-bottom: 12px; 
    color: var(--dark); 
}
.sent-msg p { 
    color: #666; 
    line-height: 1.7; 
    margin-bottom: 6px; 
}

@media (max-width: 900px) {
  .contact-cards { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .contact-cards { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
  .contact-hero { padding: 60px 20px 0; }
}
</style>
