<template>
  <b-container class="project-content content">
    <b-card
      :img-src="imagem"
      :title="doc.title"
      img-top
    >
      <b-card-text>
        <nuxt-content :document="doc"></nuxt-content>
      </b-card-text>
    </b-card>
  </b-container>
</template>

<script>

export default {
  async asyncData({ $content, params }) {
    if (params.slug == undefined) {
      const docs = await $content('portfolio/developer', { deep: true }).fetch()
      return { docs }
    } else {
      let doc = await $content(`portfolio/developer/${params.slug}`).fetch()
      if (doc.length == 1) {
        doc = doc[0]
      }
      return {
        doc, params
      }
    }
  },
  methods: {
  },
  computed: {
    imagem () {
      if (this.doc !== undefined) {
        return require(`~/content${this.doc.dir}/${this.doc.img}`)
      } else {
        return ''
      }
    }
  },
  data() {
    return {
      docs: [],
    }
  },
  async fetch() {
  },
}
</script>

<style>
.project-content {
  margin-top: 50px;
  font-size: 26px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
