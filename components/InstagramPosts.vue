<template>
  <b-container fluid class="p-4 bg-dark">
    <b-row>
      <b-col v-for="image in images" :key="image.index">
        <b-img :src="image.img" width="100%" height="100%"></b-img>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'InstagramPosts',
  data() {
    return {
      images: [
        { img: require('~/static/images/image.jpg') },
        { img: require('~/static/images/image.jpg') },
        { img: require('~/static/images/image.jpg') },
        { img: require('~/static/images/image.jpg') },
        { img: require('~/static/images/image.jpg') },
      ],
    }
  },
}
</script>

<style></style>
