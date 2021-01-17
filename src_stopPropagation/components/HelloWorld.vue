<template>
  <div class="hello">
    <h1>{{ msg }}</h1> 
    <div style="background-color:yellow" v-on:click="aaa">aaa
<div style="background-color:green" v-on:click="bbb">bbb
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    aaa: function (e) {
      console.log("aa");
    },
    bbb: function (e) {
      console.log("Bb");
      e.stopPropagation();
    },
  },
};
</script>

<style scoped>
</style>
