<template>
  <div class="projects">
    <b-container>
      <div class="title"><h2>Projetos</h2></div>
      <b-card-group deck class="mb-3">
        <b-link
          v-for="(project, index) in projects"
          :key="index"
          :to="project.path"
        >
          <b-card
            :img-src="getImage(project.img)"
            border-variant="light"
            style="max-width: 20rem"
            class="text-center"
            :header="project.title"
          >
            <b-card-text> <nuxt-content :document="project" /></b-card-text>
          </b-card>
        </b-link>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
export default {
  async mounted() {
    const projects = await this.$content('portfolio/developer').fetch()
    this.projects = projects
  },
  data() {
    return {
      projects: [],
    }
  },
  methods: {
    getImage(img) {
      return require(`~/assets/images/${img}`)
    },
  },
}
</script>

<style>
.projects {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #badde2;
}
</style>
