import { Component, OnInit } from '@angular/core';
import {CommentService} from '../comment.service';
import {Comment} from '../comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  UserInfo:Comment;
  Users:Comment[]=[];
  

  constructor(private commentService:CommentService) {
    
   }

  ngOnInit(): void {
    this.commentService.getData().subscribe(info => {
      this.UserInfo=info;
      console.log(this.UserInfo);
      this.Users.push(this.UserInfo);
      
    })
    
  }

  updater() {
    if(this.commentService.getList()==true){
      return true;
    }
    return false;
  }
  
  
}
