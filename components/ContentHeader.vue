<template>
  <b-row>
    <b-col cols="2">
      <b-img rounded :src="imageTitleUrl" fluid> </b-img>
    </b-col>
    <b-col cols="10"
      ><h3>
        {{ title }}
        <b-link title="" href="https://github.com/danielgoqueiroz">
          <b-icon-github
            title="Github"
            class="icon"
            variant="info"
            target="_blank"
            font-scale="1"
          />
        </b-link></h3
    ></b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    imageTitleUrl: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
</style>