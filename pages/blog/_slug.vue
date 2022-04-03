<template>
  <b-container fluid class="content">
    <h1>{{ doc.title }}</h1>
    <nuxt-content :document="doc"></nuxt-content>
  </b-container>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const doc = await $content('portfolio/developer/covidômetro').fetch()

    return {
      doc,
    }
  },
}
</script>

<style>
.content {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #badde2;
}
</style>
