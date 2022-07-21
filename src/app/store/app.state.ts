import { SharedReducer } from "./Shared/shared.reducer";
import { SHARED_STATE_NAME } from "./Shared/shared.selector";
import { SharedState } from "./Shared/shared.state";

export interface AppState {
    [SHARED_STATE_NAME] : SharedState;
}

export const appReducer = {
    [SHARED_STATE_NAME] : SharedReducer,
}