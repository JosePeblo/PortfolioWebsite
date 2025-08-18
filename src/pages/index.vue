<script setup lang="ts">
import About from '../components/index/About.vue';
import Contact from '../components/index/Contact.vue';
import Experience from '../components/index/Experience.vue';
import Footer from '../components/index/Footer.vue';
import Hero from '../components/index/Hero.vue';
import Projects from '../components/index/Projects.vue';

</script>

<template>
  <main>
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
  </main>
</template>

<style scoped>
* {} 

main {
  background-color: #fefaf0;
  font-family: "Work Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: normal;
  font-style: normal;

  font-size: 18px;
}


main > section > * {
  max-width: 130rch;
  margin-inline: auto;
}

</style>
