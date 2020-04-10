import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import {CommentService} from '../comment.service';
import {Comment} from '../comment';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.scss']
})

export class CommentsFormComponent implements OnInit {
  
  constructor(private commentService: CommentService, private matBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  commentForm = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),]),
    mail: new FormControl('',[
      Validators.email,
      Validators.required,
    ]),
    description: new FormControl('',[
      Validators.minLength(3),
      Validators.maxLength(150),
      Validators.required,
    ]),
  });
  data: Comment;
  

  onSubmit () {
    if(this.commentForm.valid){
      this.data={
        name:this.commentForm.value.name,
        mail:this.commentForm.value.mail,
        description:this.commentForm.value.description,
      }
  
      this.commentService.setData (this.data);
      this.commentService.setTrue();
      this.matBar.open("Comment be added :)","Dismiss", {
        duration:2000,
      });
      return;
    }
    this.matBar.open("Check the form","Dismiss", {
      duration:2000,
    }); 
  }
  onSubmit2() {
    // Debug
    console.warn(this.commentForm.value);
    console.log(this.commentForm.value.description);
  }

  
}
