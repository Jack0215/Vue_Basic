<template>
  <div class="hello">
    <h1>index 없이 사용</h1>
    <!-- v-for 객체의 사용
    v-for="(value, key) in 객체" v-bind:key="key"
    v-for="(value, key, index) in 객체" v-bind:key="index"

    -->
    <ul>
      <li v-for="(value, key) in person" v-bind:key="key">
        {{ key }}:{{ value }}
      </li>
    </ul>

    <!-- -->
    <h1>index 지정 사용</h1>
    <ul>
      <!--v ,   K ,  i                               i  -->
      <li v-for="(value, key, index) in person" v-bind:key="index">
        {{ index + 1 }}:{{ key }}:{{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => {
    return {
      person: {
        //object
        username: "홍길동",
        age: 20,
        address: "서울",
      },
    };
  },
};
</script>

<style scoped>
</style>
