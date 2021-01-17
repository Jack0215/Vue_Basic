<template>
  <div class="hello">
    <h1>{{ username }},
      {{ age }},
      {{ myAddress }},
      </h1> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    username: String,
    age:{
      type:Number,
      default:100
    },
    myAddress:{
      type:String,
      default:"제주"
    }
  }//end props
}
</script>

<style scoped>

</style>
