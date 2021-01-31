import {ADD_TODO, DELETE_TODO, SELECTALL, ClEARALL} from './mutationTypes'
// import { stat } from 'fs';
export default {
  [ADD_TODO] (state,{todos}) {
    state.Todos.unshift(todos)
  },
  [DELETE_TODO] (state, {index}) {
    state.Todos.splice(index, 1)
  },
  [SELECTALL] (state, {value}) {
    state.Todos.forEach(todo => {
      todo.complete =value
    });
  },
  [ClEARALL] (state) {
    state.Todos = state.Todos.filter(todo => !todo.complete)
  }
}
