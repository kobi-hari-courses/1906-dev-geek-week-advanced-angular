import { Todo } from 'src/app/models/todo.model';

export interface TodosState {
    todos: Todo[];
}

export const TODO_STATE_INIT: TodosState = {
    todos: []
}
