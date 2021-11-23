<template>
  <div>
    <Menu />
    <Nuxt />
  </div>
</template>
<script>
import Menu from '~/components/Menu'
export default {
  components: {
    Menu,
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
