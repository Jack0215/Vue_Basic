<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    // 부모에서 넘어오는 데이터 props
  },
  data: function () {
    return {
      mesg: "Hello World",
    };
  }, // 주의
  // lifeCycle hook ==> arrow함수 사용안됨, this의 문제
  beforeCreate: function () {
    console.log("beforeCreate", this);
  },
  created: function () {
    console.log("created", this);
  },
  beforeMount: function () {
    console.log("beforeMount");
  },
  mounted: function () {
    this.mesg = "happy로 변경";
    console.log("mounted2", this.mesg);
  },
  beforeUpdate: function () {
    console.log("beforeUpdate");
  },
  beforeDestroy: function () {
    console.log("beforeDestroy");
  },
};
</script>

<style>
</style>