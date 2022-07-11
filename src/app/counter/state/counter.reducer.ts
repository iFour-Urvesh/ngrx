import { createReducer, on } from '@ngrx/store';
import { changeName, customincrement, decrement, increment, reset } from './counter.actions';
import { initialState } from './counter.state';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customincrement, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }),
  on(changeName, (state) => {
    return {
      ...state,
      name : "Jay",
    };
  })
);

export function counterReducer(state : any, action : any) {
  return _counterReducer(state, action);
}
