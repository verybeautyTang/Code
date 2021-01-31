<template>
  <div>
    <ul>
      <li v-for="(ne,index) in news" :key="index">{{ne}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      news: [ '小可爱', '小鲜肉', '小堂岑' ]
    }
  }
}

</script>
<style scoped>
</style>
