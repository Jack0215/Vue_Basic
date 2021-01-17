<template>
  <div class="hello">
    <h1>{{ msg }}</h1> <!--단방향 바인딩, 12라인 msg를 가져온다 -->
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
