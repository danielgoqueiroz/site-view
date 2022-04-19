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
      default: '',
    },
  },
  computed: {
    imgSrc() {
      return require(`~/content${this.src}`)
    },
  },
  methods: {},
}
</script>

<style>
.article-image {
  width: inherit;
}
</style>
