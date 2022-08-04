import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { PostsEffects } from "./state/posts.effects";
import { postsreducer } from "./state/posts.reducer";
import { SinglePostComponent } from './single-post/single-post.component';

const routes : Routes = [
    {
        path:'', component: PostsListComponent,
        children : [
          {
            path : 'add', component : AddPostComponent
          },
          {
            path : 'edit/:id', component : EditPostComponent
          }
        ]
      }
];

@NgModule({
    declarations : [
        PostsListComponent,
        AddPostComponent,
        EditPostComponent,
        SinglePostComponent,
    ],
    imports : [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('posts', postsreducer),
        EffectsModule.forFeature([PostsEffects])
    ]
})

export class PostsModule {}