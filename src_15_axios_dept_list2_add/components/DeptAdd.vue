<template>
  <div>
    <h2>부서등록 및 수정</h2>
    <form v-on:submit.prevent="x">
      <!--화면이 넘어가지 않도록 prevent-->
      <!--서버에서 받을 수 있게 name 지정, key값이 됨, 양방향 바인딩으로 연결해서 써준 내용을 data에 저장-->
      부서번호:<input type="text" name="deptno" v-model="dept.deptno" />
      부서명:<input type="text" name="dname" v-model="dept.dname" />
      부서위치:<input type="text" name="loc" v-model="dept.loc" />
      <button>저장</button>
    </form>
  </div>
</template>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
import axios from "axios";
import eventBus from "./EventBus";
export default {
  name: "DeptAdd",
  data: function () {
    return {
      dept: {
        //textbox 가입한 데이터 저장
        deptno: "",
        dname: "",
        loc: "",
      },
    };
  },
  methods: {
    x: function (e) {
      var url = "http://localhost:8079/app/add"; //add페이지 설정
      console.log("==========================", this.dept);
      axios
        .post(url, {
          //post 요청, 30라인 url 가져옴
          deptno: this.dept.deptno, //21라인 정보들 담음(사용자가 적은 값이 왼쪽 키값으로 전송됨)
          dname: this.dept.dname,
          loc: this.dept.loc,
        })
        .then((res) => {
          eventBus.$emit("xyz", this.dept); //insert 성공후 이벤트 버스에 저장
          //xyz란 이벤트명으로 dept(3가지 값)를 eB에 보냄
        })
        .catch();
    },
  },
};
</script>
<style scoped></style>
