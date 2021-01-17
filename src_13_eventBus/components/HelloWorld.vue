<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="x">helloworld2로 전달</button>
  </div>
</template>

<script>
import eventBus from "./EventBus.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    x: function () {
      console.log("x()");
      eventBus.$emit("xyz"); //이벤트 버스 전달 이벤트 명 xyz
    },
  },
};
</script>

<style scoped>
</style>
