import { SelectionService } from './../../services/selection.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Color } from 'src/app/models/color.model';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit, OnDestroy {
  color$:  Observable<Color>;
  // sub: Subscription;

  constructor(private selectionService: SelectionService) { }

  ngOnInit() {
    console.log('ngOnInit');
    // this.sub = this.selectionService.getSelectedColor()
    // .subscribe(val => this.color = val);
    this.color$ = this.selectionService.getSelectedColor();
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    // if(this.sub)
    // {
    //   this.sub.unsubscribe();
    // }
  }

}
