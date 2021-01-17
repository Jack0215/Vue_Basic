<template>
  <div id="HelloWorld">
      data x: {{x}}, data y: {{y}}<br>
      data z: {{z}}<br>
      data k: {{k.aa}} {{k.bb}}<br>
      data p: {{p.username}} {{p.age}}<br>
      <HelloWorld uesrname="홍길동" v-bind:age="20" my-address="서울"/> 
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import {Person} from './components/person';
export default {
name:'App',
components:{
    HelloWorld
},
data: ()=>{
    return {
        x:"홍길동",
        y:'40',
        z:[10,20,30],
        k:{aa:'hong', bb:30},
        p:new Person("AAA",20) //Person.js import
    };
}
}
</script>
<style>
</style>