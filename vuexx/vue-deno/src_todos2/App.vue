<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :AddS="AddS" />
      <TodoList :Todos="Todos" />
      <!-- <TodoFooter :Todos="Todos" :delectAll="delectAll" :selectAll="selectAll" /> -->
      <todo-footer>
        <input type="checkbox" v-model="checkAll" slot="checkAll" />
        <span slot="count">已完成{{TodosSize}}</span> / 全部{{Todos.length}}
        <button slot="clear1" class="btn btn-danger" v-show="TodosSize>0" @click="delectAll">清除已完成任务</button>
      </todo-footer>
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import StorageUtil from './util/StorageUtil'
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  mounted () {
    PubSub.subscribe('DeleteS', (msg, index) => {
      this.DeleteS(index)
    })
  },
  data () {
    return {
      Todos: StorageUtil.readTodos()
    }
  },
  computed: {
    TodosSize () {
      // this.Todos=this.Todos.filter(todo => todo.complete)
      // return this.Todos.length
      return this.Todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
    },
    checkAll: {
      get () {
        return this.TodosSize === this.Todos.length && this.TodosSize > 0
      },
      set (value) {
        this.selectAll(value)
      }
    }
  },
  watch: {
    deep: true,
    handler: function (value) {
      StorageUtil.saveTodos(value)
    }
  },
  methods: {
    AddS (todo) {
      this.Todos.unshift(todo)
    },
    DeleteS (index) {
      this.Todos.splice(index, 1)
    },
    delectAll () {
      this.Todos = this.Todos.filter(todo => !todo.complete)
    },
    selectAll (check) {
      this.Todos.forEach(todo => todo.complete = check)
    }
  }
}

</script>
<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
