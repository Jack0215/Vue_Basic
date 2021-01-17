<template>
  <div class="hello">
    <h1>교재정보</h1>
    <!--유일 값 부여-->
    <div v-for="(book, idx) in bookList" v-bind:key="idx">
      <!--name과 price가 들어감-->
      <input type="checkbox" v-model="books" v-bind:value="book" />{{
        book.name
      }}
      <!--클릭하는 순간 book이 저장됨-->
      <span>{{ book.price }}</span>
    </div>
    <br />
    선택교재
    <!--유일 값 부여(중복 제외 시키기 위해 +100 -->
    <div v-for="(book, i) in books" :key="i + 100">{{ book.name }}</div>
    <!-- 선택한 교재의 이름만 for로 출력-->
    <br />
    총합:{{ total }}
    <!-- watch사용 구현-->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  watch: {
    //watch는 반드시 변수명과 메소드 명을 일치시켜야함 books가 변경될 때 실행됨
    books: () => {
      var xxx = 0; //총 합 변수
      var kkk = this.books; //선택한 책 목록 저장
      kkk.map(function (ele, idx) {
        //콜백함수. ele: {책에 대한 객체 {name:'책제목',price:가격} }, idx: index값
        console.log(idx, ele.name, ele.price);
        xxx = xxx + ele.price; //총합에 누적
      });
      this.total = xxx; //총합 변수에 최종 저장
    }, //end watch
  },
  data: () => {
    return {
      bookList: [
        { name: "자바의 정석", price: 30000 }, //객체 하나가 book이 됨 4라인에 저장된다.
        { name: "jsp 정석", price: 40000 },
        { name: "Spring 정석", price: 50000 },
        { name: "jQuery 정석", price: 60000 },
        { name: "Angluar 정석", price: 70000 },
      ],
      books: [], //선택한 책 저장
      total: 0, //총 가격 저장
    };
  },
};
</script>

<style>
</style>
