<template>
  <b-container fluid class="content">
    <b-row>
      <b-col cols="12" md="8">
        <nuxt-content :document="docs[0]"></nuxt-content>
        {{ docs[0].path }}
      </b-col>
    </b-row>
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
    this.docs = await this.$content(
      'portfolio/photography/photojournalism'
    ).fetch()
  },
}
</script>

<style>
.content {
  padding: 50px;
}
</style>
