<template>
  <div class="projects">
    <div class="title">
      <h2>
        Projetos
        <b-link title="" href="https://github.com/danielgoqueiroz">
          <b-icon-github
            title="Github"
            class="icon"
            variant="info"
            target="_blank"
            font-scale="1"
          />
        </b-link>
      </h2>
    </div>
    <b-card-group deck class="mb-3">
      <b-link
        v-for="(project, index) in projects"
        :key="index"
        :to="project.dir"
      >
        <b-card
          :img-src="getImage(project)"
          border-variant="light"
          style="max-width: 20rem"
          class="text-center"
          :header="project.title"
        >
          <b-card-text> </b-card-text>
        </b-card>
      </b-link>
    </b-card-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
    }
  },
  async mounted() {
    const projects = await this.$content('portfolio', {
      deep: true,
    }).fetch()
    this.projects = projects
  },
  methods: {
    getImage(project) {
      return require(`../content${project.dir}/${project.img}`)
    },
  },
}
</script>

<style></style>
