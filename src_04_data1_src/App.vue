<template>
  <div id="app">
    data x : {{ x }}, data y:{{ y }} <br />
    <HelloWorld username="이순신" age="20" />
  </div>
</template>


<script>
//앵귤러의 component calss 코드 구현
import HelloWorld from "./components/HelloWorld.vue"; //1.자식 임포트
export default {
  name: "App",
  components: {
    HelloWorld, //2. 사용할 컴포넌트 등록(자식)
  }, //dada를 사용하기 위한 구분점
  data: () => {
    return { x: "홍길동", y: "40" };
  },
  // data: function() {
  //   return { x:"홍길동", y:'40',};
  // }
};
</script>

<style>
</style>




