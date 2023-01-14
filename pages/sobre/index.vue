<template>
  <b-container>
    <Welcome />
    <b-row>
      <b-col cols="2"> </b-col>
      <b-col cols="10">
        <b-container fluid class="center">
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
          <br />
          <br />
          <b-button
            v-b-popover.hover.top="'Click para conversa no whatsapp.'"
            href="https://api.whatsapp.com/send/?phone=5548999370534"
            target="_blank"
            variant="outline-info"
          >
            <b-icon-whatsapp title="Github" font-scale="1" />
            Whatsapp
          </b-button>
          <b-button
            v-b-popover.click.top="'E-mail copiado!'"
            variant="outline-info"
            @click="copyText('contato@danielqueiroz.com')"
          >
            <b-icon-mail title="Github" font-scale="1" />
            contato@danielqueiroz.com
          </b-button>
          <b-button
            v-b-popover.click.top="'Telefone copiado!'"
            target="_blank"
            variant="outline-info"
            @click="copyText('48999370534')"
          >
            <b-icon-phone title="Github" font-scale="1" />
            +55 (48) 9 9937-0534
          </b-button>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      teste: [],
    }
  },
  mounted() {
    this.get()
  },
  methods: {
    get() {
      axios
        .get('https://danielqueiroz.com/api/wp-json/wp/v2/categories')
        .then((res) => {
          this.teste = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style>
.center {
  text-align: center;
}
</style>
