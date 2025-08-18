<script setup lang="ts">
</script>

<template>
  <section id="about">
    <div class="about-h-stack">
      <img 
        src="/servers.jpg" 
        alt="image"
        class="about-image"
      >
      <span>
        <h2>About Me</h2>
        <p>
          I'm a mexican new grad. Studied Computer Science at Tec de Monterrey, campus Querétaro.
          Started my journey doing Arduino projects.
          <br>
          Im passionate about web development, telecom, infrastructure and game development.
        </p>
      </span>
    </div>
  </section>
</template>

<style scoped>
* {}

h2 {
  font-weight: 600;
  font-size: 32px;
}

section {
  padding: 2rem;
}

section > *:not(:last-child) {
  margin-bottom: 2rem;

}

.about-h-stack {
  display: flex;
  gap: 2rem;
}

.about-image {
  width: 40%;
}

@media only screen and (max-width: 130rch) {
}

@media only screen and (max-width: 90rch) {
  .about-h-stack {
    flex-direction: column-reverse;
  }

  .about-image {
    width: 100%;
  }
}

</style>

