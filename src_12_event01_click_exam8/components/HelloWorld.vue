<template>
  <div class="hello">
    값1: <input type="text" v-model="num1" /><br />
    값2: <input type="text" v-model="num2" /><br />
    <button @click="sum">+</button> <t /> <button @click="sum">-</button> <t />
    <button @click="sum">*</button> <t /> <button @click="sum">/</button><br />
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
    sum: function (e) {
      let action = e.target.innerText;
      if (action == "+") {
        this.total = parseInt(this.num1) + parseInt(this.num2);
      } else if (action == "-") {
        this.total = parseInt(this.num1) - parseInt(this.num2);
      } else if (action == "*") {
        this.total = parseInt(this.num1) * parseInt(this.num2);
      } else if (action == "/") {
        this.total = parseInt(this.num1) / parseInt(this.num2);
      } else {
        console.log("입력 데이터 오류");
      }
    },
  },
};
</script>

<style scoped>
</style>
