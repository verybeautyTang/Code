<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll" />
    </label>
    <span>
      <!-- {{TodosSize}} -->
      <span>已完成{{TodosSize}}</span> / 全部{{Todos.length}}
    </span>
    <button class="btn btn-danger" v-show="TodosSize>0" @click="delectAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: {
    Todos: Array,
    selectAll: Function,
    delectAll: Function
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
  }

}
</script>
<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
