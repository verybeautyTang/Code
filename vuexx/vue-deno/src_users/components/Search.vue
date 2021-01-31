<template>
      <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="SearchName" />
        <button @click="search">Search</button>
      </div>
    </section>
</template>
<script>
import Pubsub from 'pubsub-js'
export default {
  data () {
    return {
      SearchName: ''
    }
  },
  methods: {
    search () {
      const SearchName = this.SearchName.trim()
      if (SearchName) {
        Pubsub.publish('Search', SearchName)
      }
    }
  }
}
</script>
<style scoped>
</style>
