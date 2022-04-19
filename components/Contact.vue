<template>
  <b-container>
    <div class="footer-bar">
      <h2>Contatos</h2>
      <b-card>
        <b-card-body>
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
        </b-card-body>
      </b-card>
    </div>
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
    copyText(text) {
      navigator.clipboard.writeText(text)
    },
  },
}
</script>

<style>
.footer-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 200px;
  background-color: #378d9a;
  color: rgb(255, 255, 255);
  text-align: center;
}
</style>
