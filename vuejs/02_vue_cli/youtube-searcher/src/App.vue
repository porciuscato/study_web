<template>
  <div>
    <h1>Youtube Searcher</h1>
    <!-- 자식한테 무슨 일이 생겼다고 알려주는 것 -->
    <SearchBar @inputChange="onInputChange"/>
    <!-- videos라는 이름으로 아래의 videos를 넘긴다. -->
    <VideoList v-bind:videos="videos"/>
  </div>
</template>

<script>
// const axios = require('axios')
import axios from 'axios'
// 컴포넌트 등록할 땐 import를 하고
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'

const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
const API_URL = 'https://www.googleapis.com/youtube/v3/search'

export default {
  // 항상 이름부터 붙여주고 간다.
  name: 'App',
  components: {
    // SearchBar: SearchBar,
    SearchBar,
    VideoList,
  },
  // 함수 형태로 주는 이유는 이 component에서만 쓰기 위해
  data: function() {
    return {
      videos: [],
    }
  },
  methods: {
    // emit된 이벤트가 들어온다. -> 위의 searchBar에서 이벤트가 바뀐 것을 알려준다.
    onInputChange(inputValue) {
      console.log(`${inputValue}`)
      axios.get(API_URL, {
        // object를 넘기되 매개변수를 넘길 수 있다. 우리가 넘길 건 4개
        params:{
          key: API_KEY,
          type: 'videos',
          part: 'snippet',
          q: inputValue,
        }
      }).then(res => {
        this.videos = res.data.items
        // console.log(res.data.items)
      })
    }
  }
}
</script>

<style>

</style>