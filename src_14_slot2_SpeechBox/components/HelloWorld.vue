<template>
  <div class="hello">
    <div class="header">{{ headerText }}</div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="footer">{{ footerText }}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    headerText: String,
    footerText: String,
  },
};
</script>

<style scoped>
</style>
