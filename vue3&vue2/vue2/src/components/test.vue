<template functional>
  <component :is="`h{props.level}`" v-bind="attrs" v-on="children" />
</template>

<script>
export default {
  props: ['level']
}
</script>

<style>
</style>