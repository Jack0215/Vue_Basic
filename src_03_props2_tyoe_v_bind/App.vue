<template>
  <div id = "app">
    <!--HelloWorld를 태그로 include-->
    <HelloWorld 
    username="홍길동" 
    v-bind:age="20"
    my-address="서울"
    isMarried 
    v-bind:isMarried2="false"
    v-bind:phones="[100,200,300]"
    v-bind:author="{
      name:'Veronica',
      company:'Veridian Dynamics'
    }"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
export default {
  name:'App',
  components:{
    HelloWorld
  }
}
</script>

<style>

</style>