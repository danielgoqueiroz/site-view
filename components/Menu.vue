<template>
  <div class="header">
    <b-navbar class="footer">
      <p class="text">
        <b-link title="" @click="back()">
          <b-icon-arrow-left-circle
            title="Voltar"
            class="icon"
            variant="secondary"
            :font-scale="1.5"
          />
        </b-link>
      </p>
      <b-navbar-nav class="ml-auto">

        <!--        <p class="icon">-->
<!--          <b-link title="About" to="/about"> About </b-link>-->
<!--        </p>-->
        <p class="text">
          <b-link title="" href="https://www.linkedin.com/in/danielgqueiroz/">
            <b-icon-linkedin
              title="Linkedin profile"
              class="icon"
              variant="info"
              :font-scale="iconScale"
            />
          </b-link>
        </p>
        <p class="text">
          <b-link href="https://github.com/danielgoqueiroz/" target="_blank">
            <b-icon-github
              title="Link for my github"
              class="icon"
              variant="info"
              :font-scale="iconScale"
            />
          </b-link>
          <b-link
            href="https://www.instagram.com/danielgoqueiroz/"
            target="_blank"
          >
            <b-icon-instagram
              :font-scale="iconScale"
              variant="info"
              title="Instagram"
          /></b-link>
          <b-link
            href="https://www.facebook.com/danielgoqueiroz"
            target="_blank"
            ><b-icon-facebook
              :font-scale="iconScale"
              class="icon"
              variant="info"
              title="Facebook"
          /></b-link>
          <b-link
            href="https://www.youtube.com/channel/UC7ksn1uSofsFsFo2l4YUxKw"
            target="_blank"
            ><b-icon-youtube
              :font-scale="iconScale"
              variant="info"
              class="icon"
              title="Youtube"
          /></b-link>
          <b-link title="whatsapp" href="https://wa.me/5548999370534"
            ><b-icon-telephone-fill
              :font-scale="iconScale"
              class="icon"
              variant="info"
              title="Whatsapp"
          /></b-link>
        </p>
      </b-navbar-nav>
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
      iconScale: '1.5',
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
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style>
a {
  color: #17a2b8 !important;
}
.footer {
  height: 50px;
  align-content: center;
  background: rgba(255, 255, 255.5, 0.9);
}
a:hover {
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
