<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // functional: true, // 可以设置函数组件
  props: {
    msg: String,
  //   level: String,
  },
  // render(h, { props, data, children }) {
  //   return h(`h${props.level}`, data, children);
  // },
};
</script>
<style>

</style>