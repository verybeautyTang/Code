<template>
 <div>
   <div v-if="!repoUrl">loading</div>
   <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
 </div>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      repoName: '',
      repoUrl: ''
    }
  },
  mounted () {
    // 发送ajax请求获取数据(vue插件)
    const url = `https://api.github.com/search/repositories?q=v&sort=stars`
    this.$http.get(url).then(responce => {
      const data = responce.data
      const msg = data.items[0]
      this.repoUrl = msg.html_url
      this.repoName = msg.name
    },
    error => {
      console.log(error)
    })
      // axios
      const url1=`https://api.github.com/search/users?q=aa`
      Axios.get(url1).then(responce=> {
        const data = responce.data
        const msg = data.items[0]
        console.log(msg.html_url)
        console.log(msg.node_id)
      }).catch(error=> {
        console.log('传输错误')
      })
  }

}
</script>
<style scoped>

</style>
