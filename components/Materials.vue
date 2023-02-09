<template>
  <b-container fluid class="content">
    {{ filter.title }}
    <b-form-group>
      <b-form-input v-model="filter.title"></b-form-input>
      <b-button @click="getContests(filter.title)">Buscar</b-button>
    </b-form-group>

    <b-table :items="materias" :fields="fields">
      <template #cell(titulo)="data">
        <b-link :href="data.item.link" target="_blank">{{ data.value }}</b-link>
      </template>
    </b-table>
  </b-container>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      filter: { title: 'Governador' },
      limit: 10,
      materias: {},
      fields: [
        { key: 'titulo', label: 'Título' },
        { key: 'categorias', label: 'Categorias' },
        { key: 'data', label: 'Data' },
      ],
    }
  },
  async mounted() {
    await this.getContests()
  },
  methods: {
    async getContests(title) {
      console.log('Buscando dados', title)

      const materias = await this.$content('materias', { deep: true })
        // .search('titulo', title)
        .limit(this.limit)
        .fetch()
      console.log('Dados retornados')

      this.materias = materias
    },
  },
}
</script>
<style>
.card-sobre {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.content {
  margin-top: 50px;
  width: 1000px;
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
