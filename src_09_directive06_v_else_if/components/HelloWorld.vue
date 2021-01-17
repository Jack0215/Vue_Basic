<template>
  <div class="hello">
    <!-- v-of, v-else-if, v-else의 사용-->
    점수 : <input type="text" v-model.number="grade" />
    <p v-if="grade > 90">A학점</p>
    <p v-else-if="grade > 80">B학점</p>
    <p v-else-if="grade > 70">C학점</p>
    <p v-else>F학점</p>
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
      grade: 50,
    };
  },
};
</script>

<style scoped>
</style>
