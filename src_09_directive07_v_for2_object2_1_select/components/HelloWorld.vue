<template>
  <div class="hello">
    과일 선택
    <select v-model="result">
      <option disabled selected>과일을 선택하세요</option>
      <option
        v-for="(value, key, index) in fruits"
        v-bind:key="index"
        v-bind:value="value"
      >
        {{ key }}
      </option></select
    ><br />
    선택한 과일은 : {{ result }}
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
      fruits: {
        apple: "사과",
        banana: "바나나",
        melone: "멜론",
      },
      result: "", //선택한 과일 저장
    };
  },
};
</script>

<style scoped>
</style>
