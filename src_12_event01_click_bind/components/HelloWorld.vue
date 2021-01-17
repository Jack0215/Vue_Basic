<template>
  <div class="hello">
    <button @[aaa]="handleEvent">@[aaa]</button><br />
    <button v-on:[bbb]="handleEvent">@mouseover</button><br />
    <button @[ccc]="handleEvent">@mouseleave</button><br />
    <button
      v-on:[aaa]="handleEvent2"
      data-my="홍길동"
      data-my2='{"name":"홍길동","age":"20"}'
    >
      click</button
    ><br />
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
      aaa: "click",
      bbb: "mouseover",
      ccc: "mouseleave",
    };
  },
  methods: {
    handleEvent: function (e) {
      console.log("handleEvent" + e);
    },
    handleEvent2: function (e) {
      console.log("handleEvent2" + e.target.dataset.my); //사용자 정의 데이터
      var x = JSON.parse(e.target.dataset.my2); //문자열을 json 객체로 변환
      //x={a:200, b:300}
      console.log(x.name, "\t", x.age);
    },
  },
};
</script>

<style scoped>
</style>
