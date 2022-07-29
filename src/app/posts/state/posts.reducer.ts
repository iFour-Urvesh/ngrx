import { createReducer, on } from "@ngrx/store";
import { addPost, deletePost, loadPostsSuccess, updatePost } from "./posts.actions";
import { initialState } from "./posts.state";

const _postsReducer = createReducer(initialState, 
    on(addPost, (state, action) =>{

        let post = {...action.post}
        post.id = (state.posts.length +1).toString();
        return{
            ...state,
            posts : [...state.posts,post],
        }
    }),
    on(updatePost, (state, action) =>{
        const updatePost = state.posts.map( (post) => {
            return action.post.id === post.id ? action.post : post;
        })
        return{
            ...state,
            posts : updatePost
        }
    }),
    on(deletePost, (state, {id}) =>{
        const updatePost = state.posts.filter( post => {
            return post.id !== id;
        })
        return{
            ...state,
            posts : updatePost
        }
    }),
    on(loadPostsSuccess, (state, action) => {
        return {
            ...state,
            posts : action.posts
        }
    })
)

export function postsreducer(state : any, action : any) {
    return _postsReducer(state, action);
}