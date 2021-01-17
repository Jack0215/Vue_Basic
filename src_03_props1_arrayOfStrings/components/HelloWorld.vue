<template>
  <div class="hello">
    <h1>{{ username }},{{ age }},{{ myAddress }}</h1> <!--단방향 바인딩 -->
    
  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // props:["username", "age", "myAddress"] //변수명 문자열
  //props: App.vue의 template안에 값을 받아온다.
  props: {
    username:String,
    age:String,
    myAddress:String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style> 
