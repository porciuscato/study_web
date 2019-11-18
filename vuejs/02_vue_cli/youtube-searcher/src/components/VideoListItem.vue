<template>
  <!-- 마치 변수를 쓰듯 computed는 쓴다. ()는 메소드일 때만 쓴다. -->
  <li @click="onSelect"><img :src="thumbnailUrl"></li>
</template>

<script>
export default {
  name:'VideoListItem',
  props: {
    video: {
      type: Object,
      required: true,
    }
  },
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.medium.url
    },
  },
  methods: {
    onSelect() {
      this.$emit('videoSelect', this.video)
    }
  }
}
</script>

<style scoped>

</style>