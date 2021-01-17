<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>watch속성</h1>
    값:<input type="text" v-model="num" /><br />
    변경된 값 :{{ num }}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: function () {
    return {
      num: 10, //watch의 사용은 변수명과 함수명이 동일해야함
    };
  },
  //1. 함수명과 data변수명이 동일해야함
  //2. data 속성이 변경되면 emthod와 computed는 명시적으로 호출해야하지만
  //3. watch는 자동으로 호출됨
  watch: {
    num: function (changeValue) {
      console.log(this.num + "\t" + changeValue);
    },
  },
};
</script>

<style scoped>
</style>
