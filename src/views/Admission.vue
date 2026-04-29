<script setup>
import Footer from "@/components/Footer.vue";
import { ref } from "vue";

const name = ref("")
const email = ref("")
const studentClass = ref("")
const submitted = ref(false)

function submitForm(){
    submitted.value = true
}
</script>
<template>
    <section class="admission">
        <div class="intro">
            <h1>Admission</h1>
            <p>
                Join Ascend School and give your child access to quality education, strong values and a bright future. Our admission process is simple, transparent and designed to support every family.
            </p>
        </div>

        <div class="requirements">
            <h2>Admission Requirements</h2>
            <ul>
                <li>Completed application form</li>
                <li>Birth certificate</li>
                <li>Recent passport photographs</li>
                <li>Previous school records (if applicable)</li>
                <li>Medical report</li>
            </ul>
        </div>
        <div class="steps">
            <h2>How to Apply</h2>
            <ol>
                <li>Fill out the online application form</li>
                <li>Submit required documents</li>
                <li>Attend entrance assessment</li>
                <li>Receive admission decision</li>
            </ol>
        </div>
        <div class="form-section">
            <h2>Apply Now</h2>
            <form @submit.prevent="submitForm" class="form">
                <input v-model="name" type="text" placeholder="Full Name" required>
                <input v-model="email" type="email" placeholder="Email Address" required>
                <input v-model="studentClass" type="text" placeholder="Class (e.g Primary 5)" required>

                <button type="submit" class="btn">Submit Application</button>
            </form>

            <p v-if="submitted" class="success">Application submitted successfully</p>
        </div>
    </section>
    <section>
        <Footer/>
    </section>
</template>
<style scoped>
.admission {
    padding: 2rem;
    font-family: "Open Sans", sans-serif;
    animation: slideInLeft 1s ease-out;
   }
   @keyframes slideInLeft{
      0%{
         transform: translateX(-100px);
      }
      100%{
         transform: translateX(0);
      };
}
.intro {
    text-align: center;
    margin-bottom: 3rem;
}
.intro h1{
    font-size: 3rem;
    color: var(--secondary);
}
.intro p{
    max-width: 700px;
    margin: auto;
    color: var(--secondary);
    line-height: 1.6;
}
.requirements {
    margin-bottom: 3rem;
}
.requirements h2{
    color: var(--secondary);
    margin-bottom: 1rem;
}
.requirements ul{
    list-style: none;
    padding: 0;
}
.requirements li{
    background: var(--secondary);
    color: var(--white);
    margin: 0.5rem 0;
    padding: 0.8rem;
    border-radius: 0.5rem;
    max-width: 600px;
}
.steps {
    margin-bottom: 3rem;
}
.steps h2{
    color: var(--secondary);
    margin-bottom: 1rem;
    font-size: 2rem;
}
.steps ol {
    padding-left: 1.2rem;
    color: var(--secondary);
    font-size: 1.2rem;
}
.form-section {
    text-align: center;
    background: var(--secondary);
    max-width: 100%;
    border-radius: 0.5rem;
    padding-top: 1rem;
}
.form-section h2{
    margin-bottom: 0.5rem;
    color: var(--primary);
}
.form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 500px;
    margin: auto;
    padding: 2rem;
}
input {
    padding: 0.8rem;
    border: 1px solid var(--secondary);
    border-radius: 0.5rem;
    outline: none;
}

.btn{
    padding: 0.8rem;
    background: var(--primary);
    color: var(--white);
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1.3rem;
    transition: 1s;
}
.btn:hover{
    background: transparent;
}

.form-section p{
    color: var(--primary);
    font-size: 1.5rem;
}

</style>