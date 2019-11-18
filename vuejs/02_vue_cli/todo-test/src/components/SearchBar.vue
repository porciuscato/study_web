<template>
  <div>
    <input type="text" @input="onInput">
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onInput(event) {
      // console.log(val)
      this.$emit('jungnew', event.target.value)
    }
  }
}
</script>

<style>

</style>