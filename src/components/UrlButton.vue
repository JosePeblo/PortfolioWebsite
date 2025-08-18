<script setup lang="ts">
import { computed } from 'vue';
import GitHub from './GitHub.vue';

const props = defineProps({ link: String })

enum UrlType {
  Github = 'github-link',
  Default = 'default-link',
}

const type = computed(() => {
  const urlStart = 'https?://(www\.)?';
  const githubRegex = new RegExp(urlStart + 'github\.com');

  return githubRegex.test(props.link!) ? UrlType.Github : UrlType.Default;
});

</script>

<template>
  <a :href="link" target="_blank" :class="type.toString()" @click.stop>
    <span v-if="type == UrlType.Github">
      <span>
        View GitHub 
      </span>
      <GitHub class="icon" />
    </span>
    <span v-else-if="type == UrlType.Default">
      View Page 
    </span>
  </a>
</template>

<style scoped>
* {}

a {
  font-size: 16px;

  padding-inline: 8px;
  padding-block: 6px;
  border-radius: 8px;
}

a > span {
  display: inline-flex;
  gap: 8px;
}

.icon {
  width: 20px;
  display: inline-block;
  fill: white;
}

.github-link {
  background-color: black;
  color: #fafafa;
}

.default-link {
  border: 1px solid black;
}

</style>

