<template>
  <b-container fluid>
    {{ docs }}
    <nuxt-content :document="docs"></nuxt-content>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      docs: [],
    }
  },
  async fetch() {
    this.docs = await this.$content('blog').fetch()
  },
}
</script>

<style></style>
