<template>
  <div class="projects">
    <b-container>
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
            :img-src="getImage(project.img)"
            border-variant="light"
            style="max-width: 20rem"
            class="text-center"
            :header="project.title"
          >
            <b-card-text>
              <ImgCont  :src="project.dir + '/' + project.img"/>
            </b-card-text>
          </b-card>
        </b-link>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
import ImgCont from "./global/ImgCont";
var path = require('path');

export default {
  components: {ImgCont},
  async asyncData({ $content }) {
  },
  async mounted() {
    const projects = await this.$content('portfolio',{deep: true}).fetch()
    this.projects = projects
  },
  data() {
    return {
      projects: {}
    }
  },
  methods: {
    getImage(img) {
      // return require(`~/portifolio/developer/${img}`)
    },
  },
}
</script>

<style>
.imagem {
  width: 100%;
  height: 100%;
}
.projects {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #badde2;
}
</style>
