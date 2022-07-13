import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";

export const ADD_POST__ACTION = '[posts page]'

export const addPost = createAction(ADD_POST__ACTION, props<{ post : Post}>());