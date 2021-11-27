<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand href=""><Logo /> </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse is-nav> </b-collapse>

      <p class="text">
        Site em constante construção. feito com
        <b-link href="https://nuxtjs.org/" target="_blank"> Nuxt</b-link>. e
        pode ser acompanhado por aqui:
        <b-link
          title="Link para projeto no NuxtJS"
          href="https://github.com/danielgoqueiroz/site-view"
          target="_blank"
        >
          <b-icon-github
            title="Link para projeto no github"
            class="icon"
            variant="info"
            font-scale="1.5"
          />
        </b-link>
      </p>
    </b-navbar>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  name: 'Menu',
  components: {
    Logo,
  },
  data() {
    return {
      logo: {
        title: 'Home',
        link: '/',
      },
      menu: [
        {
          title: 'Home',
          link: '/',
        },
        {
          title: 'Sobre',
          link: '/sobre',
        },
        {
          title: 'Contato',
          link: '/contato',
        },
      ],
    }
  },
}
</script>

<style>
.text {
  color: rgb(131, 131, 131);
}
.icon {
  margin-left: 10px;
}
nav .logo {
  float: left;
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;
  border-bottom: 3px solid transparent;
  transition: 0.3s;
}
nav {
  z-index: 1000;
  display: block;
  width: 100%;
  color: aliceblue;
  align-items: center;
  justify-content: center;
  background-color: rgb(41, 41, 41);
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
