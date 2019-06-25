import { TodosState } from './todos.state';
import { CountDataState } from './count-data.state';
import { ActionReducerMap } from '@ngrx/store';
import { CountDataReducer } from '../reducers/count-data.reducer';
import { TodosReducer } from '../reducers/todos-state.reducer';
export interface AppState {
    counterData: CountDataState,
    todosData: TodosState
}


export const reducers: ActionReducerMap<AppState> = {
    counterData: CountDataReducer,
    todosData: TodosReducer
}