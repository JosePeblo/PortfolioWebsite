<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';
import ProjectCard from '../ProjectCard.vue';
import content from '../../assets/content';
import UrlButton from '../UrlButton.vue';

let collapsed = ref(true);

let displayedContent = ref(content.slice(0,3));

function toggleContent() {
  if(collapsed.value) {
    displayedContent.value = content;
  } else {
    displayedContent.value = content.slice(0,3);
  }
  collapsed.value = !collapsed.value;
}

const modal = useTemplateRef('modal');
let modalBody = ref(content[0]);

type content_t = typeof modalBody.value;

function openModal(newBody: content_t) {
  modalBody.value = newBody;
  modal.value?.showModal();
}

function closeModal() {
  modal.value?.close();
}

function modalClick(event: MouseEvent) {
  let rect = modal.value!.getBoundingClientRect();
  if(!(rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX && 
      event.clientX <= rect.left + rect.width)) {
    closeModal();
  }
}

</script>

<template>
  <section id="projects">
    <div>
      <h2>Projects</h2>
      <p>
        Some of my personal and school projects
      </p>
      <div class="card-container">
        <div class="card-grid">
          <ProjectCard 
            v-for="project in displayedContent"
            :title="project.title"
            :content="project.content"
            :tags="project.tags"
            :image="project.image"
            :link="project.link"

            v-on:click="openModal(project)"
          />
        </div>
      </div>
      <div class="button-container">
        <button type="button" class="expand-btn" v-on:click="toggleContent">
          <i :class="{bx: true, 'bx-chevron-down': collapsed, 'bx-chevron-up': !collapsed}"></i>
        </button>
      </div>
    </div>
    <dialog ref="modal" @click="modalClick">
      <img :src="modalBody.image" alt="">
      <div class="dialog-content">
        <p>{{ modalBody.content }}</p>
        <UrlButton :link="modalBody.link" />
      </div>
      <button @click="closeModal">
        <i class="bx bx-x"/>
      </button>
    </dialog>
  </section>
</template>

<style scoped>
*{}

h2 {
  font-weight: 600;
  font-size: 32px;
}

section {
  padding: 2rem;
}

dialog {
  width: 50%;
  border-radius: 1rem;
  padding: 0;
}

dialog::backdrop {
  background-color: #00000088;
}

dialog > button {
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 8px;
  padding-bottom: 4px;
  padding-inline: 18px;
  background-color: #0f0f0f;
  font-size: 24px;
  color: #fafafa;
  border-bottom-left-radius: 1rem;

}

dialog > img {
  user-select: none;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.dialog-content {
  display: block;
  padding: 1rem ;
  margin: 1rem;
}

.dialog-content > p {
  margin-bottom: 1rem;
}

.button-container {
  display: flex;
  padding: 1rem;
}

.expand-btn {
  background: #00000022;
  padding-block: 8px;
  padding-inline: 8px;
  border-radius: 1rem;
  font-size: 24px;
  line-height: 0px;
  margin-inline: auto;
}

.card-grid {
  margin-top: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;

  /*
    https://css-tricks.com/css-only-carousel/
    overflow-x: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  */
}

@media only screen and (max-width: 130rch) {
  .card-grid {
    grid-template-columns: 1fr 1fr;
  }
  
}

@media only screen and (max-width: 90rch) {
  .card-grid {
    grid-template-columns: 1fr;
  }

  dialog {
    width: 100%;
    border-radius: 0;
  }

  dialog > button {
    padding-top: 8px;
    padding-bottom: 0;
    padding-inline: 18px;
  }
}

</style>

