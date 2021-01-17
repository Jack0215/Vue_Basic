<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ username }}, {{ age }}</h2>
    함수호출 정보: {{ sayEcho() }} <br />
    info함수 호출: {{ info() }} <br />
    my함수 호출: {{ my() }}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    // 부모에서 넘어오는 데이터 props
  },
  data: function () {
    return {
      username: "홍길동",
      age: 20,
    };
  }, // 주의
  methods: {
    sayEcho: function () {
      return new Date().toString();
    }, //주의

    info() {
      return this.username;
    },

    my: () => {
      return "홍길동";
    },
  }, //end methods
};
</script>
<style>
</style>