<template>
  <div class="app">
    <h1>{{ username }}</h1>
    <br />
    <h1>{{ age }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    username: String,
    age: String,
  },
};
</script>

<style scoped>
</style> 
