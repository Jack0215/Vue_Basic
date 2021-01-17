<template>
  <div class="hello">
    <h1>1.기본 이벤트 처리 방지</h1>
    <a href="https://www.daum.net" @click="x">다음 -preventDefault</a><br />
    <a href="https://www.daum.net" target="_blank">다음2</a>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    x: function (e) {
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
</style>  
