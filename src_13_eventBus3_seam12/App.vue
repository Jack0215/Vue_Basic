<template>
  <div id="app">
    <Input />
    <List />
  </div>
</template>

<script>
import Input from "./components/Input.vue";
import List from "./components/List.vue";

export default {
  name: "App",
  components: {
    Input,
    List,
  },
};
</script>

<style>
</style>