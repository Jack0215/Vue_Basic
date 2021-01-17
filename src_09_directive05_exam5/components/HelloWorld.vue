<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    이름: <input type="text" v-model="name" />
    <span v-if="name.length < 3"> 이름은 3글자 이상이어야 합니다. </span> <br />
    나이: <input type="text" v-model="age" />
    <span v-if="10 > age || age >= 120">
      나이는 10세 이상 120세 이하 여야 합니다. </span
    ><br />
    길이 {{ name.length }} &nbsp; &nbsp; 나이 : {{ age }}
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
      name: "",
      age: 0,
    };
  },
};
</script>

<style scoped>
span {
  color: red;
}
</style>
