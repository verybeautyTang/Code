<template>
  <div>
    <p>ID:{{$route.params.id}}</p>
    <ul>
       <li>id:{{allMessage.id}}</li>
      <li>title:{{allMessage.title}}</li>
      <li>content:{{allMessage.content}}</li>
    </ul>

  </div>
</template>

<script>
export default {
  data () {
    return {
      allMessage: []
    }
  },
  mounted () {
    setTimeout(() => {
      const allMessageDetail = [
        {
          id: 1,
          title: 'Messsage1',
          content: '我是信息1'
        },
        {
          id: 2,
          title: 'Messsage2',
          content: '我是信息2'
        },
        {
          id: 3,
          title: 'Messsage3',
          content: '我是信息3'
        }
      ]
      this.allMessageDetail = allMessageDetail
      const id = this.$route.params.id * 1
      this.allMessage = allMessageDetail.find(detail => detail.id === id)
    }, 1000)
  },
  watch: {
    $route: function (value) {
      const id = value.params.id * 1
      this.allMessage = this.allMessageDetail.find(detail => detail.id === id)
    }
  }
}
</script>

<style>
</style>
