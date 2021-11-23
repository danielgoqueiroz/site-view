<template>
  <b-container>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      label-indicators
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="Sobre"
        text="Sou publicitário de primeira formação, fotógrafo e videomaker por destino e desenvolvedor por determinação e paixão. Atuei por oito anos em jornal impresso diário. Em 2020 me formei em Análise e Desenvolvimento de Sistemas, área na qual sou apaixonado e na qual tenho feitos projetos pessoais. Após entrar como estagiário na Dígito Tecnologia, iniciei como deve júnior em Java."
        img-src="https://picsum.photos/1024/480/?image=52"
      >
        <SobreCard></SobreCard>
      </b-carousel-slide>
      <b-carousel-slide :img-src="require('~/static/slides/home/git.jpg')">
        <h1>Github <b-icon-github /></h1>
        <b-button href="https://github.com/danielgoqueiroz" target="_blank"
          >Abrir</b-button
        >
      </b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" />
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>
  </b-container>
</template>

<script>
import SobreCard from '@/components/SobreCard'
export default {
  name: 'Folio',
  components: {
    SobreCard,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
  },
}
</script>

<style></style>
