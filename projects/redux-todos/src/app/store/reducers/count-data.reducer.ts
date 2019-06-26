import { CountDataState, COUNT_DATA_INIT } from './../state/count-data.state';
import { CounterDataActions, INCREMENT_ACTION, DECREMENT_ACTION } from '../actions/count-data.actions';
export function CountDataReducer(state: CountDataState = COUNT_DATA_INIT, action: CounterDataActions): CountDataState {
    switch (action.type) {
        case INCREMENT_ACTION:
            return { ...state, counter: state.counter + 1 };
        case DECREMENT_ACTION:
            return { ...state, counter: state.counter - 1 };
    }
    return state;
}