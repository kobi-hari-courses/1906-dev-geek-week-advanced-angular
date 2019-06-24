import { ColorsService } from './services/colors.service';
import { Component, OnInit } from '@angular/core';
import { Color } from './models/color.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  colors: Color[];

  constructor(private colorsService: ColorsService) { }

  async ngOnInit() : Promise<void>{
    // const p = this.colorsService.searchColors('');
    // p.then(res => {
    //   this.colors = res;
    // });

    this.colors = await this.colorsService.searchColors('');
    console.log('bla');
  }

  async search(filter: string) {
    console.log('starting to search ' + filter);
    this.colors = await  this.colorsService.searchColors(filter);
    console.log('finished to search ' + filter);    
  }

}
