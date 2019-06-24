import { Todo } from 'src/app/model/todo.model';

export interface TodosState {
    todos: Todo[];
}

export const initTodosState: TodosState = {
    todos: []
};
