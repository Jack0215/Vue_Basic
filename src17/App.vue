<template>
  <div id="app">
    <router-link :to="{ name: 'Bar' }">Bar</router-link><br />
    <router-link :to="{ name: 'Foo' }">Foo</router-link><br />
    <router-link :to="{ name: 'Baz', params: { id: 'kkkk' } }">Baz</router-link
    ><br />
    <router-view></router-view>
    <!-- 라우팅 된 컴포넌트가 보여질 부분-->
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