<template>
  <div>
    <Menu />
    <router-view />
    <b-icon-alarm />
    <Sobre />
    <Contato />
  </div>
</template>
<script>
import Menu from '~/components/Menu'
import Contato from '~/pages/Contato/index.vue'
export default {
  components: {
    Menu,
    Contato,
  },
}
</script>
<style>
*,
*::before,
*::after {
  margin: 0;
}
</style>
