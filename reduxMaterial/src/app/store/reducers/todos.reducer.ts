import { TodosActions, ADD_TASK, TASK_DONE } from './../actions/todos.actions';
import { TodosState, initTodosState } from './../state/todos.state';
export function TodosReducer(state: TodosState = initTodosState, action: TodosActions): TodosState {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, todos: [...state.todos, action.todo] };

        case TASK_DONE:
            return {
                ...state, todos: [...state.todos.map(x =>
                    x.title === action.task.title
                        ? { ...x, completed: true }
                        : x)]
            };
    }
    return state;
}
