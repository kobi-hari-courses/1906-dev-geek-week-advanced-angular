import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  form: FormGroup;

  @Output() saveRequested = new EventEmitter<Todo>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      title: [''],
      work: [false],
      health: [false],
      payments: [false],
      completed: [false]
    });
  }

  save() {
    console.log(this.form.value);
    this.saveRequested.emit(this.form.value);
    this.initForm();
  }

}
