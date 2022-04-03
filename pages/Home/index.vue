<template>
  <b-container>
    <PhotoSlide />
    <SobreCard />
    <InstagramPosts />
    <Folio />
    <ContatoForm />
  </b-container>
</template>

<script>
// import SobreCard from '~/components/SobreCard'
// import InstagramPosts from '~/components/InstagramPosts'
// import Folio from '~/components/Folio'
// import ContatoForm from '~/components/ContatoForm'
// import PhotoSlide from '~/components/PhotoSlide'

export default {
  name: 'Sobre',
  components: {
    // SobreCard,
    // InstagramPosts,
    // Folio,
    // ContatoForm,
    // PhotoSlide,
  },
  data() {
    return {
      image: {
        alt: 'Imagem',
        link: require('~/static/images/image.jpg'),
      },
    }
  },
}
</script>
<style></style>
