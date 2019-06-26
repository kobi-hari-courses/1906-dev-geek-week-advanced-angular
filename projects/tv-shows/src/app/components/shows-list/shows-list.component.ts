import { SearchResult } from './../../models/model';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from 'src/app/models/model';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css']
})
export class ShowsListComponent implements OnInit {
  shows: Observable<Show[]>;
  selected: Observable<Show>;


  constructor(private data:DataService) { }

  ngOnInit() {
    this.shows = this.data.getShows();
    this.selected = this.data.getSelected();
  }

  selectItem(show:Show) {
    this.data.setSelected(show);
  }

}
