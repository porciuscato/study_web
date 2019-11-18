<template>
  <div class="bg-list">
    <h2>Video List</h2>
    <ul>
      <VideoListItem v-for="video in videos" :key="video.id.videoId" :video='video' @videoSelect="onVideoSelect"/>
    </ul>
  </div>
</template>

<script>
import VideoListItem from './VideoListItem'
export default {
  name: 'VideoList',
  // object, key-value, array
  props: ['videos'],
  components: {
    VideoListItem,
  },
  methods: {
    onVideoSelect(video) {
      this.$emit('selectedVideo', video)
    },
  },
}
</script>

<style scoped>
  .bg-list {
    background-color: darkcyan;
  }
</style>