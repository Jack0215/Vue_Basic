<template>
  <div class="app">
      <h1>도서 목록 {{bookList.length}}권</h1>
    <ul>
        <!--ul안에서 li 반복. for 문 이름 : v-for, key값을 바인딩 시켜야한다. key='유일값' -->
      <li v-for="book in bookList" v-bind:key="book.name">
        <img v-bind:src="require(`@/assets/image/${book.img}.jpg`)"> 
                            <!--back-tick 사용-->
        {{book.name}}
      </li>
      </ul>

  </div>
  
</template>

<script>
export default {
    name:'BookList',
    props:{
        bookList:Array
    }
}
</script>

<style>
</style>