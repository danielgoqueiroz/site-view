<template>
  <b-container>
    <b-img fluid :src="imgSrc" :alt="alt" class="article-image" />
  </b-container>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: false,
    },
  },
  computed: {
    imgSrc() {
      try {
        return require(`~/content${this.src}`)
      } catch (error) {
        console.error(error)
        return "images/image.jpg"
      }
    },
  },
  methods: {

  },
}
</script>

<style>
.article-image{
  width: inherit;
}
</style>
