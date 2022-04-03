<template>
  <b-container fluid>
    <h2>Get in touch</h2>
    <b-form-group
      class="mx-auto"
      label="Envie um mensagem."
      label-for="input-1"
    >
      <b-form-input
        v-model="form.nome"
        class="my-2"
        type="text"
        placeholder="Nome"
        required
      />
      <b-form-input
        id="input-email"
        v-model="form.email"
        class="my-2"
        type="email"
        placeholder="E-mail"
        required
      />
      <b-form-textarea
        id="textarea"
        v-model="form.text"
        class="my-2"
        placeholder="Me escreva algo :)"
        rows="3"
        max-rows="6"
      />
    </b-form-group>
  </b-container>
</template>

<script>
export default {
  name: 'Folio',
  data() {
    return {
      form: {
        name: '',
        email: '',
        text: '',
      },
    }
  },
  methods: {},
}
</script>

<style>
.image-featured {
  width: 100%;
}
</style>
