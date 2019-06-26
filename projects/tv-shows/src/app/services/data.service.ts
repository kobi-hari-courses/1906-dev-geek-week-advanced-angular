import { SearchResult } from './../models/model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Show } from '../models/model';
import { Observable, Subject, BehaviorSubject, merge } from 'rxjs';
import { switchMap, flatMap, debounceTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://api.tvmaze.com';
  private allShows: Promise<Show[]>;
  
  private filter : Subject<string>;
  private shows : Observable<Show[]>;
  private selected : Subject<Show>;
  private isSearching: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.filter = new BehaviorSubject<string>('');
    this.selected = new BehaviorSubject<Show|null>(null);
    this.allShows = this.getAllShows();

    this.shows = this.filter.pipe(
      debounceTime(1000),
      switchMap(filter => this.filterShows(filter)),  
    );

    let trueBusy = this.filter.pipe(map(x => true));
    let falseBusy = this.shows.pipe(map(x => false));
    this.isSearching = merge(trueBusy, falseBusy);
  }

  setFilter(value: string) {
    this.filter.next(value);
  }

  setSelected(value: Show) {
    this.selected.next(value);
  }

  getShows(): Observable<Show[]> {
    return this.shows;
  }

  getIsBusy() {
    return this.isSearching;
  }

  getSelected(): Observable<Show> {
    return this.selected.asObservable();
  }

  delay() {
    return new Promise((s, r) => setTimeout(s, 2000));
  }

  private async getAllShows(): Promise<Show[]> {
    let url = `${this.baseUrl}/shows`;  
    let res = await this.http.get<Show[]>(url).toPromise();
    return res;
  }

  private async filterShows(filter: string): Promise<Show[]> {
    var shows = await this.allShows;
    await this.delay();
    return shows.filter(s => s.name.toLowerCase().includes(filter.toLowerCase()));
  }

}
