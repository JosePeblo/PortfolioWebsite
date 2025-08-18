<script setup lang="ts">
</script>

<template>
  <nav>
    <ul>
      <li>
        <a href="#about">
          About
        </a>
      </li>
      <li>
        <a href="#experience">
          Experience
        </a>
      </li>
      <li>
        <a href="#projects">
          Projects
        </a>
      </li>
      <li>
        <a href="#contact">
          Contact
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
* {}

nav {
  font-size: 20px;
}

nav > ul {
  display: flex;
  gap: 1rem;
  padding-top: 8px;
  padding-bottom: 5px;
}

ul > li > a {
  padding-bottom: 1px;
}

ul > li > a:hover {
  border-bottom: 1px solid black;
}

@media only screen and (max-width: 130rch) {
}

@media only screen and (max-width: 90rch) {
  nav {
    font-size: 1rem;
    font-weight: 500;
  }

}


</style>

