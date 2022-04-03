<template>
  <div>
    <b-container class="main-titles" ref="box">
      <div v-for="(button, index) in itens" :key="button.key">
        <transition name="fade">
          <b-link
            @click="selectOption(index, button)"
            :style="getStyle(index)"
            :title="button.name"
          >
            <span v-if="mainColumn"><b-icon :icon="button.icon" /></span
            ><span v-else>{{ button.name }}</span>
            <br />
          </b-link>
        </transition>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'VerticalMenu',
  mounted() {
    this.size = this.$refs.box.clientHeight
  },
  data() {
    return {
      selectedIndex: 0,
    }
  },
  methods: {
    selectOption(index, button) {
      this.selectedIndex = index
      this.$emit('selected', button.name)
    },
    getStyle(index) {
      let value = '0.25'
      let textSize = '0.75'
      if (index === this.selectedIndex) {
        value = '1'
        textSize = '1.5'
      }
      const style = `color: rgba(255, 255, 255); opacity: ${value}; font-size: ${textSize}em;`
      return style
    },
  },
  computed: {
    filtredButtons() {
      let index = this.itens.indexSelected + 1
      let size = this.itens.length - 1
      if (index >= size) {
        this.itens.indexSelected = size
      }
      if (index < 0) {
        this.itens.indexSelected = 0
      }
      return this.itens.slice(0, index + 2)
    },
  },
  props: {
    mainColumn: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: String,
      default: '',
    },
    itens: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
.button-updown {
  color: rgba(255, 255, 255, 0.1);
}
.button-updown:hover {
  color: rgba(255, 255, 255);
}
</style>
