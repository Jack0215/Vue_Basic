<template> 
  <div id="app"> 
    <HelloWorld msg="Welcome to Your Vue.js App"/> <!--3. 자식 사용 -->
     
  </div>
</template>
<script>

//앵귤러의 component calss 코드 구현
import HelloWorld from './components/HelloWorld.vue' //1.자식 임포트

export default { 
  name: 'App',
  components: {
    HelloWorld //2. 사용할 컴포넌트 등록(자식)
  }
}
</script>

<style>
</style>
