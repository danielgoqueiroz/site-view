<template>
  <div>
    <Sobre />
    <Footer />
  </div>
</template>
<script>
import Sobre from '../pages/Sobre'
import Footer from '../components/Footer'

export default {
  components: {
    Sobre,
    Footer,
  },
}
</script>
<style>
*,
*::before,
*::after {
  margin: 0;
}
body {
  background-image: linear-gradient(
    to right,
    rgb(255, 244, 244),
    rgba(198, 220, 228, 0.719)
  );
}
</style>
