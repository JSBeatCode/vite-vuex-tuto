<template>
    <div>
      <h3>--------reactive vuex--------</h3>
      <h2>Todo List</h2>
      <form @submit.prevent="addTodo">
        <input v-model="newTodo" placeholder="Add a new todo"/>
        <button type="submit">Add</button>
      </form>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          {{ todo.text }}
          <button @click="removeTodo(index)">Remove</button>
        </li>
      </ul>
      <div>
        <h3>Completed Todos</h3>
        <ul>
          <li v-for="(todo, index) in completedTodos" :key="index">
            {{ todo.text }}
            <button @click="removeTodo(index)">Remove</button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { computed, ref } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    setup () {
      const store = useStore();
  
      // Use reactive to create a reactive object
      const newTodo = ref('');
  
      // Getters
      const todos = computed(() => store.state.todos);
      const completedTodos = computed(() => store.getters.completedTodos);
  
      // Actions
      const addTodo = async () => {
        await store.dispatch('addTodoAsync', { text: newTodo.value, completed: false });
        newTodo.value = '';
      };
  
      const removeTodo = (index) => {
        store.dispatch('removeTodo', index);
      };
  
      return {
        newTodo,
        todos,
        completedTodos,
        addTodo,
        removeTodo,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  