<template>
  <b-container class="d-flex justify-content-around icons">
    <b-link href="https://www.instagram.com/danielgoqueiroz/" target="_blank">
      <b-icon-instagram :font-scale="iconScale"
    /></b-link>
    <b-link href="https://www.facebook.com/danielgoqueiroz" target="_blank"
      ><b-icon-facebook :font-scale="iconScale"
    /></b-link>
    <b-link href="https://github.com/danielgoqueiroz" target="_blank"
      ><b-icon-github :font-scale="iconScale"
    /></b-link>
    <b-link href="https://github.com/danielgoqueiroz" target="_blank"
      ><b-icon-linkedin :font-scale="iconScale"
    /></b-link>
    <b-link
      href="https://www.youtube.com/channel/UC7ksn1uSofsFsFo2l4YUxKw"
      target="_blank"
      ><b-icon-youtube :font-scale="iconScale" variant="danger"
    /></b-link>
    <b-link title="whatsapp" href="https://wa.me/5548999370534"
      ><b-icon-telephone-fill :font-scale="iconScale"
    /></b-link>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      imageScale: '100%',
      iconScale: 2,
    }
  },
  methods: {},
}
</script>

<style></style>
