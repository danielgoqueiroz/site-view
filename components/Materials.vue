<template>
  <b-container fluid class="content">
    <b-row>
      <b-col cols="2"
        ><b-button
          @click="getContests(filter.title)"
          @keyup.enter="getContests(filter.title)"
          >Buscar</b-button
        ></b-col
      >
      <b-col cols="8" />

      <b-col cols="2"
        ><b-form-spinbutton
          id="sb-step"
          v-model="limit"
          min="10"
          max="500"
          step="10"
          @change="getContests(filter.title)"
        ></b-form-spinbutton
      ></b-col>
    </b-row>

    <b-table :items="materias" :fields="fields">
      <template #head(titulo)="data">
        <b-form-input v-model="filter.title" :placeholder="data.label">
        </b-form-input>
      </template>
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
      filter: { title: '' },
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
    getRegex(text) {
      return text
        .split('')
        .map((char) => {
          return `(${char}|${char.toUpperCase()})`
        })
        .join('')
    },
    async getContests(titulo) {
      let query = {}
      if (titulo) {
        query = { titulo: { $regex: this.getRegex(titulo.toLowerCase()) } }
        console.log('Query', query)
      }

      const materias = await this.$content('materias', { deep: true })
        .limit(this.limit)
        .where(query)
        .sortBy('data', 'desc')
        .only(['titulo', 'categorias', 'data', 'link'])

        .fetch()
      console.log('Dados retornados')
      //  const materias = await this.$content('materias', { deep: true })
      //   .limit(this.limit)
      //   .where(query)
      //   .sortBy('data', 'desc')
      //   .only(['titulo', 'categorias', 'data', 'link'])

      //   .fetch()
      // console.log('Dados retornados')
      // use regex to filter by title case insensitive on where

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
