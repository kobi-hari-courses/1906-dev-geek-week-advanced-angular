import { Action } from '@ngrx/store';

export const INCREMENT_ACTION = '[count-data] INCREMENT_ACTION';
export const DECREMENT_ACTION = '[count-data] DECREMENT_ACTION';



export class IncrementAction implements Action
{
    readonly type  = INCREMENT_ACTION;
}


export class DecrementAction implements Action
{
    readonly type  = DECREMENT_ACTION;
}

export type CounterDataActions = IncrementAction | DecrementAction;

