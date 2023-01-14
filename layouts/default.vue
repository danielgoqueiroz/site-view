<template>
  <b-container class="margin-top">
    <Menu />
    <RouterView />
  </b-container>
  <!-- <b-container fluid class="margin-top"> </b-container> -->
</template>
<script>
export default {
  components: {},
}
</script>
<style>
*,
*::before,
*::after {
  margin: 0;
}
.margin-top {
  margin-top: 50px;
}
</style>
