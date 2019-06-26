import { Action } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';

export const ADD_TODO = '[todos] ADD_TODO';
export const MARK_COMPLETED = '[todos] MARK_COMPLETED';
export const MARK_UNCOMPLETED = '[todos] MARK_UNCOMPLETED';

export class AddTodoAction implements Action {
    readonly type = ADD_TODO;
    constructor(public newTodo: Todo) { }

}

export class MarkCompletedAction implements Action {
    readonly type = MARK_COMPLETED;
    constructor(public item: Todo) { }

}

export class MarkUnCompletedAction implements Action {
    readonly type = MARK_UNCOMPLETED;
    constructor(public item: Todo) { }

}

export type TodosActions = AddTodoAction | MarkCompletedAction | MarkUnCompletedAction;

