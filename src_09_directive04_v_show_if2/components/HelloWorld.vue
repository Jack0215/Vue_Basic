<template>
  <div class="hello">
    <!--v-if는 조건에 일치하지 않으면 랜더링 안됨.<template>
      v-show는 랜더링은 되지만 화면에 안보임 (display:noe 스타일 속성으로만 작동)-->
    <p v-if="amount == 1">v-if hello1</p>
    <p v-show="amount == 1">v-show hello2</p>
    <p v-if="amount != 1">v-if hello3</p>
    <p v-show="amount != 1">v-show hello4</p>
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
      amount: 1,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>