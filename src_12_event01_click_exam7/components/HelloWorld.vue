<template>
  <div class="hello">
    값1: <input type="text" v-model="num1" /><br />
    값2: <input type="text" v-model="num2" /><br />
    <button @click="sum">+ 계산하기</button><br />
    <span>{{ total }}</span>
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
      num1: "",
      num2: "",
      total: "",
    };
  },
  methods: {
    sum: function () {
      this.total = parseInt(this.num1) + parseInt(this.num2);
    },
  },
};
</script>

<style scoped>
</style>
