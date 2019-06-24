import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Todo } from 'src/app/model/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  form: FormGroup;

  @Output() addNewRequired = new EventEmitter<Todo>();
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();

  }

  initForm() {
    this.form = this.fb.group({
      title: [''],
      work: [false],
      health: [false],
      payments: [false]
    });
  }

  askForSave() {
    this.addNewRequired.emit(this.form.value);
    this.initForm();
  }

}
