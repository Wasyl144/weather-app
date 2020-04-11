import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Comment} from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private dataSource = new BehaviorSubject<Comment>({name:'',mail:'',description:''});

  currentMessage = this.dataSource.asObservable();

  setList=false;

  constructor() { }

  setData(data: Comment) {
    this.dataSource.next(data);
  }

  getData() {
    return this.dataSource.asObservable();
  }

  getList(){
    return this.setList;
  }
  //this function calls comment table in other component
  setTrue(){
    this.setList=true;
  }
}
