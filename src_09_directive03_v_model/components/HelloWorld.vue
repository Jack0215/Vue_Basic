<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--v-model:양방향 바인딩 앵귤러의 [(ngModel)]
    v-vodel='변수명'-->
    mesg: <input type="text" v-model="mesg" /><br />
    <!--양방향 바인딩-->
    v-bind:value="mesg" <input type="text" v-bind:value="mesg" /><br />
    <!--단방향 바인딩-->
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
      mesg: "홍홍",
    };
  },
};
</script>

<style scoped>
</style>
