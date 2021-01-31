<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll" />
    </label>
    <span>
      <!-- {{TodosSize}} -->
      <span>已完成{{completeCount}}</span> / 全部{{totalCount}}
    </span>
    <button class="btn btn-danger" v-show="TodosSize>0" @click="$store.dispatch('clearAll')">清除已完成任务</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters(['totalCount', 'completeCount']),
    checkAll: {
      get () {
        return this.$store.getters.isAllSelect
      },
      set (value) {
        this.$store.dispatch('selectAll', value)
      }
    }
  },
  methods: {
    ...mapActions(['clearAll'])
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
