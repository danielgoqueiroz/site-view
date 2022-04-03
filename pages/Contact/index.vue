<template>
  <b-container fluid class="footer-content">
    <b-link title="whatsapp" href="https://wa.me/5548999370534" target="_blank">
      <b-icon-telephone-fill
        :font-scale="1"
        class="contact-icon"
        variant="success"
        title="Whatsapp"
      />Telefone ou Whatsapp </b-link
    ><br />
    <b-link title="e-mail">
      <b-icon-mailbox
        :font-scale="1"
        class="contact-icon"
        variant="success"
        title="Whatsapp"
      />contato@danielqueiroz.com
    </b-link>
    <!-- <ContatoForm /> -->
  </b-container>
</template>
<script>
import ContatoForm from '@/components/ContatoForm'
export default {
  components: {
    ContatoForm,
  },
}
</script>
<style>
.footer-content {
  background-color: #0e535e;
  padding-top: 15px;
  padding-bottom: 15px;
}
.contact-icon {
  margin-right: 1rem;
}
</style>
