<template>
  <div id="app">
    <HelloWorld msg="자식에게 데이터 넘김"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default { //main.js로 보내고, 
  //export default : 변수, 함수, 오브젝트, 클래스 등을 보낼 수 있는 명령어
name:'App',
components:{
  HelloWorld
  }
}
</script>

<style>
</style>