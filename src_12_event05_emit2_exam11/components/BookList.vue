<template>
  <div class="app">
    <h1>도서 목록 {{ bookList.length }}권</h1>
    <ul>
      <!--ul안에서 li 반복. for 문 이름 : v-for, key값을 바인딩 시켜야한다. key='유일값' -->
      <li v-for="(book, idx) in bookList" v-bind:key="idx">
        <a v-on:click="x">
          <img
            :src="require(`../assets/image/${book.img}.jpg`)"
            :data-xxx="book.name"
          />
        </a>
        {{ book.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BookList",
  props: {
    bookList: Array, //부모에게서 bookList를 배열타입으로 받음
  },
  methods: {
    x: function (e) {
      console.log(e.target.dataset.xxx);
      //책의 이름
      this.$emit("xyz", e.target.dataset.xxx);
      //책 이름을 전달하게 만들어줌
    },
  },
};
</script>

<style>
</style>