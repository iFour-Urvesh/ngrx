import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

const getCounteState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getCounteState, (state) => {
    return state.counter;
});

export const getName = createSelector(getCounteState, (state) => {
    return state.name;
});