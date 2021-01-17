<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    값 입력: <input type="text" v-model="amount" />

    <span v-if="amount < 100"> 100보다 큰 값만 입력 가능 </span>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => {
    return {
      amount: 100,
    };
  },
};
</script>

<style scoped>
</style>
