<template>
  <div id="app">
    <!--링크 등록-->
    <router-link to="/">Home</router-link><br />
    <router-link to="/login/홍길동">login-foo</router-link><br />
    <router-link to="/my/1234">pw-Baz</router-link><br />
    <router-link to="/knu">knu</router-link><br />
    <!--라우팅 된 컴포넌트가 보여질 부분-->
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
};
</script>
<style>
</style>
