import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private dataSource = new BehaviorSubject ({
    name: '',
    mail: '',
    description: '',
  });
  currentMessage = this.dataSource.asObservable();

  constructor() { }

  setData(data: any) {
    this.dataSource.next(data);
  }

  getData() {
    return this.dataSource.asObservable();
  }
}
