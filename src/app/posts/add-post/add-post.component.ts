import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postForm !: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title : new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description : new FormControl(null, [Validators.required, Validators.minLength(10)])
    })
  }

  onAddPost(){
    if(!this.postForm.valid){
      return;
    }
    console.log("Form : ",this.postForm.value);
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

}
