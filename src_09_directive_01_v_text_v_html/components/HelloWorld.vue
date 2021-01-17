<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    1)v-text: <span v-text="x"></span><br />
    <!--v-text는 innerText와 동일-->
    2)v-html: <span v-html="y"></span>
    <!--v-text는 innerHTML과 동일-->
    {{ y }}
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
      x: "홍길동",
      y: "<h1>홍길동</h1>",
    };
  },
};
</script>

<style scoped>
</style>
