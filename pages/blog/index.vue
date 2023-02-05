<template>
  <b-container>
    <ContentHeader
      title="Blog"
      image-title-url="https://danielqueiroz.com/api/wp-content/uploads/2023/01/projects_300.px_-1-150x150.jpg"
    />
    <ProjectList :items="posts" :loading="loading" />
  </b-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      posts: [],
      loading: true,
    }
  },
  async mounted() {
    await this.getPosts()
  },
  methods: {
    async getPosts() {
      await axios
        .get(
          'https://danielqueiroz.com/api/wp-json/wp/v2/posts?_embed&categories=19'
        )
        .then((res) => {
          this.posts = res.data
          this.loading = false
          console.log(this.projects)
        })
        .catch((err) => {
          console.error(err)
        })
    },
  },
  computed: {},
}
</script>

<style>
.content {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #badde2;
}
</style>
