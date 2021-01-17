<template> 
  <div id="app"> 
    <HelloWorld v-bind:[attributeName]="x" v-bind:age="y" :arr="z"/> <!--3. 자식 사용 -->

     <!-- <HelloWorld v-bind:username="x" v-bind:age="y" :array="z"와 동일-->
  </div>
</template>
<script>

//앵귤러의 component calss 코드 구현
import HelloWorld from './components/HelloWorld.vue' //1.자식 임포트

export default { 
  name: 'App',
  components: {
    HelloWorld //2. 사용할 컴포넌트 등록(자식)
  },
  data:function(){
return{
  x:'홍길동',
  y:40,
  attributeName:'username',
  z:[10,20,30]
}
  }
}
</script>

<style>
</style>
