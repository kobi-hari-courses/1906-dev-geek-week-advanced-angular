import { Action } from '@ngrx/store';
export const INCREMENT_COUNTER = '[counter] INCREMENT_COUNTER';
export const DECREMENT_COUNTER = '[counter] DECREMENT_COUNTER';


export class IncerementAction implements Action {
    type = INCREMENT_COUNTER;

    constructor() {

    }
}


export class DecerementAction implements Action {
    type = DECREMENT_COUNTER;

    constructor() {

    }
}

export type CounterActions = IncerementAction | DecerementAction;
