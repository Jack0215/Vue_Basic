<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <select v-model="mesg">
      <!--양방향 바인딩-->
      <option>10</option>
      <option>20</option>
      <option>30</option>
      <option>40</option></select
    ><br />
    <input type="text" v-model="mesg" /><br />
    {{ mesg }}
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
      mesg: 20,
    };
  },
};
</script>

<style scoped>
</style>
