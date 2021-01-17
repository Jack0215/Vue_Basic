<template>
  <div class="hello">
      <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
name:'HelloWorld',
props:{
    msg:String //(부모에게서 넘어오는) 변수명 : 타입 대문자
}
}
</script>

<style>

</style>