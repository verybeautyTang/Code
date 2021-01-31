export default {
  totalCount (state) {
    return state.Todos.length
  },
  completeCount (state) {
    return state.Todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
  },
  // 判斷是否全部選中
  isAllSelect (state,getters) {
    return getters.totalCount === getters.completeCount && getters.totalCount > 0
  }
}
