<template>
  <div class="Book">
    <h1>도서목록</h1>
    <ul>
      <li><img src="../assets/image/a.jpg" />위험한 식탁</li>
      <li><img src="../assets/image/b.jpg" />공부의비결</li>
      <li><img src="../assets/image/c.jpg" />오메르타</li>
      <li><img src="../assets/image/d.jpg" />행복한 여행</li>
      <li><img src="../assets/image/e.jpg" />헤커스 토익</li>
      <li><img src="../assets/image/f.jpg" />도로 안내서</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Happy",
  props: {
    msg: String,
  },
};
</script>
<style>
</style>