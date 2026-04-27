
<script setup>

</script>

<template>
       <footer>
        <div class="grid">
            <div class="grid1">
            <div>
                <img src="../assets/ascendlogo.png" alt="">
                <h3>Ascend School Hub</h3>
                <p>"Inspiring Greatness"</p>
            </div>
            <p>Empowering young minds through world-class education, innovation, and character development</p>
            </div>

            <div class="grid2">
                <h2>Quick Links</h2>
            <div class="links">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About Us</RouterLink>
            <RouterLink to="/program">Program</RouterLink>
            <RouterLink to="/admission">Admission</RouterLink>
            <RouterLink to="/testimonial">Testimonial</RouterLink>
            <RouterLink to="/contact">Contact Us</RouterLink>
            </div>
            </div>

            <div class="grid3">
                <h2>Contact Info</h2>
                <div>
                    <p><i class="fa fa-phone" aria-hidden="true"></i> +234 8054632543</p>
                    <p><i class="fa fa-envelope" aria-hidden="true"></i> ascendschool26@gmail.com</p>
                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> Lagos, Nigeria</p>
                </div>
            </div>
        </div>
        <p>&copy; 2026 Ascend School. All rights reserved.</p>
        <p>Terms of Services. Privacy Policy.</p>
       </footer>
    
</template>
<style scoped>
footer{
    font-family: "Open Sans", sans-serif;
    margin-top: 2rem;
    padding: 2rem 3rem;
    border-top: 1px solid var(--secondary);
    color: var(--white);
}
.grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-bottom: 2.5rem;
}
.grid1 img{
    width: 4rem;
}
.grid1 h3{
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--secondary);
    margin-top: 0.5rem;
}
.grid1 p{
    font-size: 1rem;
    margin-top: 0.5rem;
    opacity: 0.9;
}
.grid2{
    text-align: center;
}
.grid2 h2{
    margin-bottom: 1rem;
    color: var(--secondary);
}
.grid2 .links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.grid2 a {
  color: var(--white);
  text-decoration: none;
  transition: 0.3s;
}
.grid2 a:hover {
  transform: translateX(5px);
}
.grid3 h2 {
  margin-bottom: 1rem;
  color: var(--secondary);
}

.grid3 p {
  margin-bottom: 10px;
  opacity: 0.9;
}

.grid3 i {
  margin-right: 8px;
  color: var(--secondary);
}
footer > p {
  text-align: center;
  font-size: 0.9rem;
  margin-top: 10px;
}

/* mobile */
@media (max-width: 768px){
.grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.grid2 .links{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.grid2 h2{
    text-align: start;
    margin-top: 1rem;
}
.grid2 a{
    display: flex;
}
.grid3 h2{
    margin-top: 1rem;
}
}

</style>