import { SelectionService } from './services/selection.service';
import { Component, OnInit } from '@angular/core';
import { Observable, interval, Observer, Subject, BehaviorSubject } from 'rxjs';
import { Color } from './models/color.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  showPreview = true;

  togglePreview() {
    this.showPreview = !this.showPreview;
  }

  createObservable(): Observable<number> {
    return interval(1000);
  }

  createSubject(): Subject<number> {
    const res = new BehaviorSubject<number>(0);

    setTimeout(() => res.next(10), 1000);
    setTimeout(() => res.next(42), 2000);
    setTimeout(() => res.next(60), 6000);
    setTimeout(() => res.error('oops'), 7000);

    return res;
  }

  createOurOwnObservable(): Observable<number> {
    return new Observable<number>(observer => {
      observer.next(12);
      setTimeout(() => {
        observer.next(42);
      }, 1000);

      setTimeout(() => {
        observer.next(60);
      }, 2000);

      setTimeout(() => {
        observer.next(11);
      }, 4000);

      setTimeout(() => {
        observer.complete();
      }, 5000);
    });
  }


  go() {
    const o1: Observer<number> = {
      next: val => {
        console.log('observer 1: next ' + val);
      },
      complete: () => { console.log('observer 1 complete') },
      error: err => { console.log('obdserver 1 error') }
    };

    const o2: Observer<number> = {
      next: val => {
        console.log('observer 2: next ' + val);
      },
      complete: () => { console.log('observer 2 complete') },
      error: err => { console.log('obdserver 2 error') }
    };

    const observable = this.createSubject();
    observable.subscribe(o1);

    setTimeout(() => {
      observable.subscribe(o2)
    }, 2500);


  }
}
