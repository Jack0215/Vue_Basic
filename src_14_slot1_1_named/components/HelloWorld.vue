<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <slot name="a"></slot>
    <slot name="b"></slot>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
</style>
