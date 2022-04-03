<template>
  <div>
    <b-row no-gutters>
      <b-col class="side-dev" :cols="(12 - mainColumns) / 2">
        <VerticalMenu
          :itens="devButtons.itens"
          @selected="selectPage"
          :mainColumn="mainColumns > 0"
        />
      </b-col>
      <b-col class="side-design" :cols="mainColumns">
        <component
          class="transition"
          v-if="selectedPage != ''"
          :is="selectedPage"
        ></component>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import SocialIcons from '../../components/SocialIcons'
import VerticalMenu from '../../components/VerticalMenu'
import Contact from '../../pages/Contact/index.vue'
import Projects from '../../pages/Portfolio/Develop/index.vue'
import Develop from '../../pages/Develop/index.vue'
import About from '../../pages/About/index.vue'

export default {
  components: {
    SocialIcons,
    VerticalMenu,
    Develop,
    About,
    Projects,
    Contact,
  },
  async mounted() {
    const infos = await this.$content('about').fetch()
    this.infos = infos
  },
  data() {
    return {
      selectedPage: '',
      mainColumns: 10,
      devButtons: {
        indexSelected: 0,
        itens: [
          {
            name: 'Develop',
            icon: 'code-square',
          },
          {
            name: 'Projects',
            icon: 'card-checklist',
          },
          { name: 'Studies', icon: 'book' },
          { name: 'Contact', icon: 'telephone' },
          { name: 'About', icon: 'person' },
        ],
      },
      infos: [],
      infoChosed: 0,
      imageScale: '100%',
    }
  },
  computed: {
    infoChosedBoolean() {
      return this.infoChosed ? 0 : 1
    },
  },
  methods: {
    selectPage(item) {
      this.selectedPage = item
    },
    switchOption() {
      this.infoChosed = !this.infoChosed
    },
  },
}
</script>
<style>
fade-enter-active,
.side-photo,
.side-dev {
  height: 100vh;
  width: 50px;
}
.b-link:hover {
  text-decoration-line: none;
  color: rgb(255, 255, 255);
}
.main-titles {
  display: block;
  position: absolute;
  align-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 0 4px #000;
}

.side-dev {
  background: rgb(159, 216, 107);
  background: radial-gradient(
    circle,
    rgba(159, 216, 107, 1) 0%,
    rgba(83, 186, 131, 1) 0%,
    rgba(16, 44, 50, 1) 100%
  );
}
.side-photo {
  background: rgb(5, 155, 154);
  background: radial-gradient(
    circle,
    rgba(5, 155, 154, 1) 0%,
    rgba(9, 81, 105, 1) 58%,
    rgba(16, 44, 50, 1) 100%
  );
}
</style>
