<script setup>
import { ref, computed, reactive } from 'vue'
import Footer from '@/components/Footer.vue'
const submitted = ref(false)
const defaultForm = () => ({
  parentName: '', email: '', phone: '', childName: '',
  dob: '', program: '', startDate: '', referral: '', message: '', consent: false
})
const form = reactive(defaultForm())
const isValid = computed(() => form.parentName && form.email && form.childName && form.program && form.consent)

function submitForm() {
  if (isValid.value) submitted.value = true
}

const quickStats = [
  { icon: 'fa-solid fa-school', label: 'Spaces Available 2025' },
  { icon: 'fa-solid fa-bolt', label: 'Fast 48hr Response' },
  { icon: 'fa-solid fa-gift', label: 'Free Welcome Pack' },
  { icon: 'fa-solid fa-handshake', label: 'Trial Day Offered' },
]

const steps = [
  { icon: 'fa-solid fa-clipboard-list', title: 'Submit Application', desc: 'Complete our simple online form with details about your child and preferred program.'},
  { icon: 'fa-solid fa-phone', title: 'We Contact You', desc: 'Our admissions team calls within 48 hours to discuss availability and answer questions.'},
  { icon: 'fa-solid fa-school', title: 'Visit & Enroll', desc: 'Tour our school, meet the teachers, and complete enrollment with your welcome pack.' },
]

const checklist = [
  'No application fee required',
  'Response guaranteed within 48 hrs',
  'Free school tour included',
  'Trial day for your child',
  'Flexible start dates available',
]

</script>
<template>
  <div class="admission-page">
    <!-- Hero -->
    <section class="adm-hero">
      <div class="adm-hero-inner">
        <div class="badge"> Enrolment 2025</div>
        <h1>Join Our <span class="adm-highlight">Kell's Family!</span></h1>
        <p>We're delighted you're considering Sunshine Sprouts for your little one. Spaces are limited — start your application today.</p>
        <div class="adm-quick-stats">
          <div class="qs-item" v-for="s in quickStats" :key="s.label">
            <span><i :class="s.icon"></i></span>
            <strong>{{ s.label }}</strong>
          </div>
        </div>
      </div>
    </section>

    <!-- Steps -->
    <section class="section">
      <div class="badge">How to Enroll</div>
      <h2 class="section-title">Simple <span style="color:var(--coral)">3-Step Process</span></h2>
      <p class="section-subtitle">We've made enrollment as easy and stress-free as possible for busy families.</p>
      <div class="steps-row">
        <div class="step-card" v-for="step in steps" :key="step.title">
          <div class="step-icon"><i :class="step.icon"></i></div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Application Form -->
    <section class="form-section">
      <div class="section">
        <div class="form-wrap">
          <div class="form-left">
            <div class="badge"> Apply Now</div>
            <h2 style="font-family:var(--font-display);font-size:2rem;font-weight:800;margin:12px 0 16px;color:var(--dark);">Start Your <span style="color:var(--coral)">Application</span></h2>
            <p style="color:#777;line-height:1.8;font-size:0.95rem;margin-bottom:24px;">Fill out the form below and our admissions team will contact you within 48 hours to discuss availability and schedule a visit.</p>
            <div class="checklist">
              <div class="check-item" v-for="c in checklist" :key="c">
                <span class="check-icon"><i class="fa-solid fa-check"></i></span> {{ c }}
              </div>
            </div>
          </div>

          <div class="form-right">
            <div class="app-form" v-if="!submitted">
              <div class="form-group">
                <label>Parent/Guardian Name</label>
                <input v-model="form.parentName" type="text" placeholder="Your full name" />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>Email Address</label>
                  <input v-model="form.email" type="email" placeholder="you@email.com" />
                </div>
                <div class="form-group">
                  <label>Phone Number</label>
                  <input v-model="form.phone" type="tel" placeholder="+234 901 3456" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>Child's Full Name</label>
                  <input v-model="form.childName" type="text" placeholder="Child's name" />
                </div>
                <div class="form-group">
                  <label>Child's Date of Birth </label>
                  <input v-model="form.dob" type="date" />
                </div>
              </div>
              <div class="form-group">
                <label>Program Interested In</label>
                <select v-model="form.program">
                  <option value="">Select a program...</option>
                  <option>Nursery Class (12mo - 1yr) </option>
                  <option>Toddler Class (2 - 3 yrs)</option>
                  <option>Preschool School (3 – 5 yrs)</option>
                </select>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>Preferred Start Date</label>
                  <input v-model="form.startDate" type="date" />
                </div>
                <div class="form-group">
                  <label>How Did You Hear About Us?</label>
                  <select v-model="form.referral">
                    <option value="">Select...</option>
                    <option>Google Search</option>
                    <option>Social Media</option>
                    <option>Friend / Family</option>
                    <option>School Fair</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label>Any special requirements or questions?</label>
                <textarea v-model="form.message" placeholder="Tell us anything that would help us prepare for your child..." rows="4"></textarea>
              </div>
              <div class="form-check">
                <input type="checkbox" id="consent" v-model="form.consent" />
                <label for="consent">I agree to the privacy policy and consent to be contacted about this application.</label>
              </div>
              <button class="btn btn-primary submit-btn" @click="submitForm" :disabled="!isValid">
                <i class="fas fa-paper-plane"></i>
                Submit Application 
              </button>
            </div>

            <!-- Success -->
            <div class="success-msg" v-else>
              <h3>Application Received!</h3>
              <p>Thank you, <strong>{{ form.parentName }}</strong>! We've received your application for <strong>{{ form.childName }}</strong>.</p>
              <p>Our admissions team will contact you at <strong>{{ form.email }}</strong> within 48 hours.</p>
              <button class="btn btn-secondary" @click="submitted=false;form=defaultForm()">Submit Another Application</button>
            </div>
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
.adm-hero {
  background: linear-gradient(135deg, #fce4ec, #e8f5e9, #fff9c4);
  padding: 90px 40px 0; 
  text-align: center; 
  overflow: hidden;
}
.adm-hero-inner { 
    max-width: 750px; 
    margin: 0 auto 50px; 
    animation: fadeInUp 0.7s ease; 
}
.adm-hero h1 { 
    font-family: var(--font-display); 
    font-size: clamp(2.2rem, 5vw, 3.5rem); 
    font-weight: 800; 
    color: var(--dark); 
    margin: 14px 0 18px; 
}
.adm-highlight { 
    background: linear-gradient(135deg, var(--coral), var(--sunny-dark)); 
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
    background-clip: text; 
}
.adm-hero p { 
    font-size: 1.1rem; 
    color: #666;
     line-height: 1.8; 
     max-width: 600px; 
     margin: 0 auto 30px; 
}
.adm-quick-stats { 
    display: flex; 
    justify-content: center; 
    gap: 24px; 
    flex-wrap: wrap; 
}
.adm-quick-stats i{
    color: var(--coral);
    font-size: 2rem;
}

/* STEPS */
.steps-row { 
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    gap: 20px;
    position: relative; 
    }
.step-card {
  background: var(--lavender); 
  border-radius: var(--radius); 
  padding: 40px 28px;
  text-align: center; 
  box-shadow: var(--shadow); 
  transition: var(--transition);
}
.step-card:hover { 
    transform: translateY(-8px); 
    box-shadow: var(--shadow-lg); 
}

.step-icon { 
    font-size: 2.5rem; 
    margin-bottom: 14px; 
}
.step-card h3 {
     font-family: var(--font-display); 
     font-size: 1.15rem; 
     font-weight: 700; 
     margin-bottom: 10px; 
     color: var(--dark); 
}
.step-card p { 
    font-size: 1rem; 
    color: #777; 
    line-height: 1.7; 
}

/* FORM */
.form-section { background: linear-gradient(135deg, #e3f2fd, #f3e5f5); }
.form-wrap { 
    display: grid; 
    grid-template-columns: 1fr 1.4fr; 
    gap: 60px; 
    align-items: start; 
}
.form-left .checklist { 
    display: flex; 
    flex-direction: column; 
    gap: 10px; 
    margin-bottom: 28px; 
}
.check-item { 
    display: flex; 
    align-items: center; 
    gap: 10px; 
    font-size: 0.9rem; 
    color: #555; 
}
.check-icon { 
    color: var(--grass-dark); 
    font-weight: 700; 
    font-size: 1rem; 
}
.app-form { 
    background: white; 
    border-radius: var(--radius); 
    padding: 36px; 
    box-shadow: var(--shadow-lg); 
}
.form-group { 
    display: flex; 
    flex-direction: column; 
    gap: 6px; 
    margin-bottom: 16px; 
}
.form-group label { 
    font-weight: 700; 
    font-size: 0.85rem; 
    color: var(--dark); 
}
.form-group input, .form-group select, .form-group textarea {
  border: 2px solid #e0e0e0; 
  border-radius: var(--radius-sm);
  padding: 12px 16px; 
  font-family: var(--font-body); 
  font-size: 0.9rem;
  color: var(--dark); 
  outline: none; 
  transition: border-color 0.25s;
  background: #fafafa;
}
.form-group input:focus, .form-group select:focus, .form-group textarea:focus {
  border-color: var(--sky); 
  background: white; 
  box-shadow: 0 0 0 3px rgba(78,205,196,0.15);
}
.form-row { 
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    gap: 14px; 
}
.form-check { 
    display: flex; 
    align-items: flex-start; 
    gap: 10px; 
    margin-bottom: 20px; 
}
.form-check input { 
    margin-top: 3px; 
    accent-color: var(--coral); 
}
.form-check label { 
    font-size: 0.82rem; 
    color: #666; 
    line-height: 1.5; 
}
.submit-btn { 
    width: 100%; 
    justify-content: 
    center; 
    font-size: 1.05rem; 
    padding: 16px; 
}
.submit-btn:disabled { 
    opacity: 0.5; 
    cursor: not-allowed; 
    transform: none !important; 
}

.success-msg { 
    background: white; 
    border-radius: var(--radius); 
    padding: 60px 36px; 
    box-shadow: var(--shadow-lg); 
    text-align: center;
}
.success-icon { 
    font-size: 4rem; 
    margin-bottom: 16px; 
    animation: bounce 1.5s ease-in-out infinite; 
}
.success-msg h3 { 
    font-family: var(--font-display); 
    font-size: 1.8rem; 
    font-weight: 800; 
    color: var(--dark); 
    margin-bottom: 12px; 
}
.success-msg p { 
    color: #666; 
    margin-bottom: 10px; 
    line-height: 1.7; 
}
.success-msg button { 
    margin-top: 24px; 
}


@media (max-width: 900px) {
  .steps-row { grid-template-columns: 1fr; }
  .step-arrow { display: none; }
  .form-wrap { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .form-row { grid-template-columns: 1fr; }
  .adm-hero { padding: 60px 20px 0; }
  .adm-quick-stats { gap: 10px; }
}
</style>
