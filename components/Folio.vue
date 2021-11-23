<template>
  <b-container fluid>
    <b-card
      :title="works.title"
      img-src="https://picsum.photos/600/300/?image=25"
      :img-alt="works.imgAlt"
      img-top
      :tag="works.tag"
      style="max-width: 20rem"
      class="mb-2"
    />
  </b-container>
</template>

<script>
export default {
  name: 'Folio',
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
