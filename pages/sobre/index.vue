<template>
  <b-container>
    <About />
  </b-container>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      teste: [],
    }
  },
  mounted() {
    this.get()
  },
  methods: {
    get() {
      axios
        .get('https://danielqueiroz.com/api/wp-json/wp/v2/categories')
        .then((res) => {
          this.teste = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style></style>
