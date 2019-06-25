import { TodosActions, ADD_TODO, MARK_COMPLETED, MARK_UNCOMPLETED } from './../actions/todos-data.actions';
import { TodosState, TODO_STATE_INIT } from './../state/todos.state';

export function TodosReducer(state: TodosState = TODO_STATE_INIT, action: TodosActions): TodosState {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, { ...action.newTodo }] };
        case MARK_COMPLETED:
            return {
                ...state, todos: state.todos
                    .map(x => x.title !== action.item.title ?
                        x : { ...x, completed: true })
            };
        case MARK_UNCOMPLETED:
            return {
                ...state, todos: state.todos
                    .map(x => x.title !== action.item.title ?
                        x : { ...x, completed: false })
            };

    }
    return state;
}