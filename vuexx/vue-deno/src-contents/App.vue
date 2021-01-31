<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :AddComments="AddComments"  />
      <list :comments="comments" :deleteComments="deleteComments" />
    </div>
  </div>
</template>
<script>
import Add from './components/Add.vue'
import List from './components/List.vue'
export default {
  data () {
    return {
      comments: [
        {
          name: ' 王逸潇1',
          contents: ' 我觉得Vue还可以1'
        },
        {
          name: ' 王逸潇2',
          contents: ' 我觉得Vue还可以2'
        },
        {
          name: ' 王逸潇3',
          contents: ' 我觉得Vue还可以3'
        }
      ]
    }
  },
  methods: {
    AddComments (comments) {
      this.comments.unshift(comments)
    },
    deleteComments (index) {
      this.comments.splice(index, 1)
    }
  },
  components: {
    Add,
    List
  }
}
</script>
<style >
</style>
