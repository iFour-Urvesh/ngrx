import { createReducer, on } from "@ngrx/store";
import { addPost } from "./posts.actions";
import { initialState } from "./posts.state";

const _postsReducer = createReducer(initialState, 
    on(addPost, (state, action) =>{

        let post = {...action.post}
        post.id = (state.posts.length +1).toString();
        return{
            ...state,
            posts : [...state.posts,post],
        }
    }))

export function postsreducer(state : any, action : any) {
    return _postsReducer(state, action);
}