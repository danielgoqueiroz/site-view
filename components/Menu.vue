<template>
  <div>
    <VueSidebarMenuAkahon
      :menu-items="menu"
      :is-menu-open="True"
      menu-title="Daniel G. Queiroz"
      menu-logo="icon.jpg"
      is-search="True"
      search-placeholder="Buscar..."
      search-tooltip="Buscar"
      is-exit-button="false"
      profile-role="Desenvolvedor/Fotógrafo"
      profile-name="Daniel G. Queiroz"
      profile-img="images\sobre\danielgoqueiroz.jpg"
    />
    <!-- <b-navbar class="footer">
      <p class="text">
        <b-button
          v-show="!isRoot()"
          v-b-popover.hover.top="'Voltar'"
          variant="light"
          target="_blank"
          @click="back()"
        >
          <b-icon-arrow-left-circle
            title="Voltar"
            class="icon"
            variant="secondary"
            :font-scale="1.5"
          />
        </b-button>
      </p>

      <b-navbar-nav class="ml-auto botoes-menu">
        <b-button
          v-b-popover.hover.top="'Linkedin'"
          variant="light"
          href="https://www.linkedin.com/in/danielgqueiroz/"
          target="_blank"
        >
          <b-icon-linkedin
            title="Linkedin profile"
            class="icon"
            variant="info"
            :font-scale="iconScale"
          />
        </b-button>
        <b-button
          v-b-popover.hover.top="'Github'"
          variant="light"
          href="https://github.com/danielgoqueiroz/"
          target="_blank"
        >
          <b-icon-github
            title="Link for my github"
            class="icon"
            variant="info"
            :font-scale="iconScale"
          />
        </b-button>
        <b-button
          v-b-popover.hover.top="'Instagram'"
          variant="light"
          href="https://www.instagram.com/danielgoqueiroz/"
          target="_blank"
        >
          <b-icon-instagram
            :font-scale="iconScale"
            class="icon"
            variant="info"
            title="Facebook"
          />
        </b-button>
        <b-button
          v-b-popover.hover.top="'Facebook'"
          variant="light"
          href="https://www.facebook.com/danielgoqueiroz"
          target="_blank"
        >
          <b-icon-facebook
            :font-scale="iconScale"
            class="icon"
            variant="info"
            title="Facebook"
          />
        </b-button>
        <b-button
          v-b-popover.hover.top="'Youtube'"
          variant="light"
          href="https://www.youtube.com/channel/UC7ksn1uSofsFsFo2l4YUxKw"
          target="_blank"
        >
          <b-icon-youtube
            :font-scale="iconScale"
            variant="info"
            class="icon"
            title="Youtube"
        /></b-button>
        <b-button
          v-b-popover.hover.top="'whatsapp'"
          variant="light"
          href="https://wa.me/5548999370534"
          target="_blank"
        >
          <b-icon-telephone-fill
            :font-scale="iconScale"
            class="icon"
            variant="info"
        /></b-button>
      </b-navbar-nav>
    </b-navbar> -->
  </div>
</template>

<script>
import VueSidebarMenuAkahon from 'vue-sidebar-menu-akahon'

export default {
  name: 'Menu',
  components: {
    VueSidebarMenuAkahon,
  },
  data() {
    return {
      iconScale: '1.5',
      logo: {
        title: 'Home',
        link: '/',
      },
      menu: [
        {
          link: '/sobre',
          name: 'Sobre',
          tooltip: 'Sobre',
          icon: 'bx-bot',
        },
        {
          link: '/projetos',
          name: 'Projetos',
          tooltip: 'Projetos',
          icon: 'bx-folder-plus',
        },
        {
          link: '/contato',
          name: 'Contato',
          tooltip: 'Contatos',
          icon: 'bx-mail-send',
        },
      ],
      // menu: [
      //   {
      //     title: 'Home',
      //     link: '/',
      //   },
      //   {
      //     title: 'Sobre',
      //     link: '/sobre',
      //   },
      //   {
      //     title: 'Contato',
      //     link: '/contato',
      //   },
      // ],
    }
  },
  methods: {
    isRoot() {
      return window.location.pathname === '/'
    },
    back() {
      this.$router.back()
    },
  },
}
</script>
import { Icon } from '@iconify/vue';


<style>
.botoes-menu {
  margin-right: 15px;
}
.footer {
  height: 50px;
  align-content: center;
  background: rgb(255, 255, 255.5, 0.9);
}
.footer > a {
  color: #17a2b8 !important;
}
.footer > a:hover {
  color: rgb(255, 255, 255);
}

.icon {
  color: rgb(235, 25, 25);
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
nav .logo {
  float: left;
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;
  border-bottom: 30px solid transparent;
  transition: 0.3s;
}
nav {
  z-index: 1000;
  display: block;
  width: 100%;
  color: aliceblue;
  align-items: center;
  justify-content: center;
}

nav .menu-item {
  color: rgb(131, 131, 131);
  padding: 10px 30px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.3s;
}

nav .menu-item:hover {
  color: rgb(238, 238, 238);
  border-bottom: 3px solid rgb(185, 203, 218);
}
nav .menu-item:hover {
  background-color: rgb(102, 102, 102);
  border-bottom-color: #eeeeee;
}
</style>
