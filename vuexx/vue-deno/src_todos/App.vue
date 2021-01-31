<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :AddS="AddS" />
      <TodoList :Todos="Todos" :DeleteS="DeleteS" />
      <TodoFooter :Todos="Todos" :delectAll="delectAll" :selectAll="selectAll" />
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  data () {
    return {
      Todos: [
        { title: '吃饭', complete: false },
        { title: '睡觉', complete: true },
        { title: '敲代码', complete: false }
      ]
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
