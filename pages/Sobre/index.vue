<template>
  <b-container fluid class="content">
    <SocialIcons />
    <b-row>
      <b-col cols="1" />
      <b-col cols="4">
        <b-img
          class="img-about"
          src="images/sobre/daniel-queiroz_quadrado.jpg"
          alt="Image"
          fluid
          rounded="circle"
        />
      </b-col>

      <b-col cols="5">
        <transition name="fadeAnimation">
          <div class="info">
            <b-container
              v-for="(info, key) in infos"
              v-show="infoChosed == key"
              :key="info.key"
            >
              <h1>Olá, eu sou<br />Daniel G. Queiroz</h1>
              <nuxt-content :document="info" />
            </b-container>
            <p></p>
          </div>
        </transition>
      </b-col>

      <b-col align-self="center">
        <b-button-close @click="switchOption()">
          <b-icon-arrow-right-circle font-scale="2.5" />
        </b-button-close>
      </b-col>
      <b-col cols="1" />
    </b-row>
  </b-container>
</template>
<script>
import SocialIcons from '../../components/SocialIcons'
export default {
  components: {
    SocialIcons,
  },
  async mounted() {
    const infos = await this.$content('about').fetch()
    this.infos = infos
  },
  data() {
    return {
      infos: [],
      infoChosed: 1,
      imageScale: '100%',
    }
  },
  computed: {
    infoChosedBoolean() {
      return this.infoChosed ? 0 : 1
    },
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
