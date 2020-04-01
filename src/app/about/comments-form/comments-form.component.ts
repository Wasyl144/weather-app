import { Component, OnInit , Input} from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.scss']
})

export class CommentsFormComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  commentForm = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),]),
    mail: new FormControl(''),
    description: new FormControl(''),
  });
  

  onSubmit () {
    console.log("it works");
  }
  onSubmit2() {
    // TODO: Use EventEmitter with form value
    console.warn(this.commentForm.value.description);
  }
}
