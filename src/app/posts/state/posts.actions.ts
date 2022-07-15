import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";

export const ADD_POST__ACTION = '[posts page] add post'
export const UPDATE_POST__ACTION = '[posts page] update post'
export const DELETE_POST__ACTION = '[posts page] delete post'

export const addPost = createAction(ADD_POST__ACTION, props<{ post : Post}>());
export const updatePost = createAction(UPDATE_POST__ACTION, props<{ post : Post}>());
export const deletePost = createAction(DELETE_POST__ACTION, props<{ id : string}>());