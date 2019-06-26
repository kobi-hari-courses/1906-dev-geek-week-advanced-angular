import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  colors = ['red', 'green', 'blue', 'magenta', 'brown', 'black'];
  fonts = ['Arial', 'Times new roman', 'Verdana', 'David', 'Segoe UI'];
  sizes = ['12px', '18px', '27px', '36px', '48px', '64px'];

  selectedColor = this.colors[0];
  selectedFont = this.fonts[0];
  selectedSize = this.sizes[0];

  zeText: string;

  selectColor(value: string) {
    this.selectedColor = value;
  }

  selectFont(value: string) {
    this.selectedFont = value;
  }

  selectSize(value: string) {
    this.selectedSize = value;
  }

  save() {
    console.log(this.zeText);
  }
}
