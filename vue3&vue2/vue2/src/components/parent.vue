<template>
  <div>
    <p @click="Hello">你好我好喜欢你哦</p>
  </div>
</template>

<script>
import eventHub from "./eventHub.js";

export default {
  methods: {
    Hello() {
      debugger;
      eventHub.$emit("cou-event");
    },
  },
};
</script>

<style>
</style>