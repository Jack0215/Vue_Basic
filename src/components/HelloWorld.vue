<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--단방향 바인딩, 15라인 msg를 가져온다 -->
    <h4>HelloWorld Component</h4>
    <br />
    <input type="text" v-model.lazy="lazy" />
  </div>
</template> 

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String, //msg 변수를 String 타입으로 받는다.
  },
  date: function () {
    return {
      //변수 만들 때 초기값을 꼭 줘야한다.
      lazy: "", //enter
      number: "", //1234abc abc반영 안됨
      noTrim: "",
      trim: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
