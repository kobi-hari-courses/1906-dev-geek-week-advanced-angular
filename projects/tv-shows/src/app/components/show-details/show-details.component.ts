import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from 'src/app/models/model';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  show: Observable<Show>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.show = this.data.getSelected();
  }

}
