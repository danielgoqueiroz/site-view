<template>
  <div>
    <VueSidebarMenuAkahon
      :menu-items="menu"
      :is-menu-open="!isMobile()"
      menu-title="Daniel G. Queiroz"
      menu-logo="https://danielqueiroz.com/api/wp-content/uploads/2023/01/danielgoqueiroz_a_Q_logo_made_with_computer_objects_4350cc80-fdde-4ba9-a6cf-1f1c5a826ae0_small-1.jpg"
      :is-search="false"
      search-placeholder="Buscar..."
      search-tooltip="Buscar"
      :is-exit-button="false"
      profile-role="Desenvolvedor/Fotógrafo"
      profile-name="Daniel G. Queiroz"
      profile-img="https://danielqueiroz.com/api/wp-content/uploads/2023/01/image.jpg"
    />
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
          name: 'Desenvolvimento',
          tooltip: 'Projetos',
          icon: 'bx-code',
        },
        {
          link: '/fotografia',
          name: 'Fotografia',
          tooltip: 'Arquivos fotográficos',
          icon: 'bx-camera',
        },
        {
          link: '/blog',
          name: 'Blog',
          tooltip: 'Blog',
          icon: 'bx-folder-plus',
        },
        {
          link: '/contato',
          name: 'Contato',
          tooltip: 'Contatos',
          icon: 'bx-mail-send',
        },
      ],
    }
  },
  computed: {},
  methods: {
    isMobile() {
      if (window.screen.width <= 760) {
        return true
      } else {
        return false
      }
    },
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
