<template>
  <div id="app">
    <!--3. 자식 사용 -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1>도서목록 {{ list.length }}권</h1>
    선택된 도서목록 <input type="text" v-bind:value="bookName" />
    <BookList v-bind:bookList="list" v-on:xyz="y" />
    <!--v-on을 이용해  xyz란 키값으로 y라는 함수 호출-->
  </div>
</template>
<script>
//앵귤러의 component calss 코드 구현
import HelloWorld from "./components/HelloWorld"; //1.자식 임포트
import BookList from "./components/BookList.vue";
export default {
  name: "App",
  components: {
    HelloWorld, //2. 사용할 컴포넌트 등록(자식)
    BookList,
  },
  data: function () {
    return {
      list: [
        //리스트를 자식한테 넘겨준다.
        {
          id: "p01",
          name: "위험한 식탁",
          price: 2000,
          date: "20170401",
          img: "a",
        },
        {
          id: "p02",
          name: "공부의 비결",
          price: 3000,
          date: "20170402",
          img: "b",
        },
        {
          id: "p03",
          name: "오메르타",
          price: 2500,
          date: "20170401",
          img: "c",
        },
        {
          id: "p04",
          name: "행복한 여행",
          price: 4000,
          date: "20170401",
          img: "d",
        },
        {
          id: "p05",
          name: "해커스 토익",
          price: 2000,
          date: "20170401",
          img: "e",
        },
        {
          id: "p06",
          name: "도로 안내서",
          price: 2000,
          date: "20170401",
          img: "f",
        },
      ],
      bookName: "", //선택된 책의 제목 저장
    };
  },
  methods: {
    y: function (xxx) {
      this.bookName = xxx; //매개변수로 넘어온 책이름 저장
    },
  },
};
</script>

<style>
</style>
