<template>
  <b-container>
    <contentHeader
      title="Meus projetos"
      image-title-url="https://danielqueiroz.com/api/wp-content/uploads/2023/01/portifolio_300.jpg"
    />
    <ProjectList :items="projects" :loading="loading" />
  </b-container>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      loading: false,
      projects: [],
      teste: [],
    }
  },
  async mounted() {
    this.get()
    await this.getProjects()
    this.loading = false
  },
  methods: {
    get() {
      axios
        .get('https://danielqueiroz.com/api/wp-json/wp/v2/categories')
        .then((res) => {
          this.teste = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async getProjects() {
      await axios
        .get('https://danielqueiroz.com/api/wp-json/wp/v2/posts?_embed')
        .then((res) => {
          this.projects = res.data
          console.log(this.projects)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style>
</style>
