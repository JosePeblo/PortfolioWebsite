<script setup lang="ts">
import Nav from '../Nav.vue';
</script>

<template>
  <section>
    <Nav />
    <div class="h-stack">
      <span>
        <h1>
          Pablo Martínez
        </h1>
        <p class="cover-text">
          BS in Computer Science and Engineering
        </p>
        <div class="media-container">
          <a 
            href="https://github.com/JosePeblo" 
            class="media-ref"
            target="_blank"
          >
            Github
          </a>
          <a 
            href="https://linkedin.com/in/josepablomarval" 
            class="media-ref"
            target="_blank"
          >
            Linkedin
          </a>
        </div>
      </span>
      <div class="img-stack">
        <img src="/src/assets/bghero.png" alt="background" class="bg-image">
        <img 
          src="/src/assets/me.png" 
          alt="cover-image"
          class="cover-image"
        >
      </div>
    </div>
  </section>

</template>

<style scoped>
* {}

section {
  padding-inline: 2rem;
  padding-bottom: 4rem;
  background-color: #f3e7d7;
}

h1 {
  font-weight: 600;
  font-size: 3rem;
}

.h-stack {
  display: flex;
  margin: auto;
  justify-content: space-around;
  align-items: center;
}

.media-container {
  display: flex;
  gap: 8px;
}

.media-ref {
  background-color: black;
  color: #fafafa;

  padding-inline: 12px;
  padding-block: 4px;

  border-radius: 8rem;
}

.cover-text {
  font-size: 22px;
}

.img-stack {
  position: relative;
  width: 50%;
}

.bg-image {
  position: absolute;
  left: -44px;
  top: -23px;
}

.cover-image {
  filter: saturate(0) brightness(1.2);
  border-bottom-left-radius: 8px;
}

@media only screen and (max-width: 130rch) {
}

@media only screen and (max-width: 90rch) {
  .h-stack {
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
  }

  .img-stack {
    width: 90%;
  }
}

</style>

