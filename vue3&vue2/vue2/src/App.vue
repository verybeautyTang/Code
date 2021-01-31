<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hello-world msg="Welcome to Your Vue.js App" />
    <parent />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import parent from './components/parent.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    parent,
  },
};

</script>
<style>

</style>