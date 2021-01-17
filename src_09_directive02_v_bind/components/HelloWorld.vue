<template>
  <div class="hello">
    mesg: <input type="text value=" mesg /><br />
    v-bind:value="mesg <input type="text" v-bind:value="mesg" /><br />
    :value="mesg" <input type="text" :value="mesg" /><br />
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
      mesg: "홍길동",
    };
  },
};
</script>

<style scoped>
</style>
