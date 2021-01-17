<template>
  <div class="hello">
    <h1>Knu</h1>
    {{ username }}<br />
  </div>
</template>

<script>
export default {
  name: "Foo",
  props: {
    username: String,
  },
};
</script>

<style>
</style>