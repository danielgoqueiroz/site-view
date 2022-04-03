<template>
  <div>
    <Menu />
    <RouterView />
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
