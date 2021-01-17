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
          //detp란 변수를 꺼내옴
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
export default {
  name: "HelloWorld",
  props: {},
  data: function () {
    return { list: [] }; //전체 사원 목록 저장할 빈 목록
  },
  beforeMount() {
    this.x(); //전체 목록 가져오는 함수 호출
  },
  methods: {
    x: function () {
      var xxx = this.list;
      ////npm install axios --save
      //스프링에서 서버 가동후 브라우저에서 서버 주소 복/붙
      //yarn serve시 node-module없다는 에러 발생시
      //npm install --save core-js 실행
      axios
        .get("http://localhost:8075/app/")
        .then((res) => {
          console.log(res);
          res.data.map(function (ele, idx) {
            //응답에서 데이터만 꺼내옴, 맵에 담음
            xxx.push(ele); //xxx에 정보 추가
          });
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
