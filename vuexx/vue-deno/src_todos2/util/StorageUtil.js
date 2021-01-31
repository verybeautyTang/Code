// 使用localStorage存储数据的工具模块
// 1、函数
// 2、对象
// 如果暴露一个功能就用函数，暴露多个功能就要用对象
const Todos_key= 'todo_key'
export default {
  saveTodos (Todos) {
    window.localStorage.setItem(Todos_key, JSON.stringify(Todos))
  },
  readTodos () {
    return JSON.parse(window.localStorage.getItem(Todos_key) || '[]')
  }
}
