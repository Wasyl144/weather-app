import { Component, OnInit } from '@angular/core';
import {CommentService} from '../comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  UserInfo:any;

  constructor(private commentService:CommentService) { }

  ngOnInit(): void {
    this.commentService.getData().subscribe(info => {
      this.UserInfo=info;
    })

  }

}
