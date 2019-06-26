import { SelectionService } from './../../services/selection.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  isBusy$: Observable<boolean>;


  constructor(private selectionService: SelectionService) { }

  ngOnInit() {
    this.isBusy$ = this.selectionService.getIsBusy();
  }

  async setFilter(value: string) {
    await this.selectionService.setFilter(value);
  }

}
