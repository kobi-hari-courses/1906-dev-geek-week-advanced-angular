import { CounterState, initCounterState } from './couter.state';
import { TodosState, initTodosState } from './todos.state';
import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { CounterReducer } from '../reducers/counter.reducer';
import { TodosReducer } from '../reducers/todos.reducer';

export interface AppState {
    counter: CounterState;
    todos: TodosState;
}


export const reducers: ActionReducerMap<AppState> = {
    counter: CounterReducer,
    todos: TodosReducer
};



