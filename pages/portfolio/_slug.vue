<template>
  <b-container fluid class="content">
    <div v-show="docs">
      <h2>Potfólio</h2>
      <b-jumbotron v-for="doc in docs" key="doc.key">
        <template #header>
          <b-link :href="doc.dir">{{doc.title }}</b-link>
        </template>
        <template #lead>
          {{doc.tag}}
        </template>
        <hr class="my-4">
        <p>
          {{doc.description}}
        </p>
      </b-jumbotron>
    </div>
    <div v-show="doc">
      <h1>{{ doc ? doc.title : "" }}</h1>
      <nuxt-content :document="doc"></nuxt-content>
    </div>
  </b-container>
</template>

<script>
import ImgCont from "../../components/global/ImgCont";
export default {
  components: {ImgCont},
  async asyncData({ $content, params }) {
    if (params.slug == undefined) {
      const docs = await $content('portfolio', { deep: true }).fetch()
      return { docs }
    } else {
      let doc = await $content(`portfolio/${params.slug}`).fetch()
      if (doc.length == 1) {
        doc = doc[0]
      }
      return {
        doc, params
      }
    }
  },
  computed: {
  }
}
</script>

<style>
.content {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #badde2;
}
</style>
