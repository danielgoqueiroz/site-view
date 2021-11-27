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
    rgb(244, 245, 223),
    rgba(232, 238, 240, 0.719)
  );
}
</style>
