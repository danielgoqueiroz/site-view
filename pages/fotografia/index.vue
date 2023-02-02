<template>
  <b-container>
    <ContentHeader
      title="Fotografia"
      image-title-url="https://danielqueiroz.com/api/wp-content/uploads/2023/01/daniel_mj1_a_creative_illustration_ultrarealistic_about_photogr_639dc00b-56ea-4231-a9e2-11a188720a47_300.jpg"
    />
    <ProjectList :items="posts" />
  </b-container>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: [],
    }
  },
  async mounted() {
    await this.getProjects()
  },
  methods: {
    async getProjects() {
      await axios
        .get('https://danielqueiroz.com/api/wp-json/wp/v2/posts?_embed')
        .then((res) => {
          if (res.status === 200 && res.data.length > 0) {
            this.posts = res.data
            console.log(this.posts)
          } else {
            console.log('No data found')
          }
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
