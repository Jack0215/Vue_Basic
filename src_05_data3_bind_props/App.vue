
<template>
  <div id="app">             <!--받는타입 : x,y,z-->
    <HelloWorld v-bind:username="x" :age="y" v-bind:arr="z"/>
    <!--숫자, 불린, 배열, 객체 등은 v-bind를 사용한다.-->
  </div>
</template>


<script>

import HelloWorld from './components/HelloWorld';

export default {
name:'App',
components:{
  HelloWorld
},
data:function(){
  return{
    x:'홍길동',
    y:40,
    z:[10,20,30]
  }
}
}
</script>

<style>

</style>

