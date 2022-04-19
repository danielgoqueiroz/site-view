<template>
  <b-container fluid class="content">
    <b-card
      img-alt="Card image"
      img-left
      class="mb-5"
      img-src="images/image_v.jpg"
    >
      <b-card-text>
        <nuxt-content :document="info" />
      </b-card-text>
      <b-link
        title=""
        href="https://www.linkedin.com/in/danielgqueiroz/"
        target="_blank"
      >
        <b-icon-linkedin
          title="Linkedin profile"
          class="icon"
          variant="info"
          :font-scale="iconScale"
        />
      </b-link>
    </b-card>
  </b-container>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      info: {},
      infoChosed: 1,
      imageScale: '100%',
      iconScale: 1,
    }
  },
  computed: {},
  async mounted() {
    const info = await this.$content('about/developer').fetch()
    this.info = info
  },
  methods: {
    switchOption() {
      this.infoChosed = !this.infoChosed
    },
  },
}
</script>
<style>
.content {
  width: 1000px;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
}
</style>
