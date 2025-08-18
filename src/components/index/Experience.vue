<script setup lang="ts">
</script>

<template>
  <section id="experience">
    <div class="experience-h-stack">
      <span>
        <h2>Experience</h2>
        <p>
          Worked as a freelancer on <strong>Upwork</strong>, where I developed an AI-powered <em>Customer Success Manager (CSM)</em> tool. The System leveraged analytics data from the client's platform, extracted via <strong>PostHog</strong>, to detect user friction and proactivelly reduce churn.
        </p>
        <p>
          I built a responsive web interface using <strong>React</strong> and implemented the backend with <strong>Node.js</strong>. Additionally, I automated decision-making and strategic planning by integrating an AI agent using the <strong>OpenAI API</strong>.
        </p>
      </span>

      <a href="https://www.upwork.com/ab/g/pub/wom/prx/eyJwZXJzb25VaWQiOiIxODg3MjM4MDE0OTkxMzQxOTcwIiwiY29udHJhY3RSaWQiOiIzOTg4NTE3OCIsImJhbm5lclR5cGUiOiJjb250cmFjdCIsImJhbm5lclZhcmlhbnQiOiJkZWZhdWx0Iiwid29tIjoiZmx2MiIsInJlZGlyZWN0IjoiZmxfcHJvZmlsZV9wcm9tbyJ9">
        
        <img 
          src="/freelance.png" 
          alt="Upwork job certification"
          class="experience-image"
        >
      </a>
      
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
  background-color: #242424;
  color: #fafafa;

}

.experience-h-stack > span {
  flex: 5;
}

.experience-h-stack > a {
  flex: 4;
}

.experience-h-stack {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.experience-image {
  width: 100%;

}

@media only screen and (max-width: 130rch) {
}

@media only screen and (max-width: 90rch) {
  .experience-h-stack {
    flex-direction: column;
  }

}

</style>

