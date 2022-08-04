import { RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterStateUrl } from "./custom-serializer";

export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const getCurrentRouter = createSelector(getRouterState, router => {
    return router.state;
})