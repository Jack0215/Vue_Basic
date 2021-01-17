<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" :value="receive" />
    <!--호출 전이 뜨게 되어있음.-->
  </div>
</template>
<script>
import eventBus from "./EventBus.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: function () {
    return {
      receive: "호출전",
    };
  },
  created() {
    console.log("create호출");
    eventBus.$on("xyz", this.handelEvent);
    //xyz란 이름으로 이벤트가 넘어왔을 때 this.handle이 이벤트를 처리하도록 이벤트 등록
  },
  methods: {
    handelEvent: function (x, y) {
      //넘어오는 2개의 매개변수, 넘어오는 데이터를 매개변수로 받기
      console.log("handelEvent 호출됨");
      this.receive = "호출 완료 " + "\t" + x + ":" + y; //receive값을 호출 전에서 호출 완료로 변경.
    },
  },
};
</script>

<style scoped>
</style>
