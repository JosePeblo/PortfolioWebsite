<script setup lang="ts">
function PostEmail() {
  const form: HTMLFormElement | null = document.getElementById("email-form")
  if (form === null) return;

  let data = new FormData(form);

  fetch(`${window.location.origin}/mail-me`, {
    method: 'post',
    body: data,
  }).then(res => {
      console.log(res.status)
      switch (res.status) {
        case 200: {
          form.reset()
        } break;
        case 400: {
          alert('Please send the correct fields');
        } break;
        case 500: {
          alert('We had trouble processing your request try again later');
        } break;
      }
    }).catch(_ => {
      alert('We had trouble processing your request try again later');
    })
  return false;
}
</script>

<template>
  <div class="email-card" id="contact">
    <h2>Send me a message</h2>
    <form id="email-form"  @submit.prevent="PostEmail">
      <div class="form-input">
        <label for="name">Name</label>
        <input type="text" id="name" name="name">
      </div>

      <div class="form-input">
        <label for="email">Email</label>
        <input type="text" id="email" name="email">
      </div>

      <div class="form-input">
        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject">
      </div>

      <div class="form-input">
        <label for="message">Message</label>
        <input type="text" id="message" name="message">
      </div>

      <button type="submit">
        Send
      </button>
    </form>
  </div>
</template>

<style scoped>
* {}

h2 {
  font-weight: bolder;
  font-size: 24px;
  padding-bottom: 16px;
}

.email-card {
  margin-inline: auto;
  margin-bottom: 2rem;
  padding: 2rem;
  border: 4px solid black;
  background-color: var(--highlight-bg-color);
  box-shadow: 
    1px 1px black,
    2px 2px black,
    3px 3px black,
    4px 4px black,
    5px 5px black,
    6px 6px black,
    7px 7px black,
    8px 8px black
  ;

  text-align: center;
  width: 500px;
}

.email-card > form > *:not(:last-child) {
  margin-bottom: 24px;
}

.form-input {
  position: relative;
}

.form-input > label {
  font-size: 16px;
  position: absolute;
  left: 12px;
  top: -12px;
  padding-inline: 2px;
  background-color: var(--highlight-bg-color);
}

input[type="text"] {
  background-color: transparent;
  border: 1px solid black;
  border-radius: 6px;

  padding-inline: 16px;
  padding-block: 8px;
  width: 100%;
}

input:focus {
  outline: none;
}

button[type="submit"] {
  background-color: black;
  color: #fafafa;
  width: 100%;
  padding-block: 8px;
}

@media only screen and (max-width: 130rch) {
}

@media only screen and (max-width: 90rch) {
  .email-card {
    width: 90%;
  }
}


</style>


