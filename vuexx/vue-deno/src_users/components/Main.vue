<template>
  <div>
    <h2 v-if="firstView">请输入用户信息</h2>
    <h2 v-if="loading">loading</h2>
    <h2 v-if="errorMsg">{errorMsg}</h2>
    <div class="row" v-for="(user,index) in users" :key="index">
      <div class="card">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Pubsub from 'pubsub-js'
import axios from 'axios'
export default {
  data () {
    return {
      firstView: true,
      loading: false,
      users: null,
      errorMsg: ''
    }
  },
  mounted () {
    Pubsub.subscribe('Search', (msg, sreachName) => {
      this.firstView = false
      this.loading = true
      this.users = null
      this.errorMsg = ''
      const url = `https://api.github.com/search/users?q=${sreachName}`
      axios.get(url).then(response => {
        const result = response.data
        const users = result.items.map(item => ({
          url: item.html_url,
          name: item.login,
          avatar_url: item.avatar_url
        }))
        this.firstView = false
        this.loading = false
        this.users = users
        this.errorMsg = ''
      }).catch(error => {
        console.log(error)
        this.firstView = false
        this.loading = false
        this.users = null
        this.errorMsg = '请求错误'
      })
    })
  }
}
</script>
<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
