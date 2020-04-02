import { Component, OnInit } from '@angular/core';
import {CommentService} from '../comment.service';
import {Comment} from '../comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  UserInfo:any;
  Users = []
  

  constructor(private commentService:CommentService) {
    
   }

  ngOnInit(): void {
    this.commentService.getData().subscribe(info => {
      this.UserInfo=info;
      this.Users.push(new Comment (this.UserInfo.name,this.UserInfo.mail,this.UserInfo.description));
    })
    
  }

  
  
}
