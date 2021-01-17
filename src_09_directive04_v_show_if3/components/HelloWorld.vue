<template>
  <div class="hello">
    <p v-if="3 > 1">Hello1</p>
    <p v-show="num >= num2">Hello2</p>
    <p v-if="num < num2">Hello3</p>
    <p v-show="num > num2 && 3 == 3">Hello4</p>
    <p v-if="num < num2 || 3 == 3">Hello5</p>
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
      num: 10,
      num2: 5,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>