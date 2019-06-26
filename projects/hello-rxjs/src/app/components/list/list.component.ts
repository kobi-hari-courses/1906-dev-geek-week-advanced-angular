import { SelectionService } from './../../services/selection.service';
import { ColorsService } from './../../services/colors.service';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  colors$: Observable<Color[]>;

  constructor(
    private selectionService: SelectionService) { }

  ngOnInit() {
    this.colors$ = this.selectionService.getSearchResults();
  }

  async selectColor(value: Color) {
    await this.selectionService.setSelectedColor(value);
  }

}
