<template>
  <b-container fluid class="topMargin">
    <b-row class="backgoundGradient">
      <b-col cols="2" />
      <b-col cols="4"
        ><b-img
          class="img-about"
          src="images/sobre/daniel_transparent.png"
          alt="Image"
          fluid
      />
      </b-col>
      <b-col cols="4">
        <b-card bg-variant="dark" text-variant="white" title="Sobre mim">
          <b-card-text >
            <nuxt-content :document="info" />
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <div class="line" />
  </b-container>
</template>
<script>
import SocialIcons from '../../components/SocialIcons'
export default {
  components: {
    SocialIcons,
  },
  async mounted() {
    const info = await this.$content('about/developer').fetch()
    this.info = info
  },
  data() {
    return {
      info: {},
      infoChosed: 1,
      imageScale: '100%',
    }
  },
  computed: {},
  methods: {
    switchOption() {
      this.infoChosed = !this.infoChosed
    },
  },
}
</script>
<style>
.backgoundGradient {
  background: linear-gradient(
    to bottom,
    rgb(5, 124, 143, 0) 70%,
    rgb(5, 124, 143, 0.2) 100%
  );
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.line {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: #057c8f;
  height: 3px;
  width: 100%;
  background-color: rgb(5, 124, 143);
}
.about {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: #17a2b8;
}
.topMargin {
  margin-top: 2rem;
}
.content {
  padding: 2rem;
}
.icons {
  margin-bottom: 2rem;
  width: 35%;
}
.fadeAnimation {
  animation: 5s appear;
  margin: auto;
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
