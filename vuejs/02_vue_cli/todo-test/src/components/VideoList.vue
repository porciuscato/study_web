<template>
  <div>
    <h2>Video List</h2>
    <ul v-for="video in videos" :key="video.id.videoId">
      <li><img :src="video.snippet.thumbnails.default.url"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VideoList',
  props: [
    'videos'
  ]
}
</script>

<style>

</style>