<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="x">x()</button><br />
    <button v-on:click.once="x">x()</button><br />

    <h1>2. preventDefault 이벤트 수식어</h1>
    <a href="https://www.naver.com" v-on:click="y">네이버</a><br />
    <a href="https://www.naver.com" v-on:click="y2">네이버</a><br />
    <a href="https://www.naver.com" v-on:click.prevent="y">네이버</a><br />
    <h1>3.stop 이벤트 수식</h1>
    <div style="background-color: yellow" v-on:click="aaa">aaa</div>
    <div style="background-color: green" @click.stop="bbb">bbb</div>

    <h1>4. enter이벤트 수식어</h1>
    <input type="text" v-on:keyup="xyz2" />keyup<br />
    <input type="text" v-on:keyup.enter="xyz" />keyup.enter<br />
    <h1>5.ctrl</h1>
    <input type="text" v-on:keyup.ctrl.enter="xyz2" />ctrl.enter<br />
    <input type="text" v-on:keyup.ctrl.up="xyz" />ctrl.up<br />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    x: function () {
      console.log("x");
    },
    y: function () {
      console.log("y");
    },
    y2: function () {
      console.log("y2");
    },
    aaa: function () {
      console.log("aaa");
    },
    bbb: function () {
      console.log("bbb");
    },
    xyz: function () {
      console.log("xyz");
    },
    xyz2: function () {
      console.log("xyz2");
    },
  },
};
</script>

<style scoped>
</style>
