<template>
    <li @mouseenter="ShowEnter(true)" @mouseleave="ShowEnter(false)" :style="{background: bgColor}">
          <label>
            <input type="checkbox" v-model="todo.complete"/>
            <span>{{todo.title}}</span>
          </label>
          <button class="btn btn-danger" v-show="isShow" @click="deleteThis">删除</button>
        </li>
</template>

<script>
export default {
  props: {
    todo: Object,
    index: Number,
    DeleteS: Function
  },
  data () {
    return {
      isShow: false,
      bgColor: 'white'
    }
  },
  methods: {
    ShowEnter (isEnter) {
      if (isEnter) {
        this.isShow = true
        this.bgColor = 'gray'
      } else {
        this.isShow = false
        this.bgColor = 'white'
      }
    },
    deleteThis () {
      const {todo, index, DeleteS} = this
      if (window.confirm(`您确定要删除${todo.title}`)) {
        DeleteS(index)
      }
    }
  }
}
</script>
<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

</style>
