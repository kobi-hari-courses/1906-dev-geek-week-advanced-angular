import { CounterState, initCounterState } from '../state/couter.state';
import { INCREMENT_COUNTER, DECREMENT_COUNTER, CounterActions } from '../actions/counter.actions';

export function CounterReducer(state: CounterState = initCounterState, action: CounterActions): CounterState {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state, count: state.count + 1 };
        case DECREMENT_COUNTER:
            return { ...state, count: state.count - 1 };
    }
    return state;
}
