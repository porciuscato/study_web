<template>
  <div class="bg-detail">
    <h2>Video Detail</h2>
    <p>{{ video }}</p>
    <!-- <iframe :src="iframeURL" frameborder="0"></iframe> -->
    <h3>상세내용</h3>
    <!-- <p>{{ video.snippet.description }}</p> -->
  </div>
</template>

<script>
export default {
  name: 'VideoDetail',
  props: {
    video: {
      type: Object,
    },
  },
  computed: {
    iframeURL() {
      const videoId = this.vidoe.id.videoId
      return `https://www.youtube.com/embed/${videoId}`
    },
  }
}
</script>

<style scoped>
.bg-detail {
  background-color:indianred;
}
</style>