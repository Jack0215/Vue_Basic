<template>
  <div class="hello">
    가격: <input type="text" v-model="price" /><br />
    갯수:
    <select @change="sum" v-model="quantity">
      <option>10</option>
      <option>20</option>
      <option>30</option></select
    ><br />
    <span>{{ total }}</span>
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
      price: "",
      quantity: "",
      total: "",
    };
  },
  methods: {
    sum: function () {
      this.total = parseInt(this.price) * parseInt(this.quantity);
    },
  },
};
</script>

<style scoped>
</style>
