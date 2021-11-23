<template>
  <b-cintainer fluid>
    <b-navbar>
      <b-icon-house-door-fill class="h3" style="margin-right: 16px" />
      <!-- <b-navbar-brand href="#">
        <Logo class="logo" />
      </b-navbar-brand> -->
      <b-icon-instagram style="margin-right: 8px" />
      <b-icon-linkedin style="margin-right: 8px" />
      <b-icon-github style="margin-right: 8px" />
      <b-icon-telephone-fill style="margin-right: 8px" />
      (48) 9 9937-0534 @ contato@danielgoqueiroz.com
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <NuxtLink
            v-for="item in menu"
            :key="item.title"
            class="menu-item"
            :to="item.link"
            >{{ item.title }}
          </NuxtLink>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
  </b-cintainer>
</template>

<script>
// import Logo from '~/components/Logo'
export default {
  name: 'Menu',
  components: {
    // Logo,
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
/* nav .logo {
  float: left;
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;
  border-bottom: 3px solid transparent;
  transition: 0.3s;
} */
/* nav {
  z-index: 1000;
  display: block;
  width: 100%;
  color: aliceblue;
  align-items: center;
  justify-content: center;
  background-color: rgb(41, 41, 41);
 } */

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
