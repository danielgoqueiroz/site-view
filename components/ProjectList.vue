<template>
  <b-container>
    <b-row>
      <b-col cols="2"></b-col>
      <b-col cols="10">
        <b-card-group deck class="mb-3">
          <b-skeleton-wrapper
            v-for="(p, index) in items"
            :key="index"
            :loading="loading"
          >
            <template #loading>
              <b-card>
                <b-skeleton-img no-aspect width="200px" />
                <b-skeleton-img no-aspect width="200px" />
                <b-skeleton-img no-aspect width="200px" />
              </b-card>
            </template>
            <b-card
              v-b-modal.modal-1
              :img-src="getImage(p)"
              border-variant="light"
              style="max-width: 20rem"
              class="text-center"
              :header="p.title.rendered ? p.title.rendered : ''"
              @click="selectItem(p)"
            />
          </b-skeleton-wrapper>
        </b-card-group>
      </b-col>
    </b-row>
    <b-modal id="modal-1" :title="item.title.rendered" size="lg">
      <PostView :content="itemHtml" />
    </b-modal>
  </b-container>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      item: {
        title: {
          rendered: '',
        },
        content: {
          rendered: '',
        },
      },
    }
  },
  computed: {
    itemHtml() {
      return this.item.content.rendered
    },
  },
  methods: {
    selectItem(item) {
      console.log(item)
      this.item = item
    },
    getImage(item) {
      const mediaList = item._embedded['wp:featuredmedia']
      if (mediaList && mediaList.length > 0) {
        const url = mediaList[0].source_url
        return url
      }
      return '#'
    },
  },
}
</script>

<style scoped>
</style>
