<template>
  <div>
    <h1>John의 Todo 앱</h1>
    <!-- self closing tag -->
    <TodoList category="취업준비" />
    <TodoList category="SSAFY"></TodoList>
    <TodoList category="기타"></TodoList>
  </div>
</template>

<script>
// from 뒤에는 상대경로가 들어옴
import TodoList from './components/TodoList.vue'

export default {
  // 이 안에는 내가 가진 자식들에 대한 정보
  components: {
    // 좌우가 이름이 다르면 생략 가능 `TodoList: TodoList`: 이건 JS
    TodoList
  }
}
</script>


<style lang="stylus" scoped>

</style>