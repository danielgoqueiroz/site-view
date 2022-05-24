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
      <PostView :content="projectHtml"/>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'
import PostView from './PostView.vue'
export default {
    data() {
        return {
            project: null,
            projects: [],
        };
    },
    computed: {
        projectHtml() {
            return this.project ? this.project.content.rendered : "";
        }
    },
    mounted() {
        this.getProjects();
    },
    methods: {
        selectProject(project) {
            console.log(project);
            this.project = project;
        },
        getImage(project) {
            const mediaList = project._embedded["wp:featuredmedia"];
            if (mediaList && mediaList.length > 0) {
                const url = mediaList[0].source_url;
                return url;
            }
            return "#";
        },
        getProjects() {
            axios.get("https://danielqueiroz.com/api/wp-json/wp/v2/posts?_embed")
                .then(res => {
                this.projects = res.data;
            })
                .catch(err => {
                console.log(err);
            });
        },
    },
    components: { PostView }
}
</script>

<style scoped> 

.projects {
}
</style>
