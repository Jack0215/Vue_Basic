<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>World :</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function () {
    return { msg: "Hello World" };
  },

  // lifeCycle hook => arrow 함수 사용 불가, this 문제
  beforeCreate: function () {
    console.log("beforeCreate() ", this);
  },
  created: function () {
    console.log("created()");
  },
  beforeMount: function () {
    console.log("beforeMount()");
  },

  // template가 보이는 순간 실행
  mounted: function () {
    console.log("mounted1 ", this.msg);
    // data 속성값이 변경되면 자동으로 rendering됨
    this.mesg = "happy로 변경"; // data 속성 변경 시 beforeupdated, update 호출
    console.log("mounted2 ", this.msg);
  },
  beforeUpdate: function () {
    console.log("beforeUpdate()");
  },
  updated: function () {
    console.log("updated()");
  },
  beforeDestroy: function () {
    console.log("beforeDestroy()");
  },
  destroyed: function () {
    console.log("destroyed()");
  },
};
</script>

<style>
</style>