<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!--3. 자식사용-->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld"; //1.자식 임포트

export default {
  //다른곳에서 사용시 Vue파일 이름으로 import
  name: "App",
  components: {
    HelloWorld, //2. 사용 컴포넌트 등록(자식) - 선택자 역할
  },
  data: function () {
    return { mesg: "Appcmponent" };
  },
  //lifecycle hook=>arrow함수 사용 안됨, this의 문제
  befoeCreate: function () {
    console.log("app.beforeCreate", this);
  },
  created: function () {
    console.log("app.created");
  },
  beforeMount: function () {
    console.log("app.beforeMount");
  },
  mounted: function () {
    this.mesg = "happy로 변경";
    console.log("app.mounted", this.mesg);
  },
  beforeUpdate: function () {
    console.log("app.beforeUpdate");
  },
  updated: function () {
    console.log("app.updated");
  },
  beforeDestroy: function () {
    console.log("app.beforeDestroy");
  },
  destroyed: function () {
    console.log("app.destroyed");
  },
};
</script>

<style></style>