// 接受組件通知出發mutation調用間接狀態的方法的對象

import {ADD_TODO, DELETE_TODO, SELECTALL, ClEARALL} from './mutationTypes'
export default {
  addTodo ({commit}, todos) {
    // 提交一個mutation請求
    commit (ADD_TODO, {todos})
  },
  DeleteS ({commit}, index) {
    commit (DELETE_TODO, {index})
  },
  selectAll ({commit},value) {
    commit (SELECTALL, {value})
  },
  clearAll ({commit}) {
    commit (ClEARALL)
  }
}
