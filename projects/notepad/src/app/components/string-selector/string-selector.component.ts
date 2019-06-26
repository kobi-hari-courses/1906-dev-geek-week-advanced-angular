import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-string-selector',
  templateUrl: './string-selector.component.html',
  styleUrls: ['./string-selector.component.scss']
})
export class StringSelectorComponent implements OnInit {
  @Input() options: string[];
    
  @Input() selectedOption: string;

  @Output() selectionRequested = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(value: string) {
    this.selectionRequested.emit(value);
  }

}
