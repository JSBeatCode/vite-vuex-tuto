import { createStore } from 'vuex';

export default createStore({
    state: {
        todos: []
    },
    /**
    * 뮤테이션은 상태를 변경하는 유일한 방법입니다.
    * 동기적으로 동작하며, 상태를 변경하는 역할을 합니다.
    * commit 메서드를 사용하여 호출됩니다.
    * 뮤테이션은 순수한 함수로 구현되어야 하며, 어떤 종류의 비동기 로직도 포함해서는 안 됩니다.
    */
    mutations: {
        addTodo(state, todo) {
            state.todos.push(todo);
        },
        removeTodo(state, index) {
            state.todos.splice(index, 1);
        }
    },
    /**
     * 액션은 비동기 작업이나 여러 뮤테이션을 연속적으로 호출하는 역할을 합니다.
     * 주로 비동기 로직, API 호출 등을 처리합니다.
     * dispatch 메서드를 사용하여 호출됩니다.
     * 액션은 비동기 로직을 수행한 후에 뮤테이션을 호출하여 상태를 변경합니다.
     */
    actions: {
        //비동기 처리 등이 필요한 경우 여기에 작성
        async addTodoAsync({ commit }, todo) {
            // 비동기 작업, 예를 들면 API 호출 등을 수행 후 mutation을 호출
            return new Promise((resolve) => {
                setTimeout(() => {
                    // vuex의 뮤테이션을 호출하기 위해 사용되는 함수.
                    commit('addTodo', todo);
                    resolve();
                }, 1000)
            }) 
        },
        // todo를 제거하는 액션
        removeTodo({ commit }, index) {
            commit('removeTodo', index)
        }
    },
    /**
    * 게터는 Vuex의 상태를 기반으로 계산된 값을 반환하는 역할을 합니다.
    * 상태의 일부를 가져와서 조작된 값을 반환할 수 있습니다.
    * getters 속성을 사용하여 호출됩니다.
    * 상태를 변화시키지 않으며 읽기 전용입니다.
    */
    getters: {
        completedTodos: (state) => state.todos.filter((todo) => todo.completed)
    }
})