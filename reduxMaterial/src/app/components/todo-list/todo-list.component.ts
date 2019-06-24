import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[];
  @Input() dones: Todo[];
  @Output() completeItemRequested = new EventEmitter<Todo>();
  constructor() { }

  askForComplete(item: Todo) {
    this.completeItemRequested.emit(item);
  }
  ngOnInit() {
  }

}
