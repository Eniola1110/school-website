
<script setup>
const navLinks = [
     { path: '/', label: 'Home'},
     { path: '/about', label: 'About Us'},
     { path: '/programs', label: 'Programs',},
     { path: '/admission', label: 'Admission'},
     { path: '/contact', label: 'Contact'},
]

</script>

<template>
    <footer class="footer">
        <div class="footer-body">
            <div class="footer-grid">
                <div class="footer-brand">
                    <div class="footer-logo"><img src="../assets/ascendlogo.png" alt=""> Kell's School</div>
                    <p>Where little minds bloom and dreams begin. A safe, joyful and nurturing space for every child.</p>
                  <div class="socials">
                    <a href="#" class="social-btn" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social-btn" title="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="social-btn" title="YouTube"><i class="fab fa-youtube"></i></a>
                    <a href="#" class="social-btn" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                  </div>
                </div>
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li v-for="link in navLinks" :key="link.path">
                        <router-link :to="link.path">{{ link.label }}</router-link>
                        </li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Our Programs</h4>
                    <ul>
                      <li><a href="#">Nursery (1-2 yrs)</a></li>
                      <li><a href="#">Toddlers (2-3 yrs)</a></li>
                     <li><a href="#">Preschool (3-5 yrs)</a></li>
                     <li><a href="#">After School Care</a></li>
                     <li><a href="#">Holiday Programs</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>contact</h4>
                    <ul class="contact-list">
                        <li><i class="fas fa-map-marker-alt"></i>13 Estaport Avenue, Sholuyi, Gbagada, Lagos</li>
                        <li><i class="fas fa-phone"></i> +234 801 654 7896</li>
                       <li><i class="fas fa-envelope"></i> hello@kellschool.com</li>
                      <li><i class="fas fa-clock"></i> Mon-Fri: 7:30 AM - 5:30 PM</li>
                    </ul>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2026 Kell's School Preschool & Nursery. Made with love for little ones.</p>
                </div>
            </div>
        </div>
    </footer>
      
</template>
<style scoped>
.footer-body {
    background: var(--dark);
    color: rgba(255, 255, 255, 0.8);
    padding: 60px 40px 30px;
}
.footer-grid {
    max-width: 1200px;
    margin: 0 auto 50px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 48px;
}
.footer-brand p{
    font-size: 0.9rem;
    line-height: 1.8;
    opacity: 0.8;
    margin: 14px 0 20px;
}
.footer-logo{
    font-family: var(--font-display);
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--sunny);
}
.footer-logo img{
    width: 3rem;
}
.socials {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}
.social-btn {
  width: 40px; height: 40px;
  border-radius: 50%;
  display: grid; place-items: center;
  background: rgba(255,255,255,0.1);
  color: white;
  font-size: 0.9rem;
  transition: var(--transition);
}
.social-btn:hover { 
    background: var(--coral); 
    transform: translateY(-3px) scale(1.1); 
    }
.footer-col h4 {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--sunny);
  margin-bottom: 18px;
}
.footer-col ul { 
    list-style: none; 
}
.footer-col ul li { 
    margin-bottom: 10px; 
}
.footer-col ul li a {
  color: rgba(255,255,255,0.7);
  font-size: 0.9rem;
  transition: color 0.2s;
}
.footer-col ul li a:hover { 
    color: var(--sunny); 
}
.contact-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: rgba(255,255,255,0.7);
  font-size: 0.88rem;
  line-height: 1.5;
}
.contact-list li i { 
    color: var(--sunny);
    margin-top: 3px; 
    min-width: 16px; 
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 24px;
  text-align: center;
  font-size: 0.85rem;
  opacity: 0.6;
  max-width: 1200px;
  margin: 0 auto;
}
@media (max-width: 900px) {
  .footer-grid { 
    grid-template-columns: 1fr 1fr; 
    gap: 32px; 
}
}
@media (max-width: 768px) {
  .footer-grid { 
    grid-template-columns: 1fr; 
    gap: 28px; 
}
  .footer-body {
    padding: 40px 20px 24px; 
}
}
</style>