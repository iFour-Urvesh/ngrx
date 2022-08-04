import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { updatePost } from '../state/posts.actions';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {

  post !: Post;
  postForm !: FormGroup;
  postSubscription !: Subscription;

  constructor(private route : ActivatedRoute, private store : Store, private router : Router) { }

  ngOnInit(): void {
    this.createForm();
    this.postSubscription = this.store.select(getPostById).subscribe(post => {
      if(post){
      this.post = post;
      this.postForm.patchValue({
        title : post.title,
        description : post.description
      })
    }
    })

  }

  createForm(){
    this.postForm = new FormGroup({
      title : new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description : new FormControl(null, [Validators.required, Validators.minLength(10)])
    })
  }
  
  ngOnDestroy(): void {
    if(this.postSubscription){
      this.postSubscription.unsubscribe();
    }
  }

  showDescriptionErrors(){
    const descriptionError = this.postForm.get('description');
    if( descriptionError?.touched && !descriptionError.valid){
      if(descriptionError.errors?.['required']){
        return "Description is required"
      }
      else if(descriptionError.errors?.['minlength']){
        return "Description should be minimum 10 character"
      }
    }
  }

  onUpdatePost(){
    if(!this.postForm.valid){
      return;
    }
    const post : Post = {
      id : this.post.id,
      title : this.postForm.value.title,
      description : this.postForm.value.description,
    };
    this.store.dispatch(updatePost({ post })) 
    this.router.navigate(['posts'])
  }

}
