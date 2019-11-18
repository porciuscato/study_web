<template>
  <div>
    <h1>Youtube Searcher</h1>
    <!-- <p><button @click="onInputChange('twice')">babo</button></p> -->
    <SearchBar @jungnew="onInputChange" />
    <VideoList v-bind:videos="videos" />
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
// axios를 불러오려면 먼저 깔아야 한다. npm install --save axios
// 이후 밑에 두 명령어 모두 axios를 가져올 수 있다.
import axios from 'axios'
// const axios = require('axios')
const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
const API_URL = 'https://www.googleapis.com/youtube/v3/search'
// const API_URL = 'https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list'


export default {
  name: "App",
  components: {
    SearchBar, 
    VideoList
  },
  data() {
    return {
      videos: {}
    };
  },
  methods: {
    onInputChange(inputValue) {
      axios.get(API_URL, {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: inputValue,
        }
      }).then(res => {
        this.videos = res.data.items
        // window.console.log(res.data.items[0].snippet.thumbnails.default.url)
        // console.log(res.data.items)
      })
    },
  },
};
</script>

<style>
</style>