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
                <div v-if="todo.completed === false">
                    <span  @click="changeTodo(index, true)">
                        {{ todo.text }}
                    </span>
                    <button @click="removeTodo(index)">Remove</button>
                </div>
            </li>
        </ul>
        <div>
            <h3>Completed Todos</h3>
            <ul>
                <li v-for="(todo, index) in completedTodos" :key="index">
                    <div v-if="todo.completed === true">
                        <span @click="changeTodo(index, false)">
                            {{ todo.text }}
                        </span>
                        <button @click="removeTodo(index)">Remove</button>
                    </div>
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

        const newTodo = ref('');

        const todos = computed(() => store.state.todos)
        console.log(todos)

        const completedTodos = computed(() => store.getters.completedTodos);
        console.log(completedTodos)

        const addTodo = async () => {
            await store.dispatch('addTodoAsync', { text: newTodo.value, completed: false });
            newTodo.value = '';
        }

        const changeTodo = async (index, completed) => {
            await store.dispatch('changeTodoAsync', { index, completed })
        }
        
        const removeTodo = (index) => {
            store.dispatch('removeTodo', index);
        }

        return {
            newTodo,
            todos,
            completedTodos,
            addTodo,
            removeTodo,
            changeTodo
        }
    }
}
</script>

<style scoped>

</style>