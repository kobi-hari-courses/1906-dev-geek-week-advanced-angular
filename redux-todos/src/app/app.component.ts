import { AddTodoAction, MarkCompletedAction } from './store/actions/todos-data.actions';
import { Component, OnInit } from '@angular/core';
import { AppState } from './store/state/app.state';
import { Store } from '@ngrx/store';
import { IncrementAction, DecrementAction } from './store/actions/count-data.actions';
import { Todo } from './models/todo.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'redux-todos';
  todos$: Observable<Todo[]>;
  dones$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {

  }
  
  ngOnInit() {
    this.todos$ = this.store.select(x => x.todosData.todos)
    .pipe(map(todos => todos.filter(o => !o.completed)));

    this.dones$ = this.store.select(x => x.todosData.todos)
    .pipe(map(todos => todos.filter(o => o.completed)));

  }
  onSaveRequested(item: Todo) {
    this.store.dispatch(new AddTodoAction(item));
  }

  increment() {
    this.store.dispatch(new IncrementAction());
  }

  decrement() {
    this.store.dispatch(new DecrementAction());
  }

  completeTodoItem(item: Todo) {
    this.store.dispatch(new MarkCompletedAction(item));
  }

}
