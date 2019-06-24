import { AddTaskAction, TaskDoneAction } from './../../store/actions/todos.actions';
import { AppState } from './../../store/state/app.state';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { Todo } from 'src/app/model/todo.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  todos$: Observable<Todo[]>;
  dones$: Observable<Todo[]>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  onAddNewRequired(todo: Todo) {
    this.store.dispatch(new AddTaskAction(todo));
  }

  onCompleteItemRequested(todo: Todo) {
    this.store.dispatch(new TaskDoneAction(todo));
  }

  ngOnInit(): void {
    this.todos$ = this.store.select(x => x.todos.todos).pipe(map(items => items.filter(task => !task.completed)));
    this.dones$ = this.store.select(x => x.todos.todos).pipe(map(items => items.filter(task => task.completed)));
  }


  constructor(private breakpointObserver: BreakpointObserver, private store: Store<AppState>) {

  }

}
