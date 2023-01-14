<template>
  <b-container class="main">
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
    <div class="projects">
      <div class="title">
        <h2></h2>
      </div>
      <b-card-group deck class="mb-3">
        <b-link v-for="(project, index) in projects" :key="index">
          <b-card
            v-b-modal.modal-1
            :img-src="getImage(project)"
            border-variant="light"
            style="max-width: 20rem"
            class="text-center"
            :header="project.title.rendered"
            @click="selectProject(project)"
          />
        </b-link>
      </b-card-group>
      <b-modal id="modal-1" title="Projetos" size="lg">
        <PostView :content="projectHtml" />
      </b-modal>
    </div>
  </b-container>
</template>

<script>
import axios from 'axios'
import PostView from './PostView.vue'
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
  mounted() {
    this.getProjects()
  },
  methods: {
    selectProject(project) {
      console.log(project)
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
    getProjects() {
      axios
        .get('https://danielqueiroz.com/api/wp-json/wp/v2/posts?_embed')
        .then((res) => {
          this.projects = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  components: { PostView },
}
</script>

<style scoped>
.projects {
}
</style>
