<template>
  <b-container>
    <b-form-group
      label="E-mail:"
      description="Escreva seu e-mail, como faziam os Maias."
    >
      <b-form-input
        v-model="form.from"
        type="email"
        placeholder="E-mail"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group label="Seu nome:" label-for="input-2">
      <b-form-input
        v-model="form.name"
        placeholder="Nome"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group label="Assunto:">
      <b-form-input v-model="form.subject" placeholder="Assunto" required
        >Assunto</b-form-input
      >
    </b-form-group>

    <b-form-group label="Mensagem:">
      <b-form-textarea v-model="form.message" placeholder="Mensagem" required
        >Check me out</b-form-textarea
      >
    </b-form-group>

    <b-button type="submit" variant="primary" @click="sendEmail()"
      >Enviar</b-button
    >
    <b-button type="reset" variant="danger">Resetar</b-button>
  </b-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        message: '',
        from: '',
        name: '',
        subject: '',
      },
    }
  },
  methods: {
    onReset() {
      this.form.from = ''
      this.form.subject = ''
      this.form.message = ''
      this.form.name = ''
    },
    async sendEmail() {
      const formData = new FormData()

      formData.append('your-email', this.form.from)
      formData.append('your-subject', this.form.subject)
      formData.append('your-message', this.form.message)
      formData.append('your-name', this.form.name)

      const config = {
        headers: {
          'content-type': `multipart/form-data; ${formData.getBoundary}`,
          accept: '*',
        },
      }
      await axios
        .post(
          'https://danielqueiroz.com/api/wp-json/contact-form-7/v1/contact-forms/85/feedback',
          formData,
          config
        )
        .then((response) => {
          this.$bvToast.toast(`${response.data.message}`, {
            title:
              response.data.invalid_fields.length > 0
                ? 'Ops! Algo deu errado.'
                : 'Mensagem enviada',
            variant: 'success',
            autoHideDelay: 5000,
            solid: true,
            toadter: 'b-toaster-bottom-center',
            appendToast: false,
          })
        })
        .catch((error) => {
          console.log('Falhou ao enviar e-mail')
          console.log(error)
        })

      console.log('sendEmail')
    },
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
