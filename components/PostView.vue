<template>
  <b-jumbotron :header="title" container-fluid >
    <span class="content-img" v-html="content"></span>
  </b-jumbotron>
</template>

<script>
export default {
    props: ['content', 'title']
}
</script>

<style>
.content-img > * img { 
    max-width: 100%; 
    height: fit-content;
}
</style>