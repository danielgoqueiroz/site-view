<template>
  <b-container fluid class="content">
    <b-row>
      <b-col cols="8" />
      <b-col cols="2"
        ><b-form-spinbutton
          id="sb-step"
          v-model="limit"
          min="10"
          max="500"
          step="10"
          @change="getContents(filter.title)"
        ></b-form-spinbutton
      ></b-col>
    </b-row>
    <b-table :items="materias" :fields="fields">
      <template #head(titulo)="data">
        <b-input-group prepend="Buscar" class="mt-3">
          <b-form-input
            v-model="filter.title"
            :placeholder="data.label"
            @change="getContents(filter.title)"
          />
          <b-input-group-append>
            <b-button @click="getContents(filter.title)">
              <b-icon icon="search" />
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </template>
      <template #head(categorias)>
        <b-form-select
          v-model="filter.categorySelected"
          :options="filter.categories"
          @change="getContents()"
        ></b-form-select>
      </template>
      <template #cell(titulo)="data">
        <b-link :href="data.item.link" target="_blank">{{ data.value }}</b-link>
      </template>
      <template #cell(categorias)="data">
        <b
          ><b-link v-model="data.value" @click="selectCategory(data.value)">{{
            data.value
          }}</b-link></b
        >
      </template>
    </b-table>
  </b-container>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      filter: { title: '', categories: [], categorySelected: null },
      limit: 10,
      categories: [],
      materias: {},
      fields: [
        { key: 'titulo', label: 'Título' },
        { key: 'categorias', label: 'Categorias' },
        { key: 'data', label: 'Data' },
      ],
    }
  },
  async mounted() {
    await this.getContents()
    await this.getCategories()
  },
  methods: {
    async selectCategory(selectCategory) {
      console.log(selectCategory)
      this.filter.title = ''
      this.filter.categorySelected = selectCategory
      await this.getContents()
    },
    getRegex(text) {
      return text
        .split('')
        .map((char) => {
          return `(${char}|${char.toUpperCase()})`
        })
        .join('')
    },
    async getCategories() {
      const defaultValue = { value: null, text: 'Categorias' }
      const contents = await this.$content('materias', { deep: true }).fetch()
      const categories = []
      categories.push(defaultValue)
      Array.from(
        new Set(contents.map((content) => content.categorias))
      ).forEach((c) => categories.push({ value: c, text: c }))
      this.filter.categories = categories
    },
    async getContents() {
      console.log('Buscando conteúdos')
      const query = {}
      if (this.filter.title && this.filter.title.length > 0) {
        query.titulo = {
          $regex: this.getRegex(this.filter.title.toLowerCase()),
        }
      }
      if (
        this.filter.categorySelected &&
        this.filter.categorySelected.length > 0
      ) {
        query.categorias = { $eq: this.filter.categorySelected }
      }
      console.log(query)
      const materias = await this.$content('materias', { deep: true })
        .limit(this.limit)
        .where(query)
        .sortBy('data', 'desc')
        .only(['titulo', 'categorias', 'data', 'link'])
        .fetch()

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
