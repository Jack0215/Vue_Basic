<template>
  <div>
    <ul v-for="(a, idx) in todoList" :key="idx">
      <li>{{ a }} <button v-on:click="del(idx)">삭제</button></li>
    </ul>
  </div>
</template>
<script>
import eventBus from "./EventBus";
export default {
  name: "HelloWorld2",
  data: function () {
    return {
      todoList: [],
    };
  },
  creadted() {
    console.log("create호출");
    eventBus.$on("xyz", this.add);
  },
  methods: {
    add: function (m) {
      this.todoList.push(m); //return의 todoList에 값이 저장됨, 1은 1
    },
    del: function (idx) {
      this.todoList.splice(idx, 1);
    },
  },
};
</script>