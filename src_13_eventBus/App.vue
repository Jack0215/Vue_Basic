<template>
  <div id="app">
    <!--3. 자식 사용 -->
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <HelloWorld2 />
  </div>
</template>
<script>
//앵귤러의 component calss 코드 구현
import HelloWorld from "./components/HelloWorld"; //1.자식 임포트
import HelloWorld2 from "./components/HelloWorld2"; //1.자식 임포트

export default {
  name: "App",
  components: {
    HelloWorld, //2. 사용할 컴포넌트 등록(자식)
    HelloWorld2,
  },
};
</script>
<style>
</style>
