<template>
  <div id="app">
    <HelloWorld v-on:xyz="y" v-on:xyz2="y2" />
    <!--이벤트로 받아서 처리할 함수 지정 -->
  </div>
</template>
<script>
//앵귤러의 component calss 코드 구현
import HelloWorld from "./components/HelloWorld"; //1.자식 임포트

export default {
  name: "App",
  components: {
    HelloWorld, //2. 사용할 컴포넌트 등록(자식)
  },
  methods: {
    y: function () {
      console.log("부모의 y호출");
    },
    y2: function (y, y2) {
      console.log("부모의 y2 호출", y, "\t", y2);
    },
  },
};
</script>

<style>
</style>
