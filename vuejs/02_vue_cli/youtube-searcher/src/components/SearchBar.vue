<template>
  <div class="bg-search">
    <input @change="onInput" type="text">
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput(event) {
      // console.log(event.target.value)
      // $emit 메소드는 자식 컴포넌트에서 부모 컴포넌트로 data를 올려줄 때
      this.$emit('inputChange', event.target.value)
    }
  }
}
</script>

<style scoped>
  .bg-search {
    background-color: bisque;
  } 
</style>