<template>
  <b-container class="main">
    <b-row>
      {{ $isMobile }}
      <b-col cols="2">
        <b-img
          rounded
          src="https://danielqueiroz.com/api/wp-content/uploads/2023/01/letter_300_azul.jpg"
          fluid
        >
        </b-img>
      </b-col>
      <b-col cols="10"><h3>Entre em contato</h3></b-col>
    </b-row>
    <b-row>
      <b-col cols="2"></b-col>
      <b-col cols="10">
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
        <p></p>
        <p></p>
        <p></p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="2"></b-col>
      <b-col cols="10"></b-col>
    </b-row>

    <b-popover
      target="popover"
      placement="bottom"
      title="Popover!"
      triggers="hover focus"
      :content="`Placement ${placement}`"
    ></b-popover>
  </b-container>
</template>

<script>
export default {
  methods: {
    isMobile() {
      if (window.screen.width <= 760) {
        return true
      } else {
        return false
      }
    },
    copyText(text) {
      navigator.clipboard.writeText(text)
    },
  },
}
</script>

<style>
.shadow {
  text-shadow: 3px 3px 8px #000000;
}
.footer-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 150px;
  background-color: #378d9a;
  color: rgb(255, 255, 255);
  text-align: center;
}
</style>
