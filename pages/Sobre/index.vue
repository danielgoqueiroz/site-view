<template>
  <b-container fluid class="content">
    <SocialIcons />
    <b-row>
      <b-col cols="1" />
      <b-col cols="4">
        <b-img
          class="img-about"
          src="images/sobre/daniel-queiroz_quadrado.jpg"
          alt="Image"
          fluid
          rounded="circle"
        />
      </b-col>
      <b-col cols="5">
        <transition name="fadeAnimation">
          <div class="info">
            <b-container
              v-for="(info, key) in infos"
              v-show="infoChosed == key"
              :key="info.key"
            >
              <h1>Olá, eu sou<br />Daniel G. Queiroz</h1>
              <h2 class="font-italic">o {{ info.type }}</h2>
              <p>{{ info.content }}</p>
            </b-container>
            <p></p>
          </div>
        </transition>
      </b-col>
      <b-col align-self="center">
        <b-button-close @click="switchOption()">
          <b-icon-arrow-right-circle font-scale="2.5" />
        </b-button-close>
      </b-col>
      <b-col cols="1" />
    </b-row>
  </b-container>
</template>
<script>
import SocialIcons from '../../components/SocialIcons'
export default {
  components: {
    SocialIcons,
  },
  data() {
    return {
      infoChosed: 1,
      infos: [
        {
          type: 'Desenvolvedor',
          content: `Atuo desde 2018 desenvolvedor Java na Dígitro Tecnologia, tendo como linguagem o Java no backend, 
                Vue no frontEnd e tendo utilizado bancos os principais bancos relacionais, como Postgres, Oracle e MySql, e alguns sem esquema, como mongo e elasticsearch.
                Atualmente faço pós-graduação em ciência de dados na PUC-RS (online).
                Anteriormente, possuo formação em publicidade e propaganda, tendo atuado na produção audiovisual por mais de 10 anos.`,
        },
        {
          type: 'Fotógrafo',
          content: `Morador natural da ilha de Santa Catarina, possuo formação em
                publicidade e propaganda (2005), e competência na produção visual em
                fotografia e vídeos, tendo atuado por oito anos em jornal
                diário, online e impresso, em Florianópolis SC. Ao todo foram 14 anos dedicados
                profissionalmente a produção audiovisual. Em 2018, com a dispença do jornal, decidi
                cultivar uma vontade antiga, me desenvolver como programador, 
                caminho que desempenho até os dias atuais. Atualmente atuo como desenvolvedor
                Java na Dígitro tecnologia. `,
        },
      ],
      imageScale: '100%',
    }
  },
  computed: {
    infoChosedBoolean() {
      return this.infoChosed ? 0 : 1
    },
  },
  methods: {
    switchOption() {
      this.infoChosed = !this.infoChosed
    },
  },
}
</script>
<style>
.content {
  padding: 2rem;
}
.icons {
  margin-bottom: 2rem;
  width: 35%;
}
.fadeAnimation {
  animation: 5s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
}
</style>
