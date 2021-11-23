<template>
  <b-container fluid>
    <b-row>
      <b-col class="text-center" cols="4">
        <b-img
          src="~/static/images/sobre/danielgoqueiroz.jpg"
          rounded="circle"
          alt="Daniel Gomes Queiroz"
        ></b-img>
        <p>Daniel Gomes Queiroz</p>
      </b-col>
      <b-col cols="8">
        <b-row>
          <b-col class="mx-auto">
            Sou publicitário de primeira formação, fotógrafo e videomaker por
            destino e desenvolvedor por determinação e paixão por desafios.
            Atuei por 8 anos em jornal impresso diário. Em 2020 me formei em
            Análise e Desenvolvimento e iniciei meu auto-desenvolvimento nessa
            nova área desafiadora.
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-icon-instagram /> <b-icon-facebook /> <b-icon-github />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'SobreCard',
  data() {
    return {
      works: [
        {
          title: 'Título',
          imgSrc: 'https://picsum.photos/600/300/?image=25',
          imgAlt: 'Fólio',
          tag: 'Teste',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style></style>
