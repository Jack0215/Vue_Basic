<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="handelEvent">v-on:click</button><br />
    <button @click="handelEvent">@click:handelEvent</button><br />
    <button
      v-on:click="handelEvent2"
      data-my="100"
      data-my2='{"a":200, "b":300}'
    >
      ok3</button
    ><br />
    <button @click="xxx('홍길동')">@click="xxx('홍길동')"></button><br />
    <button v-on:click="xxx2('홍길동', $event)">
      click="xxx2('홍길동',$event)"
    </button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    xxx: function (e) {
      console.log(e);
    },
    xxx2: function (data, event) {
      console.log(data, event);
    },
    handelEvent: function (e) {
      console.log("handelEvent" + e);
    },
    handelEvent2: function (e) {
      console.log("handelEvent2" + e.target.dataset.my); //사용자 정의 데이터
      var x = JSON.parse(e.target.dataset.my2); //문자열을 json 객체로 변환
      //x={a:200, b:300}
      console.log(x.a, "\t", x.b);
    },
  },
};
</script>

<style scoped>
</style>
