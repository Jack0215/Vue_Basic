<template>
  <div class="hello">
      <h1>
      {{username}}, <br>
      {{age+100}}, <br>
       {{myAddress}}, <br>
      {{isMarried}} , <br>
       {{isMarried2}}, <br>
       {{phones}}, <br>
        {{author.name}}, <br>
        {{author.company}}, <br>
      </h1>
  </div>
</template>

<script>
export default {
    name:'HelloWorld',
    props:{
        username:String,
        age:Number,
        myAddress:String,
        isMarried:Boolean,
        isMarried2:Boolean,
        phones:Array,
        author:Object 
    }
}
</script>

<style>

</style>