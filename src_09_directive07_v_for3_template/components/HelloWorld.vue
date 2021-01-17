<template>
  <div>
    <h1>1. 기본</h1>
    <div v-for="(name, idx) in names" v-bind:key="idx + 10" id="01">
      {{ name }}님
    </div>
    <h1>2. div 태그로 그룹핑: div 태그가 흔적으로 남음</h1>
    <div v-for="(name, idx) in names" v-bind:key="idx + 100" id="02">
      <span>{{ name }}</span>
      <span>님</span>
    </div>
    <h3>3.template 태그로 그룹핑 : template 태그가 흔적으로 안남음</h3>
    <template v-for="(name, idx) in names" id="03">
      <span v-bind:key="idx + 1">
        <!-- 반복 -->
        {{ name }}
      </span>
      <span :key="idx + 20">님 </span> <br :key="idx + 50" /><!-- 반복 -->
    </template>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
  data: function () {
    return {
      names: ["홍길동", "이순신", "유관순"],
    };
  },
};
</script>

<style>
</style>