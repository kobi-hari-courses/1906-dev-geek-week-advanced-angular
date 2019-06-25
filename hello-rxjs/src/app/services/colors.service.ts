import { ALLCOLORS } from './../models/all-colors';
import { Injectable } from '@angular/core';
import { Color } from '../models/color.model';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  constructor() { }

  delay(millis: number): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, millis);
    });
  }

  async searchColors(filter: string): Promise<Color[]> {
    let res: Color[] = [];
    for (const key in ALLCOLORS) {
      if (key.toLowerCase().includes(filter.toLowerCase())) {
        res.push({
          displayName: key, 
          code: ALLCOLORS[key]
        });
      }
    }

    await this.delay(1000);

    return res;
  }
}
