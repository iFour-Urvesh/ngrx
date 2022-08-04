import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const AUTO_LOGIN_ACTION = '[auth page] auto login';
export const AUTO_LOGOUT_ACTION = '[auth page] auto logout';

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const LOGIN_FAIL = '[auth page] login fail';


export const SIGNUP_START = '[auth page] signup start';
export const SIGNUP_SUCCESS = '[auth page] signup success';


export const autoLogin = createAction(AUTO_LOGIN_ACTION);
export const autoLogout = createAction(AUTO_LOGOUT_ACTION);

export const loginStart = createAction(LOGIN_START, props<{email : any; password : any}>());
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{user : User | null, redirect : boolean}>());

export const signupStart = createAction(SIGNUP_START, props<{email : any; password : any}>());
export const signupSuccess = createAction(SIGNUP_SUCCESS, props<{user : User, redirect : boolean}>());


export const dummyAction = createAction('[dummy action]');
