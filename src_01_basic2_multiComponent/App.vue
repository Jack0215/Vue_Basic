<template>
  <!--html 구현 부분 -->
  <div id="app">
    <!--div로 시작, div로 끝내기 -->
    <!--3. 자식 사용 -->
    <HelloWorld msg="HelloWorld (첫번 째 component)" />
    <!--msg란 변수로 string을 넘기고있음-->
    <Happy msg="Happy" />
  </div>
</template>
<script>
//앵귤러의 component calss 코드 구현
import HelloWorld from "./components/HelloWorld.vue"; //1.자식 임포트 1
import Happy from "./components/happy"; //1.자식 임포트 2

export default {
  //다른곳에서 사용시 Vue파일 이름으로 import
  name: "App",
  components: {
    HelloWorld, //2. 사용할 컴포넌트 등록(자식) 1
    Happy, //2. 사용할 컴포넌트 등록(자식) 2
  },
  //다음 내용 추가 할 경우 쉼표(,)를 추가.
};
</script>

<style>
</style>
