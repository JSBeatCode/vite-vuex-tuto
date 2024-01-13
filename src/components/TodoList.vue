<template>
    <div>
        <h3>--------computed with vuex--------</h3>
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
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapState(['todos']),
        ...mapGetters(['completedTodos'])
    },
    data () {
        return {
            newTodo: ''
        }
    },
    methods: {
        // mapActions를 사용하여 addTodoAsync와 removeTodo 액션을 가져와서 현재 컴포넌트에 등록
        ...mapActions(['addTodoAsync', 'removeTodo']),
        // 비동기로 동작하는 addTodo 메서드 정의
        async addTodo() {
            // addTodoAsync 액션을 호출하고 비동기적으로 실행되기를 기다림
            await this.addTodoAsync({ text: this.newTodo, completed: false});
            this.newTodo = '';
        }
    }
}
</script>

<style lang="scss" scoped>

</style>