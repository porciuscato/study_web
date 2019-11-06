<template>
  <div>
    <h2>Video List</h2>
    <ul v-for="video in videos" :key="video.id.videoId">
      <li><img :src="video.snippet.thumbnails.default.url" alt=""></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VideoList',
  // object, key-value, array
  props: ['videos']
}
</script>

<style>

</style>