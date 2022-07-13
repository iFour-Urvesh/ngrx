import { Post } from "src/app/models/posts.model";

export interface PostsState {
    posts : Post[];
}

export const initialState : PostsState = {
    posts : [
        {
            id : '1',
            title : 'Title 1',
            description : 'Description 1'
        },
        {
            id : '2',
            title : 'Title 2',
            description : 'Description 2'
        }
    ]
}
