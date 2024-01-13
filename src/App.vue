<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<template>
  <div>
    <h1>Vite Vue 3 Project with Vuex</h1>
    <TodoList />
    <TodoListReactiveType />
  </div>
  
</template>

<script>
import TodoList from './components/TodoList.vue';
import TodoListReactiveType from './components/TodoListReactiveType.vue'

export default {
  components: {
    TodoList,
    TodoListReactiveType
  }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
