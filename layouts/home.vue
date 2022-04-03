<template>
  <div>
    <Menu />
    <Divisor />
    <About />
    <Divisor />
<!--    <Projects />-->
    <Contact />
  </div>
</template>
<script>
import About from '~/pages/About'
import Menu from '~/components/Menu.vue'
import Contact from '~/pages/Contact'
import WelcomeSlider from '~/components/WelcomeSlider.vue'
import Divisor from '~/components/Divisor.vue'

export default {
  components: {
    WelcomeSlider,
    Menu,
    About,
    Contact,
    Divisor,
  },
}
</script>
<style>
*,
*::before,
*::after {
  margin: 0;
}
.menu {
  z-index: 1000;
  width: 100%;

  opacity: 1;
}
body {
  background-image: linear-gradient(
    to right,
    rgb(255, 244, 244),
    rgba(198, 220, 228, 0.719)
  );
}
</style>
