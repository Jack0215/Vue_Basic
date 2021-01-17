<template>
  <div class="hello">
    <h1>Foo</h1>
    {{ $router.params.id }}<br />
    {{ id }}<br />
  </div>
</template>

<script>
export default {
  name: "Foo",
  props: {
    id: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
