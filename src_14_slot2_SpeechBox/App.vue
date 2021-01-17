<template>
  <div id="app">
    <!--3. 자식 사용 -->
    <!--자식에서 뽑아올것 2가지  footerText, headerText-->
    <HelloWorld
      msg="안녕하세요"
      class="sanders"
      v-bind:headerText="A.header"
      v-bind:footerText="A.footer"
    >
      <div>
        <p>{{ A.message }}</p>
      </div>
    </HelloWorld>
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
  data: function () {
    return {
      A: {
        header: "오바마",
        message: "저의 동료...",
        footer: "2017/01/01",
      },
      B: {
        header: "샌더슨",
        message: "감사합니다",
        footer: "2016/07/25",
      },
    };
  },
};
</script>

<style>
.sanders {
  background-color: antiquewhite;
}
.sanders-content {
  font-family: 굴림;
  text-decoration: underline;
}
</style>
