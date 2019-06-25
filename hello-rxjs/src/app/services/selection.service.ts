import { ColorsService } from './colors.service';
import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject, merge } from 'rxjs';
import { map, flatMap, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Color } from '../models/color.model';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  private selectedColor$ = new BehaviorSubject<Color|null>(null);
  private filter$ = new BehaviorSubject<string>('');
  private searchResults$: Observable<Color[]>;
  private isBusy$: Observable<boolean>;

  constructor(private colorsService: ColorsService) {
    this.searchResults$ = this.filter$.pipe(
      debounceTime(1000),
      switchMap(f => this.colorsService.searchColors(f))
    );

    const trueO = this.filter$.pipe(map(v => true));
    const falseO  = this.searchResults$.pipe(map(v => false));
    const bothO = merge(trueO, falseO);
    this.isBusy$ = bothO.pipe(distinctUntilChanged());

  }

  getSelectedColor(): Observable<Color|null> {
    return this.selectedColor$.asObservable();
  }

  setSelectedColor(color: Color) : Promise<void> {
    console.log('Selecting ' + color.displayName);
    this.selectedColor$.next(color);
    return Promise.resolve();
  }

  getFilter(): Observable<string> {
    return this.filter$.asObservable();
  }

  setFilter(value: string): Promise<void> {
    console.log('Setting filter to ' + value);
    this.filter$.next(value);
    return Promise.resolve();
  }

  getSearchResults() : Observable<Color[]> {
    return this.searchResults$;
  }

  getIsBusy(): Observable<boolean> {
    return this.isBusy$;
  }

}
