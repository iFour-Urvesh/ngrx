export interface SharedState {
    showLoading : boolean;
    errorMessage : String;
}

export const initialState : SharedState = {
    showLoading : false,
    errorMessage : '',
}