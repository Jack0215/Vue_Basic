<template>
  <div class="hello">
    <slot name="headerText" />
    <slot name="speechBox" />
    <slot name="footerText" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
};
</script>

<style scoped>
</style>
