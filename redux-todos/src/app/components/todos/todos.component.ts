import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  @Input() todos: Todo[]  = [];
  @Input() dones: Todo[] = [];

  @Output() markAsDone = new EventEmitter<Todo>();

  completeTodo(item: Todo) {
    this.markAsDone.emit(item);
  }


  drop(event: CdkDragDrop<Todo[]>) {
    if (event.previousContainer === event.container) {
    } else {
      const item = event.previousContainer.data[event.previousIndex];
      this.completeTodo(item);
    }
  }
}
