<template>
  <div>
    <ul>
      <li v-for="mes in message" :key="mes.id">
        <!-- <a href="???"></a> -->
        <router-link :to="`/home/message/detail${mes.id}`">{{mes.title}}
        <button @click="pushuName(mes.id)">推送数据</button>
        <button @click="selectName(mes.id)">保存数据</button>
        </router-link>
        <button @click="$router.back()">返回</button>
      </li>
    </ul>
    <div>
      <p>你好</p>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: []
    }
  },
  mounted () {
    setTimeout(() => {
      const message = [
        {
          id: 1,
          title: 'message1'
        },
        {
          id: 2,
          title: 'message2'
        },
        {
          id: 3,
          title: 'message3'
        }
      ]
      this.message = message
    }, 1000)
  },
  methods: {
    pushuName (id) {
      this.$router.push(`/home/message/detail/${id}`)
    },
    selectName (id) {
      this.$router.push(`/home/message/detail/${id}`)
    }
  }

}

</script>
<style scoped>
</style>
