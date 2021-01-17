<template>
  <div class="hello">
    <div>좋아하는 과일을 선택하세요</div>
    <input type="checkbox" v-model="fruit" value="사과" />사과<br />
    <input type="checkbox" v-model="fruit" value="배" />배<br />
    <input type="checkbox" v-model="fruit" value="바나나" />바나나<br />
    <input type="checkbox" v-model="fruit" value="수박" />수박<br />
    선택한 과일은:<br />
    {{ fruit }}
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
      fruit: [], //주의
    };
  },
};
</script>

<style scoped>
</style>
