<template>
  <div class="container">
    <div class="bottom-left">{{ title }}</div>
    <b-img class="photo-thumb" :src="link" rounded></b-img>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.container {
  position: relative;
  text-align: center;
  color: rgb(17, 16, 29);
}
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}
.photo-thumb {
  padding: 3px;
  max-height: 500px;
}
</style>