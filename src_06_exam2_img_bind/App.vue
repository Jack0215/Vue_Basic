<template> 
  <div id="app"> 
    <BookList :bookList="list"/> <!--3. 자식 사용 -->
    
  </div>
</template>
<script>

//앵귤러의 component calss 코드 구현
import BookList from './components/BookList.vue' //1.자식 임포트

export default { 
  name: 'App',
  components: {
    BookList //2. 사용할 컴포넌트 등록(자식)
  },
  data: function(){
    return{
      list:[{id:'p01', name:'위험한 식탁', price:2000, date:'20170401', img:'a'},

        {id:'p02',name:'공부의 비결',price:3000,date:'20170402',img:'b'},

        {id:'p03',name:'오메르타',   price:2500,date:'20170401',img:'c'},

       {id:'p04',name:'행복한 여행',price:4000,date:'20170401',img:'d'},

       {id:'p05',name:'해커스 토익',price:2000,date:'20170401',img:'e'},

       {id:'p06',name:'도로 안내서',price:2000,date:'20170401',img:'f'},

      ]

      
    }
  }
}
</script>

<style>
</style>
