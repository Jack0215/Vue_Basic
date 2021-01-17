<template>
  <div class="hello">
    값:{{ num }}<br />
    {{ xxx() }} {{ xxx() }} {{ xxx() }}<br />
    {{ yyy }}{{ yyy }}{{ yyy }}<br />
    {{ change() }}
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
      num: 30,
    };
  },
  methods: {
    xxx: function () {
      console.log(this.num);
    },
    change: function () {
      this.num = 40;
    },
  },
  //computed 속성은 method와 동일하나 속성처럼 사용가능 {{속성명}},
  //데이터 캐싱처리 되어 한번만 호출됨
  computed: {
    yyy: function () {
      console.log(this.num);
      return ""; //리턴값이 필요함
    },
  },
};
</script>

<style scoped>
</style>
