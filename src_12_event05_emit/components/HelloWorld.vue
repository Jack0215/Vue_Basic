<template>
  <div class="hello">
    <h1>자식에서 부모로 이벤트 발생</h1>
    <button v-on:click="x">x 부모에게 요청</button>
    <!--x는 methods의 x를 찾아감-->
    <button v-on:click="x2">x2 부모에게 요청</button>
    <!--x2는 methods의 x2를 찾아감-->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    x: function () {
      console.log("자식 x의 this", this);
      this.$emit("xyz"); //자식에서 부모로 전달될 이벤트 명칭(이벤트명)
      //xyz라는 이벤트 명으로 부모를 찾아감
    },
    x2: function () {
      console.log(this);
      this.$emit("xyz", 100, "홍길동"); //자식에서 부모로 전달될 이벤트 명칭: xyz2
      //100, "홍길동" 이 두개의 파라미터가 넘어감
    },
  },
};
</script>

<style scoped>
</style>
