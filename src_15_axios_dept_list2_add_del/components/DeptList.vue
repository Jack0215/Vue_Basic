<template>
  <div class="hello">
    <table border="1">
      <thead>
        <tr>
          <td>부서번호</td>
          <td>부서명</td>
          <td>부서위치</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(dept, idx) in list" :key="idx">
          <td>{{ dept.deptno }}</td>
          <td>{{ dept.dname }}</td>
          <td>{{ dept.loc }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
import axios from "axios";
import eventBus from "./EventBus.vue";
export default {
  name: "DeptList",
  props: {},
  data: function () {
    return { list: [] };
  },
  beforeMount() {
    this.x();
  },
  //emit처리  ////////////////////////
  created() {
    eventBus.$on("xyz", this.y); //추가시
    eventBus.$on("xyz2", this.y2); //삭제시 this.y2함수가 처리하도록 설정
  },
  //////////////////////////////
  methods: {
    x: function () {
      var xxx = this.list;
      //스프링에서 서버 가동후 브라우저에서 서버 주소 복/붙
      //yarn serve시 node-module없다는 에러 발생시
      //npm install --save core-js 실행
      axios
        .get("http://localhost:8079/app/")
        .then((res) => {
          console.log(res);
          res.data.map(function (ele, idx) {
            xxx.push(ele);
          });
        })
        .catch((error) => console.log(error));
    }, //end x
    y: function (dept) {
      //데이터를 list에 추가
      console.log("dept>>", dept);
      this.list.push(dept);
    }, //end y
    y2: function (deptno) {
      //부서번호 파라미터로 받기
      //삭제시
      var xxx = this.list;
      this.list.map(function (ele, idx) {
        if (ele.deptno == deptno) {
          xxx.splice(idx, 1); //index에 해당하는 항목 1개를 삭제
        }
      });
    }, //end y2
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
