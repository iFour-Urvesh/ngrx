import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterStateUrl } from "src/app/store/router/custom-serializer";
import { getCurrentRouter } from "src/app/store/router/router.selector";
import { postAdapter, PostsState } from "./posts.state";

const getPostState = createFeatureSelector<PostsState>('posts');

export const postsSelectors = postAdapter.getSelectors();
export const getPostEntities =  createSelector(getPostState, postsSelectors.selectEntities);
export const getPosts = createSelector(getPostState, postsSelectors.selectAll);

export const getPostById = createSelector(getPostEntities, getCurrentRouter, (posts : any, route : RouterStateUrl ) =>{
    return posts ? posts[route.params['id']] : null;
})