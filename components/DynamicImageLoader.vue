<template>
  <div>
    <img :src="dynamicImage" />
  </div>
</template>

<script>
export default {
  name: 'DynamicImage',
  props: {
    // baseDir: {
    //   type: String,
    //   default: 'images',
    // },
    // path: {
    //   type: String,
    //   required: true,
    // },
  },

  computed: {
    // dynamicImage() {
    //   return require(`~/content${this.path}`)
    // },
  },
}
</script>
