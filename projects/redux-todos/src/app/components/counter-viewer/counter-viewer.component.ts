import { AppState } from './../../store/state/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-viewer',
  templateUrl: './counter-viewer.component.html',
  styleUrls: ['./counter-viewer.component.scss']
})
export class CounterViewerComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.count$ = this.store.select(x => x.counterData.counter);
  }

}
