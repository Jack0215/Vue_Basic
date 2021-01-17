<template>
  <div class="hello">
    <h1>{{ msg }}</h1> 
    <h2>{{username}} {{age}}</h2>
    함수호출 정보 : {{sayEcho()}}<br>
    함수호출 정보 : {{test()}}<br>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String //부모에게 넘어오는 데이터 props
  },
  data:function(){
    return {
      username:'홍길동', //this.username로 사용할것임 변수이름:초기값 반드시 필요
      age:20 //this.age로 사용할것임, 변수이름:초기값 반드시 필요
    }
  }, //쉼표 주의
  ///////함수 작성
  methods:{
    sayEcho:function(){ //함수이름,template {{}} 사용
      return this.username+"\t"+this.age;
    },
    test:function(){
      return this.username+"\t"+this.age;
    }
  }//end methods
}
</script>

<style scoped>

</style>
