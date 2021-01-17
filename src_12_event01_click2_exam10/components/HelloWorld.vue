<template>
  <div>
    <h1>교재 정보</h1>
    <div v-for="(book, idx) in bookList" v-bind:key="idx">
      <input type="checkbox" v-bind:value="book.name" v-model="books" />{{
        book.name
      }}
      <span>가격: {{ book.price }}</span>
      <button @click="del" data-idx="idx">삭제</button>
    </div>
    <hr />
    <button @click="Alldel">선택 삭제</button>
    <hr />
    {{ books }}
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
      bookList: [
        { name: "자바의 정석", price: 2000 },
        { name: "jsp 정석", price: 3000 },
        { name: "Spring의 정석", price: 4000 },
        { name: "jQuery의 정석", price: 1000 },
        { name: "Angular의 정석", price: 5000 },
      ],
      books: [],
    }; //end return
  },
  methods: {
    del: function (e) {
      var delIdx = e.target.dataset.idx;
      console.log("delIdx:", delIdx);
      this.bookList.splice(delIdx, 1); //index해당 항목 1개 삭제
    },

    Alldel: function () {
      var xx = this.bookList;
      console.log(xx); //전체 책
      console.log(this.books); //선택된 책
      this.books.map(function (ele, idx) {
        //books에서 책 한권 ele : 책 제목
        xx.map(function (e, i) {
          // bookList 한 권 책 정보 {name...price}, i:index
          if (ele == e.name) {
            //books의 책제목과 bookList(xx) 책 제목이 동일하면
            console.log(i, idx);
            xx.splice(i, 1); //i 사용 주의 bookList(xx)에서 삭제
          }
        });
      });
    },
  },
};
</script>

<style scoped>
</style>
