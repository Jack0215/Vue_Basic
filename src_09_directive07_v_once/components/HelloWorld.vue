<template>
  <div>
    기본 : <span>{{ username }}</span> <br />
    v-once 사용 안함 <span>{{ username }}</span> <br />
    v-once 사용 <span v-once>{{ username }}</span> <br />
    {{ changeName() }}
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      username: "홍길동",
    };
  },
  methods: {
    changeName: function () {
      this.username = "이순신";
    },
  },
};
</script>

<style>
</style>