import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { Comment } from '../comment';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  UserInfo: Comment;
  Users: Comment[] = [];
  dataSource = new MatTableDataSource<Comment>();


  constructor(private commentService: CommentService) {

  }

  ngOnInit(): void {
    this.commentService.getData().subscribe(info => {
      if (info.name != '') {
        this.Users.push(info);
        this.dataSource.data = this.Users;
      }
    })

  }

  //this function update a comment list
  updater() {
    if (this.commentService.getList() == true) {
      return true;
    }
    return false;
  }

  displayedColumns: string[] = ['name', 'mail', 'description']

}
