import { createReducer, on } from "@ngrx/store";
import { addPostSuccess, deletePostSuccess, loadPostsSuccess, updatePostSuccess } from "./posts.actions";
import { initialState, postAdapter } from "./posts.state";

const _postsReducer = createReducer(initialState, 
    on(addPostSuccess, (state, action) =>{
        return postAdapter.addOne(action.post, state);
    }),
    on(updatePostSuccess, (state, action) =>{
        return postAdapter.updateOne(action.post, state)
    }),
    on(deletePostSuccess, (state, {id}) =>{
        return postAdapter.removeOne(id, state);
    }),
    on(loadPostsSuccess, (state, action) => {
        return postAdapter.setAll(action.posts, state);
    })
)

export function postsreducer(state : any, action : any) {
    return _postsReducer(state, action);
}