<template>
    <div class="col-md-4">
        <form class="form-horizontal">
          <div class="form-group">
            <label>用户名</label>
            <input type="text" class="form-control" placeholder="用户名" v-model="name">
          </div>
          <div class="form-group">
            <label>评论内容</label>
            <textarea class="form-control" rows="6" placeholder="评论内容" v-model="contents"></textarea>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="button" class="btn btn-default pull-right" @click="submit">提交</button>
            </div>
          </div>
        </form>
      </div>
</template>

<script>
export default {
  props: {
    AddComments: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      name: '',
      contents: ''
    }
  },
  methods: {
    submit () {
      const name = this.name.trim()
      const contents = this.contents.trim()
      if (!name || !contents) {
        alert('您输入得姓名不能为空!')
        return
      }
      const comment = {
        name,
        contents
      }
      this.AddComments(comment)
      this.name = ''
      this.contents = ''
    }
  }
}

</script>
<style scoped>
</style>
