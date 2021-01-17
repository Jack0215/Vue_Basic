<template>
  <div class="hello">
    <h1>{{ username }}{{ age }}{{ arr }}</h1> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    username:String,
    age:String,
    arr:Array
  }
}
</script>

<style scoped> 

</style> 
