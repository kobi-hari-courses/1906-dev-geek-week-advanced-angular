import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isShowingPreview = true;
  isBusy: Observable<boolean>;

  constructor(private data: DataService){}

  ngOnInit(): void {
    this.isBusy = this.data.getIsBusy();
  }


  togglePreview() {
    this.isShowingPreview = !this.isShowingPreview;
  }

  setFilter(value: string) {
    this.data.setFilter(value);
  }
}
