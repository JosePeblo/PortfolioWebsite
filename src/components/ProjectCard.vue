<script setup lang="ts">
import UrlButton from './UrlButton.vue';

defineProps<{ 
  'title': string,
  'content': string,
  'tags': string[],
  'link': string,
  'image': string,
}>();

</script>

<template>
  <div class="card">
    <img 
      :src="image"
      alt=""
      class=""
    >
    <div class="card-body">
      <div class="card-text-content">
        <h3>{{ title }}</h3>
        <div class="tag-container">
          <span v-for="tag in tags" class="tag">
            {{ tag }}
          </span>
        </div>
        <p>
          {{ content }}
        </p>
      </div>
      <div>
        <UrlButton :link="link"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
*{}

.card {
  scroll-snap-align: start;
  border-radius: 24px;
  overflow: hidden;
  border: 4px solid black;
  background-color: var(--highlight-bg-color);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  user-select: none;

  /*
  flex-shrink: 0;
  */
}

.card > img {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.card-body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  gap: 8px;
}

.card-text-content>h3 {
  font-weight: 500;
  font-size: 20px;
}

.card-text-content>p {
  font-size: 16px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
}

.tag-container {
  word-break: break-all;
}

.tag {
  font-size: 15px;
  background-color: #6f6f6f;
  color: #fafafa;
  padding-inline: 8px;
  padding-block: 2px;
  margin-right: 4px;
  border-radius: 16px;
  white-space: nowrap;
}

</style>

