<template>
  <b-container fluid>
    Fólio page
    <!-- <DynamicImageLoader path="images/01.jpg" /> -->
  </b-container>
</template>

<script>
// import DynamicImageLoader from './DynamicImageLoader'
export default {
  name: 'Folio',
  components: {
    // DynamicImageLoader,
  },
  data() {
    return {
      works: [
        {
          title: 'Título',
          imgSrc: 'https://picsum.photos/600/300/?image=25',
          imgAlt: 'Fólio',
          tag: 'Teste',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style></style>
