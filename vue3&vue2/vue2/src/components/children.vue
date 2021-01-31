<template>
  <div></div>
</template>

<script>
import eventHub from './eventHub.js';
export default {
  data () {
    return {
    };
  },
  mounted () {
    eventHub.$on('cou-event', () => {
      console.log('成功触发了couEventOn事件哦');
    })
  },
  beforeDestroy () {
    eventHub.$off('cou-event',() => {
      console.log('成功的删除了这个事件');
    })
  }
}
</script>

<style>
</style>