<template>
  <div>
    <div>
      <p v-show="true">true</p>
      <p v-show="true">true</p>
      <p v-show="flag">flag</p>
      <p v-show="!flag">"flag"</p>
      <p v-show="false">"false"</p>
      <p v-show="false">"false"</p>
      <p v-show="!true">"! true</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => {
    return {
      flag: true,
    };
  },
};
</script>

<style scoped>
</style>
