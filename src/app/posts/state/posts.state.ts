import { Post } from "src/app/models/posts.model";

export interface PostsState {
    posts : Post[];
}

export const initialState : PostsState = {
    posts : [
        {
            id : '1',
            title : 'Title 1',
            discription : 'Discription 1'
        },
        {
            id : '2',
            title : 'Title 2',
            discription : 'Discription 2'
        }
    ]
}