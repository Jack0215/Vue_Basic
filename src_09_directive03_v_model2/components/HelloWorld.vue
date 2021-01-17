<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>lazy</h4>
    <input type="text" v-model.lazy="lazy" />
    <!--enter 사용-->
    <p>lazy:{{ lazy }}</p>

    <h4>number</h4>
    <input type="text" v-model.number="number" />
    <!-- 숫자만 인식 사용 -->
    <p>number:{{ number }}</p>
    <h4>trim</h4>
    <input type="text" v-model.trim="trim" />
    <!--제일 처음 띄어쓰기만 제거한다-->
    <!-- 숫자+숫자아닌경우 조합, 숫자아닌경우+숫자입력 -->
    <p>trim:{{ trim }}</p>
    <h4>notrim</h4>
    <input type="text" v-model="noTrim" />
    <!--띄어쓰기 후 값 입력 -->
    <p>noTrim:{{ noTrim }}</p>
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
      lazy: "", //enter
      number: "",
      noTrim: "",
      trim: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>