<template>
  <b-container>
    <b-row>
      <b-col cols="2">
        <b-img
          rounded
          src="https://danielqueiroz.com/api/wp-content/uploads/2023/01/portifolio_300.jpg"
          fluid
        >
        </b-img>
      </b-col>
      <b-col cols="10"
        ><h3>
          Meus projetos
          <b-link title="" href="https://github.com/danielgoqueiroz">
            <b-icon-github
              title="Github"
              class="icon"
              variant="info"
              target="_blank"
              font-scale="1"
            />
          </b-link></h3
      ></b-col>
    </b-row>
    <br />
    <b-row>
      <b-col cols="2"></b-col>
      <b-col cols="10">
        <b-card-group deck class="mb-3">
          <b-card
            v-for="(project, index) in projects"
            :key="index"
            v-b-modal.modal-1
            :img-src="getImage(project)"
            border-variant="light"
            style="max-width: 20rem"
            class="text-center"
            :header="project.title.rendered"
            @click="selectProject(project)"
          />
        </b-card-group>
      </b-col>
    </b-row>
    <b-modal id="modal-1" title="Projetos" size="lg">
      <PostView :content="projectHtml" />
    </b-modal>
  </b-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      project: null,
      projects: [],
    }
  },
  computed: {
    projectHtml() {
      return this.project ? this.project.content.rendered : ''
    },
  },
  async mounted() {
    await this.getProjects()
  },
  methods: {
    selectProject(project) {
      this.project = project
    },
    getImage(project) {
      const mediaList = project._embedded['wp:featuredmedia']
      if (mediaList && mediaList.length > 0) {
        const url = mediaList[0].source_url
        return url
      }
      return '#'
    },
    async getProjects() {
      await axios
        .get('https://danielqueiroz.com/api/wp-json/wp/v2/posts?_embed')
        .then((res) => {
          this.projects = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  // components: { PostView },
}
</script>

<style scoped>
</style>
