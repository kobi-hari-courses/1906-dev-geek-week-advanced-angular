import { Action } from '@ngrx/store';
import { Todo } from 'src/app/model/todo.model';
export const ADD_TASK = '[todos] ADD_TASK';
export const TASK_DONE = '[todos] TASK_DONE';


export class AddTaskAction implements Action {
    readonly type = ADD_TASK;
    constructor(public todo: Todo) {

    }
}


export class TaskDoneAction implements Action {
    readonly type = TASK_DONE;
    constructor(public task: Todo) {

    }
}

export type TodosActions = AddTaskAction | TaskDoneAction;
